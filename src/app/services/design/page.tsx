import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function DesignPage() {
  return (
    <FeaturePlaceholder
      kicker="UI/UX Design"
      title="Some designs just feel obvious to use."
      description="Design process, deliverables, and why interface work is the highest-return investment in a digital product."
      points={[
        "Discovery, wireframes, high-fidelity, and handoff",
        "What’s included in every project",
        "FAQ and start-a-project CTA",
      ]}
    />
  );
}
