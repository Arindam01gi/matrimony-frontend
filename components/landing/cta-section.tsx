export function CtaSection() {
  return (
    <section className="py-16 md:py-20" id="premium">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center text-on-primary md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative z-10">
            <h2 className="text-[32px] leading-[40px] font-bold md:text-[40px] md:leading-[48px]">
              Begin Your Journey Today
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-xl text-[18px] leading-[28px] text-on-primary/80">
              Join the most exclusive Bengali matrimonial community and find the
              partner your heart has been searching for.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <button
                className="cursor-pointer rounded-full bg-secondary-container px-10 py-4 text-sm font-semibold text-on-secondary-container shadow-xl transition-all hover:bg-secondary active:scale-95"
                type="button"
              >
                Register for Free
              </button>
              <button
                className="cursor-pointer rounded-full border-2 border-on-primary/30 bg-transparent px-10 py-4 text-sm font-semibold text-on-primary transition-all hover:bg-white/10 active:scale-95"
                type="button"
              >
                View Premium Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
