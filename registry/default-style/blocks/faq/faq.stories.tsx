import type { Meta, StoryObj } from "@storybook/react";
import Faq from "./faq";
import { mockFaqData } from "./mock-data";

const meta: Meta<typeof Faq> = {
  component: Faq,
  title: "Blocks/FAQ",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const ListFaq: Story = {
  args: {
    ...mockFaqData.listFaq,
  },
};

export const AccordionFaq: Story = {
  args: {
    ...mockFaqData.accordionFaq,
  },
};

export const CategorizedFaq: Story = {
  args: {
    ...mockFaqData.categorizedFaq,
  },
};
