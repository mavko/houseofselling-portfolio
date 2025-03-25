import React from 'react'
import ArtifactsContent from './artifacts/ArifactsContent'
import DialogComponent from '@/components/Dialog'
export default function Home() {
  return (
    <>
      <div className="border-t border-white/[7.5%] px-4 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-6 px-2 py-16 lg:py-24">
          <h1 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-[length:clamp(2rem,3.75vw,3rem)]/tight">
            Sebastian Selling - Designer, web artisan and builder.
            <br />
            Decade+ of taking ideas from zero to one.
          </h1>
          <DialogComponent />
        </div>
      </div>

      <ArtifactsContent />
    </>
  )
}
