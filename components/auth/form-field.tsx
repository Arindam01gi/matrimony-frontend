import type { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
  htmlFor: string;
  label: string;
}

export function FormField({ children, htmlFor, label }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        className="ml-1 text-sm leading-5 font-semibold tracking-[0.01em] text-on-surface-variant"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
