export const mockContentData = {
  textOnly: {
    title: "Our Mission",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    cta: {
      text: "Learn More",
      href: "/about",
    },
    variant: "text-only" as const,
  },
  textWithImage: {
    title: "Innovation at its Best",
    body: "We are constantly pushing the boundaries of technology to bring you the most innovative solutions. Our dedicated team works tirelessly to create products that make a real difference in your life.",
    imageUrl: "/a1ee0df814ea30f4d3622c301f4baebc.webp",
    imagePosition: "right" as const,
    cta: {
      text: "Discover Our Products",
      href: "/products",
    },
    variant: "text-with-image" as const,
  },
  multiColumn: {
    title: "Why Choose Us?",
    body: [
      "**Quality Assurance:** We pride ourselves on delivering high-quality products and services that meet the highest industry standards. Every item undergoes rigorous testing.",
      "**Customer Support:** Our friendly and knowledgeable support team is available 24/7 to assist you with any queries or issues. Your satisfaction is our top priority.",
      "**Affordable Pricing:** We believe that quality should not come at an exorbitant price. Our pricing models are designed to be fair, transparent, and competitive.",
    ],
    cta: {
      text: "Get Started",
      href: "/signup",
    },
    columns: 3 as const,
    variant: "multi-column" as const,
  },
};
