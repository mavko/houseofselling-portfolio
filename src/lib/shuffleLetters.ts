/**
 * Scrambles in-place text in an element toward the target string (from `text` or current textContent).
 * Returns a disposer to cancel pending frames.
 */
export function shuffleLetters(
  element: HTMLElement | null,
  options: {
    text?: string
    iterations?: number
    fps?: number
    onComplete?: (element: HTMLElement) => void
  } = {},
): () => void {
  const defaults = {
    text: '',
    iterations: 8,
    fps: 30,
    onComplete: (_element: HTMLElement) => {},
  }

  const settings = { ...defaults, ...options }

  if (!(element && element.nodeType === 1 && element instanceof Element)) {
    return () => {}
  }

  const characters =
    settings.text && typeof settings.text === 'string'
      ? settings.text.split('')
      : element.textContent
        ? element.textContent.split('')
        : []

  const characterMap: string[] = []
  const characterIndices: number[] = []

  characters.forEach((char, index) => {
    if (/\s/.test(char)) {
      characterMap[index] = 'space'
    } else if (char === '-' || char === '–' || char === '.' || char === '/') {
      characterMap[index] = 'preserve'
    } else if (/[0-9]/.test(char)) {
      characterMap[index] = 'digit'
      characterIndices.push(index)
    } else if (char !== char.toUpperCase() || char !== char.toLowerCase()) {
      const isUpper = char === char.toUpperCase() && char !== char.toLowerCase()
      characterMap[index] = isUpper ? 'upperCase' : 'lowerCase'
      characterIndices.push(index)
    } else {
      characterMap[index] = 'symbol'
      characterIndices.push(index)
    }
  })

  element.textContent = ''

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const animate = (currentIteration: number) => {
    const charactersCopy = [...characters]
    const totalCharacters = characterIndices.length

    if (currentIteration > totalCharacters) {
      if (typeof settings.onComplete === 'function') {
        settings.onComplete(element)
      }
    } else {
      for (let i = Math.max(currentIteration, 0); i < totalCharacters; i += 1) {
        if (i < currentIteration + settings.iterations) {
          const idx = characterIndices[i]
          charactersCopy[idx] = getRandomCharacter(characterMap[idx])
        } else {
          charactersCopy[characterIndices[i]] = ''
        }
      }

      element.textContent = charactersCopy.join('')

      timeoutId = setTimeout(() => {
        animate(currentIteration + 1)
      }, 1000 / settings.fps)
    }
  }

  animate(-settings.iterations)
  return () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
  }
}

function getRandomCharacter(characterType: string) {
  let characters = ''
  switch (characterType) {
    case 'lowerCase':
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
      break
    case 'upperCase':
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      break
    case 'digit':
      characters = '0123456789'
      break
    case 'symbol':
      characters = ',.?/\\(^)![]{}*&^%$#\'"'
      break
    default:
      characters = ''
  }
  return characters[Math.floor(Math.random() * characters.length)]
}
