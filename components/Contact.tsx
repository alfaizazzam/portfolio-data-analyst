import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-soft">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-line-light opacity-90" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-accent/25 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-content px-6 py-16 text-ink md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Mari berdiskusi soal data
            </h2>
            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-soft">
              Terbuka untuk peluang bekerja penuh waktu, internship, maupun sekadar
              berdiskusi soal analisis data. Kirim email langsung atau hubungi
              lewat salah satu tautan di samping.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block bg-gradient-to-r from-accent-bright to-accent px-6 py-3 text-sm font-medium text-navy shadow-[0_10px_30px_-10px_rgba(228,113,31,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Kirim email
            </a>
          </div>

          <div className="border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-ink-faint">Email</dt>
                <dd className="mt-1">{profile.email}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Telepon</dt>
                <dd className="mt-1">{profile.phone}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Lokasi</dt>
                <dd className="mt-1">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Tautan</dt>
                <dd className="mt-1 flex flex-col gap-1">
                  {profile.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit underline decoration-ink-faint underline-offset-4 hover:decoration-accent-bright"
                    >
                      {social.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
