import Image from "next/image";

import { authCopy } from "@/components/auth/auth-content";

export function AuthVisualPanel() {
  return (
    <section className="relative hidden overflow-hidden bg-surface-dim md:flex md:w-1/2 lg:w-3/5">
      <Image
        alt="Traditional Bengali wedding detail with henna, bangles, and red silk."
        className="object-cover opacity-95 grayscale-[12%] sepia-[8%] transition-transform duration-[10000ms] hover:scale-110"
        fill
        priority
        quality={100}
        sizes="(min-width: 1024px) 60vw, 50vw"
        src="/images/auth/login-heritage.jpg"
      />

      <div className="absolute top-12 left-12 z-10 max-w-sm rounded-xl bg-inverse-surface/55 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <h1 className="type-brand text-primary-fixed-dim">
          {authCopy.brand}
        </h1>
        <p className="type-body mt-2 text-surface-bright/90">
          {authCopy.visualDescription}
        </p>
      </div>
    </section>
  );
}
