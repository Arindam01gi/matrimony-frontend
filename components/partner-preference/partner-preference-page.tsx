"use client";

import { useMemo, useState } from "react";

import {
  BackdropMark,
  Chip,
  formatHeight,
  PreferenceCard,
  PreferenceLabel,
  RangePreferenceCard,
  Switch,
  toggleSetValue,
} from "./partner-preference-controls";
import {
  lifestyleChoices,
  maritalStatuses,
  motherTongues,
} from "./partner-preference-data";

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
      <main className="mx-auto max-w-[1000px] px-4 pt-24 pb-28 sm:px-5 md:px-0 md:pb-12">
        <section className="mb-8 px-0 text-center md:px-10 md:text-left">
          <h1 className="type-hero mb-2 text-primary">Partner Preferences</h1>
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
            className="type-button w-full cursor-pointer rounded-full bg-primary-container px-8 py-4 text-on-primary-container shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 sm:w-auto sm:px-12"
          >
            Save &amp; Continue
          </button>
        </div>
      </main>
      <BackdropMark />
    </div>
  );
}
