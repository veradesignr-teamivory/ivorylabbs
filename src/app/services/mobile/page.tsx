import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function MobilePage() {
  return (
    <FeaturePlaceholder
      kicker="Mobile App Development"
      title="Your business, in your customers’ pockets."
      description="iOS and Android product page covering app types, what’s included, and how we ship."
      points={[
        "Consumer, internal, and marketplace apps",
        "What’s included in every build",
        "Maintenance and store-release path",
      ]}
    />
  );
}
