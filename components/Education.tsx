import { certifications, education } from "@/lib/content";

export default function Education() {
  return (
    <section id="pendidikan" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 bg-dot-grid opacity-[0.3]" />
      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Pendidikan
            </h2>
            <ul className="mt-6 space-y-6 border-t border-line pt-6">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="text-base text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-ink-faint">{item.period}</p>
                  {item.gpa && (
                    <p className="mt-1 text-sm text-accent-strong">{item.gpa}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Sertifikasi dan Pencapaian
            </h2>
            <ul className="mt-6 space-y-6 border-t border-line pt-6">
              {certifications.map((item) => (
                <li key={item.name}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-ink underline decoration-line underline-offset-4 hover:decoration-accent-strong"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <p className="text-base text-ink">{item.name}</p>
                  )}
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.issuer} · {item.year}
                    {item.url && (
                      <span className="text-ink-faint"> — lihat sertifikat</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
