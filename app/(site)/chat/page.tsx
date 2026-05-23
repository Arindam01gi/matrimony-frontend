import type { Metadata } from "next";

import { ChatPage } from "@/components/chat/chat-page";

export const metadata: Metadata = {
  title: "Chat | Shubho Shomproti",
  description:
    "Continue thoughtful Bengali matrimony conversations with verified matches and interests.",
};

export default function ChatRoute() {
  return <ChatPage />;
}
