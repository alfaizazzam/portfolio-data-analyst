"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, []);

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; alt: string } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const visibleProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  const openGallery = (project: (typeof projects)[number]) => {
    setLightbox({
      images: [project.image, ...(project.gallery ?? [])],
      alt: project.title,
    });
    setLightboxIndex(0);
  };

  const closeGallery = () => setLightbox(null);

  const goToImage = (i: number) => {
    if (!lightbox) return;
    setLightboxIndex((i + lightbox.images.length) % lightbox.images.length);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") goToImage(lightboxIndex - 1);
      if (e.key === "ArrowRight") goToImage(lightboxIndex + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, lightboxIndex]);

  return (
    <section id="proyek" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-dot-grid opacity-[0.35]" />
      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Proyek</h2>
          <p className="max-w-[38ch] text-sm text-ink-soft">
            Project data yang dikerjakan dari proyek akademik, studi Independen, serta berbagai pelatihan.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`border px-3 py-1.5 text-xs transition-all ${
              activeTag === null
                ? "border-transparent bg-gradient-to-r from-accent-strong to-accent text-bg shadow-[0_6px_16px_-6px_rgba(228,113,31,0.6)]"
                : "border-line text-ink-soft hover:border-accent hover:text-ink"
            }`}
          >
            Semua
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`border px-3 py-1.5 text-xs transition-all ${
                activeTag === tag
                  ? "border-transparent bg-gradient-to-r from-accent-strong to-accent text-bg shadow-[0_6px_16px_-6px_rgba(228,113,31,0.6)]"
                  : "border-line text-ink-soft hover:border-accent hover:text-ink"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-8 divide-y divide-line border-t border-line">
          {visibleProjects.map((project) => {
            const photoCount = 1 + (project.gallery?.length ?? 0);
            return (
              <article key={project.slug} className="grid gap-6 py-10 first:pt-0 md:grid-cols-[280px_1fr] md:gap-8">
                <button
                  type="button"
                  onClick={() => openGallery(project)}
                  className="group relative aspect-video w-full overflow-hidden border border-line bg-surface p-2 text-left transition-colors duration-300 hover:border-accent"
                  aria-label={`Lihat semua foto proyek ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 280px, 100vw"
                    className="object-contain p-2"
                  />
                  {photoCount > 1 && (
                    <span className="absolute bottom-3 right-3 border border-line bg-navy/80 px-2 py-1 text-xs text-ink-soft backdrop-blur transition-colors group-hover:border-accent group-hover:text-ink">
                      {photoCount} foto
                    </span>
                  )}
                </button>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl text-ink">
                      <Link href={`/proyek/${project.slug}`} className="transition-colors hover:text-accent">
                        {project.title}
                      </Link>
                    </h3>
                    <span className="text-sm text-ink-faint">{project.period}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.results && project.results.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm text-ink-soft">Hasil utama</p>
                      <ul className="mt-3 space-y-2.5">
                        {project.results.map((result) => (
                          <li key={result} className="flex gap-3 text-sm leading-relaxed text-ink">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-accent-bright to-accent" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={`/proyek/${project.slug}`}
                    className="mt-6 inline-block text-sm text-accent-strong underline decoration-line underline-offset-4 hover:decoration-accent-strong"
                  >
                    Lihat selengkapnya
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeGallery}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-6"
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Tutup"
            className="absolute right-6 top-6 text-2xl text-ink/80 hover:text-ink"
          >
            ×
          </button>

          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-3 text-center text-sm text-ink-soft">{lightbox.alt}</p>
            <div
              className="relative aspect-video w-full touch-pan-y overflow-hidden border border-line bg-surface"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const delta = e.changedTouches[0].clientX - touchStartX.current;
                if (delta > 50) goToImage(lightboxIndex - 1);
                else if (delta < -50) goToImage(lightboxIndex + 1);
                touchStartX.current = null;
              }}
            >
              <Image
                src={lightbox.images[lightboxIndex]}
                alt={`${lightbox.alt} — gambar ${lightboxIndex + 1} dari ${lightbox.images.length}`}
                fill
                sizes="100vw"
                className="object-contain p-2"
              />

              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goToImage(lightboxIndex - 1)}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-navy/70 text-lg text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => goToImage(lightboxIndex + 1)}
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-navy/70 text-lg text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-3 right-3 border border-line bg-navy/70 px-2 py-1 text-xs text-ink-soft backdrop-blur">
                    {lightboxIndex + 1} / {lightbox.images.length}
                  </span>
                </>
              )}
            </div>

            {lightbox.images.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {lightbox.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => goToImage(i)}
                    aria-label={`Ke gambar ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === lightboxIndex
                        ? "w-6 bg-gradient-to-r from-accent-bright to-accent"
                        : "w-1.5 bg-line hover:bg-ink-faint"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
