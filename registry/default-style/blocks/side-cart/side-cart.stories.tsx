import type { Meta, StoryObj } from "@storybook/react";
import SideCart from "./side-cart";
import { mockSideCartData } from "./mock-data";

const meta: Meta<typeof SideCart> = {
  component: SideCart,
  title: "Blocks/Side Cart",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen", // Use fullscreen layout for side cart to test positioning
  },
};

export default meta;
type Story = StoryObj<typeof SideCart>;

export const DetailedCart: Story = {
  args: {
    ...mockSideCartData.detailedCart,
  },
};

export const SimpleCart: Story = {
  args: {
    ...mockSideCartData.simpleCart,
  },
};

export const CheckoutCart: Story = {
  args: {
    ...mockSideCartData.checkoutCart,
  },
};

export const EmptyCart: Story = {
  args: {
    ...mockSideCartData.emptyCart,
  },
};
