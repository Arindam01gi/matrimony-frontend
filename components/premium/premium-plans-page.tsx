import {
  PremiumBenefitsSection,
  PremiumPlansSection,
  TrustSection,
} from "./premium-sections";

export function PremiumPlansPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="pt-24 pb-32 md:pb-18">
        <section className="mx-auto mb-7 max-w-[1200px] px-4 text-center sm:px-5 md:px-10 lg:px-[60px]">
          <h1 className="type-hero mx-auto max-w-4xl text-on-surface">
            Elevate Your Journey to{" "}
            <span className="text-primary italic">Sampurna</span>
          </h1>
          <p className="type-body-lg mx-auto mt-2 max-w-2xl text-on-surface-variant">
            Discover meaningful connections with our bespoke premium services
            tailored for the discerning Bengali community.
          </p>
        </section>

        <PremiumBenefitsSection />
        <PremiumPlansSection />
        <TrustSection />
      </main>
    </div>
  );
}
