import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-ink-faint md:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <a href="#top" className="hover:text-ink">
          Kembali ke atas
        </a>
      </div>
    </footer>
  );
}
