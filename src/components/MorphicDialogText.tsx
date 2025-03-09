import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/MorphingDialog'
import ProjectsList from './ProjectsList'

export function MorphingDialogText() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className="w-fit rounded-xl bg-white/5 outline-1 outline-white/50"
      >
        <MorphingDialogTitle className="text-[10px] font-medium text-white sm:text-xs">
          What am I up to?
        </MorphingDialogTitle>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative h-auto w-full max-w-3xl border border-white/20 bg-black/40 p-6 backdrop-blur-2xl duration-300 ease-out">
          <section className="h-[90vh] overflow-y-scroll">
            <div className="relative p-6">
              <div className="flex flex-col gap-4">
                <MorphingDialogTitle className="font-mono text-xs font-semibold tracking-widest text-white/90 uppercase">
                  What am I up to?
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="font-sans text-xs font-medium text-white/90">
                  My history of startups and projects from 2012 to today.
                </MorphingDialogSubtitle>
                <div className="">
                  <ProjectsList />
                </div>
              </div>
            </div>
          </section>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
