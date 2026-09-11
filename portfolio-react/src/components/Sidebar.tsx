import { useEffect, useState } from "react";
import { profile } from "../data";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[19rem] lg:flex-col lg:justify-between lg:px-12 lg:py-14 border-b border-hairline lg:border-b-0 lg:border-r px-6 py-8">
      <div>
        <a href="#about" className="inline-block">
          <p className="font-display text-xl font-semibold tracking-tight text-text">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-sm text-accent">{profile.role}</p>
        </a>

        <nav className="mt-6 lg:mt-12" aria-label="Section navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-3 font-mono text-sm transition-colors ${
                      isActive ? "text-text" : "text-text-faint hover:text-text-muted"
                    }`}
                  >
                    <span
                      className={`hidden h-px transition-all lg:block ${
                        isActive ? "w-8 bg-accent" : "w-4 bg-text-faint group-hover:w-6 group-hover:bg-text-muted"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 lg:mt-0">
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          open to new roles
        </div>

        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-text-muted lg:flex-col lg:gap-2">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
