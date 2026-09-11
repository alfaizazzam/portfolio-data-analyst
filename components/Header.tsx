"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const navItems = [
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#pelatihan", label: "Pelatihan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-lg text-ink">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                activeHref === item.href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="border border-ink px-4 py-2 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Unduh CV
          </a>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-soft"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 inline-block border border-ink px-4 py-2 text-center text-sm text-ink"
          >
            Unduh CV
          </a>
        </nav>
      )}
    </header>
  );
}
