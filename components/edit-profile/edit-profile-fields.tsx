import { cn } from "@/lib/utils";

export function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="space-y-2">
      <span className="type-label block text-on-surface-variant">{label}</span>
      <input
        {...props}
        className="type-body h-12 w-full rounded-lg border-0 bg-surface px-4 text-on-surface outline-none transition-shadow placeholder:text-on-surface-variant/60 focus:ring-2 focus:ring-primary/70 disabled:cursor-not-allowed disabled:bg-surface-container-low disabled:text-on-surface-variant/70"
      />
    </label>
  );
}

export function TextArea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="space-y-2 md:col-span-2">
      <span className="type-label block text-on-surface-variant">{label}</span>
      <textarea
        {...props}
        rows={4}
        className="type-body w-full resize-none rounded-lg border-0 bg-surface px-4 py-3 text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-primary/70"
      />
    </label>
  );
}

export function SelectField({
  defaultValue,
  label,
  options,
}: {
  defaultValue: string;
  label: string;
  options: string[];
}) {
  return (
    <label className="space-y-2">
      <span className="type-label block text-on-surface-variant">{label}</span>
      <select
        defaultValue={defaultValue}
        className="type-body h-12 w-full cursor-pointer rounded-lg border-0 bg-surface px-4 text-on-surface outline-none transition-shadow focus:ring-2 focus:ring-primary/70"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function SegmentedOption({
  checked = false,
  label,
}: {
  checked?: boolean;
  label: string;
}) {
  return (
    <label
      className={cn(
        "type-button flex h-12 cursor-pointer items-center justify-center rounded-lg border transition-colors",
        checked
          ? "border-primary bg-surface-container-low text-primary"
          : "border-outline-variant/30 bg-surface text-on-surface-variant hover:text-primary",
      )}
    >
      <input
        className="sr-only"
        defaultChecked={checked}
        name="family_type"
        type="radio"
      />
      <span>{label}</span>
    </label>
  );
}
