'use client'

import { useEffect, useRef, RefObject } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

const AboutTerminal = () => {
  const codeRef = useRef<HTMLTableSectionElement>(null)

  useEffect(() => {
    if (!codeRef.current) return

    const typewriter = new Typewriter(codeRef.current, {
      loop: false,
      delay: 10,
    })

    typewriter
      .pauseFor(2500)
      .typeString('<span class="font-medium pb-6">Initializing...</span><br>')
      .pauseFor(2500)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">Connection established</span> <span class="">❯ about sebastian selling</span>  </span><br>',
      )
      .pauseFor(0.01)
      .typeString(
        '<span class="font-medium my-3">Fetching archive data...</span><br>',
      )
      .pauseFor(0.01)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">archive/entry/01</span> <span class="text-pretty max-w-md">❯ Love of the craft since I first laid my hands on Photoshop back in 2001, where I spent my days designing forum signatures and gaming wallpapers.</span>  </span><br>',
      )

      .pauseFor(0.01)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">archive/entry/02</span> <span class="text-pretty max-w-md">❯ Fast forward to 2012 and my career in making apps took off, initially iOS but overtime quickly focused my efforts on web development and brand design. Today I dabble in fullstack development, but mostly frontend with a focus on the design and experience.</span>  </span><br>',
      )
      .pauseFor(0.01)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">archive/entry/03</span> <span class="text-pretty max-w-md">❯ Entrepreneurial spirit, hence I dream up big ideas and try and make them a reality - mostly in construction or properties. Born in Sweden, with stints in Malta, Spain and Florida. I currently live in Stockholm with my wife and daughter.</span>  </span><br>',
      )
      .start()
  }, [])

  return (
    <table className="table-auto">
      <tbody
        ref={codeRef as RefObject<HTMLTableSectionElement>}
        className="text-sm font-medium text-white"
      >
        <tr
          id="terminal-text"
          className="w-full cursor-pointer gap-y-8 space-y-8 p-2 hover:bg-black/10 dark:hover:bg-white/20"
        >
          <td className="p-1.5">
            <span id="code"></span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default AboutTerminal
