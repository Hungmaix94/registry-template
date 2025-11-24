import type { Meta, StoryObj } from "@storybook/react";
import Categories from "./categories";
import { mockCategoriesData } from "./mock-data";

const meta: Meta<typeof Categories> = {
  component: Categories,
  title: "Blocks/Categories",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const ListLayout: Story = {
  args: {
    sectionTitle: mockCategoriesData.sectionTitle,
    categories: mockCategoriesData.categories,
    variant: "list",
  },
};

export const GridLayout: Story = {
  args: {
    sectionTitle: mockCategoriesData.sectionTitle,
    categories: mockCategoriesData.categories,
    variant: "grid",
  },
};

export const FeaturedLayout: Story = {
  args: {
    sectionTitle: mockCategoriesData.sectionTitle,
    categories: mockCategoriesData.categories.slice(0, 2), // Showing fewer for featured
    variant: "featured",
  },
};
