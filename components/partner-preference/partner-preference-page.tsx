"use client";

import type { Dispatch, SetStateAction } from "react";
import { useMemo, useState } from "react";
import { CigaretteOff, Utensils, WineOff } from "lucide-react";

const motherTongues = ["Bengali", "English", "Hindi", "Sylheti"];
const maritalStatuses = [
  "Never Married",
  "Divorced",
  "Widowed",
  "Awaiting Divorce",
];

const lifestyleChoices = [
  {
    key: "vegetarian",
    icon: Utensils,
    title: "Strictly Vegetarian",
    description: "Prefer meat-free diet",
    defaultChecked: false,
  },
  {
    key: "non-smoker",
    icon: CigaretteOff,
    title: "Non-Smoker",
    description: "Mandatory preference",
    defaultChecked: true,
  },
  {
    key: "no-alcohol",
    icon: WineOff,
    title: "No Alcohol",
    description: "Teetotaler preferred",
    defaultChecked: false,
  },
] as const;

export function PartnerPreferencePage() {
  const [age, setAge] = useState(24);
  const [height, setHeight] = useState(158);
  const [activeTongues, setActiveTongues] = useState(new Set(["Bengali"]));
  const [activeStatuses, setActiveStatuses] = useState(
    new Set(["Never Married"]),
  );
  const [choices, setChoices] = useState(() =>
    Object.fromEntries(
      lifestyleChoices.map((choice) => [choice.key, choice.defaultChecked]),
    ),
  );

  const heightLabel = useMemo(
    () => `${formatHeight(height)} - ${formatHeight(height + 20)}`,
    [height],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface text-on-surface">
      <main className="mx-auto max-w-[1000px] px-5 pt-24 pb-12 md:px-0">
        <section className="mb-8 px-0 text-center md:px-10 md:text-left">
          <h1 className="type-hero mb-2 text-primary">
            Partner Preferences
          </h1>
          <p className="type-body-lg text-on-surface-variant">
            Help us find the perfect match for your journey ahead.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:px-10">
          <div className="space-y-4 md:col-span-7">
            <RangePreferenceCard
              label="Age Preference"
              value={`${age} - ${age + 8} years`}
              min={18}
              max={60}
              sliderValue={age}
              onChange={setAge}
            />

            <RangePreferenceCard
              label="Height Preference"
              value={heightLabel}
              min={140}
              max={210}
              sliderValue={height}
              onChange={setHeight}
            />

            <PreferenceCard>
              <PreferenceLabel>Mother Tongue</PreferenceLabel>
              <div className="flex flex-wrap gap-2">
                {motherTongues.map((tongue) => (
                  <Chip
                    key={tongue}
                    active={activeTongues.has(tongue)}
                    rounded="full"
                    onClick={() => toggleSetValue(setActiveTongues, tongue)}
                  >
                    {tongue}
                  </Chip>
                ))}
              </div>
            </PreferenceCard>
          </div>

          <div className="space-y-4 md:col-span-5">
            <PreferenceCard>
              <PreferenceLabel>Marital Status</PreferenceLabel>
              <div className="grid grid-cols-2 gap-2">
                {maritalStatuses.map((status) => (
                  <Chip
                    key={status}
                    active={activeStatuses.has(status)}
                    rounded="xl"
                    onClick={() => toggleSetValue(setActiveStatuses, status)}
                  >
                    {status}
                  </Chip>
                ))}
              </div>
            </PreferenceCard>

            <PreferenceCard>
              <PreferenceLabel className="mb-6">Lifestyle Choices</PreferenceLabel>
              <div className="space-y-6">
                {lifestyleChoices.map((choice) => {
                  const Icon = choice.icon;

                  return (
                    <div
                      key={choice.key}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon className="size-6 shrink-0 text-secondary-foreground" />
                        <div className="min-w-0">
                          <p className="type-label text-on-surface">
                            {choice.title}
                          </p>
                          <p className="type-caption text-on-surface-variant">
                            {choice.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        checked={choices[choice.key]}
                        label={choice.title}
                        onChange={() =>
                          setChoices((current) => ({
                            ...current,
                            [choice.key]: !current[choice.key],
                          }))
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </PreferenceCard>
          </div>
        </div>

        <div className="mt-8 flex justify-end md:px-10">
          <button
            type="button"
            className="type-button cursor-pointer rounded-full bg-primary-container px-12 py-4 text-on-primary-container shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Save &amp; Continue
          </button>
        </div>
      </main>
      <BackdropMark />
    </div>
  );
}

function RangePreferenceCard({
  label,
  max,
  min,
  onChange,
  sliderValue,
  value,
}: {
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  sliderValue: number;
  value: string;
}) {
  return (
    <PreferenceCard>
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <PreferenceLabel className="mb-0">{label}</PreferenceLabel>
        <span className="type-stat font-bold text-primary">
          {value}
        </span>
      </div>
      <div className="relative w-full py-4">
        <input
          aria-label={label}
          className="preference-slider w-full"
          max={max}
          min={min}
          onChange={(event) => onChange(Number(event.target.value))}
          type="range"
          value={sliderValue}
        />
      </div>
    </PreferenceCard>
  );
}

function PreferenceCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-surface-variant/30 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      {children}
    </section>
  );
}

function PreferenceLabel({
  children,
  className = "mb-4",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={[
        "type-eyebrow block text-on-surface-variant",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}

function Chip({
  active,
  children,
  onClick,
  rounded,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  rounded: "full" | "xl";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "type-body cursor-pointer border px-5 py-2 transition-all",
        rounded === "full" ? "rounded-full" : "rounded-xl",
        active
          ? "border-primary bg-primary text-white"
          : "border-surface-variant text-on-surface hover:bg-surface-container-high",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function Switch({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={[
        "relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors",
        checked ? "bg-primary-container" : "bg-surface-variant",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

function BackdropMark() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed top-0 right-0 -z-10 h-[600px] w-[600px] text-primary opacity-5"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.1,29.1,72.7,42.1C64.3,55.1,53.2,66.6,40.1,73.5C27,80.4,11.9,82.8,-2.6,87.4C-17.1,91.9,-34.2,98.6,-48.6,93.4C-63.1,88.2,-74.9,71.1,-81.4,54.4C-87.9,37.6,-89.1,21.3,-88.3,5.1C-87.5,-11.1,-84.7,-27.1,-76.8,-41C-68.9,-54.9,-55.9,-66.7,-41.4,-73.7C-26.9,-80.7,-13.4,-82.9,0.7,-84C14.7,-85.1,29.4,-85.1,44.7,-76.4Z"
        fill="currentColor"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function formatHeight(value: number) {
  const feet = Math.floor(value / 30.48);
  const inches = Math.round((value / 2.54) % 12);

  return `${feet}'${inches}"`;
}

function toggleSetValue(
  setValue: Dispatch<SetStateAction<Set<string>>>,
  value: string,
) {
  setValue((current) => {
    const next = new Set(current);

    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }

    return next;
  });
}
