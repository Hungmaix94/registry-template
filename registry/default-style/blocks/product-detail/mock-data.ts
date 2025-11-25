export const mockProductDetailData = {
  standardProduct: {
    product: {
      id: "prod_001",
      name: "Wireless Bluetooth Speaker",
      price: 79.99,
      description: "Experience high-fidelity sound with our portable wireless speaker. Perfect for home, office, or outdoor adventures.",
      images: [
        "/087264cf6e1e2f43e72bbd98cb6424cb.webp",
        "/95e1a9184f7206476310602550edc7e7.webp",
        "/96d82dcff9d85d9caf3e52fe41410cc0.webp",
      ],
      rating: 4.5,
      reviewCount: 120,
      variants: [
        { id: "var_001_blue", name: "Blue", price: 79.99 },
        { id: "var_001_black", name: "Black", price: 79.99 },
      ],
      features: [
        "Bluetooth 5.0 connectivity",
        "10-hour battery life",
        "IPX7 waterproof rating",
        "Built-in microphone for calls",
      ],
      specifications: [
        { label: "Weight", value: "0.5 kg" },
        { label: "Dimensions", value: "10x10x15 cm" },
        { label: "Connectivity", value: "Bluetooth, Aux" },
      ],
    },
    variant: "standard" as const,
  },
  galleryProduct: {
    product: {
      id: "prod_002",
      name: "Premium Smartwatch",
      price: 249.00,
      description: "Track your fitness, receive notifications, and stay connected with our state-of-the-art smartwatch.",
      images: [
        "/a1ee0df814ea30f4d3622c301f4baebc.webp",
        "/d2a4defbf6a952b7d33139d519809179.webp",
        "/d3bb8de0676c2532b41a43d453662511.webp",
        "/original-39b4ace881145b6de383a834d863497f.webp",
      ],
      rating: 4.8,
      reviewCount: 85,
      variants: [
        { id: "var_002_silver", name: "Silver", price: 249.00 },
        { id: "var_002_gold", name: "Gold", price: 259.00 },
      ],
      longDescription: "This premium smartwatch combines elegant design with cutting-edge technology. Monitor your heart rate, track your sleep, and receive smart notifications directly on your wrist. With a long-lasting battery and customizable watch faces, it's the perfect companion for your active lifestyle.",
    },
    variant: "gallery-focused" as const,
  },
  reviewsProduct: {
    product: {
      id: "prod_003",
      name: "Ultra HD 4K Monitor",
      price: 499.99,
      description: "Immerse yourself in stunning visuals with our Ultra HD 4K Monitor. Perfect for gaming, professional work, and multimedia consumption.",
      images: [
        "/original-4341d22a14c3595f93dfe806ae016ca1.webp",
        "/original-6c650872ac16599ac700fd65b080c3e9.webp",
      ],
      rating: 4.2,
      reviewCount: 230,
      variants: [
        { id: "var_003_27inch", name: "27-inch", price: 499.99 },
        { id: "var_003_32inch", name: "32-inch", price: 599.99 },
      ],
      reviews: [
        { id: "rev_001", author: "GamerPro", rating: 5, comment: "Amazing display! Colors are vibrant and response time is super fast for gaming.", date: "2024-10-25" },
        { id: "rev_002", author: "WorkFromHome", rating: 4, comment: "Great monitor for productivity. Only wish it had more USB-C ports.", date: "2024-10-20" },
        { id: "rev_003", author: "MovieLover", rating: 5, comment: "Watching 4K movies on this is a dream. Highly recommend!", date: "2024-10-18" },
      ],
    },
    variant: "with-reviews" as const,
  },
};
