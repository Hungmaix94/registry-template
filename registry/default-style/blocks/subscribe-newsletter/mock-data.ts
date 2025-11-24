export const mockSubscribeNewsletterData = {
  simpleInline: {
    title: "Newsletter",
    description: "Sign up for our latest news.",
    placeholder: "your.email@example.com",
    buttonText: "Subscribe",
    variant: "simple-inline" as const,
  },
  prominentSection: {
    title: "Join Our Community",
    description: "Get exclusive insights, offers, and product updates directly in your inbox. Don't miss out!",
    placeholder: "email@example.com",
    buttonText: "Sign Up",
    variant: "prominent-section" as const,
  },
  minimalistIcon: {
    title: "Stay Connected",
    description: "Get bite-sized updates. No spam, ever.",
    placeholder: "email address",
    buttonText: "Join",
    variant: "minimalist-icon" as const,
  },
};
