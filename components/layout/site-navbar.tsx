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
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  AUTH_LOGIN_PATH,
  AUTH_REGISTER_PATH,
  DISCOVERY_PATH,
  MY_PROFILE_PATH,
} from "@/lib/routes";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: DISCOVERY_PATH, label: "Discovery", icon: Compass },
  { href: "/premium", label: "Premium", icon: Crown },
  { href: "#", label: "Likes", icon: Heart, hasDot: true },
  { href: "#", label: "Chat", icon: MessageCircle, hasDot: true },
] as const;

export function SiteNavbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);

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
        "fixed inset-x-0 top-0 z-50 w-full border-b border-outline/20 bg-surface/80 backdrop-blur-md transition-shadow duration-200",
        hasScrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <div className="grid h-16 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-0 pr-5 md:pr-10">
        <div className="flex min-w-0 items-center gap-5">
          <button
            aria-label="Open navigation menu"
            className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center text-primary transition-colors hover:bg-surface-container-high active:scale-95"
            type="button"
          >
            <Menu className="size-7 stroke-[2.5]" />
          </button>
          <Link
            className="truncate font-heading text-[28px] leading-9 font-semibold italic text-primary"
            href="/"
          >
            Shubho Shomproti
          </Link>
        </div>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href !== "#" && pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                className={cn(
                  "relative inline-flex items-center gap-1.5 text-sm leading-5 font-semibold tracking-[0.01em] transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary",
                )}
                href={item.href}
              >
                <span
                  className={cn(
                    "inline-flex size-5 items-center justify-center rounded-full",
                    isActive && item.label === "Discovery"
                      ? "bg-primary text-on-primary"
                      : "",
                  )}
                >
                  <Icon
                    className={cn(
                      item.label === "Discovery" && isActive ? "size-3" : "size-5",
                      "stroke-[2.2]",
                      isActive &&
                        item.label !== "Discovery" &&
                        item.label !== "Home" &&
                        item.label !== "Chat"
                        ? "fill-current"
                        : "",
                    )}
                  />
                </span>
                <span>{item.label}</span>
                {"hasDot" in item && item.hasDot ? (
                  <span className="absolute -right-3 top-1.5 size-1.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex min-w-0 items-center justify-end gap-4">
          <div className="hidden items-center gap-3 2xl:flex">
            <Link
              className="cursor-pointer rounded-full border border-primary px-5 py-2 text-sm leading-5 font-semibold text-primary transition-all duration-150 hover:bg-primary/5 active:scale-95"
              href={AUTH_LOGIN_PATH}
            >
              Login
            </Link>
            <Link
              className="cursor-pointer rounded-full bg-primary-container px-5 py-2 text-sm leading-5 font-semibold text-white shadow-md transition-all duration-150 hover:shadow-lg active:scale-95"
              href={AUTH_REGISTER_PATH}
            >
              Register Free
            </Link>
          </div>

          <button
            aria-label="Open notifications"
            className="inline-flex size-10 cursor-pointer items-center justify-center text-on-surface-variant transition-colors hover:text-primary active:scale-95"
            type="button"
          >
            <Bell className="size-7 stroke-[2.1]" />
          </button>

          <Link
            href={MY_PROFILE_PATH}
            aria-label="Open my profile"
            className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-primary transition-transform active:scale-95"
          >
            <Image
              fill
              priority
              sizes="48px"
              src="/images/landing/stories/ananya-rahul.jpg"
              alt="Signed-in member profile photo"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
