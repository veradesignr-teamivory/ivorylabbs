import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function PrivacyPage() {
  return (
    <FeaturePlaceholder
      kicker="Legal"
      title="Privacy Policy"
      description="We’ll add Ivorylabbs LLC privacy terms here before launch. For now, we only collect what you send us through quote or portal forms."
      points={["No sale of personal data", "Contact hello@ivorylabbs.com for requests"]}
    />
  );
}
