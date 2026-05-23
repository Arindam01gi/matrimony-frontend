"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import { PROFILE_DETAILS_PATH } from "@/lib/routes";

import { DiscoveryProfile } from "./discovery-data";
import { ProfileActions } from "./discovery-profile-actions";

export function ProfileCard({
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
    <article className="group overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(154,0,41,0.08)]">
      <div className="grid md:grid-cols-[260px_minmax(0,1fr)]">
        <ProfileImage profile={profile} />
        <div className="flex min-w-0 flex-col p-5">
          <ProfileCardHeader profile={profile} />
          <p className="type-body-sm mt-3 line-clamp-1 text-on-surface-variant">
            {profile.summary}
          </p>
          <ProfileSignals profile={profile} />
          <MatchedReasons profile={profile} />
          <ProfileActions
            isShortlisted={isShortlisted}
            onHide={onHide}
            onToggleShortlist={onToggleShortlist}
            profile={profile}
          />
        </div>
      </div>
    </article>
  );
}

function ProfileImage({ profile }: { profile: DiscoveryProfile }) {
  return (
    <Link
      href={PROFILE_DETAILS_PATH}
      aria-label={`Open ${profile.name}'s profile`}
      className="relative block aspect-[4/5] overflow-hidden bg-surface-container-low md:aspect-auto md:min-h-[320px]"
    >
      <Image
        fill
        sizes="(min-width: 768px) 260px, calc(100vw - 40px)"
        src={profile.image}
        alt={profile.alt}
        className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
      <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 shadow-sm backdrop-blur-sm">
        <span className="type-caption font-bold text-primary">
          {profile.matchScore}% match
        </span>
      </div>
    </Link>
  );
}

function ProfileCardHeader({ profile }: { profile: DiscoveryProfile }) {
  return (
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
      <div className="min-w-0">
        <Link href={PROFILE_DETAILS_PATH} className="group/title">
          <h2 className="type-profile-name text-on-surface transition-colors group-hover/title:text-primary">
            {profile.name}, {profile.age}
          </h2>
        </Link>
        <p className="type-label mt-1 text-on-surface-variant">
          {profile.profession}
        </p>
        <p className="type-caption mt-2 flex items-center gap-1 font-medium text-on-surface-variant">
          <MapPin className="size-3.5" />
          <span>{profile.city}</span>
        </p>
      </div>
      <div className="type-caption inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-[#006f6e]/10 px-3 py-1 font-bold text-[#006f6e]">
        <BadgeCheck className="size-3.5" />
        {profile.trust}
      </div>
    </div>
  );
}

function ProfileSignals({ profile }: { profile: DiscoveryProfile }) {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-3">
      <Signal icon={<GraduationCap className="size-4" />} text={profile.highlights[0]} />
      <Signal icon={<Users className="size-4" />} text={profile.highlights[1]} />
      <Signal icon={<Sparkles className="size-4" />} text={profile.highlights[2]} />
    </div>
  );
}

function MatchedReasons({ profile }: { profile: DiscoveryProfile }) {
  return (
    <div className="mt-4 rounded-xl bg-surface-container-low px-4 py-3">
      <p className="type-caption mb-2 font-bold text-primary">Why matched</p>
      <div className="flex flex-wrap gap-2">
        {profile.reasons.map((reason) => (
          <span
            key={reason}
            className="type-caption rounded-full bg-white px-2.5 py-1 font-semibold text-on-surface-variant"
          >
            {reason}
          </span>
        ))}
      </div>
    </div>
  );
}

function Signal({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-lg border border-outline-variant/15 bg-white px-3 py-2.5 text-on-surface-variant">
      <span className="shrink-0 text-primary">{icon}</span>
      <span className="type-caption line-clamp-1 font-medium">{text}</span>
    </div>
  );
}
