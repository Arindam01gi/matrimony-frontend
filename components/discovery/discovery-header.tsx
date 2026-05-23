"use client";

import { Filter, ListFilter, SlidersHorizontal, Sparkles } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { activeFilters, sortOptions } from "./discovery-data";

export function DiscoveryHeader({
  activeCount,
  onOpenFilters,
  resultCount,
  setSortBy,
  sortBy,
}: {
  activeCount: number;
  onOpenFilters: () => void;
  resultCount: number;
  setSortBy: (value: string) => void;
  sortBy: string;
}) {
  return (
    <header className="mb-5 flex flex-col gap-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="min-w-0">
          <div className="type-caption mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-3 py-1 font-semibold text-primary">
            <Sparkles className="size-4" />
            <span>Curated for your preferences</span>
          </div>
          <h1 className="type-app-title text-on-surface">Discover Matches</h1>
          <p className="type-body mt-2 max-w-2xl text-on-surface-variant">
            {resultCount} high-intent profiles match your current age,
            education, and cultural preferences.
          </p>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            aria-label="Open discovery filters"
            onClick={onOpenFilters}
            className="type-button inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 text-on-surface-variant transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95 xl:hidden"
          >
            <Filter className="size-4" />
            <span>{activeCount} filters</span>
          </button>
          <SortControl setSortBy={setSortBy} sortBy={sortBy} />
        </div>
      </div>
    </header>
  );
}

export function SortControl({
  compact = false,
  setSortBy,
  sortBy,
}: {
  compact?: boolean;
  setSortBy: (value: string) => void;
  sortBy: string;
}) {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
      <SelectTrigger
        aria-label="Sort discovery profiles"
        className={cn(
          "min-h-11 w-full border-outline-variant/30 bg-white px-4 text-on-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
          !compact && "w-[190px]",
        )}
      >
        <ListFilter className="size-4 text-primary" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function ActiveFilterChips() {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-2">
      <span className="type-caption font-semibold text-on-surface-variant">
        Active:
      </span>
      {activeFilters.map((filter) => (
        <span
          key={filter}
          className="type-caption inline-flex min-h-8 items-center rounded-full border border-outline-variant/20 bg-white px-3 font-semibold text-on-surface-variant"
        >
          {filter}
        </span>
      ))}
    </div>
  );
}

export function MobileDiscoveryToolbar({
  onOpenFilters,
  setSortBy,
  sortBy,
}: {
  onOpenFilters: () => void;
  setSortBy: (value: string) => void;
  sortBy: string;
}) {
  return (
    <div className="sticky top-16 z-30 -mx-5 mb-5 border-y border-outline-variant/20 bg-surface/92 px-5 py-3 backdrop-blur-md md:-mx-10 md:px-10 lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          aria-label="Open discovery filters"
          onClick={onOpenFilters}
          className="type-button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 text-on-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        >
          <SlidersHorizontal className="size-4" />
          <span>Filters</span>
        </button>
        <SortControl setSortBy={setSortBy} sortBy={sortBy} compact />
      </div>
    </div>
  );
}
