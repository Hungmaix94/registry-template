export const mockSideCartData = {
  // Data for a detailed cart view with controls
  detailedCart: {
    cartItems: [
      { id: "1", name: "Wireless Earbuds", imageUrl: "https://via.placeholder.com/64/FF5733/ffffff?text=Earbuds", price: 59.99, quantity: 1 },
      { id: "2", name: "Fitness Tracker", imageUrl: "https://via.placeholder.com/64/33FF57/ffffff?text=Tracker", price: 120.00, quantity: 2 },
    ],
    isOpen: true, // For Storybook visibility
    onClose: () => console.log("Close cart"),
    variant: "detailed-controls" as const,
  },
  // Data for a simple list view
  simpleCart: {
    cartItems: [
      { id: "1", name: "Coffee Mug", imageUrl: "https://via.placeholder.com/64/3357FF/ffffff?text=Mug", price: 15.00, quantity: 3 },
      { id: "2", name: "T-Shirt", imageUrl: "https://via.placeholder.com/64/FFFF33/000000?text=T-Shirt", price: 25.00, quantity: 1 },
    ],
    isOpen: true,
    onClose: () => console.log("Close cart"),
    variant: "simple-list" as const,
  },
  // Data for a checkout-ready cart view
  checkoutCart: {
    cartItems: [
      { id: "1", name: "Laptop Sleeve", imageUrl: "https://via.placeholder.com/64/FF33FF/ffffff?text=Sleeve", price: 35.00, quantity: 1 },
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
