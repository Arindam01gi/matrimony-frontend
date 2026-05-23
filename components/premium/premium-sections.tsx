import Image from "next/image";
import { Brain, Heart, Rocket } from "lucide-react";

import { BenefitCard, PlanCard } from "./premium-cards";
import { plans, TRUST_IMAGE_SRC } from "./premium-data";

export function PremiumBenefitsSection() {
  return (
    <section className="mx-auto mb-6 max-w-[1200px] px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="relative flex min-h-[240px] overflow-hidden rounded-xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-8 md:col-span-7">
          <div className="relative z-10 max-w-md self-start">
            <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full bg-primary-fixed-dim/60 text-primary">
              <Brain className="size-5" />
            </span>
            <h2 className="type-section-title mb-2">Relationship Manager</h2>
            <p className="type-body max-w-sm text-on-surface-variant">
              A dedicated expert to curate profiles, manage introductions, and
              provide personalized relationship guidance.
            </p>
          </div>
          <RelationshipManagerMark />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:h-[240px] md:grid-cols-1">
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
  );
}

export function PremiumPlansSection() {
  return (
    <section className="mx-auto mb-6 max-w-[1200px] px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-end">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div className="grid min-h-[432px] items-center gap-6 rounded-2xl bg-surface-container-high p-5 sm:p-8 md:grid-cols-2 md:gap-8 md:rounded-3xl">
        <div>
          <h2 className="type-page-title mb-4 text-on-surface">
            Built on Trust and Tradition
          </h2>
          <p className="type-body mb-6 max-w-xl text-on-surface-variant">
            We understand that finding a life partner is a deeply personal and
            cultural journey. Our premium services are designed to respect these
            values while providing modern tools to facilitate genuine matches.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <Stat value="98%" label="Success Rate" />
            <div className="border-l border-outline-variant/50 pl-6 sm:pl-8">
              <Stat value="24/7" label="Concierge Support" />
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl md:ml-auto md:w-[382px]">
          <Image
            alt="Bengali wedding ceremony with rich traditional attire and warm candlelit ambience."
            className="object-cover"
            fill
            priority
            sizes="(min-width: 768px) 382px, calc(100vw - 32px)"
            src={TRUST_IMAGE_SRC}
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="type-hero text-primary">{value}</p>
      <p className="type-caption mt-1 font-medium uppercase text-on-surface-variant">
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
