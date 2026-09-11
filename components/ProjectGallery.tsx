"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (images.length <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="mt-10">
      <div
        className="relative aspect-[16/9] w-full touch-pan-y overflow-hidden border border-line bg-surface"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta > 50) prev();
          else if (delta < -50) next();
          touchStartX.current = null;
        }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative h-full"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={src}
                alt={`${alt} — gambar ${i + 1} dari ${images.length}`}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain p-2"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-navy/70 text-lg text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Gambar berikutnya"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-navy/70 text-lg text-ink backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 border border-line bg-navy/70 px-2 py-1 text-xs text-ink-soft backdrop-blur">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ke gambar ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-gradient-to-r from-accent-bright to-accent"
                  : "w-1.5 bg-line hover:bg-ink-faint"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
