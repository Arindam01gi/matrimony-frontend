import Image from "next/image";
import { Star } from "lucide-react";

import type { SuccessStory } from "@/components/landing/types";
import { Card, CardContent } from "@/components/ui/card";

export function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <Card className="group/card min-w-[320px] snap-center gap-0 overflow-hidden rounded-2xl border-outline-variant/45 bg-white py-0 shadow-[0_12px_34px_rgba(56,46,46,0.07)] md:min-w-[380px]">
      <div className="relative h-64 overflow-hidden bg-surface-container-low">
        <Image
          alt={story.imageAlt}
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          fill
          sizes="(max-width: 768px) 320px, 380px"
          src={story.imageSrc}
        />
      </div>
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center gap-1 text-secondary">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="size-3.5 fill-current" />
          ))}
        </div>
        <h3 className="type-profile-name text-foreground">
          {story.name}
        </h3>
        <p className="type-body text-on-surface-variant italic">{story.quote}</p>
      </CardContent>
    </Card>
  );
}
