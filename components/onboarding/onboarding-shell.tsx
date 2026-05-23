import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import { stepKeys, steps } from "./onboarding-data";
import type { OnboardingStepKey } from "./onboarding-types";

export function OnboardingHeader({ stepIndex }: { stepIndex: number }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-outline-variant/30 bg-surface/80 px-5 shadow-sm backdrop-blur-md md:px-10">
      <div className="flex min-w-0 items-center gap-4">
        <button
          aria-label="Open navigation menu"
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center text-primary transition-transform active:scale-95"
          type="button"
        >
          <Menu className="size-7 stroke-[2.5]" />
        </button>
        <span className="type-brand truncate text-primary">Shubho Shomproti</span>
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
  );
}

export function OnboardingVisualAside() {
  return (
    <aside className="hidden md:col-span-5 md:flex md:h-full md:flex-col md:pr-12">
      <h1 className="type-hero mb-4 text-on-surface">
        Start your <span className="text-primary italic">journey</span> to forever.
      </h1>
      <p className="type-body-lg mb-8 text-on-surface-variant">
        Personalize your experience so we can help you find compatible matches
        within a premium Bengali community.
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
  );
}

export function StepProgress({
  activeStep,
  onSelectStep,
  progress,
  stepIndex,
}: {
  activeStep: OnboardingStepKey;
  onSelectStep: (step: OnboardingStepKey) => void;
  progress: number;
  stepIndex: number;
}) {
  return (
    <div className="mb-8 shrink-0">
      <div className="type-label mb-4 flex gap-3 overflow-x-auto pb-1 md:justify-between md:overflow-visible">
        {steps.map((item) => {
          const itemIndex = stepKeys.indexOf(item.key);
          const isActive = item.key === activeStep;
          const isComplete = itemIndex < stepIndex;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelectStep(item.key)}
              className={cn(
                "min-w-28 shrink-0 cursor-pointer text-left transition-colors md:min-w-0",
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
  );
}
