"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Menu } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { DISCOVERY_PATH } from "@/lib/routes";
import { cn } from "@/lib/utils";

export type OnboardingStepKey = "personal" | "career" | "family" | "lifestyle";

type ChoiceField = {
  id: string;
  label: string;
  options: string[];
  placeholder?: string;
  type: "select" | "radio" | "chips";
};

type TextField = {
  id: string;
  label: string;
  placeholder?: string;
  type: "date" | "text" | "textarea";
};

type RangeField = {
  id: string;
  label: string;
  max: number;
  min: number;
  type: "range";
  unit: string;
};

type OnboardingField = ChoiceField | RangeField | TextField;

type StepConfig = {
  description: string;
  fields: OnboardingField[];
  key: OnboardingStepKey;
  label: string;
  title: string;
};

const steps: StepConfig[] = [
  {
    key: "personal",
    label: "Personal Details",
    title: "Build Your Profile",
    description: "Step 1: Tell us about yourself",
    fields: [
      {
        id: "fullName",
        label: "Full Name",
        placeholder: "e.g. Ananya Das",
        type: "text",
      },
      { id: "dob", label: "Date of Birth", type: "date" },
      {
        id: "gender",
        label: "Gender",
        options: ["Female", "Male"],
        type: "radio",
      },
      {
        id: "religion",
        label: "Religion",
        options: ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain"],
        placeholder: "Select Religion",
        type: "select",
      },
      {
        id: "motherTongue",
        label: "Mother Tongue",
        options: ["Bengali", "English", "Hindi", "Sylheti"],
        placeholder: "Select Language",
        type: "select",
      },
      {
        id: "interests",
        label: "A few initial interests",
        options: ["Classical Music", "Travel", "Cooking", "Literature", "Photography"],
        type: "chips",
      },
    ],
  },
  {
    key: "career",
    label: "Career & Education",
    title: "Career & Education",
    description: "Step 2: Share your learning and work story",
    fields: [
      {
        id: "education",
        label: "Highest Education",
        options: ["Bachelors", "Masters", "Doctorate", "Diploma", "Professional Degree"],
        placeholder: "Select Education",
        type: "select",
      },
      {
        id: "university",
        label: "College / University",
        placeholder: "e.g. Presidency University",
        type: "text",
      },
      {
        id: "occupation",
        label: "Occupation",
        options: [
          "Software Professional",
          "Doctor",
          "Business Owner",
          "Teacher",
          "Creative Professional",
          "Government Service",
        ],
        placeholder: "Select Occupation",
        type: "select",
      },
      {
        id: "company",
        label: "Company / Organization",
        placeholder: "e.g. Elite Design Studio",
        type: "text",
      },
      {
        id: "income",
        label: "Annual Income",
        options: [
          "Rs. 3L - Rs. 6L",
          "Rs. 6L - Rs. 10L",
          "Rs. 10L - Rs. 15L",
          "Rs. 15L - Rs. 25L",
          "Rs. 25L+",
        ],
        placeholder: "Select Income Range",
        type: "select",
      },
      {
        id: "workLocation",
        label: "Working Location",
        placeholder: "e.g. Kolkata, West Bengal",
        type: "text",
      },
    ],
  },
  {
    key: "family",
    label: "Family",
    title: "Family Background",
    description: "Step 3: Help matches understand your home and values",
    fields: [
      {
        id: "familyType",
        label: "Family Type",
        options: ["Nuclear", "Joint", "Extended"],
        type: "radio",
      },
      {
        id: "familyValues",
        label: "Family Values",
        options: ["Traditional", "Moderate", "Liberal"],
        type: "radio",
      },
      {
        id: "fatherOccupation",
        label: "Father's Occupation",
        placeholder: "e.g. Retired Civil Engineer",
        type: "text",
      },
      {
        id: "motherOccupation",
        label: "Mother's Occupation",
        placeholder: "e.g. Homemaker",
        type: "text",
      },
      {
        id: "siblings",
        label: "Siblings",
        options: ["No Siblings", "1 Sibling", "2 Siblings", "3+ Siblings"],
        placeholder: "Select Siblings",
        type: "select",
      },
      {
        id: "familyLocation",
        label: "Family Location",
        placeholder: "e.g. South Kolkata, West Bengal",
        type: "text",
      },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle",
    title: "Lifestyle & Story",
    description: "Step 4: Add the details that make your profile feel complete",
    fields: [
      {
        id: "diet",
        label: "Diet",
        options: ["Vegetarian", "Non-Vegetarian", "Eggetarian", "Vegan"],
        type: "radio",
      },
      {
        id: "smoking",
        label: "Smoking",
        options: ["Never", "Occasionally", "Regularly"],
        type: "radio",
      },
      {
        id: "drinking",
        label: "Drinking",
        options: ["Never", "Occasionally", "Socially"],
        type: "radio",
      },
      {
        id: "maritalStatus",
        label: "Marital Status",
        options: ["Never Married", "Divorced", "Widowed", "Awaiting Divorce"],
        placeholder: "Select Marital Status",
        type: "select",
      },
      {
        id: "height",
        label: "Height",
        min: 140,
        max: 210,
        type: "range",
        unit: "cm",
      },
      {
        id: "aboutMe",
        label: "About Me",
        placeholder:
          "Write a few lines about your personality, values, and the life you hope to build.",
        type: "textarea",
      },
    ],
  },
];

const stepKeys = steps.map((step) => step.key);

const defaultValues: Record<string, string> = {
  height: "165",
};

interface OnboardingPageProps {
  initialStep: OnboardingStepKey;
}

export function OnboardingPage({ initialStep }: OnboardingPageProps) {
  const router = useRouter();
  const activeStep = initialStep;
  const [values, setValues] = useState<Record<string, string>>(defaultValues);
  const [chipValues, setChipValues] = useState<Record<string, Set<string>>>({
    interests: new Set(["Classical Music"]),
  });

  const stepIndex = stepKeys.indexOf(activeStep);
  const step = steps[stepIndex] ?? steps[0];
  const progress = ((stepIndex + 1) / steps.length) * 100;
  const isLastStep = stepIndex === steps.length - 1;

  const nextLabel = isLastStep ? "Finish Profile" : `Continue to Step ${stepIndex + 2}`;
  const backLabel = stepIndex === 0 ? "Save & Exit" : "Back";

  const selectedChips = useMemo(() => chipValues.interests ?? new Set<string>(), [chipValues]);

  function updateValue(id: string, value: string) {
    setValues((current) => ({
      ...current,
      [id]: value,
    }));
  }

  function updateStep(nextStep: OnboardingStepKey) {
    router.push(`/onboarding?step=${nextStep}`);
  }

  function handleBack() {
    if (stepIndex === 0) {
      router.push(DISCOVERY_PATH);
      return;
    }

    updateStep(stepKeys[stepIndex - 1]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isLastStep) {
      router.push(DISCOVERY_PATH);
      return;
    }

    updateStep(stepKeys[stepIndex + 1]);
  }

  function toggleChip(id: string, option: string) {
    setChipValues((current) => {
      const nextSet = new Set(current[id] ?? []);

      if (nextSet.has(option)) {
        nextSet.delete(option);
      } else {
        nextSet.add(option);
      }

      return {
        ...current,
        [id]: nextSet,
      };
    });
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface/80 px-5 shadow-sm backdrop-blur-md md:px-10">
        <div className="flex min-w-0 items-center gap-4">
          <button
            aria-label="Open navigation menu"
            className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center text-primary transition-transform active:scale-95"
            type="button"
          >
            <Menu className="size-7 stroke-[2.5]" />
          </button>
          <span className="type-brand truncate text-primary">
            Shubho Shomproti
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="type-label hidden text-on-surface-variant sm:inline">
            Step {stepIndex + 1} of {steps.length}
          </span>
          <div className="relative size-10 overflow-hidden rounded-full border border-outline-variant/30 bg-surface-container-high">
            <Image
              fill
              priority
              sizes="40px"
              src="/images/landing/stories/ananya-rahul.jpg"
              alt="Member profile thumbnail"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <main className="px-5 pt-24 pb-24 md:px-0 md:pb-20">
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 md:h-[calc(100vh-8rem)] md:min-h-[800px] md:max-h-[900px] md:grid-cols-12 md:gap-4">
          <aside className="hidden md:col-span-5 md:flex md:h-full md:flex-col md:pr-12">
            <h1 className="type-hero mb-4 text-on-surface">
              Start your <span className="text-primary italic">journey</span> to
              forever.
            </h1>
            <p className="type-body-lg mb-8 text-on-surface-variant">
              Personalize your experience so we can help you find compatible
              matches within a premium Bengali community.
            </p>
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-xl shadow-2xl">
              <Image
                fill
                priority
                sizes="(min-width: 768px) 420px, 100vw"
                src="/images/landing/hero/bengali-couple.jpg"
                alt="Elegant Bengali couple in a warm celebration setting"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 to-transparent p-8">
                <p className="type-profile-name text-white italic">
                  &quot;Connecting souls, celebrating heritage.&quot;
                </p>
              </div>
            </div>
          </aside>

          <section className="flex min-h-[840px] flex-col rounded-xl border border-outline-variant/10 bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.04)] md:col-span-7 md:h-full md:min-h-0 md:p-12">
            <div className="mb-8 shrink-0">
              <div className="type-label mb-4 flex justify-between gap-3">
                {steps.map((item) => {
                  const itemIndex = stepKeys.indexOf(item.key);
                  const isActive = item.key === activeStep;
                  const isComplete = itemIndex < stepIndex;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => updateStep(item.key)}
                      className={cn(
                        "min-w-0 cursor-pointer text-left transition-colors",
                        isActive || isComplete
                          ? "text-primary"
                          : "text-on-surface-variant/55 hover:text-primary",
                      )}
                    >
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mb-8 shrink-0">
              <h2 className="type-page-title mb-2 text-on-surface">
                {step.title}
              </h2>
              <p className="type-body text-on-surface-variant">
                {step.description}
              </p>
            </div>

            <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
              {activeStep === "lifestyle" ? (
                <LifestyleFields values={values} onChange={updateValue} />
              ) : (
                <div className="grid flex-1 grid-cols-1 content-start gap-x-4 gap-y-5 md:auto-rows-[88px] md:grid-cols-2">
                  {step.fields.map((field) => (
                    <FieldControl
                      key={field.id}
                      field={field}
                      selectedChips={field.type === "chips" ? selectedChips : undefined}
                      value={values[field.id] ?? ""}
                      onChange={updateValue}
                      onToggleChip={toggleChip}
                    />
                  ))}
                </div>
              )}

              <div className="mt-auto flex shrink-0 flex-col-reverse gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="type-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-on-surface-variant transition-colors hover:text-primary active:scale-95"
                >
                  <ArrowLeft className="size-4" />
                  {backLabel}
                </button>
                <button
                  type="submit"
                  className="type-button cursor-pointer rounded-full bg-primary px-10 py-3 text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-container active:scale-95"
                >
                  {nextLabel}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

function LifestyleFields({
  onChange,
  values,
}: {
  onChange: (id: string, value: string) => void;
  values: Record<string, string>;
}) {
  const height = values.height || "165";

  return (
    <div className="flex-1 space-y-6">
      <section className="space-y-3">
        <FieldLabel>Diet</FieldLabel>
        <SegmentedOptions
          columns="four"
          id="diet"
          onChange={onChange}
          options={["Vegetarian", "Non-Vegetarian", "Eggetarian", "Vegan"]}
          value={values.diet ?? ""}
        />
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <section className="space-y-3">
          <FieldLabel>Smoking</FieldLabel>
          <SegmentedOptions
            columns="three"
            id="smoking"
            onChange={onChange}
            options={["Never", "Occasionally", "Regularly"]}
            value={values.smoking ?? ""}
          />
        </section>

        <section className="space-y-3">
          <FieldLabel>Drinking</FieldLabel>
          <SegmentedOptions
            columns="three"
            id="drinking"
            onChange={onChange}
            options={["Never", "Occasionally", "Socially"]}
            value={values.drinking ?? ""}
          />
        </section>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-2">
          <FieldLabel htmlFor="maritalStatus">Marital Status</FieldLabel>
          <select
            id="maritalStatus"
            className="type-body h-12 w-full cursor-pointer rounded-lg border-none bg-surface px-4 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none focus:ring-2 focus:ring-primary"
            value={values.maritalStatus ?? ""}
            onChange={(event) => onChange("maritalStatus", event.target.value)}
          >
            <option value="">Select Marital Status</option>
            {["Never Married", "Divorced", "Widowed", "Awaiting Divorce"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <FieldLabel htmlFor="height">Height</FieldLabel>
            <span className="type-stat text-primary">
              {height} cm
            </span>
          </div>
          <input
            className="preference-slider w-full"
            id="height"
            max={210}
            min={140}
            onChange={(event) => onChange("height", event.target.value)}
            type="range"
            value={height}
          />
        </div>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="aboutMe">About Me</FieldLabel>
        <textarea
          className="type-body min-h-[136px] w-full resize-none rounded-lg border-none bg-surface px-4 py-3 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary"
          id="aboutMe"
          onChange={(event) => onChange("aboutMe", event.target.value)}
          placeholder="Write a few lines about your personality, values, and the life you hope to build."
          value={values.aboutMe ?? ""}
        />
      </div>
    </div>
  );
}

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      className="type-label block text-on-surface-variant"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

function SegmentedOptions({
  columns,
  id,
  onChange,
  options,
  value,
}: {
  columns: "four" | "three";
  id: string;
  onChange: (id: string, value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        columns === "four" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3",
      )}
    >
      {options.map((option) => {
        const isActive = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(id, option)}
            className={cn(
              "type-button flex h-12 min-w-0 cursor-pointer items-center justify-center rounded-lg px-3 text-center ring-1 transition-all active:scale-[0.98]",
              isActive
                ? "bg-primary-container text-on-primary ring-primary"
                : "bg-surface text-on-surface-variant ring-outline-variant/30 hover:text-primary hover:ring-primary/60",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function FieldControl({
  field,
  onChange,
  onToggleChip,
  selectedChips,
  value,
}: {
  field: OnboardingField;
  onChange: (id: string, value: string) => void;
  onToggleChip: (id: string, option: string) => void;
  selectedChips?: Set<string>;
  value: string;
}) {
  const sharedInputClass =
    "type-body h-12 w-full rounded-lg border-none bg-surface px-4 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary";

  if (field.type === "radio") {
    const isWideGroup = field.options.length >= 4;

    return (
      <FormBlock className={isWideGroup ? "md:col-span-2" : ""} label={field.label}>
        <div
          className={cn(
            "grid gap-2",
            field.options.length <= 2 ? "grid-cols-2" : "",
            field.options.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "",
            field.options.length >= 4 ? "grid-cols-2 md:grid-cols-4" : "",
          )}
        >
          {field.options.map((option) => {
            const isActive = value === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => onChange(field.id, option)}
                className={cn(
                  "type-button flex h-12 min-w-0 cursor-pointer items-center justify-center rounded-lg px-3 text-center ring-1 transition-all active:scale-[0.98]",
                  isActive
                    ? "bg-primary-container text-on-primary ring-primary"
                    : "bg-surface text-on-surface-variant ring-outline-variant/30 hover:text-primary hover:ring-primary/60",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </FormBlock>
    );
  }

  if (field.type === "select") {
    return (
      <FormBlock
        className={field.id === "maritalStatus" ? "md:col-span-2" : ""}
        htmlFor={field.id}
        label={field.label}
      >
        <select
          id={field.id}
          className={cn(sharedInputClass, "cursor-pointer")}
          value={value}
          onChange={(event) => onChange(field.id, event.target.value)}
        >
          <option value="">{field.placeholder ?? "Select"}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormBlock>
    );
  }

  if (field.type === "chips") {
    return (
      <div className="flex h-full flex-col justify-start gap-2 md:col-span-2">
        <label className="type-label block h-5 text-on-surface-variant">
          {field.label}
        </label>
        <div className="flex min-h-12 flex-wrap content-start gap-2">
          {field.options.map((option) => {
            const isActive = selectedChips?.has(option) ?? false;

            return (
              <button
                key={option}
                type="button"
                onClick={() => onToggleChip(field.id, option)}
                className={cn(
                  "type-caption h-9 cursor-pointer rounded-full border px-4 font-semibold transition-all active:scale-95",
                  isActive
                    ? "border-primary bg-primary-container text-on-primary"
                    : "border-outline-variant/40 bg-surface text-on-surface-variant hover:border-primary hover:text-primary",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (field.type === "range") {
    const currentValue = value || String(field.min);

    return (
      <div className="flex h-full flex-col justify-center gap-3 md:col-span-2">
        <div className="flex items-center justify-between gap-4">
          <label
            className="type-label block h-5 text-on-surface-variant"
            htmlFor={field.id}
          >
            {field.label}
          </label>
          <span className="type-stat text-primary">
            {currentValue} {field.unit}
          </span>
        </div>
        <input
          className="preference-slider w-full"
          id={field.id}
          max={field.max}
          min={field.min}
          onChange={(event) => onChange(field.id, event.target.value)}
          type="range"
          value={currentValue}
        />
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="flex h-full flex-col justify-start gap-2 md:col-span-2 md:row-span-2">
        <label
          className="type-label block h-5 text-on-surface-variant"
          htmlFor={field.id}
        >
          {field.label}
        </label>
        <textarea
          className={cn(sharedInputClass, "min-h-36 flex-1 resize-none py-3")}
          id={field.id}
          onChange={(event) => onChange(field.id, event.target.value)}
          placeholder={field.placeholder}
          value={value}
        />
      </div>
    );
  }

  return (
    <FormBlock
      htmlFor={field.id}
      label={field.label}
    >
      <input
        className={sharedInputClass}
        id={field.id}
        onChange={(event) => onChange(field.id, event.target.value)}
        placeholder={field.placeholder}
        type={field.type}
        value={value}
      />
    </FormBlock>
  );
}

function FormBlock({
  children,
  className,
  htmlFor,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
  label: string;
}) {
  return (
    <div className={cn("flex h-full flex-col justify-start gap-2", className)}>
      <label
        className="type-label block h-5 text-on-surface-variant"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
