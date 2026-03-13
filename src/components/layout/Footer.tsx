import { teamInfo } from "@/data/team";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-display text-sm text-text-muted">
          &gt;_ G1FT3D © {new Date().getFullYear()}
        </span>
        <span className="font-code text-xs text-text-muted opacity-60">
          # CTF | Security Research | Hacking for Fun
        </span>
      </div>
    </footer>
  );
}
