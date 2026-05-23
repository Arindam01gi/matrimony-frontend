"use client";

import { useMemo, useState } from "react";

import { activeFilters, profiles } from "./discovery-data";
import { FilterSidebar, MobileFilterSheet } from "./discovery-filters";
import {
  ActiveFilterChips,
  DiscoveryHeader,
  MobileDiscoveryToolbar,
} from "./discovery-header";
import { ProfileCard } from "./discovery-profile-card";

export function DiscoveryFeedPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Relevance");
  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [hiddenProfiles, setHiddenProfiles] = useState<string[]>([]);

  const visibleProfiles = useMemo(() => {
    const filteredProfiles = profiles.filter(
      (profile) => !hiddenProfiles.includes(profile.id),
    );

    if (sortBy === "Highest match") {
      return [...filteredProfiles].sort((a, b) => b.matchScore - a.matchScore);
    }

    if (sortBy === "Recently active") {
      return [...filteredProfiles].sort((a, b) =>
        a.lastActive.localeCompare(b.lastActive),
      );
    }

    return filteredProfiles;
  }, [hiddenProfiles, sortBy]);

  const toggleShortlist = (profileId: string) => {
    setShortlisted((currentProfiles) =>
      currentProfiles.includes(profileId)
        ? currentProfiles.filter((id) => id !== profileId)
        : [...currentProfiles, profileId],
    );
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-12 gap-6 px-5 pt-24 pb-32 md:px-10 lg:gap-8 lg:pb-16">
        <FilterSidebar />

        <section className="col-span-12 min-w-0 lg:col-span-8">
          <DiscoveryHeader
            activeCount={activeFilters.length}
            onOpenFilters={() => setIsFilterOpen(true)}
            resultCount={visibleProfiles.length}
            setSortBy={setSortBy}
            sortBy={sortBy}
          />

          <ActiveFilterChips />

          <MobileDiscoveryToolbar
            onOpenFilters={() => setIsFilterOpen(true)}
            setSortBy={setSortBy}
            sortBy={sortBy}
          />

          <div className="space-y-4">
            {visibleProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                isShortlisted={shortlisted.includes(profile.id)}
                onHide={() =>
                  setHiddenProfiles((currentProfiles) => [
                    ...currentProfiles,
                    profile.id,
                  ])
                }
                onToggleShortlist={() => toggleShortlist(profile.id)}
                profile={profile}
              />
            ))}
          </div>

          <DiscoveryEndCard />
        </section>
      </main>

      <MobileFilterSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}

function DiscoveryEndCard() {
  return (
    <div className="mt-8 rounded-xl border border-outline-variant/20 bg-white p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <p className="type-label text-on-surface">
        You are caught up on today&apos;s curated matches.
      </p>
      <p className="type-body-sm mt-1 text-on-surface-variant">
        New profiles refresh as your preferences and activity become more
        specific.
      </p>
      <button
        type="button"
        className="type-button mt-4 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-surface-container-high px-5 text-primary transition-colors hover:bg-surface-container-highest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
      >
        Load more profiles
      </button>
    </div>
  );
}
