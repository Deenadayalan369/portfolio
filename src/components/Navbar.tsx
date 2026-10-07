"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          DK<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Deenadayalan_K_Resume.pdf"
            download
            className="hidden rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`absolute left-0 top-[6px] h-px w-4 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute left-0 top-[12px] h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="/Deenadayalan_K_Resume.pdf" download className="text-sm text-accent">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
