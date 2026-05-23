import { CircleHelp, Crown, Settings2, ShieldCheck, User } from "lucide-react";

export const profileImage = "/images/landing/stories/ananya-rahul.jpg";

export const sideNav = [
  { key: "account", label: "Account Details", icon: User },
  { key: "security", label: "Security & Privacy", icon: ShieldCheck },
  { key: "experience", label: "App Experience", icon: Settings2 },
  { key: "membership", label: "Membership", icon: Crown },
  { key: "support", label: "Help Center", icon: CircleHelp },
] as const;
