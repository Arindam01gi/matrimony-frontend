import type { Dispatch, SetStateAction } from "react";

export function RangePreferenceCard({
  label,
  max,
  min,
  onChange,
  sliderValue,
  value,
}: {
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  sliderValue: number;
  value: string;
}) {
  return (
    <PreferenceCard>
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <PreferenceLabel className="mb-0">{label}</PreferenceLabel>
        <span className="type-stat font-bold text-primary">{value}</span>
      </div>
      <div className="relative w-full py-4">
        <input
          aria-label={label}
          className="preference-slider w-full"
          max={max}
          min={min}
          onChange={(event) => onChange(Number(event.target.value))}
          type="range"
          value={sliderValue}
        />
      </div>
    </PreferenceCard>
  );
}

export function PreferenceCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-surface-variant/30 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-8">
      {children}
    </section>
  );
}

export function PreferenceLabel({
  children,
  className = "mb-4",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={["type-eyebrow block text-on-surface-variant", className].join(" ")}>
      {children}
    </p>
  );
}

export function Chip({
  active,
  children,
  onClick,
  rounded,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  rounded: "full" | "xl";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "type-body cursor-pointer border px-5 py-2 transition-all",
        rounded === "full" ? "rounded-full" : "rounded-xl",
        active
          ? "border-primary bg-primary text-white"
          : "border-surface-variant text-on-surface hover:bg-surface-container-high",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function Switch({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={[
        "relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors",
        checked ? "bg-primary-container" : "bg-surface-variant",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform",
          checked ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </button>
  );
}

export function BackdropMark() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed top-0 right-0 -z-10 h-[600px] w-[600px] text-primary opacity-5"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.1,29.1,72.7,42.1C64.3,55.1,53.2,66.6,40.1,73.5C27,80.4,11.9,82.8,-2.6,87.4C-17.1,91.9,-34.2,98.6,-48.6,93.4C-63.1,88.2,-74.9,71.1,-81.4,54.4C-87.9,37.6,-89.1,21.3,-88.3,5.1C-87.5,-11.1,-84.7,-27.1,-76.8,-41C-68.9,-54.9,-55.9,-66.7,-41.4,-73.7C-26.9,-80.7,-13.4,-82.9,0.7,-84C14.7,-85.1,29.4,-85.1,44.7,-76.4Z"
        fill="currentColor"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function formatHeight(value: number) {
  const feet = Math.floor(value / 30.48);
  const inches = Math.round((value / 2.54) % 12);

  return `${feet}'${inches}"`;
}

export function toggleSetValue(
  setValue: Dispatch<SetStateAction<Set<string>>>,
  value: string,
) {
  setValue((current) => {
    const next = new Set(current);

    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }

    return next;
  });
}
