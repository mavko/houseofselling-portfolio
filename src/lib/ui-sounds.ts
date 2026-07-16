/**
 * Hover ticks for `[data-cuelume-hover]` — same attribute as cuelume, but we
 * own unlock so audio arms on the first pointer/key/touch (not a magic "1" key).
 *
 * Browsers still require one real user gesture before Web Audio can run; we
 * just make that gesture anything, then keep the context warm.
 */

let ctx: AudioContext | null = null
let bound = false
let lastHoverTime = -Infinity

const HOVER_GAP_MS = 150

function getCtx(): AudioContext | null {
  if (ctx) return ctx
  if (typeof window === 'undefined') return null
  const Ctor =
    window.AudioContext ??
    (
      window as unknown as {
        webkitAudioContext?: typeof AudioContext
      }
    ).webkitAudioContext
  if (!Ctor) return null
  try {
    ctx = new Ctor()
  } catch {
    return null
  }
  return ctx
}

/** Resume the shared context (call from a user-gesture handler). */
export function unlockUiSounds() {
  const context = getCtx()
  if (!context || context.state === 'running') return
  void context.resume().catch(() => {})
}

function playTick() {
  const context = getCtx()
  if (!context) return

  const render = () => {
    const now = context.currentTime
    const master = context.createGain()
    master.gain.value = 0.4
    master.connect(context.destination)

    // Bandpass noise tick
    const duration = 0.001 + 0.018 + 0.05
    const length = Math.max(1, Math.floor(duration * context.sampleRate))
    const buffer = context.createBuffer(1, length, context.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) data[i] = 2 * Math.random() - 1
    const source = context.createBufferSource()
    source.buffer = buffer
    const filter = context.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 5400
    filter.Q.value = 1.8
    const noiseGain = context.createGain()
    noiseGain.gain.setValueAtTime(0.0001, now)
    noiseGain.gain.exponentialRampToValueAtTime(0.14, now + 0.001)
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.019)
    source.connect(filter).connect(noiseGain).connect(master)
    source.start(now)
    source.stop(now + duration)

    // Bright sine ping
    const osc = context.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(2600, now)
    const toneGain = context.createGain()
    toneGain.gain.setValueAtTime(0.0001, now)
    toneGain.gain.exponentialRampToValueAtTime(0.018, now + 0.001)
    toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.013)
    osc.connect(toneGain).connect(master)
    osc.start(now)
    osc.stop(now + 0.05)

    window.setTimeout(() => {
      master.disconnect()
    }, 80)
  }

  if (context.state === 'running') {
    render()
    return
  }

  void context.resume().then(() => {
    if (context.state === 'running') render()
  }, () => {})
}

function isFineMouse(event: PointerEvent) {
  return (
    event.pointerType === 'mouse' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
}

/**
 * Wire hover ticks + arm audio on the first pointer/key/touch.
 * Idempotent. Safe to call from a client `useEffect`.
 */
export function bindUiSounds() {
  if (typeof document === 'undefined' || bound) return
  bound = true

  const arm = () => {
    unlockUiSounds()
    window.removeEventListener('pointerdown', arm, true)
    window.removeEventListener('keydown', arm, true)
    window.removeEventListener('touchstart', arm, true)
  }

  window.addEventListener('pointerdown', arm, true)
  window.addEventListener('keydown', arm, true)
  window.addEventListener('touchstart', arm, true)

  // Soft nav / prior engagement — context may already be allowed to run.
  unlockUiSounds()

  document.addEventListener(
    'pointerenter',
    (event) => {
      if (!(event instanceof PointerEvent) || !isFineMouse(event)) return
      if (!(event.target instanceof Element)) return
      const element = event.target.closest('[data-cuelume-hover]')
      if (!element) return
      const related = event.relatedTarget
      if (related instanceof Node && element.contains(related)) return
      const now = performance.now()
      if (now - lastHoverTime < HOVER_GAP_MS) return
      lastHoverTime = now
      // Hover itself can't unlock Chrome audio; arm() handles the first gesture.
      playTick()
    },
    true,
  )
}
