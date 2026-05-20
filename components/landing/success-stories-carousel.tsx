"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { successStories } from "@/components/landing/content";
import { SuccessStoryCard } from "@/components/landing/success-story-card";
import { Button } from "@/components/ui/button";

export function SuccessStoriesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "previous" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "next" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-[28px] leading-[34px] font-semibold text-foreground md:text-[32px] md:leading-[40px]">
            Eternal Connections
          </h2>
          <p className="mt-2 text-base text-on-surface-variant">
            Real stories from couples who found their forever through Shubho
            Shomproti.
          </p>
        </div>

        <div className="flex justify-start gap-4 md:justify-end">
          <Button
            aria-label="Show previous success stories"
            className="size-12 rounded-full border border-outline bg-transparent text-foreground hover:bg-primary hover:text-white"
            onClick={() => scrollCarousel("previous")}
            size="icon"
            variant="ghost"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            aria-label="Show next success stories"
            className="size-12 rounded-full border border-outline bg-transparent text-foreground hover:bg-primary hover:text-white"
            onClick={() => scrollCarousel("next")}
            size="icon"
            variant="ghost"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      <div
        className="flex snap-x gap-8 overflow-x-auto pb-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
      >
        {successStories.map((story) => (
          <SuccessStoryCard key={story.name} story={story} />
        ))}
      </div>
    </div>
  );
}
