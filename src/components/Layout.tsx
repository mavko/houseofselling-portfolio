


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>


      <div className="overlay bg-[#1c1c1c] ">
        <div className="relative max-h-full overflow-y-scroll overscroll-none p-4 sm:p-8">

          {children}
        </div>
      </div>

    </>
  )
}
