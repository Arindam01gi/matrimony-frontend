import { CtaSection } from "@/components/landing/cta-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { SuccessStoriesSection } from "@/components/landing/success-stories-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main className="pt-20">
        <LandingHero />
        <HowItWorksSection />
        <SuccessStoriesSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
