import { recommendationLetters } from "@/lib/content";

export default function Recommendations() {
  // Section ini sengaja tidak dirender sama sekali kalau belum ada
  // datanya, supaya tidak ada bagian kosong yang tampil di halaman
  // utama sebelum surat rekomendasi diisi di lib/content.ts.
  if (recommendationLetters.length === 0) {
    return null;
  }

  return (
    <section id="rekomendasi" className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="pointer-events-none absolute -left-16 top-0 h-56 w-56 bg-dot-grid opacity-[0.3]" />

      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Surat Rekomendasi</h2>

        <div className="mt-10 divide-y divide-line border-t border-line">
          {recommendationLetters.map((letter) => (
            <div
              key={letter.name}
              className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                {letter.url ? (
                  <a
                    href={letter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl text-ink underline decoration-line underline-offset-4 hover:decoration-accent-strong"
                  >
                    {letter.name}
                  </a>
                ) : (
                  <h3 className="font-display text-xl text-ink">
                    {letter.name}
                  </h3>
                )}

                <p className="mt-1 text-sm text-ink-soft">
                  {letter.role}
                  {letter.url && (
                    <span className="text-ink-faint"> · lihat surat rekomendasi</span>
                  )}
                </p>

                {letter.excerpt && (
                  <p className="mt-2 max-w-[62ch] text-sm italic leading-relaxed text-ink-soft">
                    &ldquo;{letter.excerpt}&rdquo;
                  </p>
                )}
              </div>

              <span className="text-sm text-ink-faint sm:text-right">
                {letter.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
