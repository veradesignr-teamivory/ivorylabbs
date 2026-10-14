import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-full bg-ivory object-contain"
            />
            <span>
              <span className="block font-serif text-xl">{site.shortName}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Digital Agency
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-mist">
            {site.tagline} We build websites, apps, and growth systems that take
            root and keep producing.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-block text-sm text-gold hover:text-gold-bright"
          >
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
            {nav.footerServices.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
            {nav.footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-mist sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
