import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

export default function OrderPage() {
  return (
    <FeaturePlaceholder
      kicker="Next up · Feature 2"
      title="Order any service. We handle the rest."
      description="The full Ivorylabbs service marketplace — search, category filters, detail modals, and Add to Cart — is the next feature we’ll build."
      points={[
        "Catalogue of web, mobile, marketing, and Google services",
        "Dark service cards with starting prices",
        "Detail modal with what’s included and Add to Cart",
        "Cart, checkout, and custom-service request",
      ]}
    />
  );
}
