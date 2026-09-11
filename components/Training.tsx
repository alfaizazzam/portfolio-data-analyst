import { trainings } from "@/lib/content";

export default function Training() {
  return (
    <section id="pelatihan" className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-56 w-56 bg-dot-grid opacity-[0.3]" />

      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Pelatihan</h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {trainings.map((training) => (
            <div
              key={training.title}
              className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
                            <div>
                {training.url ? (
                  <a
                    href={training.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl text-ink underline decoration-line underline-offset-4 hover:decoration-accent-strong"
                  >
                    {training.title}
                  </a>
                ) : (
                  <h3 className="font-display text-xl text-ink">
                    {training.title}
                  </h3>
                )}

                <p className="mt-1 text-sm text-ink-soft">
                  {training.organizer}
                  {training.url && (
                    <span className="text-ink-faint"> · lihat sertifikat pelatihan</span>
                  )}
                </p>

                {training.description && (
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
                    {training.description}
                  </p>
                )}
              </div>

              <span className="text-sm text-ink-faint sm:text-right">
                {training.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
