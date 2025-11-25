export const mockSideCartData = {
  // Data for a detailed cart view with controls
  detailedCart: {
    cartItems: [
      { id: "1", name: "Wireless Earbuds", imageUrl: "/087264cf6e1e2f43e72bbd98cb6424cb.webp", price: 59.99, quantity: 1 },
      { id: "2", name: "Fitness Tracker", imageUrl: "/95e1a9184f7206476310602550edc7e7.webp", price: 120.00, quantity: 2 },
    ],
    isOpen: true, // For Storybook visibility
    onClose: () => console.log("Close cart"),
    variant: "detailed-controls" as const,
  },
  // Data for a simple list view
  simpleCart: {
    cartItems: [
      { id: "1", name: "Coffee Mug", imageUrl: "/96d82dcff9d85d9caf3e52fe41410cc0.webp", price: 15.00, quantity: 3 },
      { id: "2", name: "T-Shirt", imageUrl: "/a1ee0df814ea30f4d3622c301f4baebc.webp", price: 25.00, quantity: 1 },
    ],
    isOpen: true,
    onClose: () => console.log("Close cart"),
    variant: "simple-list" as const,
  },
  // Data for a checkout-ready cart view
  checkoutCart: {
    cartItems: [
      { id: "1", name: "Laptop Sleeve", imageUrl: "/d2a4defbf6a952b7d33139d519809179.webp", price: 35.00, quantity: 1 },
    ],
    isOpen: true,
    onClose: () => console.log("Close cart"),
    variant: "checkout-ready" as const,
  },
  // Data for an empty cart view
  emptyCart: {
    cartItems: [],
    isOpen: true,
    onClose: () => console.log("Close cart"),
    variant: "simple-list" as const, // Variant doesn't matter much for empty state
  },
};
