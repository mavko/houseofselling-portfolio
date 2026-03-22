"use client"
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { shuffleLetters } from '@/lib/shuffleLetters'

interface DescriptionProps {
  title: string
  text: string
  index: number
}

const Description: React.FC<DescriptionProps> = ({ title, text, index }) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const c1 = shuffleLetters(titleRef.current, { iterations: 10 })
    const c2 = shuffleLetters(textRef.current, { iterations: 10 })
    return () => {
      c1()
      c2()
    }
  }, [])

  const delay = 0.1 * index

  return (
    <motion.div
      className=" w-[calc(100%+2rem)] relativ prose  transition-colors "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.h2 ref={titleRef} className=" ">
        {title}
      </motion.h2>
      <motion.p ref={textRef} className="">
        {text}
      </motion.p>
    </motion.div>
  )
}

export default Description
