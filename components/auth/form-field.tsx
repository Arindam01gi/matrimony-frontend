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
        className="type-label ml-1 text-on-surface-variant"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
