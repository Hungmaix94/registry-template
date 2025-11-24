import type { Meta, StoryObj } from "@storybook/react";
import Content from "./content";
import { mockContentData } from "./mock-data";

const meta: Meta<typeof Content> = {
  component: Content,
  title: "Blocks/Content",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Content>;

export const TextOnly: Story = {
  args: {
    ...mockContentData.textOnly,
  },
};

export const TextWithImage: Story = {
  args: {
    ...mockContentData.textWithImage,
  },
};

export const MultiColumn: Story = {
  args: {
    ...mockContentData.multiColumn,
  },
};
