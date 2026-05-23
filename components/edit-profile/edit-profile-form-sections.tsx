import { BriefcaseBusiness, CirclePlus, X } from "lucide-react";

import { interests } from "./edit-profile-data";
import {
  Field,
  SegmentedOption,
  SelectField,
  TextArea,
} from "./edit-profile-fields";

export function FormSection({
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
        <h2 className="type-section-title text-on-surface">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function PersonalSection({
  setRef,
}: {
  setRef: (node: HTMLElement | null) => void;
}) {
  return (
    <FormSection id="personal" title="Personal Information" setRef={setRef}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" defaultValue="Ananya Das" />
        <Field label="Date of Birth" type="date" defaultValue="1995-06-15" />
        <SelectField
          label="Height"
          defaultValue={"5' 4\" (162 cm)"}
          options={["5' 4\" (162 cm)", "5' 5\" (165 cm)", "5' 6\" (167 cm)"]}
        />
        <Field label="Mother Tongue" defaultValue="Bengali" disabled />
        <TextArea
          label="About Me"
          defaultValue="I am a compassionate person who values family and traditions while embracing modern perspectives. Passionate about classical music, travel, and meaningful conversations."
        />
      </div>
    </FormSection>
  );
}

export function ProfessionalSection({
  setRef,
}: {
  setRef: (node: HTMLElement | null) => void;
}) {
  return (
    <FormSection
      id="professional"
      icon={<BriefcaseBusiness className="size-5" />}
      title="Career & Education"
      setRef={setRef}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Highest Education" defaultValue="Masters in Data Science" />
        <Field label="Occupation" defaultValue="Senior Data Analyst" />
        <SelectField
          label="Employed In"
          defaultValue="Private Sector"
          options={["Private Sector", "Government / PSU", "Self Employed"]}
        />
        <Field label="Annual Income" defaultValue="Rs. 18L - Rs. 25L" />
      </div>
    </FormSection>
  );
}

export function FamilySection({
  setRef,
}: {
  setRef: (node: HTMLElement | null) => void;
}) {
  return (
    <FormSection id="family" title="Family Background" setRef={setRef}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Family Location" defaultValue="Kolkata, West Bengal" />
        <div className="space-y-2">
          <label className="type-label text-on-surface-variant">Family Type</label>
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
  );
}

export function LifestyleSection({
  setRef,
}: {
  setRef: (node: HTMLElement | null) => void;
}) {
  return (
    <FormSection id="lifestyle" title="Lifestyle & Interests" setRef={setRef}>
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
  );
}
