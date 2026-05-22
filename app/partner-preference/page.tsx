import type { Metadata } from "next";

import { PartnerPreferencePage } from "@/components/partner-preference/partner-preference-page";

export const metadata: Metadata = {
  title: "Partner Preferences | Shubho Shomproti",
  description:
    "Set age, height, language, marital status, and lifestyle preferences for your ideal Bengali matrimony match.",
};

export default function PartnerPreferenceRoute() {
  return <PartnerPreferencePage />;
}
