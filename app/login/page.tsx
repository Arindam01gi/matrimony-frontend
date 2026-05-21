import type { Metadata } from "next";

import { AuthPage } from "@/components/auth/auth-page";

export const metadata: Metadata = {
  title: "Login | Shubho Shomproti",
  description:
    "Log in to your Shubho Shomproti profile for a refined Bengali matrimony experience.",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
