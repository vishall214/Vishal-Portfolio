import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 pt-24 sm:pt-32">
      <h2 className="font-display text-2xl font-semibold text-text">Projects</h2>

      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded border border-hairline p-6 transition-colors hover:border-accent/50 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-text-faint">{project.period}</p>
            </div>

            {project.links && project.links.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-x-4">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-accent transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-3 max-w-[60ch] text-text-muted">{project.summary}</p>

            <ul className="mt-4 max-w-[62ch] space-y-2.5">
              {project.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 leading-relaxed text-text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-hairline px-2 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
