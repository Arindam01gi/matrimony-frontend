import type { Metadata } from "next";

import {
  OnboardingPage,
  type OnboardingStepKey,
} from "@/components/onboarding/onboarding-page";

interface OnboardingRouteProps {
  searchParams: Promise<{
    step?: string | string[];
  }>;
}

const onboardingSteps = ["personal", "career", "family", "lifestyle"] as const;

export const metadata: Metadata = {
  title: "Profile Onboarding | Shubho Shomproti",
  description:
    "Complete your Shubho Shomproti profile details for a personalized Bengali matrimony experience.",
};

function resolveStep(step: string | string[] | undefined): OnboardingStepKey {
  const value = Array.isArray(step) ? step[0] : step;

  if (onboardingSteps.includes(value as OnboardingStepKey)) {
    return value as OnboardingStepKey;
  }

  return "personal";
}

export default async function OnboardingRoute({
  searchParams,
}: OnboardingRouteProps) {
  const { step } = await searchParams;

  return <OnboardingPage initialStep={resolveStep(step)} />;
}
