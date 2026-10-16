type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="balance text-[clamp(2.75rem,5.5vw,5.25rem)] font-semibold leading-[1] tracking-[-0.058em]">{title}</h2>
      {copy && <p className={`pretty mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9 ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>}
    </div>
  );
}
