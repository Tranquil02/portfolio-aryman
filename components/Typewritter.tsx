"use client";

import React from "react";

type Props = {
  items: string[];
  typingSpeedMs?: number; // per character
  pauseMs?: number; // pause after full word
  deletingSpeedMs?: number; // per character when deleting
  className?: string;
};

export default function Typewriter({
  items,
  typingSpeedMs = 80,
  pauseMs = 900,
  deletingSpeedMs = 40,
  className,
}: Props) {
  const [index, setIndex] = React.useState(0); // which word
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer: number | undefined;
    const current = items[index % items.length] || "";

    if (!deleting && text.length < current.length) {
      timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeedMs);
    } else if (!deleting && text.length === current.length) {
      timer = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timer = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeedMs);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % items.length);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [text, deleting, index, items, typingSpeedMs, pauseMs, deletingSpeedMs]);

  return (
    <span className={className} aria-live="polite" aria-label={items[index % items.length]}>
      {text}
      <span className="inline-block w-[2px] translate-y-[2px] animate-pulse bg-white/80 ml-1" style={{ height: "1em" }} />
    </span>
  );
}

