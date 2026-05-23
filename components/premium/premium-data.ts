export const TRUST_IMAGE_SRC = "/images/landing/hero/bengali-couple-hero-v2.png";

export const plans = [
  {
    eyebrow: "Essential",
    name: "Silver",
    price: "4,999",
    term: "/3 months",
    features: [
      "50 Interests per Month",
      "View 30 Verified Contacts",
      "Standard Profile Visibility",
    ],
    button: "Get Started",
    variant: "light",
  },
  {
    eyebrow: "Most Popular",
    name: "Gold Elite",
    price: "9,999",
    term: "/6 months",
    features: [
      "Unlimited Interests",
      "Weekly Profile Boost",
      "Unlimited Verified Contacts",
      "Priority Profile Review",
    ],
    button: "Select Gold Elite",
    variant: "gold",
  },
  {
    eyebrow: "Ultra Luxury",
    name: "Platinum",
    price: "24,999",
    term: "/12 months",
    features: [
      "Relationship Manager",
      "Daily Profile Boost",
      "Profile Confidentiality Mode",
      "Exclusive Invitations",
    ],
    button: "Go Platinum",
    variant: "dark",
  },
] as const;

export type PremiumPlan = (typeof plans)[number];
