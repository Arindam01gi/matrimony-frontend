import type { Metadata } from "next";

import { EditProfilePage } from "@/components/edit-profile/edit-profile-page";

export const metadata: Metadata = {
  title: "Edit Profile | Shubho Shomproti",
  description:
    "Update profile photos, personal details, career, family background, and lifestyle preferences.",
};

export default function EditProfileRoute() {
  return <EditProfilePage />;
}
