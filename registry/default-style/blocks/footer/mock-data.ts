import { Facebook, Twitter, Instagram } from "lucide-react"; // Import Lucide icons

export const mockFooterData = {
  simpleFooter: {
    copyrightText: "© 2024 Your Company. All rights reserved.",
    navLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    variant: "simple" as const,
  },
  multiColumnFooter: {
    copyrightText: "© 2024 Your Company. All rights reserved.",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    socialLinks: [
      { platform: "facebook", href: "https://facebook.com", icon: Facebook },
      { platform: "twitter", href: "https://twitter.com", icon: Twitter },
      { platform: "instagram", href: "https://instagram.com", icon: Instagram },
    ],
    variant: "multi-column" as const,
  },
  newsletterFooter: {
    copyrightText: "© 2024 Your Company. All rights reserved.",
    newsletterEnabled: true,
    variant: "newsletter" as const,
  },
};
