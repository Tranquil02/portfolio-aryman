import { ReactNode } from "react";

export function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-3xl font-semibold tracking-tight scroll-mt-24 text-theme-primary">
      {children}
    </h2>
  );
}

export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-theme px-3 py-1 text-sm bg-theme-card/80 backdrop-blur text-theme-primary">
      {label}
    </span>
  );
}

export function ProjectCard({ title, description, href }: { title: string; description: string; href?: string }) {
  return (
    <a href={href || "#"} className="group rounded-2xl border border-theme p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all bg-theme-card/80 backdrop-blur block">
      <h3 className="font-semibold text-lg text-theme-primary">{title}</h3>
      <p className="mt-2 text-sm text-theme-secondary">{description}</p>
      <div className="mt-3 text-sm underline opacity-80 group-hover:opacity-100 text-theme-accent">View details</div>
    </a>
  );
}

export function CertificationCard({ label, href }: { label: string; href?: string }) {
  return (
    <a href={href || "#"} className="rounded-xl border border-theme p-4 text-center hover:bg-theme-subtle transition-colors text-theme-primary">
      {label}
    </a>
  );
}

