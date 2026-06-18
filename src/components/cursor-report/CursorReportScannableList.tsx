type CursorReportScannableListProps = {
  items: string[]
}

function ScannableRow({ text }: { text: string }) {
  const dash = text.indexOf(' — ')

  if (dash === -1) {
    return (
      <li className="py-2.5 text-sm leading-relaxed text-[#ededed] first:pt-0 last:pb-0">
        {text}
      </li>
    )
  }

  const label = text.slice(0, dash)
  const detail = text.slice(dash + 3)

  return (
    <li className="flex flex-col gap-1 border-b border-white/[0.06] py-3 first:pt-0 last:border-b-0 last:pb-0">
      <span className="text-sm font-medium text-[#e8e6e3]">{label}</span>
      <span className="text-sm leading-relaxed text-zinc-400">{detail}</span>
    </li>
  )
}

export function CursorReportScannableList({ items }: CursorReportScannableListProps) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <ScannableRow key={item} text={item} />
      ))}
    </ul>
  )
}
