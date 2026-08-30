import Reveal from "./Reveal";
import { credentials } from "@/lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <p className="comment-eyebrow">certificates & recognition</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">
            Credentials
          </h2>
        </Reveal>

        <Reveal>
          <ul className="mt-10 divide-y divide-line-soft border-t border-line-soft">
            {credentials.map((cred) => (
              <li key={cred.title} className="flex items-center gap-4 py-4">
                <span className="flex-1 text-[0.94rem] text-ink">
                  {cred.title}
                  {cred.issuer ? (
                    <span className="text-muted-2"> - {cred.issuer}</span>
                  ) : null}
                </span>
                {cred.link ? (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate: ${cred.title}`}
                    className="text-muted transition-colors hover:text-cyan"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M7 17 17 7M9 7h8v8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B6685"
                    strokeWidth="1.8"
                    aria-hidden
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
