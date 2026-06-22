type CategoryDividerProps = {
  label: string;
  category: string;
  isFirst?: boolean;
};

export default function CategoryDivider({
  label,
  category,
  isFirst = false,
}: CategoryDividerProps) {
  return (
    <div
      className={`mb-2 flex items-center gap-3.5 ${isFirst ? "mt-[38px]" : "mt-16"}`}
    >
      <span className="text-base font-bold">{label}</span>
      <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
        {category}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
