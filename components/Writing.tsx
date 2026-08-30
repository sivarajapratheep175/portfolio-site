import Reveal from "./Reveal";
import { profile, elsewhere } from "@/lib/data";

export default function Writing() {
  const others = elsewhere.filter((e) => e.url !== profile.blog);

  return (
    <section id="writing" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <p className="comment-eyebrow">writing & elsewhere</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">Notes, and where else to find me</h2>
        </Reveal>

        <Reveal>
          <a
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex flex-col justify-between gap-4 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-blue-dim sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-cyan">Blog</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">Read what I&apos;m learning</h3>
              <p className="mt-1 max-w-[50ch] text-[0.9rem] text-muted">
                Notes on web development, cloud, and AI experiments as I work through them.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 font-mono text-[0.82rem] text-cyan">
              Visit blog →
            </span>
          </a>
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line bg-surface px-4 py-2.5 text-[0.85rem] text-ink transition-colors hover:border-blue-light hover:text-blue-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
