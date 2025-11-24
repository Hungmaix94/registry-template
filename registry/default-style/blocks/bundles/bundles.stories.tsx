import type { Meta, StoryObj } from "@storybook/react";
import Bundles from "./bundles";
import { mockBundlesData } from "./mock-data";

const meta: Meta<typeof Bundles> = {
  component: Bundles,
  title: "Blocks/Bundles",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Bundles>;

export const ListLayout: Story = {
  args: {
    sectionTitle: mockBundlesData.sectionTitle,
    bundles: mockBundlesData.bundles,
    variant: "list",
  },
};

export const GridLayout: Story = {
  args: {
    sectionTitle: mockBundlesData.sectionTitle,
    bundles: mockBundlesData.bundles,
    variant: "grid",
  },
};

export const FeaturedLayout: Story = {
  args: {
    sectionTitle: mockBundlesData.sectionTitle,
    bundles: mockBundlesData.bundles,
    variant: "featured",
  },
};
