import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { profile, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.problem,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const galleryImages = [project.image, ...(project.gallery ?? [])];

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-line" />

        <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
          <Link
            href="/#proyek"
            className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
          >
            ← Kembali ke semua proyek
          </Link>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
            <h1 className="font-display text-3xl text-ink md:text-5xl">
              {project.title}
            </h1>
            <span className="text-sm text-ink-faint">{project.period}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-2.5 py-1 text-xs text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <ProjectGallery images={galleryImages} alt={project.title} />

          <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div>
              <p className="text-sm font-medium text-accent-strong">Masalah</p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent-strong">Pendekatan</p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {project.approach}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent-strong">Dampak</p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                {project.impact}
              </p>
            </div>
          </div>

          {project.results && project.results.length > 0 && (
            <div className="mt-14 border-t border-line pt-10">
              <h2 className="font-display text-2xl text-ink">Hasil utama</h2>
              <ul className="mt-6 space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-base text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-accent-bright to-accent" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-10">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                Lihat proyek asli
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="bg-gradient-to-r from-accent-strong to-accent px-6 py-3 text-sm font-medium text-bg shadow-[0_8px_24px_-8px_rgba(228,113,31,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Diskusikan proyek serupa
            </a>
          </div>

          <div className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
            <Link
              href={`/proyek/${prev.slug}`}
              className="group border border-line p-5 transition-colors hover:border-accent"
            >
              <p className="text-xs text-ink-faint">Proyek sebelumnya</p>
              <p className="mt-1 font-display text-lg text-ink group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
            <Link
              href={`/proyek/${next.slug}`}
              className="group border border-line p-5 text-right transition-colors hover:border-accent"
            >
              <p className="text-xs text-ink-faint">Proyek berikutnya</p>
              <p className="mt-1 font-display text-lg text-ink group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
