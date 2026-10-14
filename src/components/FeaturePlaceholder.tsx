import Link from "next/link";

export function FeaturePlaceholder({
  kicker,
  title,
  description,
  points,
}: {
  kicker: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dim">
        {kicker}
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">{title}</h1>
      <p className="mt-4 text-lg leading-8 text-navy/70">{description}</p>
      <ul className="mt-8 space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 rounded-2xl border border-navy/8 bg-white px-4 py-3 text-sm text-navy/80"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dim">
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/quote"
          className="inline-flex h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-ivory"
        >
          Get a free quote
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full border border-navy/10 px-6 text-sm font-semibold text-navy"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
