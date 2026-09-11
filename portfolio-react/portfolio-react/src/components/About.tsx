import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-24 sm:pt-32">
      <h2 className="font-display text-2xl font-semibold text-text">About</h2>
      <div className="mt-6 max-w-[62ch] space-y-4 leading-relaxed text-text-muted">
        {profile.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
