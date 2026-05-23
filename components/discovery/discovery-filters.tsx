"use client";

import { SlidersHorizontal, X } from "lucide-react";

import { FilterContent } from "./discovery-filter-content";

export function FilterSidebar() {
  return (
    <aside className="col-span-4 hidden lg:block">
      <div className="sticky top-24 overflow-hidden rounded-2xl border border-outline-variant/20 bg-white shadow-[0_12px_36px_rgba(34,25,25,0.07)]">
        <FilterContent />
      </div>
    </aside>
  );
}

export function MobileFilterSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Discovery filters"
    >
      <button
        type="button"
        aria-label="Close filters"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-y-auto rounded-t-2xl bg-white p-5 shadow-[0_-12px_40px_rgba(34,25,25,0.18)]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="type-caption mb-1 inline-flex items-center gap-2 font-semibold text-primary">
              <SlidersHorizontal className="size-4" />
              <span>Mobile filters</span>
            </div>
            <h2 className="type-section-title">Refine matches</h2>
          </div>
          <button
            type="button"
            aria-label="Close filters"
            onClick={onClose}
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            <X className="size-5" />
          </button>
        </div>
        <FilterContent onApply={onClose} />
      </div>
    </div>
  );
}
