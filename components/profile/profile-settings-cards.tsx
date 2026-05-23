import Link from "next/link";
import { Bell, Edit3, Languages, LockKeyhole } from "lucide-react";

import { EDIT_PROFILE_PATH } from "@/lib/routes";

export function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="rounded-xl border border-outline-variant/10 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-8">
      {children}
    </article>
  );
}

export function AccountDetailsCard() {
  return (
    <SettingsCard>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="type-section-title text-primary">Account Details</h2>
        <Link
          className="type-button inline-flex cursor-pointer items-center gap-1 text-primary transition-colors hover:underline"
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
  );
}

export function SecurityPrivacyCard() {
  return (
    <SettingsCard>
      <h2 className="type-section-title mb-4 text-primary">Security & Privacy</h2>
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
            className="type-button inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-2 text-on-primary transition-all hover:brightness-110 active:scale-95"
          >
            <LockKeyhole className="size-4" />
            <span>Change Password</span>
          </button>
        </div>
      </div>
    </SettingsCard>
  );
}

export function AppExperienceCard() {
  return (
    <SettingsCard>
      <h2 className="type-section-title mb-4 text-primary">App Experience</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <ExperiencePanel
          icon={<Bell className="size-6" />}
          title="Notifications"
          text="Control when and how you receive alerts for new matches and messages."
        >
          <button
            type="button"
            className="type-caption mt-2 cursor-pointer font-semibold text-primary"
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
            className="type-body-sm mt-3 w-full cursor-pointer rounded-lg border border-outline-variant/20 bg-transparent px-0 py-1 text-on-surface-variant outline-none focus:ring-0"
            defaultValue="English (US)"
          >
            <option>English (US)</option>
            <option>Bengali (Bangla)</option>
            <option>Hindi</option>
          </select>
        </ExperiencePanel>
      </div>
    </SettingsCard>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <label className="type-caption block font-medium text-on-surface-variant">
        {label}
      </label>
      <div className="type-body rounded-lg border border-outline-variant/20 bg-surface p-2 text-on-surface">
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
    <div className="flex flex-col gap-3 border-b border-outline-variant/10 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <h3 className="type-label text-on-surface">{title}</h3>
        <p className="type-body-sm text-on-surface-variant">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        className={[
          "relative h-6 w-11 shrink-0 cursor-pointer self-start rounded-full transition-colors sm:self-auto",
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
        <h3 className="type-label text-on-surface">{title}</h3>
      </div>
      {text ? <p className="type-body-sm text-on-surface-variant">{text}</p> : null}
      {children}
    </div>
  );
}
