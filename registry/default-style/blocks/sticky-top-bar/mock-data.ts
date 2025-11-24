export const mockStickyTopBarData = {
  announcement: {
    message: "Free shipping on all orders over $50!",
    cta: {
      text: "Shop Now",
      href: "/shop",
    },
    variant: "announcement" as const,
    isInitiallyDismissed: false,
  },
  promotional: {
    message: "Flash Sale: Up to 50% off select items!",
    cta: {
      text: "View Deals",
      href: "/sale",
    },
    variant: "promotional" as const,
    isInitiallyDismissed: false,
  },
  dismissibleTimer: {
    message: "Special offer ends in",
    countdownSeconds: 120, // 2 minutes
    variant: "dismissible-timer" as const,
    isInitiallyDismissed: false,
  },
};
