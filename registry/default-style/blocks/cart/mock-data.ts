export const mockCartData = {
  fullCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [
      { id: "1", name: "Wireless Headphones", imageUrl: "https://source.unsplash.com/random/80x80?headphones", price: 99.99, quantity: 1 },
    ],
    variant: "full" as const,
  },
  summaryCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [
      { id: "1", name: "Wireless Headphones", imageUrl: "https://source.unsplash.com/random/80x80?headphones", price: 99.99, quantity: 1 },
      { id: "2", name: "Smartwatch", imageUrl: "https://source.unsplash.com/random/80x80?smartwatch", price: 199.00, quantity: 2 },
    ],
    variant: "summary" as const,
  },
  emptyCart: {
    sectionTitle: "Your Shopping Cart",
    cartItems: [],
    variant: "empty" as const,
  },
};
