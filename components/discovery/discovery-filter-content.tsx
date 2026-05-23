"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { FilterBlock } from "./discovery-filter-primitives";
import { FilterSummary } from "./discovery-filter-summary";

export function FilterContent({ onApply }: { onApply?: () => void }) {
  return (
    <div className="flex flex-col">
      <FilterSummary />
      <div className="flex flex-col gap-5 p-6">
        <FilterTopline />
        <AgeRangeFilter />
        <SelectFilter
          defaultValue="west-bengal"
          hint="Prioritize nearby matches while keeping relocation open."
          label="Location"
          options={[
            ["west-bengal", "West Bengal, India"],
            ["bangalore", "Bangalore, India"],
            ["london", "London, UK"],
            ["global", "Open to global"],
          ]}
        />
        <EducationFilter />
        <SelectFilter
          defaultValue="bengali"
          hint="Keep cultural expectations explicit and easy to adjust."
          label="Community"
          options={[
            ["bengali", "Bengali"],
            ["brahmin", "Bengali Brahmin"],
            ["kayastha", "Kayastha"],
            ["probashi", "Probashi Bengali"],
          ]}
        />
        <IntentFilter />
        <button
          type="button"
          onClick={onApply}
          className="type-button inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl bg-primary px-5 text-white shadow-[0_10px_24px_rgba(154,0,41,0.16)] transition-all hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 active:scale-95"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

function FilterTopline() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="type-eyebrow text-primary">Refine Search</p>
        <p className="type-caption mt-1 font-medium text-on-surface-variant">
          Preferences shown here are ready for API wiring.
        </p>
      </div>
      <button
        type="button"
        className="type-button inline-flex min-h-10 cursor-pointer items-center rounded-lg px-3 text-primary transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
      >
        Reset
      </button>
    </div>
  );
}

function AgeRangeFilter() {
  return (
    <FilterBlock hint="Most families start with a practical age window." label="Age Range">
      <div className="grid grid-cols-2 gap-3">
        <AgeInput ariaLabel="Minimum age" defaultValue="24" label="From" />
        <AgeInput ariaLabel="Maximum age" defaultValue="32" label="To" />
      </div>
    </FilterBlock>
  );
}

function AgeInput({
  ariaLabel,
  defaultValue,
  label,
}: {
  ariaLabel: string;
  defaultValue: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-outline-variant/15 bg-white px-4 py-3">
      <label className="type-caption font-semibold text-on-surface-variant">
        {label}
      </label>
      <input
        aria-label={ariaLabel}
        className="type-label mt-1 min-h-8 w-full bg-transparent text-on-surface focus:outline-none"
        defaultValue={defaultValue}
        type="number"
      />
    </div>
  );
}

function SelectFilter({
  defaultValue,
  hint,
  label,
  options,
}: {
  defaultValue: string;
  hint: string;
  label: string;
  options: Array<[string, string]>;
}) {
  return (
    <FilterBlock hint={hint} label={label}>
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="min-h-12 w-full border-outline-variant/15 bg-white px-4">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(([value, text]) => (
            <SelectItem key={value} value={value}>
              {text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FilterBlock>
  );
}

function EducationFilter() {
  return (
    <FilterBlock
      hint="A useful signal for lifestyle and long-term planning."
      label="Education"
    >
      <div className="grid grid-cols-3 gap-2">
        {["Graduate+", "Masters", "Doctorate"].map((item, index) => (
          <button
            key={item}
            type="button"
            className={cn(
              "type-caption min-h-11 cursor-pointer rounded-xl px-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35",
              index === 0
                ? "bg-primary text-white shadow-[0_8px_18px_rgba(154,0,41,0.14)]"
                : "border border-outline-variant/20 bg-white text-on-surface-variant hover:bg-white/70",
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </FilterBlock>
  );
}

function IntentFilter() {
  return (
    <FilterBlock
      hint="These filters reduce casual browsing and improve trust."
      label="Intent"
    >
      <div className="grid gap-2">
        <IntentOption defaultChecked label="Family-oriented profiles" />
        <IntentOption label="Verified only" />
      </div>
    </FilterBlock>
  );
}

function IntentOption({
  defaultChecked = false,
  label,
}: {
  defaultChecked?: boolean;
  label: string;
}) {
  return (
    <label className="type-body-sm flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-outline-variant/15 bg-white px-4 text-on-surface-variant transition-colors hover:bg-surface-container-low">
      <input defaultChecked={defaultChecked} type="checkbox" className="size-4 accent-primary" />
      {label}
    </label>
  );
}
