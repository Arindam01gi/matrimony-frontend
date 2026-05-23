"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  CirclePlus,
  GraduationCap,
  HeartHandshake,
  LoaderCircle,
  Pencil,
  Sparkles,
  Trash2,
  UserRound,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

const profilePhotos = [
  {
    src: "/images/landing/stories/ananya-rahul.jpg",
    alt: "Ananya Das in a warm Bengali celebration portrait.",
  },
  {
    src: "/images/landing/stories/priyanka-debashish.jpg",
    alt: "Lifestyle portrait in a sunlit garden.",
  },
  {
    src: "/images/auth/login-heritage.jpg",
    alt: "Elegant portrait in a heritage courtyard.",
  },
  {
    src: "/images/landing/stories/srijita-amit.jpg",
    alt: "Candid festive portrait with a soft smile.",
  },
] as const;

const tabs = [
  { id: "personal", label: "Personal Details", icon: UserRound },
  { id: "professional", label: "Professional", icon: GraduationCap },
  { id: "family", label: "Family", icon: HeartHandshake },
  { id: "lifestyle", label: "Lifestyle", icon: Sparkles },
] as const;

const interests = ["Classical Music", "Photography", "Cooking"];

export function EditProfilePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>(
    "personal",
  );
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
          setActiveTab(visible.target.id as (typeof tabs)[number]["id"]);
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

  const scrollToSection = (id: (typeof tabs)[number]["id"]) => {
    const section = sectionRefs.current[id];

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
      <main className="mx-auto w-full max-w-[1240px] px-5 pt-24 pb-36 md:px-10 lg:pb-20">
        <section className="mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-eyebrow mb-2 font-bold text-primary">
              Member Profile
            </p>
            <h1 className="type-app-title text-on-surface">
              Edit Your Profile
            </h1>
            <p className="type-body mt-2 max-w-2xl break-words text-on-surface-variant">
              Refine the details that help families understand your personality,
              values, career, and Bengali cultural roots.
            </p>
          </div>

          <SaveButton isSaving={isSaving} onSave={handleSave} />
        </section>

        <div className="sticky top-16 z-30 mb-6 -mx-5 border-y border-outline-variant/20 bg-surface/90 px-5 py-3 backdrop-blur-md md:-mx-10 md:px-10 lg:hidden">
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
          <aside className="col-span-12 space-y-4 lg:sticky lg:top-24 lg:col-span-4">
            <section className="min-w-0 rounded-xl border border-outline-variant/20 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="type-section-title text-primary">
                    Photo Gallery
                  </h2>
                  <p className="type-body-sm text-on-surface-variant">
                    4 of 6 slots used
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Add photo"
                  className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-on-primary"
                >
                  <Camera className="size-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {profilePhotos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className={cn(
                      "group relative aspect-square overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low",
                      index === 0 && "col-span-3 aspect-[4/3]",
                    )}
                  >
                    <Image
                      fill
                      priority={index === 0}
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 468px, calc(100vw - 40px)"
                          : "(min-width: 1024px) 226px, calc((100vw - 48px) / 2)"
                      }
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/45 opacity-0 transition-opacity group-hover:opacity-100">
                      <IconButton label="Edit photo">
                        <Pencil className="size-4" />
                      </IconButton>
                      <IconButton label="Delete photo" destructive>
                        <Trash2 className="size-4" />
                      </IconButton>
                    </div>
                    {index === 0 ? (
                      <span className="type-eyebrow absolute top-3 left-3 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
                        Primary
                      </span>
                    ) : null}
                  </div>
                ))}

                <button
                  type="button"
                  className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant/60 bg-surface text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                >
                  <CirclePlus className="mb-2 size-7" />
                  <span className="type-caption font-semibold">Add Photo</span>
                </button>
              </div>
            </section>

            <section className="min-w-0 rounded-xl border border-outline-variant/20 bg-surface-container-high p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="size-5 fill-secondary-container text-secondary-container" />
                <h2 className="type-eyebrow font-bold text-on-secondary-container">
                  Profile Strength: 85%
                </h2>
              </div>
              <div className="mb-3 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[85%] rounded-full bg-primary" />
              </div>
              <p className="type-caption break-words font-medium text-on-surface-variant">
                Add father&apos;s occupation and family values to improve match
                relevance.
              </p>
            </section>

            <nav className="hidden rounded-xl border border-outline-variant/20 bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] lg:block">
              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => scrollToSection(tab.id)}
                    className={cn(
                      "type-button flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-left transition-all",
                      activeTab === tab.id
                        ? "bg-primary text-on-primary shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary",
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="col-span-12 min-w-0 space-y-5 lg:col-span-8">
            <div className="rounded-xl border border-outline-variant/20 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="type-section-title text-primary">
                    Complete your profile story
                  </h2>
                  <p className="type-body-sm mt-1 text-on-surface-variant">
                    Keep each section concise, specific, and easy for families to
                    scan.
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-1 rounded-lg bg-surface p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => scrollToSection(tab.id)}
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

            <div className="space-y-5">
                <FormSection
                  id="personal"
                  title="Personal Information"
                  setRef={(node) => {
                    sectionRefs.current.personal = node;
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Full Name" defaultValue="Ananya Das" />
                    <Field label="Date of Birth" type="date" defaultValue="1995-06-15" />
                    <SelectField
                      label="Height"
                      defaultValue={"5' 4\" (162 cm)"}
                      options={[
                        "5' 4\" (162 cm)",
                        "5' 5\" (165 cm)",
                        "5' 6\" (167 cm)",
                      ]}
                    />
                    <Field label="Mother Tongue" defaultValue="Bengali" disabled />
                    <TextArea
                      label="About Me"
                      defaultValue="I am a compassionate person who values family and traditions while embracing modern perspectives. Passionate about classical music, travel, and meaningful conversations."
                    />
                  </div>
                </FormSection>

                <FormSection
                  id="professional"
                  icon={<BriefcaseBusiness className="size-5" />}
                  title="Career & Education"
                  setRef={(node) => {
                    sectionRefs.current.professional = node;
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Highest Education"
                      defaultValue="Masters in Data Science"
                    />
                    <Field label="Occupation" defaultValue="Senior Data Analyst" />
                    <SelectField
                      label="Employed In"
                      defaultValue="Private Sector"
                      options={["Private Sector", "Government / PSU", "Self Employed"]}
                    />
                    <Field label="Annual Income" defaultValue="Rs. 18L - Rs. 25L" />
                  </div>
                </FormSection>

                <FormSection
                  id="family"
                  title="Family Background"
                  setRef={(node) => {
                    sectionRefs.current.family = node;
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Family Location" defaultValue="Kolkata, West Bengal" />
                    <div className="space-y-2">
                      <label className="type-label text-on-surface-variant">
                        Family Type
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <SegmentedOption label="Nuclear" checked />
                        <SegmentedOption label="Joint" />
                      </div>
                    </div>
                    <Field
                      label="Father's Occupation"
                      placeholder="e.g. Retired government employee"
                    />
                    <Field label="Mother's Occupation" defaultValue="Homemaker" />
                  </div>
                </FormSection>

                <FormSection
                  id="lifestyle"
                  title="Lifestyle & Interests"
                  setRef={(node) => {
                    sectionRefs.current.lifestyle = node;
                  }}
                >
                  <div className="mb-5 flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        className="type-body-sm inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-outline-variant/30 px-4 font-medium text-on-surface-variant transition-colors hover:bg-primary/5 hover:text-primary"
                      >
                        <span>{interest}</span>
                        <X className="size-4" />
                      </button>
                    ))}
                    <button
                      type="button"
                      className="type-button inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 text-primary transition-colors hover:bg-primary/15"
                    >
                      <CirclePlus className="size-4" />
                      <span>Add Interest</span>
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <SelectField
                      label="Dietary Preferences"
                      defaultValue="Non-Vegetarian"
                      options={["Non-Vegetarian", "Vegetarian", "Eggetarian"]}
                    />
                    <Field label="Drinking / Smoking" defaultValue="Occasional / No" />
                  </div>
                </FormSection>
            </div>
          </section>
        </div>
      </main>

      <div
        className={cn(
          "type-button fixed bottom-8 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-xl bg-on-surface px-6 py-4 text-surface shadow-2xl transition-all duration-300",
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
    </div>
  );
}

function SaveButton({
  isSaving,
  onSave,
}: {
  isSaving: boolean;
  onSave: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={isSaving}
      className="type-button inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 text-on-primary shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:cursor-wait disabled:opacity-80 md:w-auto"
    >
      {isSaving ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <CheckCircle2 className="size-4" />
      )}
      <span>{isSaving ? "Saving..." : "Save Changes"}</span>
    </button>
  );
}

function SectionPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "type-button h-10 shrink-0 cursor-pointer rounded-full px-4 transition-colors",
        active
          ? "bg-primary text-on-primary"
          : "bg-white text-on-surface-variant hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}

function IconButton({
  children,
  destructive = false,
  label,
}: {
  children: React.ReactNode;
  destructive?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white transition-colors",
        destructive
          ? "text-destructive hover:bg-destructive hover:text-white"
          : "text-primary hover:bg-primary hover:text-on-primary",
      )}
    >
      {children}
    </button>
  );
}

function FormSection({
  children,
  icon,
  id,
  setRef,
  title,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  id: string;
  setRef: (node: HTMLElement | null) => void;
  title: string;
}) {
  return (
    <section
      id={id}
      ref={setRef}
      className="scroll-mt-36 rounded-xl border border-outline-variant/20 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:p-8"
    >
      <div className="mb-4 flex items-center gap-2 border-l-4 border-primary pl-3 text-primary">
        {icon}
        <h2 className="type-section-title text-on-surface">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="space-y-2">
      <span className="type-label block text-on-surface-variant">
        {label}
      </span>
      <input
        {...props}
        className="type-body h-12 w-full rounded-lg border-0 bg-surface px-4 text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary/70 disabled:cursor-not-allowed disabled:bg-surface-container-low disabled:text-on-surface-variant/70"
      />
    </label>
  );
}

function TextArea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="space-y-2 md:col-span-2">
      <span className="type-label block text-on-surface-variant">
        {label}
      </span>
      <textarea
        {...props}
        rows={4}
        className="type-body w-full resize-none rounded-lg border-0 bg-surface px-4 py-3 text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-primary/70"
      />
    </label>
  );
}

function SelectField({
  defaultValue,
  label,
  options,
}: {
  defaultValue: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="space-y-2">
      <span className="type-label block text-on-surface-variant">
        {label}
      </span>
      <select
        defaultValue={defaultValue}
        className="type-body h-12 w-full cursor-pointer rounded-lg border-0 bg-surface px-4 text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-primary/70"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function SegmentedOption({
  checked = false,
  label,
}: {
  checked?: boolean;
  label: string;
}) {
  return (
    <label
      className={cn(
        "type-button flex h-12 cursor-pointer items-center justify-center rounded-lg border transition-colors",
        checked
          ? "border-primary bg-surface-container-low text-primary"
          : "border-outline-variant/30 bg-surface text-on-surface-variant hover:text-primary",
      )}
    >
      <input
        className="sr-only"
        defaultChecked={checked}
        name="family_type"
        type="radio"
      />
      <span>{label}</span>
    </label>
  );
}
