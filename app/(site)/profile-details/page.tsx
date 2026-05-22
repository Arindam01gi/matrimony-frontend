import type { Metadata } from "next";

import { ProfileDetailsPage } from "@/components/discovery/profile-details-page";

export const metadata: Metadata = {
  title: "Discovery | Shubho Shomproti",
  description:
    "Review a premium Bengali matrimony profile with family, career, lifestyle, and connection details.",
};

export default function ProfileDetailsRoute() {
  return <ProfileDetailsPage />;
}
