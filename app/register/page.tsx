import type { Metadata } from "next";

import { AuthPage } from "@/components/auth/auth-page";

export const metadata: Metadata = {
  title: "Register | Shubho Shomproti",
  description:
    "Create your Shubho Shomproti profile for a refined Bengali matrimony experience.",
};

export default function RegisterPage() {
  return <AuthPage mode="signup" />;
}
