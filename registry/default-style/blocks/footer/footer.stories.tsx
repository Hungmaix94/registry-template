import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";
import { mockFooterData } from "./mock-data";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Blocks/Footer",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const SimpleFooter: Story = {
  args: {
    ...mockFooterData.simpleFooter,
  },
};

export const MultiColumnFooter: Story = {
  args: {
    ...mockFooterData.multiColumnFooter,
  },
};

export const NewsletterFooter: Story = {
  args: {
    ...mockFooterData.newsletterFooter,
  },
};
