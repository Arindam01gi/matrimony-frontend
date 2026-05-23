import Link from "next/link";

import { cn } from "@/lib/utils";

import { iconButtonClass, isCurrentPath, navItems } from "./site-navbar-data";

export function PrimaryNavItem({
  item,
  pathname,
}: {
  item: (typeof navItems)[number];
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = isCurrentPath(pathname, item.href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "type-button relative inline-flex min-h-11 items-center gap-2 rounded-full px-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
        isActive
          ? "text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
    >
      <Icon className="size-5 fill-none stroke-[2.2]" />
      <span>{item.label}</span>
    </Link>
  );
}

export function CompactNavItem({
  item,
  onNavigate,
  pathname,
}: {
  item: (typeof navItems)[number];
  onNavigate: () => void;
  pathname: string;
}) {
  const Icon = item.icon;
  const isActive = isCurrentPath(pathname, item.href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "type-button flex min-h-11 items-center gap-3 rounded-xl px-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-[0.99]",
        isActive
          ? "text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
      )}
      href={item.href}
      onClick={onNavigate}
    >
      <Icon className="size-5 fill-none" />
      <span>{item.label}</span>
    </Link>
  );
}

export function MemberIconLink({
  active,
  children,
  href,
  label,
}: {
  active: boolean;
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      aria-label={label}
      className={cn(
        iconButtonClass,
        active ? "bg-surface-container-low text-primary" : "text-on-surface-variant",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
