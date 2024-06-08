declare module 'typewriter-effect/dist/core' {
  import { TypewriterOptions } from 'typewriter-effect'

  export default class Typewriter {
    [x: string]: any
    constructor(element: HTMLElement | null, options?: TypewriterOptions)
    typeString(string: string): Typewriter
    pauseFor(ms: number): Typewriter
    start(): void
    // Add any other methods you're using from the library
  }

  export interface TypewriterOptions {
    // Add the options interface properties here
    loop?: boolean
    delay?: number
    // ...
  }
}
