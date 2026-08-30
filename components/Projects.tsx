import Reveal from "./Reveal";
import { projects, stackCount, credentials } from "@/lib/data";

const icons: Record<string, JSX.Element> = {
  seedling: (
    <path d="M12 22V12M12 12C12 7 8 5 4 5c0 5 3 8 8 8Zm0 0c0-5.5 3.5-8 8-8 0 5.5-3.5 8-8 8Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  walk: (
    <path d="M13 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 22l1-6-2-2 1-5 3-2 2 2 3 1M9 14l-3 2M7 22l2-4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" />
    </>
  ),
  swatch: (
    <path d="M4 4h7v16H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 0h5.5l4.5 4.5-9.5 9.5L11 4Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

const stats = [
  { value: `${projects.length}+`, label: "Projects shipped" },
  { value: `${stackCount}+`, label: "Tools & technologies" },
  { value: `${credentials.length}+`, label: "Certifications" },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <p className="comment-eyebrow">selected work</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">Things I&apos;ve shipped</h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid grid-cols-3 divide-x divide-line-soft rounded-xl border border-line bg-surface">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5 text-center sm:px-6">
                <p className="font-display text-2xl font-semibold text-blue-light sm:text-3xl">{s.value}</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-muted-2 sm:text-[0.72rem]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-blue-dim">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7FA0FF" strokeWidth="1.6" className="mb-4">
                  {icons[project.icon]}
                </svg>
                <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line bg-raised px-3 py-1 text-[0.72rem] text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 font-mono text-[0.82rem] text-cyan transition-colors hover:text-ink"
                >
                  {project.linkLabel} →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
