import { profile } from "../data";

export default function Hero() {
  return (
    <section className="pt-4 sm:pt-10">
      <div className="max-w-[56ch] space-y-4 text-lg leading-relaxed text-text-muted">
        {profile.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <h1 className="mt-8 font-display text-4xl font-semibold leading-tight text-text sm:text-5xl">
        From the interface down to the database.
      </h1>

      <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-text-muted">
        {profile.tagline}
      </p>

      <div className="relative mt-10 overflow-hidden">
        <div className="h-px w-full bg-hairline" />
        <div className="animate-scan absolute inset-y-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <dl className="mt-8 grid grid-cols-3 gap-6">
        {profile.heroMetrics.map((metric) => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="font-mono text-2xl font-medium text-accent sm:text-3xl">
              {metric.value}
            </dd>
            <dd className="mt-1 text-sm text-text-faint">{metric.label}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 font-mono text-xs text-text-faint">
        measured on the Overwatch detection pipeline (see Projects)
      </p>
    </section>
  );
}
