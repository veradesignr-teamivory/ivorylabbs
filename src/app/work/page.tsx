import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function WorkPage() {
  return (
    <FeaturePlaceholder
      kicker="Feature 4 · Our Work"
      title="A portfolio of work that already exists in the world."
      description="This page will showcase live sites and case studies — the same grid you saw in the sample, branded for Ivorylabbs."
      points={[
        "Project cards with live-site links",
        "Industry and service filters",
        "Short result notes for each engagement",
      ]}
    />
  );
}
