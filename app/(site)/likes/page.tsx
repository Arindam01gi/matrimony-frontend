import type { Metadata } from "next";

import { LikesPage } from "@/components/likes/likes-page";

export const metadata: Metadata = {
  title: "Likes | Shubho Shomproti",
  description:
    "Review Bengali matrimony profiles who have sent interest in your profile.",
};

export default function LikesRoute() {
  return <LikesPage />;
}
