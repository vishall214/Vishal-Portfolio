import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-24 sm:pt-32">
      <h2 className="font-display text-2xl font-semibold text-text">Skills</h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-text-faint">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-hairline px-2.5 py-1 text-sm text-text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
