import Image from "next/image";
import { Star } from "lucide-react";

import type { SuccessStory } from "@/components/landing/types";
import { Card, CardContent } from "@/components/ui/card";

export function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <Card className="min-w-[320px] snap-center gap-0 rounded-xl bg-white py-0 shadow-sm md:min-w-[380px]">
      <div className="relative h-64 overflow-hidden">
        <Image
          alt={story.imageAlt}
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          fill
          sizes="(max-width: 768px) 320px, 380px"
          src={story.imageSrc}
        />
      </div>
      <CardContent className="space-y-2 p-4">
        <div className="mb-2 flex items-center gap-1 text-secondary">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="size-3.5 fill-current" />
          ))}
        </div>
        <h3 className="text-[24px] leading-[32px] font-semibold text-foreground">
          {story.name}
        </h3>
        <p className="text-base leading-6 text-on-surface-variant italic">{story.quote}</p>
      </CardContent>
    </Card>
  );
}
