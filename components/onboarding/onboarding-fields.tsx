import { cn } from "@/lib/utils";

import {
  ChipsField,
  OnboardingField,
  RadioField,
  TextField,
} from "./onboarding-types";

export function LifestyleFields({
  onChange,
  values,
}: {
  onChange: (id: string, value: string) => void;
  values: Record<string, string>;
}) {
  const height = values.height || "165";

  return (
    <div className="flex-1 space-y-6">
      <section className="space-y-3">
        <FieldLabel>Diet</FieldLabel>
        <SegmentedOptions
          columns="four"
          id="diet"
          onChange={onChange}
          options={["Vegetarian", "Non-Vegetarian", "Eggetarian", "Vegan"]}
          value={values.diet ?? ""}
        />
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        <section className="space-y-3">
          <FieldLabel>Smoking</FieldLabel>
          <SegmentedOptions
            columns="three"
            id="smoking"
            onChange={onChange}
            options={["Never", "Occasionally", "Regularly"]}
            value={values.smoking ?? ""}
          />
        </section>
        <section className="space-y-3">
          <FieldLabel>Drinking</FieldLabel>
          <SegmentedOptions
            columns="three"
            id="drinking"
            onChange={onChange}
            options={["Never", "Occasionally", "Socially"]}
            value={values.drinking ?? ""}
          />
        </section>
      </div>

      <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-2">
          <FieldLabel htmlFor="maritalStatus">Marital Status</FieldLabel>
          <select
            id="maritalStatus"
            className="type-body h-12 w-full cursor-pointer rounded-lg border-none bg-surface px-4 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none focus:ring-2 focus:ring-primary"
            value={values.maritalStatus ?? ""}
            onChange={(event) => onChange("maritalStatus", event.target.value)}
          >
            <option value="">Select Marital Status</option>
            {["Never Married", "Divorced", "Widowed", "Awaiting Divorce"].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ),
            )}
          </select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <FieldLabel htmlFor="height">Height</FieldLabel>
            <span className="type-stat text-primary">{height} cm</span>
          </div>
          <input
            className="preference-slider w-full"
            id="height"
            max={210}
            min={140}
            onChange={(event) => onChange("height", event.target.value)}
            type="range"
            value={height}
          />
        </div>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="aboutMe">About Me</FieldLabel>
        <textarea
          className="type-body min-h-[136px] w-full resize-none rounded-lg border-none bg-surface px-4 py-3 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary"
          id="aboutMe"
          onChange={(event) => onChange("aboutMe", event.target.value)}
          placeholder="Write a few lines about your personality, values, and the life you hope to build."
          value={values.aboutMe ?? ""}
        />
      </div>
    </div>
  );
}

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label className="type-label block text-on-surface-variant" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

function SegmentedOptions({
  columns,
  id,
  onChange,
  options,
  value,
}: {
  columns: "four" | "three";
  id: string;
  onChange: (id: string, value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        columns === "four" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3",
      )}
    >
      {options.map((option) => {
        const isActive = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(id, option)}
            className={cn(
              "type-button flex h-12 min-w-0 cursor-pointer items-center justify-center rounded-lg px-3 text-center ring-1 transition-all active:scale-[0.98]",
              isActive
                ? "bg-primary-container text-on-primary ring-primary"
                : "bg-surface text-on-surface-variant ring-outline-variant/30 hover:text-primary hover:ring-primary/60",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function FieldControl({
  field,
  onChange,
  onToggleChip,
  selectedChips,
  value,
}: {
  field: OnboardingField;
  onChange: (id: string, value: string) => void;
  onToggleChip: (id: string, option: string) => void;
  selectedChips?: Set<string>;
  value: string;
}) {
  const sharedInputClass =
    "type-body h-12 w-full rounded-lg border-none bg-surface px-4 text-on-surface ring-1 ring-outline-variant/30 transition-all outline-none placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary";

  if (field.type === "radio") {
    return (
      <FormBlock
        className={field.options.length >= 4 ? "md:col-span-2" : ""}
        label={field.label}
      >
        <RadioOptions field={field} onChange={onChange} value={value} />
      </FormBlock>
    );
  }

  if (field.type === "select") {
    return (
      <FormBlock
        className={field.id === "maritalStatus" ? "md:col-span-2" : ""}
        htmlFor={field.id}
        label={field.label}
      >
        <select
          id={field.id}
          className={cn(sharedInputClass, "cursor-pointer")}
          value={value}
          onChange={(event) => onChange(field.id, event.target.value)}
        >
          <option value="">{field.placeholder ?? "Select"}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormBlock>
    );
  }

  if (field.type === "chips") {
    return (
      <ChipField
        field={field}
        onToggleChip={onToggleChip}
        selectedChips={selectedChips}
      />
    );
  }

  const textField = field as TextField;

  return (
    <FormBlock htmlFor={field.id} label={field.label}>
      <input
        className={sharedInputClass}
        id={field.id}
        onChange={(event) => onChange(field.id, event.target.value)}
        placeholder={textField.placeholder}
        type={textField.type}
        value={value}
      />
    </FormBlock>
  );
}

function RadioOptions({
  field,
  onChange,
  value,
}: {
  field: RadioField;
  onChange: (id: string, value: string) => void;
  value: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        field.options.length <= 2 ? "grid-cols-2" : "",
        field.options.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "",
        field.options.length >= 4 ? "grid-cols-2 md:grid-cols-4" : "",
      )}
    >
      {field.options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(field.id, option)}
          className={cn(
            "type-button flex h-12 min-w-0 cursor-pointer items-center justify-center rounded-lg px-3 text-center ring-1 transition-all active:scale-[0.98]",
            value === option
              ? "bg-primary-container text-on-primary ring-primary"
              : "bg-surface text-on-surface-variant ring-outline-variant/30 hover:text-primary hover:ring-primary/60",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function ChipField({
  field,
  onToggleChip,
  selectedChips,
}: {
  field: ChipsField;
  onToggleChip: (id: string, option: string) => void;
  selectedChips?: Set<string>;
}) {
  return (
    <div className="flex h-full flex-col justify-start gap-2 md:col-span-2">
      <label className="type-label block h-5 text-on-surface-variant">
        {field.label}
      </label>
      <div className="flex min-h-12 flex-wrap content-start gap-2">
        {field.options.map((option) => {
          const isActive = selectedChips?.has(option) ?? false;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggleChip(field.id, option)}
              className={cn(
                "type-caption h-9 cursor-pointer rounded-full border px-4 font-semibold transition-all active:scale-95",
                isActive
                  ? "border-primary bg-primary-container text-on-primary"
                  : "border-outline-variant/40 bg-surface text-on-surface-variant hover:border-primary hover:text-primary",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FormBlock({
  children,
  className,
  htmlFor,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
  label: string;
}) {
  return (
    <div className={cn("flex h-full flex-col justify-start gap-2", className)}>
      <label
        className="type-label block h-5 text-on-surface-variant"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
