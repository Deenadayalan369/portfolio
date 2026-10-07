"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience, earlierExperience } from "@/lib/data";

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="grid gap-6 sm:grid-cols-12">
                <div className="sm:col-span-3">
                  <div className="text-sm text-muted">{job.period}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{job.company}</h3>
                  <div className="text-sm text-muted">{job.location}</div>
                </div>
                <div className="sm:col-span-9">
                  <div className="text-base font-medium text-foreground">
                    {job.role}
                    {job.roleNote && <span className="text-muted"> · {job.subRole}</span>}
                  </div>
                  {job.project && <div className="mt-1 text-sm text-accent">{job.project}</div>}
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {job.rd && (
                    <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                      <div className="text-xs font-medium uppercase tracking-wide text-muted">
                        R&amp;D highlights
                      </div>
                      <ul className="mt-2 space-y-2">
                        {job.rd.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-2" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 border-t border-border pt-6">
          <button
            onClick={() => setShowEarlier((v) => !v)}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground cursor-pointer"
          >
            <ChevronDown size={16} className={`transition-transform ${showEarlier ? "rotate-180" : ""}`} />
            Earlier career (pre-2022)
          </button>
          {showEarlier && (
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {earlierExperience.map((e) => (
                <div key={e.role}>
                  <div className="text-xs text-muted">{e.period}</div>
                  <div className="mt-1 text-sm font-medium">{e.role}</div>
                  <div className="text-xs text-muted">{e.company}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{e.detail}</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
