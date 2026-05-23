"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  CircleHelp,
  Crown,
  Edit3,
  Languages,
  LockKeyhole,
  LogOut,
  Settings2,
  ShieldCheck,
  User,
} from "lucide-react";

import { EDIT_PROFILE_PATH } from "@/lib/routes";

const profileImage = "/images/landing/stories/ananya-rahul.jpg";

const sideNav = [
  { key: "account", label: "Account Details", icon: User },
  { key: "security", label: "Security & Privacy", icon: ShieldCheck },
  { key: "experience", label: "App Experience", icon: Settings2 },
  { key: "membership", label: "Membership", icon: Crown },
  { key: "support", label: "Help Center", icon: CircleHelp },
] as const;

export function MyProfilePage() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto flex min-h-screen max-w-7xl gap-8 px-5 pt-24 pb-28 md:px-10 lg:pb-12">
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
                <h2 className="text-sm leading-5 font-semibold text-on-surface">
                  Ananya Das
                </h2>
                <p className="text-xs leading-4 font-medium text-on-surface-variant">
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
                    onClick={() => setActiveSection(item.key)}
                    className={[
                      "flex cursor-pointer items-center gap-2 rounded-lg p-3 text-left transition-all duration-300",
                      isActive
                        ? "bg-secondary-container font-semibold text-on-secondary-container"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:pl-6",
                      index === 4 ? "mt-2 border-t border-outline-variant/30 pt-5" : "",
                    ].join(" ")}
                  >
                    <Icon className="size-6 shrink-0" />
                    <span className="text-base leading-6">{item.label}</span>
                  </button>
                );
              })}

              <button
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-lg p-3 text-left text-destructive transition-all duration-300 hover:bg-destructive/10 hover:pl-6"
              >
                <LogOut className="size-6 shrink-0" />
                <span className="text-base leading-6">Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        <section
          className="min-w-0 flex-1 space-y-8 transition-opacity duration-200"
          aria-live="polite"
        >
          <div>
            <h1 className="mb-2 font-heading text-[32px] leading-10 font-semibold text-on-surface">
              Settings
            </h1>
            <p className="max-w-3xl text-base leading-6 text-on-surface-variant">
              Manage your account preferences and security settings to ensure the
              best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <SettingsCard>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="font-heading text-2xl leading-8 font-semibold text-primary">
                  Account Details
                </h2>
                <Link
                  className="inline-flex cursor-pointer items-center gap-1 text-sm leading-5 font-semibold text-primary transition-colors hover:underline"
                  href={EDIT_PROFILE_PATH}
                >
                  <Edit3 className="size-4" />
                  <span>Edit Profile</span>
                </Link>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <ProfileField label="Full Name" value="Ananya Das" />
                <ProfileField label="Email Address" value="ananya.das@kolkata.in" />
                <ProfileField label="Phone Number" value="+91 98765 43210" />
                <ProfileField label="Location" value="South Kolkata, WB" />
              </div>
            </SettingsCard>

            <SettingsCard>
              <h2 className="mb-4 font-heading text-2xl leading-8 font-semibold text-primary">
                Security & Privacy
              </h2>
              <div className="space-y-4">
                <ToggleRow
                  checked
                  title="Two-Factor Authentication"
                  description="Add an extra layer of security to your account."
                />
                <ToggleRow
                  title="Profile Visibility"
                  description="Allow only verified premium members to view full profile."
                />
                <div className="pt-2">
                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm leading-5 font-semibold text-on-primary transition-all hover:brightness-110 active:scale-95"
                  >
                    <LockKeyhole className="size-4" />
                    <span>Change Password</span>
                  </button>
                </div>
              </div>
            </SettingsCard>

            <SettingsCard>
              <h2 className="mb-4 font-heading text-2xl leading-8 font-semibold text-primary">
                App Experience
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <ExperiencePanel
                  icon={<Bell className="size-6" />}
                  title="Notifications"
                  text="Control when and how you receive alerts for new matches and messages."
                >
                  <button
                    type="button"
                    className="mt-2 cursor-pointer text-xs leading-4 font-semibold text-primary"
                  >
                    Manage Alerts -&gt;
                  </button>
                </ExperiencePanel>

                <ExperiencePanel
                  icon={<Languages className="size-6" />}
                  title="Language Preference"
                  text=""
                >
                  <select
                    aria-label="Language Preference"
                    className="mt-3 w-full cursor-pointer rounded-lg border border-outline-variant/20 bg-transparent px-0 py-1 text-sm leading-5 text-on-surface-variant outline-none focus:ring-0"
                    defaultValue="English (US)"
                  >
                    <option>English (US)</option>
                    <option>Bengali (Bangla)</option>
                    <option>Hindi</option>
                  </select>
                </ExperiencePanel>
              </div>
            </SettingsCard>
          </div>
        </section>
      </main>
    </div>
  );
}

function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="rounded-xl border border-outline-variant/10 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      {children}
    </article>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs leading-4 font-medium text-on-surface-variant">
        {label}
      </label>
      <div className="rounded-lg border border-outline-variant/20 bg-surface p-2 text-base leading-6 text-on-surface">
        {value}
      </div>
    </div>
  );
}

function ToggleRow({
  checked = false,
  description,
  title,
}: {
  checked?: boolean;
  description: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-outline-variant/10 py-2">
      <div className="min-w-0">
        <h3 className="text-sm leading-5 font-semibold text-on-surface">{title}</h3>
        <p className="text-sm leading-5 text-on-surface-variant">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        className={[
          "relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors",
          checked ? "bg-primary-container" : "bg-surface-container-high",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 left-0.5 size-5 rounded-full border border-gray-300 bg-white transition-transform",
            checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

function ExperiencePanel({
  children,
  icon,
  text,
  title,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  text: string;
  title: string;
}) {
  return (
    <div className="rounded-xl border border-outline-variant/20 bg-surface p-4">
      <div className="mb-2 flex items-center gap-2 text-primary">
        {icon}
        <h3 className="text-sm leading-5 font-semibold text-on-surface">{title}</h3>
      </div>
      {text ? <p className="text-sm leading-5 text-on-surface-variant">{text}</p> : null}
      {children}
    </div>
  );
}
