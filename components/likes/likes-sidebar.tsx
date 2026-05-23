import Link from "next/link";
import { ShieldCheck, Sparkles } from "lucide-react";

import { MY_PROFILE_PATH } from "@/lib/routes";

import { summaryStats } from "./likes-data";

export function LikesSidebar() {
  return (
    <aside className="col-span-12 lg:col-span-4">
      <div className="sticky top-24 space-y-4">
        <section className="rounded-xl border border-outline-variant/20 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-surface-container-high text-primary">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h2 className="type-section-title">Your activity</h2>
              <p className="type-caption text-on-surface-variant">Last 7 days</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {summaryStats.map(([label, value]) => (
              <div key={label} className="rounded-lg bg-surface-container-low p-4">
                <p className="type-stat text-primary">{value}</p>
                <p className="type-caption mt-1 font-medium text-on-surface-variant">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-outline-variant/20 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div className="mb-4 flex items-center gap-3 text-primary">
            <ShieldCheck className="size-6" />
            <h2 className="type-section-title text-on-surface">Stand out more</h2>
          </div>
          <p className="type-body-sm text-on-surface-variant">
            Complete your profile details to help serious interests make a
            confident first move.
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-container-high">
            <div className="h-full w-[78%] rounded-full bg-primary" />
          </div>
          <div className="type-caption mt-3 flex items-center justify-between font-semibold">
            <span className="text-on-surface-variant">Profile strength</span>
            <span className="text-primary">78%</span>
          </div>
          <Link
            href={MY_PROFILE_PATH}
            className="type-button mt-5 inline-flex w-full justify-center rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary-container active:scale-95"
          >
            Improve profile
          </Link>
        </section>
      </div>
    </aside>
  );
}
