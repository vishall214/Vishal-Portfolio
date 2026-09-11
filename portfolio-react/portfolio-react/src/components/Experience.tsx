import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pt-24 sm:pt-32">
      <h2 className="font-display text-2xl font-semibold text-text">Experience</h2>

      <ol className="mt-8 space-y-12 border-l border-hairline">
        {experience.map((entry) => (
          <li key={entry.org} className="relative pl-8">
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg" />

            <p className="font-mono text-xs text-text-faint">{entry.period}</p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-text">
              {entry.role} <span className="text-text-muted">· {entry.org}</span>
            </h3>
            <p className="text-sm text-text-faint">{entry.location}</p>

            <ul className="mt-4 max-w-[62ch] space-y-2.5">
              {entry.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 leading-relaxed text-text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-hairline px-2 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
