export function FilterBlock({
  children,
  hint,
  label,
}: {
  children: React.ReactNode;
  hint: string;
  label: string;
}) {
  return (
    <section className="rounded-2xl bg-surface-container-low p-4">
      <div className="mb-4">
        <label className="type-label block text-on-surface">{label}</label>
        <p className="type-caption mt-1 font-medium text-on-surface-variant">
          {hint}
        </p>
      </div>
      {children}
    </section>
  );
}
