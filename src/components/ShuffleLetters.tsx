"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "g:corp",
    description: "App studio for the 21st century",
    href: "https://gcorp-landingpage.vercel.app/",
    year: 2024
  },
  {
    name: "drykit.co",
    description: "Sensors that keep You and Your Home safe from Mold.",
    href: "https://www.drykit.co",
    year: 2023
  },
  {
    name: "besiktningsman.se",
    description: "Premier construction inspection agency",
    href: "https://www.besiktningsman.se",
    year: 2017
  },
  {
    name: "icontrol",
    description: "Replace paper with an app on the field",
    href: "https://www.icontrolapp.se",
    year: 2014
  },
  {
    name: "500 startups",
    description: "Investment and leadership to build iControl",
    href: "https://www.crunchbase.com/organization/icontrol-2",
    year: 2016
  },
  {
    name: "ispect",
    description: "The standardized inspection app [maintained]",
    href: "https://www.ispect.se",
    year: 2012
  },

];


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
    : element.textContent ? element.textContent.split('') : []; // Handle potential null

  const characterMap: string[] = []; // Specify the type for characterMap
  const characterIndices: number[] = []; // Specify the type for characterIndices

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

  let timeoutId: NodeJS.Timeout | null = null; // Declare timeoutId with a specific type

  const animate = (currentIteration: number) => { // Specify the type for currentIteration
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

const Project: React.FC<{ href: string; name: string; description: string; year: number; index: number }> = ({ href, name, description, year, index }) => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLSpanElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    shuffleLetters(nameRef.current, { iterations: 10 });
    shuffleLetters(descriptionRef.current, { iterations: 10 });
    shuffleLetters(yearRef.current, { iterations: 10 });
  }, []);

  const delay = 0.1 * index;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 w-[calc(100%+2rem)] relative overflow-hidden p-2 -m-3 rounded-xl outline-none hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition-colors text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span ref={nameRef} className="inline-block font-medium text-[#e8e6e3]">
        {name}
      </span>
      <span ref={descriptionRef} className=" text-white/70 -ml-2 hidden sm:inline-block">
        {description}
      </span>
      <motion.div className="flex-1 relative">
        <motion.span
          className="absolute bottom-0 left-0 h-px w-0 bg-white/30"
          animate={{ width: '100%' }}
          transition={{ delay: 0.05 * index, duration: 1, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute bottom-0 left-0 h-px w-0 bg-white/30 z-10"
          animate={{ width: '100%', backgroundColor: 'transparent' }}
          transition={{ delay, duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>
      <span ref={yearRef} className="text-[#e8e6e3] justify-end">
        {year}
      </span>
    </motion.a>
  );
};

const ProjectsList = () => {
  return (
    <>

      <div className="mt-4 flex flex-col gap-7 mx-auto w-full max-w-7xl">
        {projects.map((project, index) => (
          <Project key={project.href} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;