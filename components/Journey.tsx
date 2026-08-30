import Reveal from "./Reveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <p className="comment-eyebrow">education & experience, in order</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">The journey so far</h2>
        </Reveal>

        <div className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute bottom-0 left-[7px] top-1 w-px bg-line sm:left-[9px]" aria-hidden />
          <ol className="space-y-10">
            {journey.map((item) => (
              <Reveal key={item.title}>
                <li className="relative">
                  <span
                    className={`absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:-left-10 ${
                      item.kind === "experience" ? "border-cyan bg-cyan/20" : "border-blue-light bg-blue-dim"
                    }`}
                    aria-hidden
                  />
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted-2">{item.period}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="text-[0.92rem] text-blue-light">{item.place}</p>
                  <p className="mt-2 max-w-[60ch] text-[0.92rem] leading-relaxed text-muted">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
