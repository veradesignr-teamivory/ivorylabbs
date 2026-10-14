export type Billing = "once" | "month" | "platform" | "pack" | "review";

export type Service = {
  id: string;
  name: string;
  category: "web" | "mobile" | "marketing" | "google";
  categoryLabel: string;
  price: number;
  billing: Billing;
  duration: string;
  summary: string;
  included: string[];
  popular?: boolean;
};

export const services: Service[] = [
  {
    id: "website-design",
    name: "Website Design",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 67,
    billing: "once",
    duration: "1–2 weeks",
    summary:
      "A conversion-focused marketing site with a custom look, clear structure, and room to grow.",
    included: [
      "Custom visual design",
      "Up to 5 core pages",
      "Mobile-responsive layout",
      "Contact form",
      "Basic SEO setup",
      "Launch support",
    ],
  },
  {
    id: "custom-website",
    name: "Custom Website",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 362,
    billing: "once",
    duration: "3–6 weeks",
    summary:
      "Fully bespoke website built from scratch — no templates, no limits. Perfect for businesses that need a unique, powerful web presence.",
    included: [
      "100% custom design & development",
      "Unlimited pages",
      "CMS integration",
      "Advanced SEO setup",
      "Performance optimisation",
      "Security hardening",
      "3 months post-launch support",
    ],
    popular: true,
  },
  {
    id: "ecommerce-store",
    name: "E-commerce Store",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 362,
    billing: "once",
    duration: "3–5 weeks",
    summary:
      "Full-featured online store with product management, cart, payment gateway integration, and order management.",
    included: [
      "Custom storefront design",
      "Product catalogue & inventory",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order management dashboard",
      "Email notifications",
      "3 months post-launch support",
    ],
  },
  {
    id: "landing-page",
    name: "Landing Page & Sales Funnel",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 72,
    billing: "once",
    duration: "3–7 days",
    summary:
      "High-converting landing pages and sales funnels designed to turn visitors into leads and customers.",
    included: [
      "Conversion-focused design",
      "Lead capture forms",
      "Thank-you page",
      "Email autoresponder setup",
      "A/B testing ready",
      "Mobile-optimised",
      "Analytics integration",
    ],
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway Integration",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 15,
    billing: "once",
    duration: "1–5 days",
    summary:
      "Integrate secure payment processing into your existing website or app. Stripe, PayPal, Paystack, Flutterwave, and more.",
    included: [
      "Gateway selection & setup",
      "Test & live mode configuration",
      "Webhook setup",
      "Payment confirmation emails",
      "Refund flow setup",
      "Security compliance",
    ],
  },
  {
    id: "business-email",
    name: "Business Email Setup",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 36,
    billing: "once",
    duration: "1–3 days",
    summary:
      "Professional email addresses using your own domain, including DNS, client setup, and spam protection.",
    included: [
      "Custom domain email",
      "DNS & MX record configuration",
      "Gmail / Outlook integration",
      "SPF, DKIM & DMARC setup",
      "Up to 5 email accounts",
      "Email forwarding setup",
    ],
  },
  {
    id: "seo-services",
    name: "SEO Services",
    category: "web",
    categoryLabel: "Web & Technology",
    price: 58,
    billing: "once",
    duration: "Ongoing (results in 1–3 months)",
    summary:
      "Comprehensive SEO strategy to rank your website higher on Google and drive organic traffic that converts.",
    included: [
      "Full website SEO audit",
      "Keyword research & strategy",
      "On-page optimisation",
      "Meta tags & schema markup",
      "Google Search Console setup",
      "Monthly performance report",
      "Link building strategy",
    ],
  },
  {
    id: "app-maintenance",
    name: "App Maintenance",
    category: "mobile",
    categoryLabel: "Mobile App Development",
    price: 36,
    billing: "month",
    duration: "Ongoing (monthly)",
    summary:
      "Keep your existing mobile app running smoothly — bug fixes, OS updates, performance monitoring, and minor feature additions.",
    included: [
      "Bug fixes & hotfixes",
      "iOS & Android OS updates",
      "Performance monitoring",
      "Security patches",
      "Minor feature additions",
      "Monthly activity report",
    ],
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    price: 36,
    billing: "month",
    duration: "Ongoing (monthly)",
    summary:
      "Consistent posting, engagement, and strategy — we handle your social media every month.",
    included: [
      "Content calendar",
      "Branded post design",
      "Scheduled publishing",
      "Community engagement",
      "Monthly performance report",
      "Platform strategy",
    ],
  },
  {
    id: "paid-ads",
    name: "Facebook, Instagram, Google & TikTok Ads",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    price: 51,
    billing: "once",
    duration: "Ongoing campaigns",
    summary:
      "Results-driven paid advertising campaigns across Meta, Google, and TikTok. Strategy, creative, targeting, and optimisation.",
    included: [
      "Multi-platform ad strategy",
      "Audience research & targeting",
      "Ad creative (graphics & copy)",
      "Campaign setup & launch",
      "A/B testing",
      "Weekly performance reports",
      "Retargeting campaigns",
    ],
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    price: 36,
    billing: "once",
    duration: "Setup: 5–7 days",
    summary:
      "Strategic email marketing — from list building to automation sequences that nurture leads into paying customers.",
    included: [
      "Email strategy & planning",
      "Custom email template design",
      "List segmentation",
      "Automated welcome sequences",
      "Monthly newsletter campaigns",
      "Open rate & click-through reporting",
      "Unsubscribe compliance",
    ],
  },
  {
    id: "social-page-setup",
    name: "Social Media Business Page Setup",
    category: "marketing",
    categoryLabel: "Digital Marketing",
    price: 7,
    billing: "platform",
    duration: "1–2 days per platform",
    summary:
      "Professional setup of your business pages on Facebook, Instagram, TikTok, X, or YouTube.",
    included: [
      "Profile & cover photo design",
      "Bio & about section optimisation",
      "Link in bio / website setup",
      "Contact details configured",
      "Platform-specific best practices",
      "Verification guidance",
    ],
  },
  {
    id: "google-business-setup",
    name: "Google Business Profile Setup",
    category: "google",
    categoryLabel: "Google Business",
    price: 18,
    billing: "once",
    duration: "2–5 days",
    summary:
      "Get found on Google Maps and Search. We set up and fully optimise your Google Business Profile.",
    included: [
      "Google Business account creation",
      "Business info & hours setup",
      "Photo upload & optimisation",
      "Service listing setup",
      "Category & attribute optimisation",
      "Verification process guidance",
      "Initial post creation",
    ],
  },
];

export function formatPrice(service: Service) {
  const amount = `$${service.price}`;
  switch (service.billing) {
    case "month":
      return `From ${amount}/month`;
    case "platform":
      return `${amount}/platform`;
    case "pack":
      return `From ${amount} per 10,000 followers`;
    case "review":
      return `From ${amount}/review`;
    default:
      return `From ${amount}`;
  }
}
