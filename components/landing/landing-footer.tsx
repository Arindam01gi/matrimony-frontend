import Link from "next/link";
import { AtSign, Camera, Trophy } from "lucide-react";

import { footerLinkGroups } from "@/components/landing/content";

function FooterIcon({ icon }: { icon: "trophy" | "camera" | "at-sign" }) {
  if (icon === "trophy") {
    return <Trophy className="size-4" />;
  }

  if (icon === "camera") {
    return <Camera className="size-4" />;
  }

  return <AtSign className="size-4" />;
}

export function LandingFooter() {
  return (
    <footer className="bg-inverse-surface py-16 text-on-surface-variant" id="help">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h2 className="type-brand mb-4 text-primary-fixed-dim">
              Shubho Shomproti
            </h2>
            <p className="type-body max-w-[16rem] text-surface-dim/70">
              Redefining matrimonial excellence for the global Bengali community since
              2021.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="type-label mb-4 text-surface-bright">
                {group.title}
              </h3>
              <ul className="type-body space-y-3 text-surface-dim/70">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="transition-colors hover:text-primary-fixed-dim"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="type-label mb-4 text-surface-bright">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {(["trophy", "camera", "at-sign"] as const).map((icon) => (
                <button
                  aria-label={`Open ${icon} channel`}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-surface-container-highest text-primary transition-all hover:bg-primary hover:text-white"
                  key={icon}
                  type="button"
                >
                  <FooterIcon icon={icon} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="type-caption border-t border-surface-variant/20 pt-8 text-center font-medium text-surface-dim/50">
          &copy; 2024 Shubho Shomproti Private Limited. All Rights Reserved. Crafted with
          love in Kolkata.
        </div>
      </div>
    </footer>
  );
}
