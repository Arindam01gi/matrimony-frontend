import type { Metadata } from "next";

import { NotificationCenterPage } from "@/components/notifications/notification-center-page";

export const metadata: Metadata = {
  title: "Notifications | Shubho Shomproti",
  description:
    "Review new interests, messages, profile views, and account updates in your activity center.",
};

export default function NotificationsRoute() {
  return <NotificationCenterPage />;
}
