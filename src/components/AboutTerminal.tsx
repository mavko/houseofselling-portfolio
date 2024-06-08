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
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">Archive data found</span> <span class="text-pretty max-w-md">❯ Sebastian Selling is a multi-disciplinary designer of products, brands and websites (he just does not like the word entrepreneur). He is the creative force behind ispect, icontrol (500s), among others. Born in Sweden, with stints in Malta, Spain and Florida, Sebastian currently lives in Stockholm with his wife and daughter.</span>  </span><br>',
      )
      .pauseFor(0.01)
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
