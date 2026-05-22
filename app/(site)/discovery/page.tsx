import type { Metadata } from "next";

import { DiscoveryFeedPage } from "@/components/discovery/discovery-feed-page";

export const metadata: Metadata = {
  title: "Discovery | Shubho Shomproti",
  description:
    "Browse curated Bengali matrimony matches with filters, quick matches, and recent profile activity.",
};

export default function DiscoveryRoute() {
  return <DiscoveryFeedPage />;
}
