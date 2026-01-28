import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-text-muted-dark max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
