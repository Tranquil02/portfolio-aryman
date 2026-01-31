"use client";

// Theme toggle removed per request

const links = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: AboutIcon },
  { id: "projects", label: "Projects", icon: FolderIcon },
  { id: "Experience", label: "Experience", icon: CertsIcon },
  { id: "contact", label: "Contact", icon: ContactIcon },
];

export default function TopFloatNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center">
      {/* Outer glow border */}
      <div className="relative pointer-events-auto">
        <span
          aria-hidden
          className="absolute -inset-[1px] rounded-full bg-[conic-gradient(at_50%_50%,rgba(255,255,255,0.5),rgba(255,255,255,0.08),rgba(255,255,255,0.5))] opacity-30 blur-sm"
        />
        <nav className="relative flex items-center gap-2 rounded-full border border-theme bg-theme-card/80 px-2 py-1.5 backdrop-blur-md shadow-lg">
          {/* Icon links */}
          {links.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="group relative grid h-9 w-9 place-items-center rounded-full text-theme-secondary hover:text-theme-primary hover:bg-theme-subtle"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
              {/* Tooltip */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-theme-card px-2 py-0.5 text-xs font-medium text-theme-primary opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {label}
              </span>
            </button>
          ))}

          {/* Right controls */}
          <div className="ml-1" />
        </nav>
      </div>
    </div>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 3 2 12h2v8h6v-5h4v5h6v-8h2L12 3z"/></svg>
  );
}
function FolderIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
    </svg>
  );
}
function AboutIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 9a7 7 0 0 1 14 0z"/></svg>
  );
}
function ContactIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M3 4h18v14H6l-3 3V4zm4 5h10v2H7V9zm0 4h7v2H7v-2z"/></svg>
  );
}
function CertsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M12 2 9.5 8H3l5 3.6L5.5 18 12 14.2 18.5 18 16 11.6 21 8h-6.5L12 2z"/></svg>
  );
}

