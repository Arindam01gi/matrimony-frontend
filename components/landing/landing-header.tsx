"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { landingNavItems } from "@/components/landing/content";
import { cn } from "@/lib/utils";
import { AUTH_LOGIN_PATH, AUTH_REGISTER_PATH } from "@/lib/routes";

export function LandingHeader() {
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
        <div className="flex items-center gap-4">
          <button
            aria-label="Open navigation menu"
            className="inline-flex size-8 cursor-pointer items-center justify-center text-primary transition-colors hover:text-primary/80"
            type="button"
          >
            <Menu className="size-7 stroke-[2.5]" />
          </button>
          <Link
            className="font-heading text-[24px] leading-[32px] font-semibold italic tracking-tight text-primary"
            href="/"
          >
            Shubho Shomproti
          </Link>
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          {landingNavItems.map((item) => {
            const isActive =
              item.href.startsWith("/")
                ? pathname === item.href
                : pathname === "/" && item.isActive;

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

        <div className="hidden items-center gap-4 sm:flex">
          <Link
            className="cursor-pointer rounded-full border border-primary px-6 py-2 text-[14px] leading-5 font-semibold text-primary transition-all duration-150 hover:bg-primary/5 active:scale-95"
            href={AUTH_LOGIN_PATH}
          >
            Login
          </Link>
          <Link
            className="cursor-pointer rounded-full bg-[#c70038] px-6 py-2 text-[14px] leading-5 font-semibold text-white shadow-md transition-all duration-150 hover:shadow-lg active:scale-95"
            href={AUTH_REGISTER_PATH}
          >
            Register Free
          </Link>
        </div>
      </div>
    </header>
  );
}
