import { achievements, education } from "../data";

export default function AchievementsAndEducation() {
  return (
    <section className="grid gap-12 pt-24 sm:grid-cols-2 sm:pt-32">
      <div>
        <h2 className="font-display text-2xl font-semibold text-text">Achievements</h2>
        <ul className="mt-6 max-w-[46ch] space-y-3">
          {achievements.map((item, index) => (
            <li key={index} className="flex gap-3 leading-relaxed text-text-muted">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-text">Education</h2>
        <div className="mt-6">
          <p className="font-mono text-xs text-text-faint">{education.period}</p>
          <h3 className="mt-1.5 font-display text-lg font-semibold text-text">
            {education.school}
          </h3>
          <p className="mt-1 text-text-muted">{education.degree}</p>
          <p className="text-sm text-text-faint">
            {education.detail} · {education.location}
          </p>
        </div>
      </div>
    </section>
  );
}
