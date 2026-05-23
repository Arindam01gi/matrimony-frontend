import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Check, Crown, MapPin, User, X } from "lucide-react";

import { PROFILE_DETAILS_PATH } from "@/lib/routes";

import { InterestedProfile } from "./likes-data";

export function InterestCard({ profile }: { profile: InterestedProfile }) {
  const isGold = profile.statusStyle === "gold";

  return (
    <article className="group overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(154,0,41,0.08)]">
      <div className="grid gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
        <Link
          href={PROFILE_DETAILS_PATH}
          aria-label={`Open ${profile.name}'s profile`}
          className="relative block aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[260px]"
        >
          <Image
            fill
            sizes="(min-width: 768px) 220px, calc(100vw - 40px)"
            src={profile.image}
            alt={profile.alt}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <InterestStatus isGold={isGold} profile={profile} />
          </div>
        </Link>

        <div className="flex min-w-0 flex-col p-5 md:p-6">
          <InterestHeader profile={profile} />
          <div className="mt-4 rounded-lg bg-surface-container-low p-4">
            <p className="type-body-sm text-on-surface-variant">
              &quot;{profile.preview}&quot;
            </p>
            <p className="type-caption mt-2 font-semibold text-primary">
              Sent interest {profile.receivedAt}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="type-caption rounded-lg border border-outline-variant/20 bg-white px-3 py-1 text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <InterestActions profile={profile} />
        </div>
      </div>
    </article>
  );
}

function InterestStatus({
  isGold,
  profile,
}: {
  isGold: boolean;
  profile: InterestedProfile;
}) {
  return (
    <span
      className={[
        "type-caption inline-flex items-center gap-1 rounded-full px-3 py-1 font-bold backdrop-blur-sm",
        isGold
          ? "bg-secondary-container/90 text-on-secondary-container"
          : "bg-[#006f6e]/90 text-[#9befed]",
      ].join(" ")}
    >
      {isGold ? (
        <Crown className="size-3.5 fill-current" />
      ) : (
        <BadgeCheck className="size-3.5" />
      )}
      {profile.status}
    </span>
  );
}

function InterestHeader({ profile }: { profile: InterestedProfile }) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
      <div className="min-w-0">
        <Link href={PROFILE_DETAILS_PATH} className="group/title">
          <h2 className="type-profile-name text-on-surface transition-colors group-hover/title:text-primary">
            {profile.name}, {profile.age}
          </h2>
        </Link>
        <p className="type-label mt-1 text-on-surface-variant">{profile.meta}</p>
        <p className="type-caption mt-2 flex items-center gap-1 text-on-surface-variant">
          <MapPin className="size-3.5" />
          <span>{profile.location}</span>
        </p>
      </div>
      <div className="type-caption shrink-0 rounded-full bg-surface-container-low px-3 py-1 font-bold text-primary">
        {profile.match}
      </div>
    </div>
  );
}

function InterestActions({ profile }: { profile: InterestedProfile }) {
  return (
    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
      <Link
        href={PROFILE_DETAILS_PATH}
        className="type-button inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-container active:scale-95"
      >
        <User className="size-4" />
        <span>View Profile</span>
      </Link>
      <button
        type="button"
        className="type-button inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-surface-container-high px-4 py-3 text-primary transition-colors hover:bg-surface-container-highest active:scale-95"
      >
        <Check className="size-4" />
        <span>Accept</span>
      </button>
      <button
        type="button"
        aria-label={`Decline interest from ${profile.name}`}
        className="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-container-low active:scale-95"
      >
        <X className="size-5" />
      </button>
    </div>
  );
}
