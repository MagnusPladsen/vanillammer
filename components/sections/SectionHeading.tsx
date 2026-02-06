import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-charcoal-900 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="h-[2px] w-16 bg-gold-500/80" />
    </div>
  );
}
