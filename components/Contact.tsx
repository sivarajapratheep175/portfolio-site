import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-[640px] rounded-[20px] border border-line bg-surface p-9 text-center sm:p-14">
            <p className="comment-eyebrow">get in touch</p>
            <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink sm:text-[2.2rem]">
              Have an idea worth building?
            </h2>
            <p className="mt-2 font-display text-[1.9rem] font-semibold text-blue-light sm:text-[2.2rem]">
              Let&apos;s turn it into something real.
            </p>
            <p className="mx-auto mt-4 max-w-[44ch] text-muted">
              Open to internships, collaborations, and interesting problems — in web, cloud, or AI.
              A short note is all it takes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-light hover:text-bg"
              >
                Start a conversation →
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-raised px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-blue-light hover:text-blue-light"
              >
                Message on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
