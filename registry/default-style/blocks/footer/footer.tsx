import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, LucideProps } from "lucide-react"; // Import Lucide icons and LucideProps

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  copyrightText: string;
  navLinks?: FooterLink[];
  socialLinks?: {
    platform: string;
    href: string;
    icon?: React.ComponentType<LucideProps>; // Updated type for Lucide icons
  }[];
  newsletterEnabled?: boolean;
  variant?: "simple" | "multi-column" | "newsletter";
}

export default function Footer({
  copyrightText,
  navLinks,
  socialLinks,
  newsletterEnabled,
  variant = "simple",
  className,
  ...props
}: FooterProps) {
  return (
    <footer className={cn("w-full py-12 md:py-16 bg-gray-100 dark:bg-gray-800", className)} {...props}>
      <div className="container px-4 md:px-6">
        {variant === "simple" && (
          <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
            <p className="text-sm text-muted-foreground">{copyrightText}</p>
            {navLinks && (
              <nav className="flex gap-4 sm:gap-6">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-sm hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        )}

        {variant === "multi-column" && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-sm text-muted-foreground">
                We are a company dedicated to providing the best services.
              </p>
            </div>
            {navLinks && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <nav className="space-y-2 flex flex-col">
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-sm hover:underline underline-offset-4">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
            {socialLinks && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link key={index} href={social.href} className="text-muted-foreground hover:text-gray-900 dark:hover:text-gray-50">
                      {social.icon && <social.icon className="h-6 w-6" />}
                      {!social.icon && social.platform}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-3 md:col-span-3 lg:col-span-1">
                <p className="text-sm text-muted-foreground">{copyrightText}</p>
            </div>
          </div>
        )}

        {variant === "newsletter" && (
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
              <p className="text-muted-foreground">Get the latest updates and offers directly in your inbox.</p>
            </div>
            <form className="flex w-full max-w-sm space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
            <div className="w-full md:w-auto">
                <p className="text-sm text-muted-foreground mt-4 md:mt-0">{copyrightText}</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

