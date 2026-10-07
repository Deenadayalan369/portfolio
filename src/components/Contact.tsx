import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="noise-bg relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
            <div className="text-xs font-medium uppercase tracking-widest text-accent">Let&apos;s talk</div>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Open to new opportunities in AI &amp; data engineering
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">{profile.availability}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
