"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const orderActive = pathname.startsWith("/order");

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/95 text-ivory backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full bg-ivory object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg tracking-wide text-ivory">
              {site.shortName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-gold">
              LLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1.5 text-ivory/80 transition hover:text-ivory"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services <Chevron open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-[360px] pt-4">
                <div className="rounded-2xl border border-gold/20 bg-navy-deep p-2 shadow-2xl shadow-black/40">
                  {nav.services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 transition hover:bg-white/5"
                    >
                      <span className="block text-ivory">{item.label}</span>
                      <span className="mt-0.5 block text-xs font-normal text-mist">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                item.href === "/order" || orderActive
                  ? "text-gold"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/order"
            aria-label="Cart"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ivory/80 transition hover:border-gold/40 hover:text-gold"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M6 7h15l-1.4 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.5L5 4H3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.2" fill="currentColor" />
              <circle cx="18" cy="20" r="1.2" fill="currentColor" />
            </svg>
          </Link>
          <Link
            href="/portal"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/12 px-4 text-sm text-ivory/90 transition hover:border-gold/40 hover:text-ivory"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M5 19.2c.8-3.2 3.5-5.2 7-5.2s6.2 2 7 5.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            Portal
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-navy transition hover:bg-gold-bright"
          >
            Get My Free Quote
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ivory" />
            <span className="block h-0.5 w-5 bg-ivory" />
            <span className="block h-0.5 w-3.5 bg-ivory" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-ink px-4 py-5 lg:hidden">
          <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-gold">
            Services
          </p>
          <div className="grid gap-1">
            {nav.services.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg py-2 text-ivory">
                {item.label}
              </Link>
            ))}
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg py-2 ${item.href === "/order" ? "text-gold" : "text-ivory"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-2">
            <Link
              href="/portal"
              className="rounded-full border border-white/12 px-4 py-2.5 text-center text-sm"
            >
              Portal
            </Link>
            <Link
              href="/quote"
              className="rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-navy"
            >
              Get My Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
