"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const LINES = [
  { prompt: "whoami", output: "sivaraja_pratheep — cs undergrad, university of jaffna" },
  { prompt: "stack --list", output: "web · cloud · ai · salesforce" },
  { prompt: "status", output: "open to internships & collaborations" },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIndex].output;
    if (charIndex <= current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 500);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  return (
    <header id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 ambient-glow" />

      <div className="relative mx-auto grid max-w-container gap-14 px-6 pb-20 pt-24 md:grid-cols-[1.1fr,0.9fr] md:items-center md:pb-28 md:pt-32">
        <div>
          <p className="comment-eyebrow">computer science undergraduate · university of jaffna</p>
          <h1 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-[3.2rem]">
            Building digital experiences with code, AI &amp; cloud.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">
            I&apos;m {profile.name} — a full-stack developer in training who turns rough ideas into
            working software, then designs the interface myself.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-blue px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-light hover:text-bg"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-blue-light hover:text-blue-light"
            >
              Download resume
            </a>
          </div>

          {/* Signature element: a small terminal panel that "types" a status readout */}
          <div className="mt-10 max-w-md overflow-hidden rounded-xl border border-line bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="ml-2 font-mono text-[0.7rem] text-muted-2">status.sh</span>
            </div>
            <div className="space-y-2.5 px-4 py-4 font-mono text-[0.8rem]">
              {LINES.map((line, i) => {
                const isCurrent = i === lineIndex;
                const isPast = i < lineIndex || done;
                if (!isCurrent && !isPast) return null;
                const output = isCurrent && !done ? line.output.slice(0, charIndex) : line.output;
                return (
                  <div key={line.prompt}>
                    <span className="text-cyan">$</span> <span className="text-ink">{line.prompt}</span>
                    <div className="pl-3 text-muted">
                      {output}
                      {isCurrent && !done && <span className="animate-blink">▍</span>}
                    </div>
                  </div>
                );
              })}
              {done && <span className="animate-blink text-cyan">▍</span>}
            </div>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="w-full max-w-[300px] overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5B6685]/40" />
              <span className="ml-2 font-mono text-[0.7rem] text-muted-2">profile.jpg</span>
            </div>
            <Image
              src="/images/photo.jpg"
              alt="Sivaraja Pratheep"
              width={600}
              height={562}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
