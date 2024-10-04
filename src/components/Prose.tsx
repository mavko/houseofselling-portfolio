import clsx from 'clsx'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(className, 'prose prose-invert prose-a:text-neutral-200 prose-img:rounded-xl prose-h1:text-[#ededed] text-[#ededed] prose-pre:bg-[#1c1c1c] prose-pre:rounded-lg prose-pre:border-[#282828] prose-pre:border prose-img:border prose-img:border-white/20')} {...props} />
  )
}
