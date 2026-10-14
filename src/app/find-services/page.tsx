import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function FindServicesPage() {
  return (
    <FeaturePlaceholder
      kicker="Feature 3 · Service quiz"
      title="Find your services in a few questions."
      description="A guided quiz — business type, goals, website, Google Business, social, budget, and timing — that builds a personalised package."
      points={[
        "Multi-step quiz with skip option",
        "Personalised package with add/remove services",
        "Quote or pay-now checkout from the result",
      ]}
    />
  );
}
