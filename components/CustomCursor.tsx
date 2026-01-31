"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select") !== null;
      setHoveringInteractive(Boolean(isInteractive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onMouseOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className={
        `pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,opacity] duration-150 ` +
        (hoveringInteractive ? "w-8 h-8 bg-black/20 dark:bg-white/20" : "w-4 h-4 bg-black/10 dark:bg-white/10")
      }
      style={{ mixBlendMode: "difference" }}
    />
  );
}

