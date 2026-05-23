import {
  GraduationCap,
  HeartHandshake,
  Sparkles,
  UserRound,
} from "lucide-react";

export const profilePhotos = [
  {
    src: "/images/landing/stories/ananya-rahul.jpg",
    alt: "Ananya Das in a warm Bengali celebration portrait.",
  },
  {
    src: "/images/landing/stories/priyanka-debashish.jpg",
    alt: "Lifestyle portrait in a sunlit garden.",
  },
  {
    src: "/images/auth/login-heritage.jpg",
    alt: "Elegant portrait in a heritage courtyard.",
  },
  {
    src: "/images/landing/stories/srijita-amit.jpg",
    alt: "Candid festive portrait with a soft smile.",
  },
] as const;

export const tabs = [
  { id: "personal", label: "Personal Details", icon: UserRound },
  { id: "professional", label: "Professional", icon: GraduationCap },
  { id: "family", label: "Family", icon: HeartHandshake },
  { id: "lifestyle", label: "Lifestyle", icon: Sparkles },
] as const;

export const interests = ["Classical Music", "Photography", "Cooking"];

export type EditProfileTabId = (typeof tabs)[number]["id"];
