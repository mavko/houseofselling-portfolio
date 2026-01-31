import React from 'react'
import ArtifactsContent from './artifacts/ArifactsContent'
import DialogComponent from '@/components/Dialog'
import Link from 'next/link'
import { Shadows } from '@/components/Shadows'
import { LinkedInIcon, XIcon } from '@/components/SocialIcons'

export default function Home() {
  return (
    <>
      <div className="flex h-96 w-full items-center justify-center overflow-hidden rounded-lg border border-white/15 [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] brightness-125 [transition-property:transform,filter] select-none [transition:.12s_var(--ease-out-quad)]">
        <Shadows
          color="rgba(128, 128, 128, 1)"
          animation={{ scale: 100, speed: 70 }}
          noise={{ opacity: 1, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      <div className="my-2 flex h-10 w-full items-center justify-between rounded-md bg-[rgba(48,48,48,.3)] px-[16px] text-xs font-medium [box-shadow:inset_0_.733px_.733px_0_hsla(0,0%,100%,.2),inset_0_.733px_16.07px_0_hsla(0,0%,100%,.14)] [transition-property:transform,filter] select-none [transition:.12s_var(--ease-out-quad)] hover:brightness-125">
        <h3 className="text-[#e8e6e3]">Connect:</h3>
        <div className="flex h-full w-fit items-center gap-3">
          <Link className="" href="mailto:houseofselling@proton.me">
            houseofselling@proton.me
          </Link>

          <Link
            className="border-x border-white/20 px-2"
            href="https://x.com/houseofselling"
          >
            <XIcon className="size-4 fill-white text-white" />
          </Link>

          <Link className="" href="https://linkedin/sebastianselling/">
            <LinkedInIcon className="size-4 fill-white text-white" />
          </Link>
        </div>
      </div>
      <ArtifactsContent />
    </>
  )
}
