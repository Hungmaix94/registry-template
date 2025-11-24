import { Menu, Search, User, ShoppingCart } from "lucide-react";

export const mockHeaderData = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaButton: {
    label: "Get Started",
    href: "/signup",
  },
  simpleHeader: {
    logoText: "MyBrand",
    logoHref: "/",
    variant: "simple" as const,
  },
  authSearchHeader: {
    logoText: "MyStore",
    logoHref: "/",
    variant: "auth-search" as const,
  },
  centeredNavHeader: {
    logoText: "MyWebsite",
    logoHref: "/",
    variant: "centered-nav" as const,
  },
};
