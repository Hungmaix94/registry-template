export const mockHeroSectionData = {
  default: {
    title: "Build & Ship Faster",
    description: "A collection of beautifully designed, production-ready components and landing pages built with Radix UI and Tailwind CSS.",
    imageUrl: "/placeholder.svg",
    ctaPrimary: {
      text: "Get Started",
      href: "#",
    },
    ctaSecondary: {
      text: "Browse Components",
      href: "#",
    },
    variant: "default" as const,
    imagePosition: "right" as const,
  },
  centeredImage: {
    title: "Unleash Your Creativity",
    description: "Empower your projects with our innovative tools and resources. Turn your ideas into reality with ease and efficiency.",
    imageUrl: "https://via.placeholder.com/800x400/FF5733/ffffff?text=Creativity",
    ctaPrimary: {
      text: "Learn More",
      href: "#",
    },
    ctaSecondary: {
      text: "Watch Demo",
      href: "#",
    },
    variant: "centered-image" as const,
  },
  heroBanner: {
    title: "Your Journey Starts Here",
    description: "Join thousands of satisfied customers and transform your digital presence with our cutting-edge solutions.",
    imageUrl: "https://via.placeholder.com/1920x1080/007bff/ffffff?text=Hero+Background",
    ctaPrimary: {
      text: "Explore Services",
      href: "#",
    },
    ctaSecondary: {
      text: "Contact Sales",
      href: "#",
    },
    variant: "hero-banner" as const,
  },
};
