import type { Meta, StoryObj } from "@storybook/react";
import Blog from "./blog";
import { mockBlogData } from "./mock-data";

const meta: Meta<typeof Blog> = {
  component: Blog,
  title: "Blocks/Blog",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Blog>;

export const GridLayout: Story = {
  args: {
    sectionTitle: mockBlogData.sectionTitle,
    posts: mockBlogData.posts,
    variant: "grid",
  },
};

export const ListLayout: Story = {
  args: {
    sectionTitle: mockBlogData.sectionTitle,
    posts: mockBlogData.posts,
    variant: "list",
  },
};

export const CarouselLayout: Story = {
  args: {
    sectionTitle: mockBlogData.sectionTitle,
    posts: mockBlogData.posts.slice(0, 3), // Showing fewer for carousel
    variant: "carousel",
  },
};
