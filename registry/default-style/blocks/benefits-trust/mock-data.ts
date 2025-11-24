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
        imageUrl: "https://via.placeholder.com/100/FFC107/000000?text=Award+1",
      },
      {
        title: "Certified Partner",
        description: "Official partner with leading technology providers.",
        imageUrl: "https://via.placeholder.com/100/28a745/ffffff?text=Partner",
      },
      {
        title: "100% Secure Transactions",
        description: "Your data and payments are always safe with us.",
        imageUrl: "https://via.placeholder.com/100/007bff/ffffff?text=Secure",
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
        imageUrl: "https://via.placeholder.com/600x400/17a2b8/ffffff?text=Reliability",
        icon: ShieldCheck,
      },
    ],
    variant: "detailed-benefit" as const,
  },
};
