"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const shuffleLetters = (element: HTMLSpanElement | null, options = {}) => {
  const defaults = {
    text: "",
    iterations: 8,
    fps: 30,
    onComplete: (element: HTMLSpanElement) => { }
  };

  const settings = { ...defaults, ...options };

  if (!(element && element.nodeType === 1 && element instanceof Element)) {
    throw new TypeError("Expected element to be a valid HTML element.");
  }

  const characters = settings.text && typeof settings.text === 'string'
    ? settings.text.split('')
    : element.textContent ? element.textContent.split('') : [];

  const characterMap: string[] = [];
  const characterIndices: number[] = [];

  characters.forEach((char, index) => {
    if (/\s/.test(char)) {
      characterMap[index] = 'space';
    } else {
      if (/[a-z]/.test(char)) {
        characterMap[index] = 'lowerCase';
      } else if (/[A-Z]/.test(char)) {
        characterMap[index] = 'upperCase';
      } else {
        characterMap[index] = 'symbol';
      }
      characterIndices.push(index);
    }
  });

  element.textContent = '';

  let timeoutId: NodeJS.Timeout | null = null;

  const animate = (currentIteration: number) => {
    const charactersCopy = [...characters];
    const totalCharacters = characterIndices.length;

    if (currentIteration > totalCharacters) {
      typeof settings.onComplete === 'function' && settings.onComplete(element);
    } else {
      for (let i = Math.max(currentIteration, 0); i < totalCharacters; i += 1) {
        if (i < currentIteration + settings.iterations) {
          charactersCopy[characterIndices[i]] = getRandomCharacter(characterMap[characterIndices[i]]);
        } else {
          charactersCopy[characterIndices[i]] = '';
        }
      }

      element.textContent = charactersCopy.join('');

      timeoutId = setTimeout(() => {
        animate(currentIteration + 1);
      }, 1000 / settings.fps);
    }
  };

  animate(-settings.iterations);
  return () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  };
};

const getRandomCharacter = (characterType: string) => {
  let characters = '';
  switch (characterType) {
    case 'lowerCase':
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      break;
    case 'upperCase':
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      break;
    case 'symbol':
      characters = ',.?/\\(^)![]{}*&^%$#\'"';
      break;
    default:
      characters = '';
  }
  return characters[Math.floor(Math.random() * characters.length)];
};

interface DescriptionProps {
  title: string;
  text: string;
  index: number;
}

const Description: React.FC<DescriptionProps> = ({ title, text, index }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    shuffleLetters(titleRef.current, { iterations: 10 });
    shuffleLetters(textRef.current, { iterations: 10 });
  }, []);

  const delay = 0.1 * index;

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
  );
};

export default Description;
