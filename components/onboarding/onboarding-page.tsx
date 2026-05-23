"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { DISCOVERY_PATH } from "@/lib/routes";

import {
  defaultValues,
  stepKeys,
  steps,
} from "./onboarding-data";
import { FieldControl, LifestyleFields } from "./onboarding-fields";
import {
  OnboardingHeader,
  OnboardingVisualAside,
  StepProgress,
} from "./onboarding-shell";
import type { OnboardingStepKey } from "./onboarding-types";

interface OnboardingPageProps {
  initialStep: OnboardingStepKey;
}

export type { OnboardingStepKey };

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
  const selectedChips = useMemo(
    () => chipValues.interests ?? new Set<string>(),
    [chipValues],
  );

  function updateValue(id: string, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
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

      return { ...current, [id]: nextSet };
    });
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <OnboardingHeader stepIndex={stepIndex} />
      <main className="px-4 pt-24 pb-24 sm:px-5 md:px-8 md:pb-20 lg:px-0">
        <div className="mx-auto grid max-w-[1200px] items-stretch gap-8 md:min-h-[760px] md:grid-cols-12 md:gap-4 xl:h-[calc(100vh-8rem)] xl:max-h-[900px]">
          <OnboardingVisualAside />

          <section className="flex min-h-[720px] flex-col rounded-xl border border-outline-variant/10 bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.04)] sm:p-6 md:col-span-7 md:h-full md:min-h-0 lg:p-10 xl:p-12">
            <StepProgress
              activeStep={activeStep}
              onSelectStep={updateStep}
              progress={progress}
              stepIndex={stepIndex}
            />

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
