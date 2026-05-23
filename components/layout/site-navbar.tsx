"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Compass,
  Crown,
  Heart,
  Home,
  Menu,
  MessageCircle,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  AUTH_LOGIN_PATH,
  AUTH_REGISTER_PATH,
  CHAT_PATH,
  DISCOVERY_PATH,
  LIKES_PATH,
  MY_PROFILE_PATH,
  NOTIFICATIONS_PATH,
} from "@/lib/routes";
import { cn } from "@/lib/utils";

const PREMIUM_PATH = "/premium";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: DISCOVERY_PATH, label: "Discovery", icon: Compass },
  { href: PREMIUM_PATH, label: "Premium", icon: Crown },
  { href: LIKES_PATH, label: "Likes", icon: Heart, hasDot: true },
  { href: CHAT_PATH, label: "Chat", icon: MessageCircle, hasDot: true },
] as const;

const appBottomNavItems = [
  { href: DISCOVERY_PATH, label: "Discovery", icon: Compass },
  { href: PREMIUM_PATH, label: "Premium", icon: Crown },
  { href: LIKES_PATH, label: "Likes", icon: Heart, hasDot: true },
  { href: CHAT_PATH, label: "Chat", icon: MessageCircle, hasDot: true },
  { href: MY_PROFILE_PATH, label: "Profile", icon: User },
] as const;

const appRoutePrefixes = [
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

const iconButtonClass =
  "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95";

function isCurrentPath(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function isAppRoute(pathname: string) {
  return appRoutePrefixes.some((prefix) => pathname.startsWith(prefix));
}

export function SiteNavbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLanding = pathname === "/";
  const showMemberTools = !isLanding && isAppRoute(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b bg-surface/82 backdrop-blur-md transition-all duration-300",
        hasScrolled
          ? "border-outline/20 shadow-[0_8px_24px_rgba(34,25,25,0.08)]"
          : "border-outline-variant/20 shadow-[0_1px_0_rgba(144,111,112,0.12)]",
      )}
    >
      <div className="grid h-16 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 md:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <button
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className={cn(iconButtonClass, "lg:hidden")}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            {isMenuOpen ? (
              <X className="size-6 stroke-[2.4]" />
            ) : (
              <Menu className="size-6 stroke-[2.4]" />
            )}
          </button>

          <Link
            className="min-w-0 truncate font-heading text-2xl leading-8 font-semibold italic text-primary transition-colors hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 md:text-[28px] md:leading-9"
            href="/"
          >
            Shubho Shomproti
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <PrimaryNavItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex min-w-0 items-center justify-end gap-2 md:gap-3">
          {isLanding ? (
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-primary/70 px-5 text-sm leading-5 font-semibold text-primary transition-all hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
                href={AUTH_LOGIN_PATH}
              >
                Login
              </Link>
              <Link
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full bg-primary-container px-5 text-sm leading-5 font-semibold text-white shadow-[0_8px_20px_rgba(154,0,41,0.14)] transition-all hover:bg-primary hover:shadow-[0_10px_26px_rgba(154,0,41,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
                href={AUTH_REGISTER_PATH}
              >
                Register Free
              </Link>
            </div>
          ) : null}

          {showMemberTools ? (
            <>
              <Link
                aria-label="Open notifications"
                className={cn(
                  iconButtonClass,
                  pathname.startsWith(NOTIFICATIONS_PATH)
                    ? "bg-surface-container-low text-primary"
                    : "text-on-surface-variant",
                )}
                href={NOTIFICATIONS_PATH}
              >
                <Bell className="size-6 stroke-[2.1]" />
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary" />
              </Link>

              <Link
                href={MY_PROFILE_PATH}
                aria-label="Open my profile"
                aria-current={pathname.startsWith(MY_PROFILE_PATH) ? "page" : undefined}
                className={cn(
                  "relative size-11 shrink-0 overflow-hidden rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
                  pathname.startsWith(MY_PROFILE_PATH)
                    ? "border-primary shadow-[0_0_0_4px_rgba(154,0,41,0.08)]"
                    : "border-outline-variant hover:border-primary",
                )}
              >
                <Image
                  fill
                  priority
                  sizes="44px"
                  src="/images/landing/stories/ananya-rahul.jpg"
                  alt="Signed-in member profile photo"
                  className="object-cover"
                />
              </Link>
            </>
          ) : null}
        </div>
      </div>

      {isMenuOpen ? (
        <CompactMenu
          isLanding={isLanding}
          onNavigate={() => setIsMenuOpen(false)}
          pathname={pathname}
        />
      ) : null}
    </header>
  );
}

function PrimaryNavItem({
  item,
  pathname,
}: {
  item: (typeof navItems)[number];
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = isCurrentPath(pathname, "href" in item ? item.href : undefined);

  if ("disabled" in item && item.disabled) {
    return (
      <button
        aria-disabled="true"
        className="relative inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full px-4 text-sm leading-5 font-semibold text-on-surface-variant/50"
        title="Chat is coming soon"
        type="button"
      >
        <Icon className="size-5 stroke-[2.2]" />
        <span>{item.label}</span>
        {"hasDot" in item && item.hasDot ? (
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-outline-variant" />
        ) : null}
      </button>
    );
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm leading-5 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
        isActive
          ? "bg-surface-container-low text-primary shadow-[inset_0_0_0_1px_rgba(154,0,41,0.08)]"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
    >
      <Icon
        className={cn(
          "size-5 stroke-[2.2]",
          isActive && item.label !== "Home" ? "fill-current" : "",
        )}
      />
      <span>{item.label}</span>
      {"hasDot" in item && item.hasDot ? (
        <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
      ) : null}
    </Link>
  );
}

function CompactMenu({
  isLanding,
  onNavigate,
  pathname,
}: {
  isLanding: boolean;
  onNavigate: () => void;
  pathname: string;
}) {
  return (
    <div className="border-t border-outline-variant/20 bg-surface/95 px-4 pb-4 shadow-[0_16px_32px_rgba(34,25,25,0.08)] backdrop-blur-md lg:hidden">
      <nav aria-label="Compact primary" className="grid gap-1 py-3">
        {navItems.map((item) => (
          <CompactNavItem
            key={item.label}
            item={item}
            onNavigate={onNavigate}
            pathname={pathname}
          />
        ))}
      </nav>

      {isLanding ? (
        <div className="grid grid-cols-2 gap-3 border-t border-outline-variant/20 pt-4 sm:hidden">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/70 px-4 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
            href={AUTH_LOGIN_PATH}
            onClick={onNavigate}
          >
            Login
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary-container px-4 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
            href={AUTH_REGISTER_PATH}
            onClick={onNavigate}
          >
            Register Free
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function CompactNavItem({
  item,
  onNavigate,
  pathname,
}: {
  item: (typeof navItems)[number];
  onNavigate: () => void;
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = isCurrentPath(pathname, "href" in item ? item.href : undefined);

  if ("disabled" in item && item.disabled) {
    return (
      <button
        aria-disabled="true"
        className="flex min-h-11 cursor-not-allowed items-center gap-3 rounded-xl px-3 text-sm font-semibold text-on-surface-variant/50"
        title="Chat is coming soon"
        type="button"
      >
        <Icon className="size-5" />
        <span>{item.label}</span>
        <span className="ml-auto rounded-full bg-surface-container-high px-2 py-0.5 text-[11px] leading-4">
          Soon
        </span>
      </button>
    );
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-[0.99]",
        isActive
          ? "bg-surface-container-low text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
      onClick={onNavigate}
    >
      <Icon className={cn("size-5", isActive && item.label !== "Home" ? "fill-current" : "")} />
      <span>{item.label}</span>
    </Link>
  );
}

export function SiteBottomNav() {
  const pathname = usePathname();

  if (!isAppRoute(pathname)) {
    return null;
  }

  return (
    <nav
      aria-label="App navigation"
      className="fixed inset-x-0 bottom-0 z-50 grid h-20 grid-cols-5 items-center border-t border-outline-variant/20 bg-surface/92 px-2 shadow-[0_-8px_28px_rgba(34,25,25,0.08)] backdrop-blur-lg md:hidden"
    >
      {appBottomNavItems.map((item) => (
        <BottomNavItem key={item.label} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}

function BottomNavItem({
  item,
  pathname,
}: {
  item: (typeof appBottomNavItems)[number];
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = isCurrentPath(pathname, "href" in item ? item.href : undefined);

  if ("disabled" in item && item.disabled) {
    return (
      <button
        aria-disabled="true"
        className="relative flex min-h-14 cursor-not-allowed flex-col items-center justify-center gap-1 rounded-xl px-1 text-on-surface-variant/45"
        title="Chat is coming soon"
        type="button"
      >
        <Icon className="size-5" />
        <span className="max-w-full truncate text-[11px] leading-4 font-semibold">
          {item.label}
        </span>
        {"hasDot" in item && item.hasDot ? (
          <span className="absolute right-4 top-2 size-1.5 rounded-full bg-outline-variant" />
        ) : null}
      </button>
    );
  }

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
        isActive
          ? "bg-surface-container-low text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
    >
      <Icon className={cn("size-5", isActive && item.label !== "Profile" ? "fill-current" : "")} />
      <span className="max-w-full truncate text-[11px] leading-4 font-semibold">
        {item.label}
      </span>
      {"hasDot" in item && item.hasDot ? (
        <span className="absolute right-4 top-2 size-1.5 rounded-full bg-primary" />
      ) : null}
    </Link>
  );
}
