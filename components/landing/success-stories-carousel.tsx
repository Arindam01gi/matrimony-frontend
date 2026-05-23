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
        <div className="max-w-[350px] sm:max-w-2xl">
          <h2 className="type-page-title text-foreground">
            Eternal Connections
          </h2>
          <p className="type-body mt-2 text-on-surface-variant">
            Real stories from couples who found their forever through Shubho
            Shomproti.
          </p>
        </div>

        <div className="flex justify-start gap-4 md:justify-end">
          <Button
            aria-label="Show previous success stories"
            className="size-12 rounded-full border border-outline-variant bg-white/70 text-foreground shadow-sm hover:bg-primary hover:text-white"
            onClick={() => scrollCarousel("previous")}
            size="icon"
            variant="ghost"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            aria-label="Show next success stories"
            className="size-12 rounded-full border border-outline-variant bg-white/70 text-foreground shadow-sm hover:bg-primary hover:text-white"
            onClick={() => scrollCarousel("next")}
            size="icon"
            variant="ghost"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      <div
        className="flex snap-x gap-6 overflow-x-auto pb-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
      >
        {successStories.map((story) => (
          <SuccessStoryCard key={story.name} story={story} />
        ))}
      </div>
    </div>
  );
}
