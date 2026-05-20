export interface LandingNavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface LandingSelectOption {
  label: string;
  value: string;
}

export interface HeroSearchField {
  label: string;
  placeholder?: string;
  options?: LandingSelectOption[];
}

export interface FeatureStep {
  title: string;
  description: string;
  icon: "user-plus" | "shield-check" | "heart";
}

export interface SuccessStory {
  name: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FooterLinkGroup {
  title: string;
  links: LandingNavItem[];
}
