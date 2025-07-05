import React from 'react'
import ArtifactsContent from './artifacts/ArifactsContent'
import DialogComponent from '@/components/Dialog'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="space-y-6 py-16 lg:py-24">
        <div className="flex items-center gap-6">
          <Link
            className="font-mono text-xs font-semibold tracking-tight text-white uppercase underline underline-offset-4"
            href="/artifacts/archive/makings-of-ispect"
          >
            Makings of iSpect ↗
          </Link>
          <Link
            className="font-mono text-xs font-semibold tracking-tight text-white uppercase underline underline-offset-4"
            href="/artifacts/archive/makings-of-icontrol"
          >
            Makings of iControl ↗
          </Link>
        </div>
        <h1 className="text-5xl/12 font-semibold tracking-tight text-balance text-white sm:text-5xl/14">
          Designer and builder from Sweden with a passion spanning a decade+ of
          taking ideas from zero to one.
        </h1>
        <div className="flex items-center gap-4">
          <DialogComponent />
        </div>
      </div>

      <ArtifactsContent />
    </>
  )
}
