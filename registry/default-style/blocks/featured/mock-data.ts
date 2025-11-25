export const mockFeaturedData = {
  singleFeatured: {
    sectionTitle: "Featured Product",
    sectionDescription: "Discover our top-selling item.",
    items: [
      {
        title: "AI-Powered Smart Assistant",
        description: "Your ultimate companion for daily tasks and smart home management. Experience seamless integration and intuitive control.",
        imageUrl: "/original-39b4ace881145b6de383a834d863497f.webp",
        cta: {
          text: "View Details",
          href: "/products/smart-assistant",
        },
      },
    ],
    variant: "single" as const,
  },
  gridFeatured: {
    sectionTitle: "Our Featured Innovations",
    sectionDescription: "Explore a selection of our most innovative products and services.",
    items: [
      {
        title: "Eco-Friendly Water Bottle",
        description: "Stay hydrated with our sustainable and stylish water bottle, made from recycled materials.",
        imageUrl: "/original-4341d22a14c3595f93dfe806ae016ca1.webp",
        cta: {
          text: "Shop Now",
          href: "/products/eco-bottle",
        },
      },
      {
        title: "Ergonomic Office Chair",
        description: "Enhance your productivity and comfort with our scientifically designed ergonomic chair.",
        imageUrl: "/original-6c650872ac16599ac700fd65b080c3e9.webp",
        cta: {
          text: "Learn More",
          href: "/products/office-chair",
        },
      },
      {
        title: "Wireless Noise-Cancelling Headphones",
        description: "Immerse yourself in pure sound with our advanced noise-cancelling technology.",
        imageUrl: "/original-eeb115fedc8765420d9f730b945f4ee8.webp",
        cta: {
          text: "Buy Now",
          href: "/products/headphones",
        },
      },
    ],
    variant: "grid" as const,
  },
  carouselFeatured: {
    sectionTitle: "Trending This Month",
    sectionDescription: "Don't miss out on what's hot right now!",
    items: [
      {
        title: "Smart Home Hub",
        description: "Control all your smart devices from one central hub. Simple, intuitive, powerful.",
        imageUrl: "/a1ee0df814ea30f4d3622c301f4baebc.webp",
        cta: {
          text: "Discover",
          href: "/products/smart-hub",
        },
      },
      {
        title: "Fitness Tracker Pro",
        description: "Monitor your health and fitness goals with precision. Your personal health coach.",
        imageUrl: "/d2a4defbf6a952b7d33139d519809179.webp",
        cta: {
          text: "Shop Tracker",
          href: "/products/fitness-tracker",
        },
      },
      {
        title: "Portable Projector",
        description: " cinematic experience anywhere you go. Big screen fun in a small package.",
        imageUrl: "/d3bb8de0676c2532b41a43d453662511.webp",
        cta: {
          text: "Get Projector",
          href: "/products/projector",
        },
      },
    ],
    variant: "carousel" as const,
  },
};
