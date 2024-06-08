'use client'

import { useEffect, useRef, RefObject } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

const Terminal = () => {
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!codeRef.current) return

    const typewriter = new Typewriter(codeRef.current, {
      loop: false,
      delay: 0.000000000000000001,
    })

    typewriter
      .pauseFor(2500)
      .typeString('<span class="font-medium pb-6">Initializing...</span><br>')
      .pauseFor(0.01)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium"><span class="bg-white/20 text-white p-1">Connection established</span> <span class="">❯ house of selling</span>  </span><br>',
      )
      .pauseFor(0.01)
      .typeString(
        '<span class="font-medium my-3">Fetching profile...</span><br>',
      )
      .pauseFor(0.01)
      .typeString(
        '❯ IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer" class="mr-3  link  whitespace-normal underline underline-offset-2">https://linkedin/sebastianselling/</a> <br>',
      )
      .pauseFor(0.01)
      .typeString('<span class="font-medium">Loading bio...</span><br>')
      .pauseFor(0.01)
      .typeString(
        '<span class="bg-white/20 text-white p-1">Bio accessed</span><span class=" text-sm font-medium whitespace-normal">❯  Designer who codes. Over a decade of building and designing products. </span><br>',
      )
      .pauseFor(0.01)
      .typeString('<span class="font-medium">Accessing archive...</span><br>')
      .pauseFor(0.01)
      .typeString(
        '<span class="bg-white/20 text-white p-1">starting up</span> <a href="https://www.drykit.co" target="_blank" rel="noopener noreferrer" class="mr-1  whitespace-normal underline underline-offset-2 text-sm font-medium">// drykit.co ❯ Sensors that keeps You and Your Home safe from Mold. </a><br>',
      )
      .typeString(
        '<span class="bg-white/20 text-white p-1">key contributor</span> <a href="https://www.besiktningsman.se" target="_blank" rel="noopener noreferrer" class="mr-1  whitespace-normal underline underline-offset-2 text-sm font-medium">// besiktningsman.se ❯ Swedens premier construction inspection agency</a><br>',
      )
      .typeString(
        '<span class="bg-white/20 text-white p-1">maintaining</span> <a href="https://www.ispect.se" target="_blank" rel="noopener noreferrer" class="mr-1  whitespace-normal underline underline-offset-2 text-sm font-medium">// ispect.se ❯ The standardized inspection app</a><br>',
      )
      .typeString(
        '<span class="bg-white/20 text-white p-1">previously</span> <a href="https://www.icontrolapp.se" target="_blank" rel="noopener noreferrer" class="mr-1  whitespace-normal underline underline-offset-2 text-sm font-medium">// icontrol ❯ replace paper with an app on the field </a><br>',
      )
      .typeString(
        '<span class="bg-white/20 text-white p-1">alumni</span> <a href="https://www.crunchbase.com/organization/icontrol-2" target="_blank" rel="noopener noreferrer" class="mr-1  whitespace-normal underline underline-offset-2 text-sm font-medium">// ❯ 500 STARTUPS</a><br>',
      )
      .start()
  }, [])

  return (
    <table className="table-auto">
      <tbody
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

export default Terminal
