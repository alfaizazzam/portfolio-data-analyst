import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="keahlian" className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-line" />
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-content px-6 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-3xl text-ink md:text-4xl">Keahlian</h2>

        <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-accent-strong">
                {group.category}
              </h3>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 text-base text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
