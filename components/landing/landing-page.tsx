import { CtaSection } from "@/components/landing/cta-section";
import { LandingHero } from "@/components/landing/landing-hero";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { SuccessStoriesSection } from "@/components/landing/success-stories-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <LandingHero />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <CtaSection />
      </main>
    </div>
  );
}
