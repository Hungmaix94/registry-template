import type { Meta, StoryObj } from "@storybook/react";
import ProductList from "./product-list";
import { mockProductListData } from "./mock-data";

const meta: Meta<typeof ProductList> = {
  component: ProductList,
  title: "Blocks/Product List",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    products: mockProductListData.products,
  }
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const SimpleGrid: Story = {
  args: {
    sectionTitle: "All Products",
    variant: "grid-simple",
  },
};

export const FilterableList: Story = {
  args: {
    sectionTitle: "Filterable Products",
    variant: "filterable-list",
  },
};

export const FeaturedGrid: Story = {
  args: {
    sectionTitle: "Featured Products",
    variant: "featured-grid",
  },
};
