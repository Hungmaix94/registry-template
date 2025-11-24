export const mockCartData = {
  fullCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [
      { id: "1", name: "Wireless Headphones", imageUrl: "https://via.placeholder.com/80/FF5733/ffffff?text=Headphones", price: 99.99, quantity: 1 },
      { id: "2", name: "Smartwatch", imageUrl: "https://via.placeholder.com/80/33FF57/ffffff?text=Smartwatch", price: 199.00, quantity: 2 },
      { id: "3", name: "Portable Charger", imageUrl: "https://via.placeholder.com/80/3357FF/ffffff?text=Charger", price: 25.50, quantity: 1 },
    ],
    variant: "full" as const,
  },
  summaryCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [
      { id: "1", name: "Wireless Headphones", imageUrl: "https://via.placeholder.com/80/FF5733/ffffff?text=Headphones", price: 99.99, quantity: 1 },
      { id: "2", name: "Smartwatch", imageUrl: "https://via.placeholder.com/80/33FF57/ffffff?text=Smartwatch", price: 199.00, quantity: 2 },
    ],
    variant: "summary" as const,
  },
  emptyCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [],
    variant: "empty" as const,
  },
};
