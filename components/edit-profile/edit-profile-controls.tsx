import { CheckCircle2, LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export function SaveButton({
  isSaving,
  onSave,
}: {
  isSaving: boolean;
  onSave: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={isSaving}
      className="type-button inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 text-on-primary shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:cursor-wait disabled:opacity-80 md:w-auto"
    >
      {isSaving ? (
        <LoaderCircle className="size-4 animate-spin" />
      ) : (
        <CheckCircle2 className="size-4" />
      )}
      <span>{isSaving ? "Saving..." : "Save Changes"}</span>
    </button>
  );
}

export function SectionPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "type-button h-10 shrink-0 cursor-pointer rounded-full px-4 transition-colors",
        active
          ? "bg-primary text-on-primary"
          : "bg-white text-on-surface-variant hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}

export function IconButton({
  children,
  destructive = false,
  label,
}: {
  children: React.ReactNode;
  destructive?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white transition-colors",
        destructive
          ? "text-destructive hover:bg-destructive hover:text-white"
          : "text-primary hover:bg-primary hover:text-on-primary",
      )}
    >
      {children}
    </button>
  );
}
