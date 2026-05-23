import Image from "next/image";

export function AuthVisualPanel() {
  return (
    <section className="relative min-h-[260px] overflow-hidden bg-surface md:min-h-svh md:w-1/2 lg:w-3/5">
      <Image
        alt="Traditional Bengali wedding detail with henna, bangles, and red silk."
        className="object-cover object-[58%_40%] saturate-[1.03] contrast-[1.02] md:object-[55%_50%]"
        fill
        priority
        quality={100}
        sizes="(min-width: 1024px) 60vw, (min-width: 768px) 50vw, 100vw"
        src="/images/auth/login-heritage-v2.png"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(254,191,0,0.12),transparent_30%),linear-gradient(180deg,rgba(255,248,247,0)_42%,var(--surface)_100%)] md:bg-[radial-gradient(circle_at_16%_12%,rgba(254,191,0,0.12),transparent_32%),linear-gradient(90deg,rgba(255,248,247,0)_0%,rgba(255,248,247,0.08)_48%,rgba(255,248,247,0.72)_78%,var(--surface)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-surface md:block" />
    </section>
  );
}
