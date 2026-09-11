import Image from "next/image";
import { profile, stats } from "@/lib/content";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Decorative, data-themed backdrop -- kept behind content and low-opacity */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-line" />
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-accent/25 via-accent-bright/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-content gap-12 px-6 pt-16 md:px-10 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-sm font-medium text-accent-strong">
            Portofolio {profile.role}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl italic text-ink-soft md:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink-soft">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              className="bg-gradient-to-r from-accent-strong to-accent px-6 py-3 text-sm font-medium text-bg shadow-[0_8px_24px_-8px_rgba(228,113,31,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Lihat proyek
            </a>
            <a
              href="#kontak"
              className="border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              Hubungi saya
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          {/* gradient offset frame behind the photo -- the one deliberate visual flourish in the hero */}
          <div
            aria-hidden
            className="absolute -bottom-5 -right-5 h-full w-full bg-gradient-to-br from-accent to-accent-deep"
          />
          <div
            className="relative aspect-[4/5] w-full overflow-hidden ring-1 ring-line"
            style={{
              backgroundImage: "url(/images/profile-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-soft md:mt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-grid opacity-70" />
        <div className="relative mx-auto max-w-content px-6 py-8 md:px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
