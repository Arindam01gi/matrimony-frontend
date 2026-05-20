import type { ReactNode } from "react";
import { Search } from "lucide-react";

import { heroSearchFields } from "@/components/landing/content";

function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="text-sm font-semibold text-on-surface-variant">{children}</label>;
}

function SearchSelect({ options }: { options: { label: string; value: string }[] }) {
  return (
    <select className="h-12 w-full rounded-lg border-none bg-surface-container-low px-4 text-base text-foreground outline-none focus:ring-2 focus:ring-primary">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function HeroSearchCard() {
  return (
    <div className="mt-8 w-full max-w-4xl rounded-xl border border-white/40 bg-white/[0.88] p-4 shadow-2xl backdrop-blur-[12px] sm:p-5 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.2fr] lg:items-end">
        <div className="space-y-2">
          <FieldLabel>{heroSearchFields.lookingFor.label}</FieldLabel>
          <SearchSelect options={heroSearchFields.lookingFor.options ?? []} />
        </div>

        <div className="space-y-2">
          <FieldLabel>{heroSearchFields.ageFrom.label}</FieldLabel>
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1">
              <SearchSelect options={heroSearchFields.ageFrom.options ?? []} />
            </div>
            <span className="self-center text-on-surface-variant">to</span>
            <div className="min-w-0 flex-1">
              <SearchSelect options={heroSearchFields.ageTo.options ?? []} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <FieldLabel>{heroSearchFields.religion.label}</FieldLabel>
          <SearchSelect options={heroSearchFields.religion.options ?? []} />
        </div>

        <div className="space-y-2">
          <FieldLabel>{heroSearchFields.location.label}</FieldLabel>
          <input
            aria-label="Location"
            className="h-12 w-full rounded-lg border-none bg-surface-container-low px-4 text-base text-foreground outline-none focus:ring-2 focus:ring-primary"
            placeholder={heroSearchFields.location.placeholder}
          />
        </div>

        <button
          className="flex h-12 min-w-[154px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary-container px-5 text-sm font-semibold text-on-primary-container transition-all hover:shadow-lg active:scale-95 sm:col-span-2 lg:col-span-1"
          type="button"
        >
          <Search className="size-4" />
          Explore Profiles
        </button>
      </div>
    </div>
  );
}
