import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="From industrial machinery to LLM pipelines" />
        <div className="grid gap-10 sm:grid-cols-5">
          <Reveal delay={0.05} className="sm:col-span-3">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I started as a mechanical engineer reading vibration data off industrial rotating
                equipment — then taught myself to code and rebuilt a career around it. Since 2023 I&apos;ve
                been at <span className="text-foreground">Tristha Global</span>, building{" "}
                <span className="text-foreground">Travis</span>, an enterprise ETL and data-testing
                platform that reconciles tens of millions of rows across CSV, MongoDB and Hive with zero
                differences.
              </p>
              <p>
                Over the last year the focus has shifted toward AI: shipping an LLM feature that turns
                plain-English business rules into Pandas code, and building an MCP server so Claude can
                operate the platform directly. Outside work I ship my own products end-to-end — most
                recently <span className="text-foreground">CuraSynk</span>, an offline-first health
                records app I designed, built and released solo.
              </p>
              <p>
                I care about systems that hold up under real scale and messy real-world data, and about
                making powerful tools usable by people who don&apos;t write code.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="sm:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Location</dt>
                  <dd className="mt-0.5">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-muted">Open to relocation</dt>
                  <dd className="mt-0.5">{profile.relocate.replace("Open to relocate: ", "")}</dd>
                </div>
                <div>
                  <dt className="text-muted">Availability</dt>
                  <dd className="mt-0.5">{profile.availability.replace("Serving notice — ", "")}</dd>
                </div>
                <div>
                  <dt className="text-muted">Languages</dt>
                  <dd className="mt-0.5">{languages.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
