"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  appBottomNavItems,
  isAppRoute,
  isCurrentPath,
} from "./site-navbar-data";

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
  const isActive = isCurrentPath(pathname, item.href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
        isActive
          ? "text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
    >
      <Icon className="size-5 fill-none" />
      <span className="type-micro max-w-full truncate">{item.label}</span>
    </Link>
  );
}
