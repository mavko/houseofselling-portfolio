import React from "react";
import { Dock, DockIcon } from "./Dock";
import Tooltip from "./Tooltip";
import Link from "next/link";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function PortfolioNav() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-50">
      <Dock magnification={60} distance={200} className="shadow-xl border border-white/10 bg-neutral-900 p-3 rounded-2xl  space-x-3">
        <DockIcon className=" ring-1 ring-white/10 rounded-xl p-1.5 bg-gradient from-neutral-700 to-neutral-950" size={32}>
          <Link href="/" className="">
            <Tooltip text="Home">
              <Icons.homeView className="size-8 fill-[#e8e6e3] ring-1 ring-white/10 rounded-xl p-2 bg-neutral-900/80 w-full h-full" />
            </Tooltip>
          </Link>
        </DockIcon>
        <DockIcon className=" ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80" size={32}>
          <Link href="/craft" className="">

            <Tooltip text="Craft">
              <Icons.craftsView className="size-8 fill-[#e8e6e3] ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80 w-full h-full" />
            </Tooltip>

          </Link>
        </DockIcon>
        {/* <DockIcon className=" ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80" size={32}>

          <Link href="/photos" className="">
            <Tooltip text="Photos">
              <Icons.photosView className="size-8 fill-[#e8e6e3] ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80 w-full h-full" />
            </Tooltip>
          </Link>

        </DockIcon> */}
        <DockIcon className=" ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80" size={32}>

          <Link href="https://github.com/mavko" target="_blank" className="">
            <Tooltip text="Github">
              <Icons.githubLink className="size-8 fill-[#e8e6e3] ring-1 ring-white/10 rounded-xl p-1.5 bg-neutral-900/80 w-full h-full" />
            </Tooltip>
          </Link>

        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  homeView: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#e8e6e3]">
      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
    </svg>

  ),
  craftsView: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#e8e6e3]">
      <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
      <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
    </svg>

  ),
  photosView: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#e8e6e3]">
      <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
      <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
    </svg>

  ),
  githubLink: (props: IconProps) => (
    <svg {...props} viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="size-6 fill-[#e8e6e3]"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path></svg>
  ),
};
