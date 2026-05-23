import { SlidersHorizontal } from "lucide-react";

import { activeFilters } from "./discovery-data";

export function FilterSummary() {
  return (
    <div className="border-b border-outline-variant/20 bg-surface-container-low p-6">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-[0_8px_20px_rgba(154,0,41,0.08)]">
          <SlidersHorizontal className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="type-section-title text-on-surface">Match Concierge</h2>
            <span className="type-caption rounded-full bg-white px-3 py-1 font-bold text-primary">
              {activeFilters.length} active
            </span>
          </div>
          <p className="type-body-sm mt-2 text-on-surface-variant">
            Calibrate matches around family intent, culture, education, and
            realistic location fit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <SummaryStat label="Avg. match quality" value="90%" />
        <SummaryStat label="Curated profiles" value="4" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeFilters.map((filter) => (
          <span
            key={filter}
            className="type-caption rounded-full border border-white/70 bg-white/80 px-3 py-1 font-semibold text-on-surface-variant"
          >
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-4">
      <p className="type-stat text-primary">{value}</p>
      <p className="type-caption mt-1 font-semibold text-on-surface-variant">
        {label}
      </p>
    </div>
  );
}
