import { Languages, Utensils, WineOff } from "lucide-react";

export const gallery = [
  {
    src: "/images/landing/stories/ananya-rahul.jpg",
    alt: "Ananya Das in an elegant Bengali celebration portrait.",
  },
  {
    src: "/images/landing/stories/priyanka-debashish.jpg",
    alt: "Lifestyle portrait in a lush garden setting.",
  },
  {
    src: "/images/auth/login-heritage-v2.png",
    alt: "Close portrait in a warm heritage courtyard.",
  },
] as const;

export const interests = [
  "Classical Music",
  "Photography",
  "Travel Enthusiast",
  "Home Cooking",
];

export const familyDetails = [
  ["Father", "Retired Civil Engineer"],
  ["Mother", "Homemaker"],
  ["Siblings", "1 Younger Brother"],
  ["Status", "Upper Middle Class"],
] as const;

export const lifestyle = [
  {
    icon: Utensils,
    label: "Diet",
    value: "Non-Vegetarian",
  },
  {
    icon: WineOff,
    label: "Drinking/Smoking",
    value: "Never",
  },
  {
    icon: Languages,
    label: "Mother Tongue",
    value: "Bengali",
  },
] as const;

export type ProfileGalleryImage = (typeof gallery)[number];
