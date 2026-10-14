import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function WebsiteServicePage() {
  return (
    <FeaturePlaceholder
      kicker="Website Design"
      title="Websites that win clients while you sleep."
      description="A full service landing page — packages, process, proof, and FAQs — will land here after the marketplace is live."
      points={[
        "Package options and what’s included",
        "Design process from discovery to launch",
        "FAQ and quote CTA",
      ]}
    />
  );
}
