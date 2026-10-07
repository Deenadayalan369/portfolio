import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
              <div className="mt-1 text-sm text-muted">
                {education.school} · {education.location}
              </div>
            </div>
            <div className="mt-4 text-sm sm:mt-0 sm:text-right">
              <div>{education.period}</div>
              <div className="text-muted">{education.detail}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
