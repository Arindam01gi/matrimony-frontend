"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import {
  AUTH_LOGIN_PATH,
  AUTH_REGISTER_PATH,
  MY_PROFILE_PATH,
  PARTNER_PREFERENCE_PATH,
  PROFILE_DETAILS_PATH,
} from "@/lib/routes";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: PROFILE_DETAILS_PATH, label: "Discovery" },
  { href: PARTNER_PREFERENCE_PATH, label: "Partner Preferences" },
  { href: "/premium", label: "Premium" },
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
      <div className="flex h-20 w-full items-center justify-between px-5 md:px-10">
        <div className="flex min-w-0 items-center gap-4">
          <button
            aria-label="Open navigation menu"
            className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center text-primary transition-colors hover:text-primary/80"
            type="button"
          >
            <Menu className="size-7 stroke-[2.5]" />
          </button>
          <Link
            className="truncate font-heading text-[24px] leading-[32px] font-semibold italic tracking-tight text-primary"
            href="/"
          >
            Shubho Shomproti
          </Link>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                className={cn(
                  "rounded-lg px-4 py-2 text-[14px] leading-5 font-semibold tracking-[0.01em] transition-colors",
                  isActive
                    ? "text-primary hover:bg-surface-container-high"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-foreground",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              className="cursor-pointer rounded-full border border-primary px-5 py-2 text-[14px] leading-5 font-semibold text-primary transition-all duration-150 hover:bg-primary/5 active:scale-95"
              href={AUTH_LOGIN_PATH}
            >
              Login
            </Link>
            <Link
              className="cursor-pointer rounded-full bg-[#c70038] px-5 py-2 text-[14px] leading-5 font-semibold text-white shadow-md transition-all duration-150 hover:shadow-lg active:scale-95"
              href={AUTH_REGISTER_PATH}
            >
              Register Free
            </Link>
          </div>

          <Link
            href={MY_PROFILE_PATH}
            aria-label="Open my profile"
            className="relative size-10 shrink-0 overflow-hidden rounded-full border-2 border-primary-fixed-dim transition-transform active:scale-95"
          >
            <Image
              fill
              priority
              sizes="40px"
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
