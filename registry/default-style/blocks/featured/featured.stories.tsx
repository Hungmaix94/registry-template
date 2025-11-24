import type { Meta, StoryObj } from "@storybook/react";
import Featured from "./featured";
import { mockFeaturedData } from "./mock-data";

const meta: Meta<typeof Featured> = {
  component: Featured,
  title: "Blocks/Featured",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Featured>;

export const SingleFeatured: Story = {
  args: {
    ...mockFeaturedData.singleFeatured,
  },
};

export const GridFeatured: Story = {
  args: {
    ...mockFeaturedData.gridFeatured,
  },
};

export const CarouselFeatured: Story = {
  args: {
    ...mockFeaturedData.carouselFeatured,
  },
};
