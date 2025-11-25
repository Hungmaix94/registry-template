import { ShieldCheck, Award, Lightbulb, TrendingUp } from "lucide-react";

export const mockBenefitsTrustData = {
  iconList: {
    sectionTitle: "Why Choose Us?",
    sectionDescription: "Discover the key advantages of our products and services.",
    items: [
      {
        title: "Certified Quality",
        description: "Our products undergo rigorous testing to ensure the highest standards.",
        icon: ShieldCheck,
      },
      {
        title: "Award-Winning Support",
        description: "Dedicated support team available 24/7 to assist you.",
        icon: Award,
      },
      {
        title: "Innovative Solutions",
        description: "Always at the forefront of technology, bringing you cutting-edge features.",
        icon: Lightbulb,
      },
      {
        title: "Proven Growth",
        description: "Join thousands of satisfied customers experiencing significant growth.",
        icon: TrendingUp,
      },
    ],
    variant: "icon-list" as const,
  },
  trustBadges: {
    sectionTitle: "Trusted by Industry Leaders",
    sectionDescription: "Our commitment to excellence is recognized globally.",
    items: [
      {
        title: "Best Product Award 2024",
        description: "Awarded for innovation and user satisfaction.",
        imageUrl: "/original-39b4ace881145b6de383a834d863497f.webp",
      },
      {
        title: "Certified Partner",
        description: "Official partner with leading technology providers.",
        imageUrl: "/original-4341d22a14c3595f93dfe806ae016ca1.webp",
      },
      {
        title: "100% Secure Transactions",
        description: "Your data and payments are always safe with us.",
        imageUrl: "/original-6c650872ac16599ac700fd65b080c3e9.webp",
      },
    ],
    variant: "trust-badges" as const,
  },
  detailedBenefit: {
    sectionTitle: "Unmatched Reliability",
    sectionDescription: "Our infrastructure is built for 99.9% uptime, ensuring your services are always available when you need them.",
    items: [
      {
        title: "Unmatched Reliability",
        description: "With redundant systems and continuous monitoring, we guarantee that your services will experience minimal downtime.",
        imageUrl: "/original-eeb115fedc8765420d9f730b945f4ee8.webp",
        icon: ShieldCheck,
      },
    ],
    variant: "detailed-benefit" as const,
  },
};
