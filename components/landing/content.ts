import type {
  FeatureStep,
  FooterLinkGroup,
  HeroSearchField,
  LandingNavItem,
  SuccessStory,
} from "@/components/landing/types";

export const landingNavItems: LandingNavItem[] = [
  { href: "#discovery", label: "Discovery", isActive: true },
  { href: "#stories", label: "Success Stories" },
  { href: "/premium", label: "Premium" },
  { href: "#help", label: "Help Center" },
];

export const heroSearchFields: {
  lookingFor: HeroSearchField;
  ageFrom: HeroSearchField;
  ageTo: HeroSearchField;
  religion: HeroSearchField;
  location: HeroSearchField;
} = {
  lookingFor: {
    label: "Looking For",
    options: [
      { label: "Bride", value: "bride" },
      { label: "Groom", value: "groom" },
    ],
  },
  ageFrom: {
    label: "Age",
    options: [
      { label: "22", value: "22" },
      { label: "25", value: "25" },
    ],
  },
  ageTo: {
    label: "Age To",
    options: [
      { label: "28", value: "28" },
      { label: "32", value: "32" },
    ],
  },
  religion: {
    label: "Religion",
    options: [
      { label: "Hindu", value: "hindu" },
      { label: "Muslim", value: "muslim" },
      { label: "Christian", value: "christian" },
    ],
  },
  location: {
    label: "Location",
    placeholder: "Kolkata, IN",
  },
};

export const featureSteps: FeatureStep[] = [
  {
    title: "Create Your Aura",
    description:
      "Build a refined profile that highlights your personality, values, and cultural background with high-quality imagery.",
    icon: "user-plus",
  },
  {
    title: "Smart Discovery",
    description:
      "Our intelligent algorithm curates hand-picked suggestions based on deep-rooted compatibility markers and shared heritage.",
    icon: "shield-check",
  },
  {
    title: "Connect Gracefully",
    description:
      "Engage in secure, private conversations and meet like-minded individuals within a trusted, verified community ecosystem.",
    icon: "heart",
  },
];

export const successStories: SuccessStory[] = [
  {
    name: "Ananya & Rahul",
    quote:
      "\"We found each other across continents. The platform's respect for our cultural values made the difference.\"",
    imageSrc: "/images/landing/stories/ananya-rahul.jpg",
    imageAlt:
      "A joyful Bengali couple laughing during their traditional wedding ceremony with marigold decorations and warm ambient light.",
  },
  {
    name: "Priyanka & Debashish",
    quote:
      "\"A journey that started with a simple 'Like' turned into a beautiful marriage within months. Simply the best.\"",
    imageSrc: "/images/landing/stories/priyanka-debashish.jpg",
    imageAlt:
      "A romantic portrait of a Bengali couple walking through a lush green garden in elegant traditional attire.",
  },
  {
    name: "Srijita & Amit",
    quote:
      "\"We loved how the platform felt premium and focused on quality matches rather than just volume.\"",
    imageSrc: "/images/landing/stories/srijita-amit.jpg",
    imageAlt:
      "A portrait of a Bengali couple in traditional wedding attire sitting against an artistic heritage wall.",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/discovery", label: "Search Profiles" },
      { href: "/#stories", label: "Success Stories" },
      { href: "/#discovery", label: "Safe Matrimony" },
      { href: "/#help", label: "Contact Us" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Use" },
      { href: "/#help", label: "Help Center" },
      { href: "#", label: "Report Issues" },
    ],
  },
];
