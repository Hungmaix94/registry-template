import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

interface SubscribeNewsletterProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: "simple-inline" | "prominent-section" | "minimalist-icon";
}

export default function SubscribeNewsletter({
  title,
  description,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  variant = "prominent-section",
  className,
  ...props
}: SubscribeNewsletterProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        {variant === "simple-inline" && (
          <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl font-semibold">{title || "Stay Updated"}</h3>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder={placeholder} className="max-w-lg flex-1" />
              <Button type="submit">{buttonText}</Button>
            </form>
            {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
          </div>
        )}

        {variant === "prominent-section" && (
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title || "Join Our Newsletter"}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description || "Receive updates, promotions, and exclusive content directly in your inbox."}
            </p>
            <form className="flex w-full max-w-sm items-center space-x-2 mt-4">
              <Input type="email" placeholder={placeholder} className="max-w-lg flex-1" />
              <Button type="submit">{buttonText}</Button>
            </form>
          </div>
        )}

        {variant === "minimalist-icon" && (
          <div className="max-w-md mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{title || "Get Our Updates"}</h3>
            </div>
            {description && <p className="text-sm text-muted-foreground text-center">{description}</p>}
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder={placeholder} className="max-w-lg flex-1" />
              <Button type="submit" variant="ghost" size="sm" className="px-3 py-1 border rounded-md">
                {buttonText}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
