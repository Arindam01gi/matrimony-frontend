"use client";

import Link from "next/link";
import { EyeOff, Heart, MessageCircleHeart } from "lucide-react";

import { PROFILE_DETAILS_PATH } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { DiscoveryProfile } from "./discovery-data";

export function ProfileActions({
  isShortlisted,
  onHide,
  onToggleShortlist,
  profile,
}: {
  isShortlisted: boolean;
  onHide: () => void;
  onToggleShortlist: () => void;
  profile: DiscoveryProfile;
}) {
  return (
    <div className="mt-4 border-t border-outline-variant/15 pt-4">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="type-caption inline-flex items-center gap-1 rounded-full bg-[#006f6e]/10 px-3 py-1 font-bold text-[#006f6e]">
          <span className="size-1.5 rounded-full bg-[#006f6e]" />
          {profile.lastActive}
        </span>
        <span className="type-caption rounded-full bg-surface-container-low px-3 py-1 font-semibold text-on-surface-variant">
          {profile.language}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(120px,1fr)_minmax(120px,1fr)_minmax(120px,1fr)_auto]">
        <Link
          href={PROFILE_DETAILS_PATH}
          className="type-button inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 text-white transition-colors hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        >
          View profile
        </Link>
        <ShortlistButton
          isShortlisted={isShortlisted}
          onToggleShortlist={onToggleShortlist}
          profile={profile}
        />
        <button
          type="button"
          aria-label={`Send interest to ${profile.name}`}
          className="type-button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-secondary-container px-3 text-on-secondary-container transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        >
          <MessageCircleHeart className="size-4" />
          <span>Interest</span>
        </button>
        <button
          type="button"
          aria-label={`Hide ${profile.name} from discovery`}
          onClick={onHide}
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        >
          <EyeOff className="size-5" />
        </button>
      </div>
    </div>
  );
}

function ShortlistButton({
  isShortlisted,
  onToggleShortlist,
  profile,
}: {
  isShortlisted: boolean;
  onToggleShortlist: () => void;
  profile: DiscoveryProfile;
}) {
  return (
    <button
      type="button"
      aria-pressed={isShortlisted}
      aria-label={`${isShortlisted ? "Remove" : "Add"} ${profile.name} ${
        isShortlisted ? "from" : "to"
      } shortlist`}
      onClick={onToggleShortlist}
      className={cn(
        "type-button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95",
        isShortlisted
          ? "bg-primary-fixed-dim text-on-surface"
          : "bg-surface-container-high text-primary hover:bg-surface-container-highest",
      )}
    >
      <Heart className={cn("size-4", isShortlisted && "fill-current")} />
      <span>Shortlist</span>
    </button>
  );
}
