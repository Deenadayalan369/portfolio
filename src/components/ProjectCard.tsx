"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import VideoModal from "./VideoModal";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div
        className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50 ${
          project.featured ? "md:grid md:grid-cols-5" : ""
        }`}
      >
        {project.featured && (
          <div className="relative flex items-center justify-center bg-surface-2 p-8 md:col-span-2">
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.name} icon`}
                width={120}
                height={120}
                className="rounded-3xl shadow-lg"
              />
            )}
            {project.videoPath && (
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 text-background opacity-0 transition-all hover:bg-black/40 hover:opacity-100 cursor-pointer"
                aria-label={`Play ${project.name} demo video`}
              >
                <PlayCircle size={48} className="text-white drop-shadow-lg" />
              </button>
            )}
          </div>
        )}

        <div className={`p-6 sm:p-8 ${project.featured ? "md:col-span-3" : ""}`}>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl font-semibold">{project.name}</h3>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                project.status === "Shipped"
                  ? "bg-accent/15 text-accent"
                  : "bg-accent-2/15 text-accent-2"
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.videoPath && (
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03] cursor-pointer"
              >
                <PlayCircle size={14} /> Watch demo
              </button>
            )}
            {project.apkPath && (
              <a
                href={project.apkPath}
                download
                className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={14} /> Download APK
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={14} /> Source <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>

      {project.videoPath && (
        <VideoModal src={project.videoPath} open={videoOpen} onClose={() => setVideoOpen(false)} />
      )}
    </Reveal>
  );
}
