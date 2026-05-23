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
    <section className="bg-surface py-14 md:py-16" id="discovery">
      <div className="mx-auto max-w-300 px-5 md:px-10">
        <div className="mx-auto mb-10 max-w-[320px] text-center sm:max-w-2xl">
          <h2 className="type-page-title text-foreground">
            A Sophisticated Path <br className="sm:hidden" />
            to Connection
          </h2>
          <p className="type-body mt-2 text-on-surface-variant">
            Simple, secure, and respectful steps to meet your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featureSteps.map((step) => (
            <article
              key={step.title}
              className="group flex flex-col items-center rounded-2xl border border-outline-variant/35 bg-white/55 p-7 text-center shadow-[0_10px_28px_rgba(56,46,46,0.04)] transition-all duration-300 hover:border-primary/18 hover:bg-white"
            >
              <div className="mb-5 flex size-18 items-center justify-center rounded-full bg-primary/7 text-primary transition-colors group-hover:bg-primary-container group-hover:text-white">
                <FeatureIcon icon={step.icon} />
              </div>
              <h3 className="type-section-title mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="type-body max-w-sm text-on-surface-variant">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
