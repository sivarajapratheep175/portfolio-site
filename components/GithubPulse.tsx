"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type GhRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

export default function GithubPulse() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUser}`).then((res) => {
            if (!res.ok) throw new Error("user fetch failed");
            return res.json();
          }),
          fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=4`).then((res) => {
            if (!res.ok) throw new Error("repos fetch failed");
            return res.json();
          }),
        ]);
        if (!cancelled) {
          setUser(u);
          setRepos(r);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="comment-eyebrow">live from github</p>
              <h2 className="mt-3 font-display text-[1.9rem] font-semibold text-ink">GitHub pulse</h2>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.82rem] text-cyan transition-colors hover:text-ink"
            >
              View GitHub →
            </a>
          </div>
        </Reveal>

        {failed && (
          <Reveal>
            <p className="mt-8 text-sm text-muted-2">
              Couldn&apos;t reach the GitHub API right now — take a look directly on{" "}
              <a href={profile.github} className="text-cyan hover:text-ink">
                GitHub
              </a>
              .
            </p>
          </Reveal>
        )}

        {!failed && (
          <>
            <Reveal>
              <div className="mt-8 grid grid-cols-3 divide-x divide-line-soft rounded-xl border border-line bg-surface">
                {[
                  { label: "Public repos", value: user?.public_repos },
                  { label: "Followers", value: user?.followers },
                  { label: "Following", value: user?.following },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-5 text-center sm:px-6">
                    <p className="font-display text-2xl font-semibold text-blue-light sm:text-3xl">
                      {s.value ?? <span className="inline-block h-7 w-8 animate-pulse rounded bg-raised align-middle" />}
                    </p>
                    <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-muted-2 sm:text-[0.72rem]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {(repos ?? Array.from({ length: 4 })).map((repo, i) => (
                <Reveal key={repo && "name" in repo ? repo.name : i}>
                  {repo && "name" in repo ? (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full rounded-xl border border-line bg-surface p-5 transition-colors hover:border-blue-dim"
                    >
                      <p className="font-mono text-[0.88rem] text-ink">{repo.name}</p>
                      <p className="mt-1.5 line-clamp-2 text-[0.85rem] text-muted">
                        {repo.description ?? "No description provided."}
                      </p>
                      <p className="mt-3 font-mono text-[0.72rem] text-muted-2">
                        {repo.language ?? "—"} · ★ {repo.stargazers_count}
                      </p>
                    </a>
                  ) : (
                    <div className="h-[104px] animate-pulse rounded-xl border border-line bg-surface" />
                  )}
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
