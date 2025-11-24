import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X, Clock } from "lucide-react"
import * as React from "react"

interface StickyTopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  cta?: {
    text: string;
    href: string;
  };
  variant?: "announcement" | "promotional" | "dismissible-timer";
  countdownSeconds?: number; // For dismissible-timer variant
  isInitiallyDismissed?: boolean;
}

export default function StickyTopBar({
  message,
  cta,
  variant = "announcement",
  countdownSeconds = 60,
  isInitiallyDismissed = false,
  className,
  ...props
}: StickyTopBarProps) {
  const [isDismissed, setIsDismissed] = React.useState(isInitiallyDismissed);
  const [timeLeft, setTimeLeft] = React.useState(countdownSeconds);

  React.useEffect(() => {
    if (variant === "dismissible-timer" && !isDismissed && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsDismissed(true);
    }
  }, [timeLeft, isDismissed, variant]);

  if (isDismissed) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className={cn("sticky top-0 z-40 bg-primary text-primary-foreground py-2 px-4 text-center text-sm flex items-center justify-center gap-4", className)} {...props}>
      <p className="flex-1">{message}</p>
      {variant === "promotional" && cta && (
        <Link href={cta.href}>
          <Button variant="secondary" size="sm" className="whitespace-nowrap">
            {cta.text}
          </Button>
        </Link>
      )}
      {variant === "dismissible-timer" && (
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Clock className="h-4 w-4" />
          <span>{formatTime(timeLeft)}</span>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsDismissed(true)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      )}
      {variant !== "dismissible-timer" && ( // Allow dismissing other variants too
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsDismissed(true)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      )}
    </div>
  );
}
