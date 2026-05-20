import Image from "next/image";

import { HeroSearchCard } from "@/components/landing/hero-search-card";

export function LandingHero() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden py-16 md:h-[870px] md:py-0">
      <div className="absolute inset-0">
        <Image
          alt="A cinematic premium portrait of a Bengali couple in elegant wedding attire."
          className="object-cover object-[58%_center] md:object-center"
          fill
          priority
          quality={100}
          sizes="100vw"
          src="/images/landing/hero/bengali-couple.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,248,247,0.94)_0%,rgba(255,248,247,0.62)_62%,rgba(255,248,247,0.16)_100%)] md:bg-[linear-gradient(to_right,rgba(255,248,247,0.9)_0%,rgba(255,248,247,0.4)_50%,rgba(255,248,247,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="max-w-[42rem]">
          <span className="mb-4 inline-block rounded-full bg-secondary-container px-4 py-1 text-sm font-semibold text-on-secondary-container">
            Trusted by 10,000+ Bengali Families
          </span>
          <h1 className="mb-4 text-[2.25rem] leading-[1.08] font-bold tracking-[-0.02em] text-foreground sm:text-[2.5rem] md:text-[40px] md:leading-[48px]">
            Find your life&apos;s partner <br />
            <span className="text-primary italic">with grace.</span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-7 text-on-surface-variant md:text-[18px] md:leading-[28px]">
            Experience the most refined matchmaking journey designed specifically for
            the modern Bengali community, where culture meets compatibility.
          </p>
        </div>

        <HeroSearchCard />
      </div>
    </section>
  );
}
