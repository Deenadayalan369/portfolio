import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-muted">{description}</p>}
    </Reveal>
  );
}
