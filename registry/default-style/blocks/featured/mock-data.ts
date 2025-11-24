export const mockFeaturedData = {
  singleFeatured: {
    sectionTitle: "Featured Product",
    sectionDescription: "Discover our top-selling item.",
    items: [
      {
        title: "AI-Powered Smart Assistant",
        description: "Your ultimate companion for daily tasks and smart home management. Experience seamless integration and intuitive control.",
        imageUrl: "https://via.placeholder.com/600x400/4CAF50/ffffff?text=Smart+Assistant",
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
        imageUrl: "https://via.placeholder.com/400x250/2196F3/ffffff?text=Eco+Bottle",
        cta: {
          text: "Shop Now",
          href: "/products/eco-bottle",
        },
      },
      {
        title: "Ergonomic Office Chair",
        description: "Enhance your productivity and comfort with our scientifically designed ergonomic chair.",
        imageUrl: "https://via.placeholder.com/400x250/FFC107/000000?text=Office+Chair",
        cta: {
          text: "Learn More",
          href: "/products/office-chair",
        },
      },
      {
        title: "Wireless Noise-Cancelling Headphones",
        description: "Immerse yourself in pure sound with our advanced noise-cancelling technology.",
        imageUrl: "https://via.placeholder.com/400x250/9C27B0/ffffff?text=Headphones",
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
        imageUrl: "https://via.placeholder.com/320x200/FF9800/ffffff?text=Smart+Hub",
        cta: {
          text: "Discover",
          href: "/products/smart-hub",
        },
      },
      {
        title: "Fitness Tracker Pro",
        description: "Monitor your health and fitness goals with precision. Your personal health coach.",
        imageUrl: "https://via.placeholder.com/320x200/8BC34A/ffffff?text=Fitness+Tracker",
        cta: {
          text: "Shop Tracker",
          href: "/products/fitness-tracker",
        },
      },
      {
        title: "Portable Projector",
        description: " cinematic experience anywhere you go. Big screen fun in a small package.",
        imageUrl: "https://via.placeholder.com/320x200/795548/ffffff?text=Projector",
        cta: {
          text: "Get Projector",
          href: "/products/projector",
        },
      },
    ],
    variant: "carousel" as const,
  },
};
