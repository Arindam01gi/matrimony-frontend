import { CigaretteOff, Utensils, WineOff } from "lucide-react";

export const motherTongues = ["Bengali", "English", "Hindi", "Sylheti"];

export const maritalStatuses = [
  "Never Married",
  "Divorced",
  "Widowed",
  "Awaiting Divorce",
];

export const lifestyleChoices = [
  {
    key: "vegetarian",
    icon: Utensils,
    title: "Strictly Vegetarian",
    description: "Prefer meat-free diet",
    defaultChecked: false,
  },
  {
    key: "non-smoker",
    icon: CigaretteOff,
    title: "Non-Smoker",
    description: "Mandatory preference",
    defaultChecked: true,
  },
  {
    key: "no-alcohol",
    icon: WineOff,
    title: "No Alcohol",
    description: "Teetotaler preferred",
    defaultChecked: false,
  },
] as const;
