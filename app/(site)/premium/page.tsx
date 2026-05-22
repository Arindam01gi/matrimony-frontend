import type { Metadata } from "next";

import { PremiumPlansPage } from "@/components/premium/premium-plans-page";

export const metadata: Metadata = {
  title: "Premium Membership | Shubho Shomproti",
  description:
    "Explore premium Bengali matrimony membership plans with profile boosts, verified contacts, and relationship manager support.",
};

export default function PremiumRoute() {
  return <PremiumPlansPage />;
}
