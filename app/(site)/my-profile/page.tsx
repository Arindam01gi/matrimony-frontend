import type { Metadata } from "next";

import { MyProfilePage } from "@/components/profile/my-profile-page";

export const metadata: Metadata = {
  title: "My Profile | Shubho Shomproti",
  description:
    "Manage profile, account, security, membership, and app preferences for Shubho Shomproti.",
};

export default function MyProfileRoute() {
  return <MyProfilePage />;
}
