import Link from "next/link";

import { AUTH_LOGIN_PATH, AUTH_REGISTER_PATH } from "@/lib/routes";

import { navItems } from "./site-navbar-data";
import { CompactNavItem } from "./site-nav-items";

export function CompactMenu({
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
            className="type-button inline-flex min-h-11 items-center justify-center rounded-full border border-primary/70 px-4 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
            href={AUTH_LOGIN_PATH}
            onClick={onNavigate}
          >
            Login
          </Link>
          <Link
            className="type-button inline-flex min-h-11 items-center justify-center rounded-full bg-primary-container px-4 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
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
