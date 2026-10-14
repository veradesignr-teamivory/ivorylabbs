import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function TermsPage() {
  return (
    <FeaturePlaceholder
      kicker="Legal"
      title="Terms & Conditions"
      description="Service terms, starting prices vs final quotes, and project process will live here before you take paid orders."
      points={[
        "Starting prices are not final invoices",
        "Work begins after a confirmed quote or paid order",
      ]}
    />
  );
}
