"use client";

import { useState } from "react";

import { MyProfileSidebar } from "./my-profile-sidebar";
import {
  AccountDetailsCard,
  AppExperienceCard,
  SecurityPrivacyCard,
} from "./profile-settings-cards";

export function MyProfilePage() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto flex min-h-screen max-w-7xl gap-8 px-4 pt-24 pb-28 sm:px-5 md:px-10 lg:pb-12">
        <MyProfileSidebar
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />

        <section
          className="min-w-0 flex-1 space-y-8 transition-opacity duration-200"
          aria-live="polite"
        >
          <div>
            <h1 className="type-app-title mb-2 text-on-surface">Settings</h1>
            <p className="type-body max-w-3xl text-on-surface-variant">
              Manage your account preferences and security settings to ensure the
              best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <AccountDetailsCard />
            <SecurityPrivacyCard />
            <AppExperienceCard />
          </div>
        </section>
      </main>
    </div>
  );
}
