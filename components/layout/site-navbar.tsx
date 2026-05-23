"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import {
  AUTH_LOGIN_PATH,
  AUTH_REGISTER_PATH,
  MY_PROFILE_PATH,
  NOTIFICATIONS_PATH,
} from "@/lib/routes";
import { cn } from "@/lib/utils";

import { SiteBottomNav } from "./site-bottom-nav";
import { CompactMenu } from "./site-compact-menu";
import {
  iconButtonClass,
  isAppRoute,
  navItems,
  NotificationIcon,
} from "./site-navbar-data";
import { MemberIconLink, PrimaryNavItem } from "./site-nav-items";

export { SiteBottomNav };

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
      <div className="grid h-16 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
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
            className="type-brand min-w-0 truncate text-primary transition-colors hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
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
          {isLanding ? <LandingActions /> : null}
          {showMemberTools ? <MemberActions pathname={pathname} /> : null}
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

function LandingActions() {
  return (
    <div className="hidden items-center gap-3 sm:flex">
      <Link
        className="type-button inline-flex min-h-11 cursor-pointer items-center rounded-full border border-primary/70 px-5 text-primary transition-all hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        href={AUTH_LOGIN_PATH}
      >
        Login
      </Link>
      <Link
        className="type-button inline-flex min-h-11 cursor-pointer items-center rounded-full bg-primary-container px-5 text-white shadow-[0_8px_20px_rgba(154,0,41,0.14)] transition-all hover:bg-primary hover:shadow-[0_10px_26px_rgba(154,0,41,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        href={AUTH_REGISTER_PATH}
      >
        Register Free
      </Link>
    </div>
  );
}

function MemberActions({ pathname }: { pathname: string }) {
  return (
    <>
      <MemberIconLink
        active={pathname.startsWith(NOTIFICATIONS_PATH)}
        href={NOTIFICATIONS_PATH}
        label="Open notifications"
      >
        <NotificationIcon className="size-6 stroke-[2.1]" />
      </MemberIconLink>

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
  );
}
