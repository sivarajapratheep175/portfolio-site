"use client";

import { useState } from "react";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold text-ink">
          SP<span className="text-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.82rem] text-muted transition-colors hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-blue px-5 py-2 font-mono text-[0.8rem] text-white transition-colors hover:bg-blue-light hover:text-bg"
            >
              Say hello
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="flex flex-col border-t border-line bg-surface md:hidden">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line-soft">
              <a
                href={link.href}
                className="block px-6 py-4 font-mono text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="block px-6 py-4 text-center font-mono text-sm text-cyan" onClick={() => setOpen(false)}>
              Say hello →
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
