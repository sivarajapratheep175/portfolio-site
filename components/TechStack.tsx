import Reveal from "./Reveal";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <p className="comment-eyebrow">what I build with</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">Tech stack</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} className={`delay-[${i * 60}ms]`}>
              <div className="h-full rounded-xl border border-line bg-surface p-6 transition-colors hover:border-blue-dim">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-cyan">{group.category}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-raised px-3 py-1.5 text-[0.8rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
