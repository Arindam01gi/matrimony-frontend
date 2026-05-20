import { SuccessStoriesCarousel } from "@/components/landing/success-stories-carousel";

export function SuccessStoriesSection() {
  return (
    <section className="overflow-hidden bg-surface-container-low py-8" id="stories">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SuccessStoriesCarousel />
      </div>
    </section>
  );
}
