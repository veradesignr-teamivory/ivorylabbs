import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function PortalPage() {
  return (
    <FeaturePlaceholder
      kicker="Feature 6 · Client Portal"
      title="Track orders, progress, and conversations."
      description="Login, create an account, and a dashboard with pending, in-progress, and completed work — plus WhatsApp and email help."
      points={[
        "Account login and registration",
        "Order status tiles and history",
        "New order shortcut into the marketplace",
      ]}
    />
  );
}
