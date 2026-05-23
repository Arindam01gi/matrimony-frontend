import Link from "next/link";
import { Compass, Heart } from "lucide-react";

import { DISCOVERY_PATH } from "@/lib/routes";

import { InterestCard } from "./interest-card";
import { interestedProfiles } from "./likes-data";
import { LikesSidebar } from "./likes-sidebar";

export function LikesPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-12 gap-6 px-4 pt-24 pb-32 sm:px-5 md:px-10 lg:gap-8 lg:pb-16">
        <section className="col-span-12 lg:col-span-8">
          <div className="mb-8 flex flex-col gap-4">
            <div>
              <div className="type-caption mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 font-semibold text-primary">
                <Heart className="size-4 fill-current" />
                <span>{interestedProfiles.length} new interests</span>
              </div>
              <h1 className="type-app-title text-on-surface">
                Interests Received
              </h1>
              <p className="type-body mt-2 max-w-2xl text-on-surface-variant">
                Review members who have expressed interest and open their full
                profile when you are ready to know more.
              </p>
            </div>

            <Link
              href={DISCOVERY_PATH}
              className="type-button inline-flex w-fit items-center gap-2 text-primary transition-colors hover:text-primary-container"
            >
              <Compass className="size-4" />
              Discover more
            </Link>
          </div>

          {interestedProfiles.length > 0 ? (
            <div className="space-y-4">
              {interestedProfiles.map((profile) => (
                <InterestCard key={profile.name} profile={profile} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>

        <LikesSidebar />
      </main>

    </div>
  );
}

function EmptyState() {
  return (
    <section className="rounded-xl border border-outline-variant/20 bg-white p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface-container-high text-primary">
        <Heart className="size-7" />
      </div>
      <h2 className="type-section-title mt-4">
        No interests yet
      </h2>
      <p className="type-body mx-auto mt-2 max-w-md text-on-surface-variant">
        New interests will appear here as soon as members respond to your
        profile.
      </p>
    </section>
  );
}
