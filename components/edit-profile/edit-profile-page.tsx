"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { SaveButton, SectionPill } from "./edit-profile-controls";
import { EditProfileTabId, tabs } from "./edit-profile-data";
import {
  FamilySection,
  LifestyleSection,
  PersonalSection,
  ProfessionalSection,
} from "./edit-profile-form-sections";
import { EditProfileSidebar } from "./edit-profile-sidebar";

export function EditProfilePage() {
  const [activeTab, setActiveTab] = useState<EditProfileTabId>("personal");
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveTab(visible.target.id as EditProfileTabId);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: EditProfileTabId) => {
    const section = sectionRefs.current[id];

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  const handleSave = () => {
    setIsSaving(true);

    window.setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 2600);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-24 pb-36 sm:px-5 md:px-10 lg:pb-20">
        <section className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-eyebrow mb-2 font-bold text-primary">
              Member Profile
            </p>
            <h1 className="type-app-title text-on-surface">Edit Your Profile</h1>
            <p className="type-body mt-2 max-w-2xl break-words text-on-surface-variant">
              Refine the details that help families understand your personality,
              values, career, and Bengali cultural roots.
            </p>
          </div>

          <SaveButton isSaving={isSaving} onSave={handleSave} />
        </section>

        <div className="sticky top-16 z-30 mb-6 -mx-4 border-y border-outline-variant/20 bg-surface/90 px-4 py-3 backdrop-blur-md sm:-mx-5 sm:px-5 md:-mx-10 md:px-10 lg:hidden">
          <nav className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <SectionPill
                key={tab.id}
                active={activeTab === tab.id}
                label={tab.label}
                onClick={() => scrollToSection(tab.id)}
              />
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-12 items-start gap-5 lg:gap-8">
          <EditProfileSidebar
            activeTab={activeTab}
            onSelectTab={scrollToSection}
          />

          <section className="col-span-12 min-w-0 space-y-5 lg:col-span-8">
            <ProfileStoryHeader
              activeTab={activeTab}
              onSelectTab={scrollToSection}
            />

            <div className="space-y-5">
              <PersonalSection
                setRef={(node) => {
                  sectionRefs.current.personal = node;
                }}
              />
              <ProfessionalSection
                setRef={(node) => {
                  sectionRefs.current.professional = node;
                }}
              />
              <FamilySection
                setRef={(node) => {
                  sectionRefs.current.family = node;
                }}
              />
              <LifestyleSection
                setRef={(node) => {
                  sectionRefs.current.lifestyle = node;
                }}
              />
            </div>
          </section>
        </div>
      </main>

      <SaveToast showToast={showToast} />
    </div>
  );
}

function ProfileStoryHeader({
  activeTab,
  onSelectTab,
}: {
  activeTab: EditProfileTabId;
  onSelectTab: (id: EditProfileTabId) => void;
}) {
  return (
    <div className="rounded-xl border border-outline-variant/20 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="type-section-title text-primary">
            Complete your profile story
          </h2>
          <p className="type-body-sm mt-1 text-on-surface-variant">
            Keep each section concise, specific, and easy for families to scan.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              aria-label={tab.label}
              className={cn(
                "h-2 w-12 rounded-full transition-colors",
                activeTab === tab.id ? "bg-primary" : "bg-outline-variant/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SaveToast({ showToast }: { showToast: boolean }) {
  return (
    <div
      className={cn(
        "type-button fixed right-4 bottom-24 left-4 z-[60] flex items-center justify-center gap-3 rounded-xl bg-on-surface px-4 py-4 text-center text-surface shadow-2xl transition-all duration-300 sm:right-auto sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:px-6",
        showToast
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 className="size-5 text-secondary-container" />
      <span>Your profile has been updated successfully.</span>
    </div>
  );
}
