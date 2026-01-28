import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-primary/20 text-primary-light border-primary/30",
    success: "bg-accent-green/20 text-accent-green border-accent-green/30",
    warning: "bg-accent-yellow/20 text-accent-yellow border-accent-yellow/30",
    error: "bg-accent-red/20 text-accent-red border-accent-red/30",
    outline: "bg-transparent text-text-light border-border-dark",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
