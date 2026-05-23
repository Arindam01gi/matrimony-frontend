import { LockKeyhole } from "lucide-react";

import { categories } from "./chat-data";

export function ConnectionRail() {
  return (
    <aside className="min-w-0 border-b border-outline-variant/20 bg-[#fffdfd] p-3 lg:flex lg:flex-col lg:border-r lg:border-b-0 lg:p-0">
      <div className="hidden border-b border-outline-variant/10 px-5 py-5 lg:block">
        <p className="type-eyebrow text-primary">Inbox</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <RailStat label="Active" value="18" />
          <RailStat label="Unread" value="3" />
        </div>
      </div>

      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible lg:p-3">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={[
                "type-button group relative flex min-h-11 shrink-0 cursor-pointer items-center gap-3 rounded-lg px-3 transition-all active:scale-95 lg:w-full",
                item.active
                  ? "bg-surface-container-low text-primary"
                  : "bg-white text-on-surface-variant hover:bg-surface-container-low lg:bg-transparent",
              ].join(" ")}
            >
              {item.active ? (
                <span className="absolute top-2 bottom-2 left-0 w-1 rounded-r-full bg-primary" />
              ) : null}
              <span
                className={[
                  "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                  item.active
                    ? "bg-white text-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant group-hover:text-primary",
                ].join(" ")}
              >
                <Icon className="size-4.5" />
              </span>
              <span className="min-w-0 flex-1 truncate text-left">
                {item.label}
              </span>
              <span
                className={[
                  "type-caption rounded-full px-2 py-0.5 font-bold",
                  item.active
                    ? "bg-primary text-white"
                    : "bg-surface-container-high text-on-surface-variant",
                ].join(" ")}
              >
                {item.count}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mx-3 mb-3 mt-auto hidden rounded-lg border border-outline-variant/20 bg-surface-container-low p-4 lg:block">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white text-primary">
            <LockKeyhole className="size-4.5" />
          </span>
          <p className="type-label text-on-surface">Safe chat</p>
        </div>
        <button
          type="button"
          className="type-caption w-full cursor-pointer rounded-lg bg-white px-3 py-2 font-bold text-primary transition-colors hover:bg-surface"
        >
          Review settings
        </button>
      </div>
    </aside>
  );
}

function RailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface-container-low px-3 py-2">
      <p className="type-stat text-primary">{value}</p>
      <p className="type-micro font-normal text-on-surface-variant">{label}</p>
    </div>
  );
}
