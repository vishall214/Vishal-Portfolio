import { useEffect, useState } from "react";
import { profile } from "../data";
import { checkApiHealth } from "../lib/api";

export default function Footer() {
  const [apiOnline, setApiOnline] = useState<boolean | null>(null);

  useEffect(() => {
    checkApiHealth().then(setApiOnline);
  }, []);

  return (
    <footer id="contact" className="scroll-mt-24 pb-24 pt-24 sm:pb-32 sm:pt-32">
      <h2 className="font-display text-2xl font-semibold text-text">Contact</h2>
      <p className="mt-4 max-w-[52ch] leading-relaxed text-text-muted">
        I'm looking for backend and ML engineering roles. The fastest way to reach me is email.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-2 font-mono text-lg text-accent transition-opacity hover:opacity-80"
      >
        {profile.email}
      </a>

      <p className="mt-4 font-mono text-xs text-text-faint" aria-live="polite">
        API status: {apiOnline === null ? "checking" : apiOnline ? "online" : "offline"}
      </p>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-xs text-text-faint">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>built with react, typescript, vite &amp; tailwind css</p>
      </div>
    </footer>
  );
}
