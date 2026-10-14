import Image from "next/image";
import Link from "next/link";
import { formatPrice, services } from "@/lib/services";
import { site } from "@/lib/site";

const pillars = [
  {
    href: "/services/website",
    title: "Websites",
    copy: "Marketing sites and stores that look expensive and convert like they mean it.",
  },
  {
    href: "/services/web-apps",
    title: "Web apps",
    copy: "Custom software for operations, portals, bookings, and internal tools.",
  },
  {
    href: "/services/mobile",
    title: "Mobile apps",
    copy: "iOS and Android products that put your business in a customer’s pocket.",
  },
  {
    href: "/services/design",
    title: "UI/UX design",
    copy: "Interfaces that feel obvious — research, systems, and high-fidelity craft.",
  },
];

const steps = [
  {
    n: "01",
    title: "Find the right work",
    copy: "Take a short quiz or browse the marketplace. We recommend only what you actually need.",
  },
  {
    n: "02",
    title: "Quote or order",
    copy: "Get a free quote, or add starting-price services to cart and start immediately.",
  },
  {
    n: "03",
    title: "Track in the portal",
    copy: "See progress, talk to the team, and keep every deliverable in one place.",
  },
];

export default function HomePage() {
  const featured = services.filter((service) =>
    ["custom-website", "seo-services", "google-business-setup", "social-media-management"].includes(
      service.id,
    ),
  );

  return (
    <div>
      <section className="relative overflow-hidden bg-navy-deep text-ivory">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,160,70,0.18),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Ivorylabbs LLC · Digital agency
            </p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Digital work that takes root.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
              {site.tagline} Websites, apps, marketing systems, and a client portal
              so you can see the work grow — not chase it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-navy transition hover:bg-gold-bright"
              >
                Get my free quote
              </Link>
              <Link
                href="/order"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-6 text-sm font-semibold text-ivory transition hover:border-gold/50"
              >
                Order services
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-gold/20 blur-3xl" />
              <Image
                src="/logo.png"
                alt="Ivorylabbs tree of life logo"
                width={420}
                height={420}
                priority
                className="relative h-auto w-[min(420px,85vw)] rounded-full bg-ivory shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["Service marketplace", "Order exactly what you need"],
            ["Guided quiz", "Get a personalised package"],
            ["Client portal", "Track every order in one place"],
          ].map(([title, copy]) => (
            <div key={title} className="text-center sm:text-left">
              <p className="font-serif text-2xl text-navy">{title}</p>
              <p className="mt-1 text-sm text-navy/60">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dim">
          What we build
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl text-navy sm:text-5xl">
          An agency ecosystem, not a one-off website.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-3xl border border-navy/8 bg-white p-7 transition hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
            >
              <h3 className="font-serif text-2xl text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/65">{pillar.copy}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-gold-dim">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            From first question to live work.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-white/10 bg-white/4 p-6"
              >
                <p className="font-serif text-3xl text-gold">{step.n}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{step.copy}</p>
              </div>
            ))}
          </div>
          <Link
            href="/find-services"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-navy"
          >
            Find your services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dim">
              Starting prices
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy">Order any service</h2>
          </div>
          <Link href="/order" className="hidden text-sm font-semibold text-gold-dim sm:inline">
            Browse marketplace →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featured.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-navy/8 bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-gold-dim">
                {service.categoryLabel}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{service.name}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/65">{service.summary}</p>
              <p className="mt-5 text-sm font-semibold text-gold-dim">
                {formatPrice(service)}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/order"
          className="mt-6 inline-flex text-sm font-semibold text-gold-dim sm:hidden"
        >
          Browse marketplace →
        </Link>
      </section>

      <section className="border-t border-navy/8 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-4xl text-navy">Ready to plant something real?</h2>
            <p className="mt-3 max-w-xl text-navy/65">
              Tell us what you need. We’ll send a detailed quote — or you can order
              from the marketplace today.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-ivory"
            >
              Get my free quote
            </Link>
            <Link
              href="/portal"
              className="inline-flex h-12 items-center rounded-full border border-navy/10 px-6 text-sm font-semibold text-navy"
            >
              Open client portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
