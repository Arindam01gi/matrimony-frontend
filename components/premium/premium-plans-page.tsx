import Image from "next/image";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  Brain,
  CheckCircle2,
  Heart,
  Rocket,
} from "lucide-react";

const TRUST_IMAGE_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzH7_1xK0_Ib4thw1Vwkbw-AdWyVfxbwpfoyh3iXUTjOzYqCtpaZdi-uUNxrC3irqiXPmYMdfBd-TU8Ba0PXZVz9snvwtzqdgzOUItMkgv94T6aKWl12qvnNlqRUzCpQZxS1YEKLPzL0MYIGDVLR2KIYUIPst6XnN00L4uzU4DslH2sE5Kce-sdV09mJuZ4zZ5RwU_SZ19o-FzfQAheepjENWUOWyKEztKTejy542kWneDWHpO95gnACU4D-ZxszbYdHYAkaVHdNMW";

const plans = [
  {
    eyebrow: "Essential",
    name: "Silver",
    price: "4,999",
    term: "/3 months",
    features: [
      "50 Interests per Month",
      "View 30 Verified Contacts",
      "Standard Profile Visibility",
    ],
    button: "Get Started",
    variant: "light",
  },
  {
    eyebrow: "Most Popular",
    name: "Gold Elite",
    price: "9,999",
    term: "/6 months",
    features: [
      "Unlimited Interests",
      "Weekly Profile Boost",
      "Unlimited Verified Contacts",
      "Priority Profile Review",
    ],
    button: "Select Gold Elite",
    variant: "gold",
  },
  {
    eyebrow: "Ultra Luxury",
    name: "Platinum",
    price: "24,999",
    term: "/12 months",
    features: [
      "Relationship Manager",
      "Daily Profile Boost",
      "Profile Confidentiality Mode",
      "Exclusive Invitations",
    ],
    button: "Go Platinum",
    variant: "dark",
  },
] as const;

export function PremiumPlansPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="pt-24 pb-18">
        <section className="mx-auto mb-7 max-w-[1200px] px-5 text-center md:px-[60px]">
          <h1 className="mx-auto max-w-4xl font-heading text-[2rem] leading-10 font-bold text-on-surface md:text-[2.5rem] md:leading-[48px]">
            Elevate Your Journey to{" "}
            <span className="text-primary italic">Sampurna</span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Discover meaningful connections with our bespoke premium services tailored
            for the discerning Bengali community.
          </p>
        </section>

        <section className="mx-auto mb-6 max-w-[1200px] px-5 md:px-[60px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="relative flex min-h-[240px] overflow-hidden rounded-xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:col-span-7">
              <div className="relative z-10 max-w-md self-start">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-primary-fixed-dim/60 text-primary">
                  <Brain className="size-5" />
                </span>
                <h2 className="mb-2 font-heading text-2xl leading-8 font-semibold">
                  Relationship Manager
                </h2>
                <p className="max-w-sm text-base leading-6 font-normal text-on-surface-variant">
                  A dedicated expert to curate profiles, manage introductions, and
                  provide personalized relationship guidance.
                </p>
              </div>
              <RelationshipManagerMark />
            </div>

            <div className="grid gap-4 md:col-span-5 md:h-[240px]">
              <BenefitCard
                icon={<Rocket className="size-9" />}
                title="Profile Boosting"
                text="Get 10x more visibility with top-tier placement in search results."
              />
              <BenefitCard
                icon={<Heart className="size-9" />}
                title="Unlimited Interests"
                text="Reach out to as many matches as you like without any daily limits."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto mb-6 max-w-[1200px] px-5 md:px-[60px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 md:px-[60px]">
          <div className="grid min-h-[432px] items-center gap-8 rounded-3xl bg-surface-container-high p-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-[2rem] leading-10 font-semibold text-on-surface">
                Built on Trust and Tradition
              </h2>
              <p className="mb-6 max-w-xl text-base leading-6 text-on-surface-variant">
                We understand that finding a life partner is a deeply personal and
                cultural journey. Our premium services are designed to respect these
                values while providing modern tools to facilitate genuine matches.
              </p>
              <div className="flex gap-8">
                <Stat value="98%" label="Success Rate" />
                <div className="border-l border-outline-variant/50 pl-8">
                  <Stat value="24/7" label="Concierge Support" />
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl md:ml-auto md:w-[382px]">
              <Image
                alt="Bengali wedding ceremony with rich traditional attire and warm candlelit ambience."
                className="object-cover"
                fill
                priority
                sizes="(min-width: 768px) 382px, calc(100vw - 40px)"
                src={TRUST_IMAGE_SRC}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="flex min-h-0 items-center gap-5 rounded-xl border border-outline-variant/30 bg-surface-container-low p-6 transition-colors hover:border-primary/30">
      <span className="text-primary">{icon}</span>
      <div>
        <h3 className="mb-1 text-sm leading-5 font-semibold text-on-surface">
          {title}
        </h3>
        <p className="text-xs leading-4 text-on-surface-variant">{text}</p>
      </div>
    </article>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const isGold = plan.variant === "gold";
  const isDark = plan.variant === "dark";

  return (
    <article
      className={[
        "relative flex h-full flex-col overflow-hidden rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        isGold
          ? "border-2 border-[#ffc000] bg-white shadow-[0_0_30px_rgba(255,192,0,0.15)] md:min-h-[383px]"
          : "",
        isDark ? "bg-inverse-surface text-white md:min-h-[365px]" : "",
        !isGold && !isDark
          ? "border border-outline-variant/10 bg-white md:min-h-[365px]"
          : "",
      ].join(" ")}
    >
      {isGold ? (
        <div className="absolute top-0 right-0 rounded-bl-xl bg-[#ffc000] px-6 py-1 text-xs leading-4 font-semibold tracking-[0.12em] text-secondary-foreground uppercase">
          Recommended
        </div>
      ) : null}

      <div className="mb-5">
        <p
          className={[
            "mb-1 text-sm leading-5 font-semibold tracking-[0.18em] uppercase",
            isGold ? "text-secondary-foreground" : "",
            isDark ? "text-outline-variant" : "",
            !isGold && !isDark ? "text-on-surface-variant" : "",
          ].join(" ")}
        >
          {plan.eyebrow}
        </p>
        <h3 className="font-heading text-2xl leading-8 font-semibold">{plan.name}</h3>
      </div>

      <div
        className={[
          "mb-5 border-b pb-4 whitespace-nowrap",
          isGold ? "border-[#ffc000]/20" : "",
          isDark ? "border-outline/30" : "",
          !isGold && !isDark ? "border-outline-variant/20" : "",
        ].join(" ")}
      >
        <span className="font-heading text-[2rem] leading-10 font-bold">
          &#8377;{plan.price}
        </span>
        <span className={isDark ? "text-outline-variant" : "text-on-surface-variant"}>
          {plan.term}
        </span>
      </div>

      <ul className="mb-6 grow space-y-3.5">
        {plan.features.map((feature, index) => (
          <li
            className={[
              "flex items-center gap-2 text-sm leading-5",
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
            <span className={isDark && index === 0 ? "text-white" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={[
          "w-full cursor-pointer rounded-xl px-5 py-3 text-sm leading-5 font-semibold transition-all active:scale-95",
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
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-[2.5rem] leading-none font-semibold text-primary">
        {value}
      </p>
      <p className="mt-1 text-xs leading-4 font-medium text-on-surface-variant uppercase">
        {label}
      </p>
    </div>
  );
}

function RelationshipManagerMark() {
  return (
    <svg
      aria-hidden="true"
      className="absolute right-[-34px] bottom-7 hidden h-32 w-44 text-[#d9d9d9] md:block"
      fill="currentColor"
      viewBox="0 0 260 190"
    >
      <circle cx="70" cy="57" r="34" />
      <circle cx="130" cy="34" r="38" />
      <circle cx="190" cy="57" r="34" />
      <path d="M34 111c0-19.3 15.7-35 35-35h14c11.6 0 21.8 5.6 28.2 14.2-12.1 5.5-22.2 14.2-29.2 25.1-4.9-3.4-10.7-5.3-17-5.3H34v72H0v-36c0-19.3 15.7-35 34-35Z" />
      <path d="M178.8 90.2C185.2 81.6 195.4 76 207 76h14c19.3 0 35 15.7 35 35v71h-34v-72h-31c-6.3 0-12.1 1.9-17 5.3-7-10.9-17.1-19.6-29.2-25.1Z" />
      <path d="M76 121c12.6-23.8 33.8-37.5 54-37.5s41.4 13.7 54 37.5c-12.6 23.8-33.8 37.5-54 37.5S88.6 144.8 76 121Z" />
      <path
        d="M62 132c15.3 30.8 39.1 45 68 45s52.7-14.2 68-45"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="21"
      />
    </svg>
  );
}
