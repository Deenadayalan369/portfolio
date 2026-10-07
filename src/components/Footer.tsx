import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <div>
          © 2026 {profile.name}. Built with Next.js &amp; Tailwind.
        </div>
        <div>Designed, built and shipped solo.</div>
      </div>
    </footer>
  );
}
