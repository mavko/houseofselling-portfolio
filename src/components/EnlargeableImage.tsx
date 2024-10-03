import Image from 'next/image'
import { Dialog, DialogTrigger, DialogContainer, DialogContent, DialogClose } from './Dialog'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface EnlargeableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function EnlargeableImage({ src, alt, width, height }: EnlargeableImageProps) {
  return (
    <Dialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <DialogTrigger>

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          className='rounded-xl hover:shadow-xl hover:shadow-black hover:border hover:border-white/30 hover:-translate-y-1 transition-all delay-300'
        />

      </DialogTrigger>
      <DialogContainer>
        <DialogContent className='relative'>
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={900}
            className='w-full h-full bg-cover border border-white/20 rounded-xl'
          />
        </DialogContent>
        <DialogClose
          className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XMarkIcon className='size-6 fill-black' />
        </DialogClose>
      </DialogContainer>
    </Dialog>
  )
}
