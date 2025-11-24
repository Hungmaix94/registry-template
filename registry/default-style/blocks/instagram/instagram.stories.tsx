import type { Meta, StoryObj } from "@storybook/react";
import Instagram from "./instagram";
import { mockInstagramData } from "./mock-data";

const meta: Meta<typeof Instagram> = {
  component: Instagram,
  title: "Blocks/Instagram",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sectionTitle: mockInstagramData.sectionTitle,
    sectionDescription: mockInstagramData.sectionDescription,
    profileLink: mockInstagramData.profileLink,
  }
};

export default meta;
type Story = StoryObj<typeof Instagram>;

export const SimpleGrid: Story = {
  args: {
    posts: mockInstagramData.posts.slice(0, 6),
    variant: "grid-simple",
  },
};

export const GridWithOverlay: Story = {
  args: {
    posts: mockInstagramData.posts.slice(0, 6),
    variant: "grid-overlay",
  },
};

export const Carousel: Story = {
  args: {
    posts: mockInstagramData.posts,
    variant: "carousel",
  },
};
