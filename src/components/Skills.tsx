import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical skills"
          description="Hands-on in production, plus what I've evaluated for next-generation platform R&D."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50">
                <h3 className="text-sm font-medium text-accent">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
