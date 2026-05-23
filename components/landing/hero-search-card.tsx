import type { ReactNode } from "react";
import { Search } from "lucide-react";

import { heroSearchFields } from "@/components/landing/content";

function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="type-label text-on-surface-variant">{children}</label>;
}

function SearchSelect({ options }: { options: { label: string; value: string }[] }) {
  return (
    <select className="type-body h-12 w-full min-w-0 appearance-none rounded-lg border border-outline-variant/45 bg-surface-container-low px-4 text-foreground outline-none transition focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/20">
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
    <div className="mt-8 w-full min-w-0 max-w-[350px] rounded-2xl border border-white/70 bg-white/[0.92] p-4 shadow-[0_22px_60px_rgba(56,46,46,0.14)] backdrop-blur-[10px] sm:max-w-4xl sm:p-5 md:p-6">
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1.15fr_1fr_1fr_1.15fr] lg:items-end">
        <div className="min-w-0 space-y-2">
          <FieldLabel>{heroSearchFields.lookingFor.label}</FieldLabel>
          <SearchSelect options={heroSearchFields.lookingFor.options ?? []} />
        </div>

        <div className="min-w-0 space-y-2">
          <FieldLabel>{heroSearchFields.ageFrom.label}</FieldLabel>
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
            <div className="min-w-0 flex-1">
              <SearchSelect options={heroSearchFields.ageFrom.options ?? []} />
            </div>
            <span className="self-center text-on-surface-variant">to</span>
            <div className="min-w-0 flex-1">
              <SearchSelect options={heroSearchFields.ageTo.options ?? []} />
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-2">
          <FieldLabel>{heroSearchFields.religion.label}</FieldLabel>
          <SearchSelect options={heroSearchFields.religion.options ?? []} />
        </div>

        <div className="min-w-0 space-y-2">
          <FieldLabel>{heroSearchFields.location.label}</FieldLabel>
          <input
            aria-label="Location"
            className="type-body h-12 w-full min-w-0 rounded-lg border border-outline-variant/45 bg-surface-container-low px-4 text-foreground outline-none transition placeholder:text-on-surface-variant/65 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/20"
            placeholder={heroSearchFields.location.placeholder}
          />
        </div>

        <button
          className="type-button flex h-12 min-w-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary-container px-5 text-white shadow-[0_12px_24px_rgba(154,0,41,0.18)] transition-all hover:bg-primary hover:shadow-[0_16px_32px_rgba(154,0,41,0.24)] active:scale-95 sm:col-span-2 lg:col-span-1"
          type="button"
        >
          <Search className="size-4" />
          Explore Profiles
        </button>
      </div>
    </div>
  );
}
