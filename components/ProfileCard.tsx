"use client";

import React from "react";
import Image from "next/image";


export default function ProfileCard() {
  return (
    <aside className="relative mx-2 sm:mx-4 mt-4 sm:mt-6 mb-6 sm:mb-8 z-10 md:z-40 w-full max-w-[520px] md:max-w-none md:mt-0 md:mb-0 md:mx-0 md:fixed md:left-8 md:top-32 md:bottom-6 md:w-80">
      {/* Profile Card */}
      <div className="relative group">
        {/* subtle white side glows on hover */}
        <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-[8px] rounded-l-3xl bg-gradient-to-r from-white/60 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />
        <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-[8px] rounded-r-3xl bg-gradient-to-l from-white/60 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />
        <div className="relative rounded-2xl border-2 border-theme bg-white/95 dark:bg-black/40 backdrop-blur-md p-2 sm:p-3 md:p-4 transition-transform duration-300 group-hover:-translate-y-0.5 shadow-xl dark:shadow-2xl">
          <div className="overflow-hidden rounded-xl aspect-[16/10] bg-gradient-to-br from-emerald-500 to-purple-600 relative">
            <Image 
              src="/images/aryman.jpeg" 
              alt="Profile" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <h1 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Harsh Jatoliya</h1>
          <p className="text-xs sm:text-[13px] font-medium text-blue-600 dark:text-blue-300">Full Stack Developer | Tech Enthusiast</p>
          <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">Crafting intuitive, scalable, and immersive products that bridge tech and imagination.</p>
          <div className="my-2 sm:my-3 md:my-4 h-px bg-slate-200 dark:bg-slate-700" />
          <a href="/resume" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg hover:opacity-95 transition-opacity">
            <span>Download Resume</span>
          </a>
          <div className="mt-2 sm:mt-3 md:mt-4 flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <IconBtn label="GitHub" href="https://github.com/harshrana14-fi" icon="<path d='M12 .5A11.5 11.5 0 0 0 .5 12c0 5.07 3.29 9.37 7.86 10.88.58.1.8-.26.8-.57v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.98.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.51.12-3.15 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.64.24 2.85.12 3.15.75.81 1.2 1.85 1.2 3.1 0 4.45-2.68 5.44-5.24 5.73.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.57A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z'/>" />
            <IconBtn label="Email" href="mailto:ranajiharsxx14@gmail.com" icon="<path d='M2 5h20v14H2V5zm10 7 10-7H2l10 7Z'/>" />
            <IconBtn label="LinkedIn" href="https://www.linkedin.com/in/harsh-rana-13-fi/" icon="<path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.67 3.15 5.67 7.25V23H17v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.6V23H7.5V8z'/>" />
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-theme-border" />
    </aside>
  );
}


function IconBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      title={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="grid h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 place-items-center rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white/90 dark:bg-slate-800/90 hover:bg-blue-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" width="12" height="12" className="sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]" fill="currentColor" dangerouslySetInnerHTML={{ __html: icon }} />
    </a>
  );
}