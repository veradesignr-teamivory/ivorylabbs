import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function QuotePage() {
  return (
    <FeaturePlaceholder
      kicker="Feature 7 · Quotes"
      title="Get a free quote in one conversation."
      description="A short brief form that captures goals, budget, and timing — then routes to the team before any payment is required."
      points={[
        "Project brief and contact details",
        "No payment required",
        "Same-day response window you can set",
      ]}
    />
  );
}
