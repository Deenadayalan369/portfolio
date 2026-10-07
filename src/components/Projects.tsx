import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="One shipped end-to-end solo, three in active development — the rest of my time goes to Travis at work."
        />

        <div className="space-y-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
