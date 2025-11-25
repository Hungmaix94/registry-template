export const mockHeroSectionData = {
  default: {
    title: "Build & Ship Faster",
    description: "A collection of beautifully designed, production-ready components and landing pages built with Radix UI and Tailwind CSS.",
    imageUrl: "/087264cf6e1e2f43e72bbd98cb6424cb.webp",
    backgroundUrl: "/background.svg",
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
    imageUrl: "/95e1a9184f7206476310602550edc7e7.webp",
    backgroundUrl: "/background1.svg",
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
    imageUrl: "/background.png",
    backgroundUrl: "/background2.svg",
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
