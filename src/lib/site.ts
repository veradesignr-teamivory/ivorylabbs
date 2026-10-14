export const site = {
  name: "Ivorylabbs LLC",
  shortName: "Ivorylabbs",
  tagline: "Rooted in craft. Built for growth.",
  description:
    "Ivorylabbs LLC designs, builds, and operates websites, apps, and growth systems for ambitious businesses.",
  email: "hello@ivorylabbs.com",
  phone: "",
  whatsapp: "",
  hours: "9am–8pm, Mon–Sat",
  address: "",
} as const;

export const nav = {
  primary: [
    { href: "/work", label: "Our Work" },
    { href: "/scripts", label: "Scripts" },
    { href: "/order", label: "Order Services" },
  ],
  services: [
    {
      href: "/services/website",
      label: "Website Design",
      description: "Sites that win clients while you sleep.",
    },
    {
      href: "/services/web-apps",
      label: "Web App Development",
      description: "Custom software for how you actually work.",
    },
    {
      href: "/services/mobile",
      label: "Mobile App Development",
      description: "iOS and Android products in your customers’ pockets.",
    },
    {
      href: "/services/design",
      label: "UI/UX Design",
      description: "Interfaces that feel obvious to use.",
    },
  ],
  footerServices: [
    { href: "/services/website", label: "Website Design" },
    { href: "/services/web-apps", label: "Web App Development" },
    { href: "/services/mobile", label: "Mobile App Development" },
    { href: "/services/design", label: "UI/UX Design" },
  ],
  footerLinks: [
    { href: "/work", label: "Our Work & Results" },
    { href: "/quote", label: "Contact" },
    { href: "/portal", label: "Client Portal" },
    { href: "/order", label: "Service Marketplace" },
  ],
} as const;
