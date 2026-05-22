import type { Metadata } from "next";

import { AuthPage } from "@/components/auth/auth-page";
import type { AuthMode } from "@/components/auth/auth-types";

interface AuthRouteProps {
  searchParams: Promise<{
    mode?: string | string[];
  }>;
}

export const metadata: Metadata = {
  title: "Auth | Shubho Shomproti",
  description:
    "Log in or create your Shubho Shomproti profile for a refined Bengali matrimony experience.",
};

function resolveAuthMode(mode: string | string[] | undefined): AuthMode {
  const value = Array.isArray(mode) ? mode[0] : mode;

  if (value === "register") {
    return "signup";
  }

  return "login";
}

export default async function AuthRoute({ searchParams }: AuthRouteProps) {
  const { mode } = await searchParams;

  return <AuthPage mode={resolveAuthMode(mode)} />;
}
