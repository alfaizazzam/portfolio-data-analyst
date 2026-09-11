import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="pengalaman" className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-line" />
      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Pengalaman
        </h2>

        <div className="mt-10 border-l-2 border-line" style={{ borderImage: "linear-gradient(to bottom, #E4711F, #2A2724 65%) 1" }}>
          {experience.map((item) => (
            <div key={`${item.role}-${item.company}`} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-[11px] w-[11px] rounded-full bg-gradient-to-br from-accent-bright to-accent ring-4 ring-surface" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg text-ink">
                  {item.role} <span className="text-ink-soft">— {item.company}</span>
                </h3>
                <span className="text-sm text-ink-faint">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-faint">{item.location}</p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 flex-none bg-ink-faint" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
