export function CtaSection() {
  return (
    <section className="py-16 md:py-20" id="premium">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#8f0026_0%,#c70038_54%,#9a0029_100%)] p-8 text-center text-on-primary shadow-[0_22px_60px_rgba(154,0,41,0.16)] md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-12 [background-image:linear-gradient(135deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative z-10">
            <h2 className="type-hero">
              Begin Your Journey Today
            </h2>
            <p className="type-body-lg mx-auto mt-4 mb-8 max-w-xl text-on-primary/80">
              Join the most exclusive Bengali matrimonial community and find the
              partner your heart has been searching for.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <button
                className="type-button cursor-pointer rounded-full bg-secondary-container px-10 py-4 text-on-secondary-container shadow-xl transition-all hover:bg-secondary active:scale-95"
                type="button"
              >
                Register for Free
              </button>
              <button
                className="type-button cursor-pointer rounded-full border border-on-primary/35 bg-white/8 px-10 py-4 text-on-primary transition-all hover:bg-white/14 active:scale-95"
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
