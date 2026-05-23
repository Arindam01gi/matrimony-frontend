import Image from "next/image";

import { HeroSearchCard } from "@/components/landing/hero-search-card";

export function LandingHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-12 md:h-[820px] md:min-h-[720px] md:py-0">
      <div className="absolute inset-0">
        <Image
          alt="A cinematic premium portrait of a Bengali couple in elegant wedding attire."
          className="object-cover object-[67%_center] md:object-center"
          fill
          priority
          quality={100}
          sizes="100vw"
          src="/images/landing/hero/bengali-couple-hero-v2.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,248,247,0.95)_0%,rgba(255,248,247,0.78)_48%,rgba(255,248,247,0.28)_78%,rgba(255,248,247,0.06)_100%)] md:bg-[linear-gradient(to_right,rgba(255,248,247,0.94)_0%,rgba(255,248,247,0.72)_35%,rgba(255,248,247,0.24)_62%,rgba(255,248,247,0)_84%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="max-w-[350px] sm:max-w-[39rem]">
          <span className="type-label mb-5 inline-flex rounded-full border border-secondary-container/50 bg-secondary-container/90 px-4 py-1.5 text-on-secondary-container shadow-[0_10px_28px_rgba(121,89,0,0.12)]">
            Trusted by 10,000+ Bengali Families
          </span>
          <h1 className="type-hero mb-5 max-w-[20rem] text-foreground sm:max-w-none">
            <span className="block sm:inline">Find your life&apos;s</span>{" "}
            <span className="block sm:inline">partner</span> <br />
            <span className="text-primary italic">with grace.</span>
          </h1>
          <p className="type-body-lg mb-7 max-w-xl text-on-surface-variant">
            Experience the most refined matchmaking journey designed specifically for
            the modern Bengali community, where culture meets compatibility.
          </p>
        </div>

        <HeroSearchCard />
      </div>
    </section>
  );
}
