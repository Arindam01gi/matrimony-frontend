import { Heart, ShieldCheck, UserPlus } from "lucide-react";

import { featureSteps } from "@/components/landing/content";

function FeatureIcon({ icon }: { icon: "user-plus" | "shield-check" | "heart" }) {
  const iconClassName = "size-9";

  if (icon === "user-plus") {
    return <UserPlus className={iconClassName} />;
  }

  if (icon === "shield-check") {
    return <ShieldCheck className={iconClassName} />;
  }

  return <Heart className={iconClassName} />;
}

export function HowItWorksSection() {
  return (
    <section className="mt-8 bg-surface py-8" id="discovery">
      <div className="mx-auto max-w-300 px-5 md:px-10">
        <div className="mb-8 text-center">
          <h2 className="text-[28px] leading-8.5 font-semibold text-foreground md:text-[32px] md:leading-[40px]">
            A Sophisticated Path to Connection
          </h2>
          <p className="mt-2 text-base text-on-surface-variant">
            Simple, secure, and respectful steps to meet your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {featureSteps.map((step) => (
            <article
              key={step.title}
              className="group flex flex-col items-center rounded-xl p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-primary/5 text-foreground transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container">
                <FeatureIcon icon={step.icon} />
              </div>
              <h3 className="mb-2 text-[24px] leading-8 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-sm text-base leading-6 text-on-surface-variant">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
