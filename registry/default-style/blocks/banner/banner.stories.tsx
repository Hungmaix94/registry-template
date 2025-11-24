import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./banner";
import { mockBannerData } from "./mock-data";

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: "Blocks/Banner",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    ...mockBannerData.default,
  },
};

export const Compact: Story = {
  args: {
    ...mockBannerData.compact,
  },
};

export const FullWidth: Story = {
  args: {
    ...mockBannerData["full-width"],
  },
};
