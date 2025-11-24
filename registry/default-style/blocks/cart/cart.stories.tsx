import type { Meta, StoryObj } from "@storybook/react";
import Cart from "./cart";
import { mockCartData } from "./mock-data";

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: "Blocks/Cart",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Cart>;

export const FullCartView: Story = {
  args: {
    ...mockCartData.fullCart,
  },
};

export const SummaryCartView: Story = {
  args: {
    ...mockCartData.summaryCart,
  },
};

export const EmptyCartView: Story = {
  args: {
    ...mockCartData.emptyCart,
  },
};
