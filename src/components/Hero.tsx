"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, stats } from "@/lib/data";

const roles = ["AI & Data Platforms", "ETL at 50M-row scale", "LLM-powered tooling"];

export default function Hero() {
  return (
    <section id="top" className="noise-bg relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl font-display text-xl text-muted sm:text-2xl"
        >
          Software Engineer building <span className="gradient-text">{roles[0]}</span> —{" "}
          {roles.slice(1).join(" · ")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            See my work
          </a>
          <a
            href="/Deenadayalan_K_Resume.pdf"
            download
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
