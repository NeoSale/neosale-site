import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "bordered";
  hover?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
}: CardProps) {
  const variants = {
    default: "bg-bg-card-dark",
    glass: "glass",
    bordered: "bg-bg-card-dark border border-border-dark",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        variants[variant],
        hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
