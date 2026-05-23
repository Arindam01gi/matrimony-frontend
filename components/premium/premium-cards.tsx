import type { ReactNode } from "react";
import { BadgeCheck, CheckCircle2 } from "lucide-react";

import { PremiumPlan } from "./premium-data";

export function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="flex min-h-0 items-start gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-low p-5 transition-colors hover:border-primary/30 sm:items-center sm:gap-5 sm:p-6">
      <span className="shrink-0 text-primary">{icon}</span>
      <div className="min-w-0">
        <h3 className="type-card-title mb-1 text-on-surface">{title}</h3>
        <p className="type-caption text-on-surface-variant">{text}</p>
      </div>
    </article>
  );
}

export function PlanCard({ plan }: { plan: PremiumPlan }) {
  const isGold = plan.variant === "gold";
  const isDark = plan.variant === "dark";

  return (
    <article
      className={[
        "relative flex h-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        isGold
          ? "border-2 border-[#ffc000] bg-white pt-10 shadow-[0_0_30px_rgba(255,192,0,0.15)] md:min-h-[383px]"
          : "",
        isDark ? "bg-inverse-surface text-white md:min-h-[365px]" : "",
        !isGold && !isDark
          ? "border border-outline-variant/10 bg-white md:min-h-[365px]"
          : "",
      ].join(" ")}
    >
      {isGold ? (
        <div className="type-eyebrow absolute top-0 right-0 rounded-bl-xl bg-[#ffc000] px-6 py-1 text-secondary-foreground">
          Recommended
        </div>
      ) : null}

      <div className="mb-5">
        <p
          className={[
            "type-eyebrow mb-1",
            isGold ? "text-secondary-foreground" : "",
            isDark ? "text-outline-variant" : "",
            !isGold && !isDark ? "text-on-surface-variant" : "",
          ].join(" ")}
        >
          {plan.eyebrow}
        </p>
        <h3 className="type-section-title">{plan.name}</h3>
      </div>

      <PlanPrice isDark={isDark} isGold={isGold} plan={plan} />
      <PlanFeatures isDark={isDark} isGold={isGold} plan={plan} />
      <PlanButton isDark={isDark} isGold={isGold} plan={plan} />
    </article>
  );
}

function PlanPrice({
  isDark,
  isGold,
  plan,
}: {
  isDark: boolean;
  isGold: boolean;
  plan: PremiumPlan;
}) {
  return (
    <div
      className={[
        "mb-5 border-b pb-4",
        isGold ? "border-[#ffc000]/20" : "",
        isDark ? "border-outline/30" : "",
        !isGold && !isDark ? "border-outline-variant/20" : "",
      ].join(" ")}
    >
      <span className="type-page-title break-words font-bold">
        &#8377;{plan.price}
      </span>
      <span className={isDark ? "text-outline-variant" : "text-on-surface-variant"}>
        {plan.term}
      </span>
    </div>
  );
}

function PlanFeatures({
  isDark,
  isGold,
  plan,
}: {
  isDark: boolean;
  isGold: boolean;
  plan: PremiumPlan;
}) {
  return (
    <ul className="mb-6 grow space-y-3.5">
      {plan.features.map((feature, index) => (
        <li
          className={[
            "type-body-sm flex items-center gap-2",
            isDark ? "text-surface-variant" : "text-on-surface-variant",
            isGold || (isDark && index === 0) ? "font-semibold" : "",
          ].join(" ")}
          key={feature}
        >
          {isDark ? (
            <BadgeCheck className="size-4 shrink-0 text-primary-fixed-dim" />
          ) : (
            <CheckCircle2
              className={[
                "size-4 shrink-0",
                isGold ? "fill-[#ffc000]/20 text-secondary-foreground" : "text-primary",
              ].join(" ")}
            />
          )}
          <span className={isDark && index === 0 ? "text-white" : ""}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PlanButton({
  isDark,
  isGold,
  plan,
}: {
  isDark: boolean;
  isGold: boolean;
  plan: PremiumPlan;
}) {
  return (
    <button
      className={[
        "type-button w-full cursor-pointer rounded-xl px-5 py-3 transition-all active:scale-95",
        isGold
          ? "bg-[#ffc000] text-secondary-foreground shadow-lg shadow-[#ffc000]/20 hover:scale-[1.02]"
          : "",
        isDark ? "bg-primary-container text-white hover:bg-primary" : "",
        !isGold && !isDark
          ? "border-2 border-primary text-primary hover:bg-primary/5"
          : "",
      ].join(" ")}
      type="button"
    >
      {plan.button}
    </button>
  );
}
