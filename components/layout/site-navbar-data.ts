import {
  Bell,
  Compass,
  Crown,
  Heart,
  Home,
  MessageCircle,
  User,
} from "lucide-react";

import {
  CHAT_PATH,
  DISCOVERY_PATH,
  LIKES_PATH,
  MY_PROFILE_PATH,
  NOTIFICATIONS_PATH,
} from "@/lib/routes";

export const PREMIUM_PATH = "/premium";

export const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: DISCOVERY_PATH, label: "Discovery", icon: Compass },
  { href: PREMIUM_PATH, label: "Premium", icon: Crown },
  { href: LIKES_PATH, label: "Likes", icon: Heart },
  { href: CHAT_PATH, label: "Chat", icon: MessageCircle },
] as const;

export const appBottomNavItems = [
  { href: DISCOVERY_PATH, label: "Discovery", icon: Compass },
  { href: PREMIUM_PATH, label: "Premium", icon: Crown },
  { href: LIKES_PATH, label: "Likes", icon: Heart },
  { href: CHAT_PATH, label: "Chat", icon: MessageCircle },
  { href: MY_PROFILE_PATH, label: "Profile", icon: User },
] as const;

export const appRoutePrefixes = [
  DISCOVERY_PATH,
  PREMIUM_PATH,
  LIKES_PATH,
  CHAT_PATH,
  NOTIFICATIONS_PATH,
  MY_PROFILE_PATH,
  "/edit-profile",
  "/partner-preference",
  "/profile-details",
] as const;

export const iconButtonClass =
  "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95";

export const NotificationIcon = Bell;

export function isCurrentPath(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function isAppRoute(pathname: string) {
  return appRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
}
