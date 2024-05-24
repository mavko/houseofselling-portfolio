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
      .typeString(
        '<span class="dark:text-white text-neutral-950 text-sm font-medium">INITIALISING CONNECTION</span><br/>',
      )
      .pauseFor(0.01)
      .typeString('WAITING...................<br>')
      .pauseFor(0.01)
      .typeString(
        '<span class="whitespace-normal text-sm font-medium">[ FOUND CONNECTION ] <span class="dark:text-white text-neutral-950">house of selling</span>  </span><br>',
      )
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString('[ LOCATING NETWORK INFORMATION ]<br>')
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString(
        '[ LOCAL ] <span class="whitespace-normal dark:text-white text-neutral-950 text-sm font-medium">stockholm / sweden</span> <br>[ NETWORK ] IN / <a href="https://www.linkedin.com/in/sebastianselling/" target="_blank" rel="noopener noreferrer" class="mr-3 dark:text-white text-neutral-950 link  whitespace-normal underline underline-offset-2">https://linkedin/sebastianselling/</a> <br>',
      )
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString('[ LOADING BIO DATA ]<br>')
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString(
        '[ BIO ACCESSED ]<span class="dark:text-white text-neutral-950 text-sm font-medium whitespace-normal"> Designer who codes. Over a decade of building and designing products. </span><br>',
      )
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString('[ LOADING ARCHIVE DATA ]<br>')
      .typeString('..........................<br>')
      .pauseFor(0.01)
      .typeString(
        '[ STARTING UP ] <a href="https://www.drykit.co" target="_blank" rel="noopener noreferrer" class="mr-1 dark:text-white text-neutral-950 whitespace-normal underline underline-offset-2 text-sm font-medium">// drykit.co ❯ Sensors that keeps You and Your Home safe from Mold. </a><br>',
      )
      .typeString(
        '[ CONTRIBUTOR ] <a href="https://www.besiktningsman.se" target="_blank" rel="noopener noreferrer" class="mr-1 dark:text-white text-neutral-950 whitespace-normal underline underline-offset-2 text-sm font-medium">// besiktningsman.se ❯ Swedens premier construction inspection agency</a><br>',
      )
      .typeString(
        '[ MAINTAINING ] <a href="https://www.ispect.se" target="_blank" rel="noopener noreferrer" class="mr-1 dark:text-white text-neutral-950 whitespace-normal underline underline-offset-2 text-sm font-medium">// ispect.se ❯ The standardized inspection app</a><br>',
      )
      .typeString(
        '[ PREVIOUSLY ] <a href="https://www.icontrolapp.se" target="_blank" rel="noopener noreferrer" class="mr-1 dark:text-white text-neutral-950 whitespace-normal underline underline-offset-2 text-sm font-medium">// icontrol ❯ replace paper with an app on the field </a><br>',
      )
      .typeString(
        '[ ALUMNI ] <a href="https://www.crunchbase.com/organization/icontrol-2" target="_blank" rel="noopener noreferrer" class="mr-1 dark:text-white text-neutral-950 whitespace-normal underline underline-offset-2 text-sm font-medium">// ❯ 500 STARTUPS</a><br>',
      )
      .start()
  }, [])

  return (
    <pre className="mt-6 flex h-full text-sm leading-6">
      <code
        ref={codeRef as RefObject<HTMLDivElement>}
        className="relative ml-3 mt-6 inline-block h-full flex-auto overflow-y-scroll text-wrap py-6 pl-2.5 pr-3 text-sm leading-relaxed text-neutral-950/80 md:block dark:text-white"
      >
        <div id="terminal-text" className="py-6 text-sm font-medium uppercase ">
          <div id="code" className=""></div>
        </div>
      </code>
    </pre>
  )
}

export default Terminal
