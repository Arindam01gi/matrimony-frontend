"use client";

import Image from "next/image";
import { LogOut } from "lucide-react";

import { profileImage, sideNav } from "./my-profile-data";

export function MyProfileSidebar({
  activeSection,
  onSelectSection,
}: {
  activeSection: string;
  onSelectSection: (section: string) => void;
}) {
  return (
    <aside className="hidden w-80 shrink-0 lg:block">
      <div className="sticky top-24 rounded-xl border border-outline-variant/10 bg-white p-4 shadow-sm">
        <div className="mb-8 flex items-center gap-2 p-2">
          <div className="relative size-12 overflow-hidden rounded-full">
            <Image
              fill
              priority
              sizes="48px"
              src={profileImage}
              alt="Portrait of Ananya Das"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="type-label text-on-surface">Ananya Das</h2>
            <p className="type-caption font-medium text-on-surface-variant">
              Premium Member
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {sideNav.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onSelectSection(item.key)}
                className={[
                  "flex cursor-pointer items-center gap-2 rounded-lg p-3 text-left transition-all duration-300",
                  isActive
                    ? "bg-secondary-container font-semibold text-on-secondary-container"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:pl-6",
                  index === 4 ? "mt-2 border-t border-outline-variant/30 pt-5" : "",
                ].join(" ")}
              >
                <Icon className="size-6 shrink-0" />
                <span className="type-body">{item.label}</span>
              </button>
            );
          })}

          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-3 text-left text-destructive transition-all duration-300 hover:bg-destructive/10 hover:pl-6"
          >
            <LogOut className="size-6 shrink-0" />
            <span className="type-body">Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
