import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default-style/ui/button"
import { Input } from "@/registry/default-style/ui/input"
import { Menu, Search, User, ShoppingCart, X } from "lucide-react"
import * as React from "react" // For useState

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  logoText: string;
  logoHref: string;
  navLinks?: NavLink[];
  ctaButton?: {
    label: string;
    href: string;
  };
  variant?: "simple" | "auth-search" | "centered-nav";
}

export default function Header({
  logoText,
  logoHref,
  navLinks,
  ctaButton,
  variant = "simple",
  className,
  ...props
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className={cn("w-full py-4 px-4 md:px-6 border-b", className)} {...props}>
      <div className="container flex items-center justify-between h-14">
        <Link href={logoHref} className="text-xl font-bold">
          {logoText}
        </Link>

        {variant === "simple" && (
          <>
            <nav className="hidden md:flex gap-4 lg:gap-6">
              {navLinks?.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              {ctaButton && (
                <Link href={ctaButton.href}>
                  <Button size="sm">{ctaButton.label}</Button>
                </Link>
              )}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </>
        )}

        {variant === "auth-search" && (
          <>
            <nav className="hidden md:flex flex-1 justify-center gap-4 lg:gap-6">
              {navLinks?.map((link, index) => (
                <Link key={index} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <Input type="search" placeholder="Search..." className="w-full max-w-xs" />
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </Button>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </>
        )}

        {variant === "centered-nav" && (
          <>
            <div className="hidden md:flex flex-1 justify-end items-center gap-4 lg:gap-6">
              {navLinks?.slice(0, Math.ceil((navLinks?.length || 0) / 2)).map((link, index) => (
                <Link key={index} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex flex-1 justify-start items-center gap-4 lg:gap-6">
              {navLinks?.slice(Math.ceil((navLinks?.length || 0) / 2)).map((link, index) => (
                <Link key={index} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">
                  {link.label}
                </Link>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          </>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b z-20">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks?.map((link, index) => (
              <Link key={index} href={link.href} className="block px-3 py-2 text-base font-medium hover:bg-muted" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            {ctaButton && (
                <Link href={ctaButton.href} className="block px-3 py-2">
                    <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>{ctaButton.label}</Button>
                </Link>
            )}
            {variant === "auth-search" && (
                <>
                    <div className="px-3 py-2">
                        <Input type="search" placeholder="Search..." className="w-full" />
                    </div>
                    <div className="flex justify-around py-2">
                        <Button variant="ghost" size="icon" className="w-full">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Shopping Cart</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="w-full">
                            <User className="h-5 w-5" />
                            <span className="sr-only">User Profile</span>
                        </Button>
                    </div>
                </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
