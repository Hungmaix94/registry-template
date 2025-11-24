import type { Meta, StoryObj } from "@storybook/react";
import SubscribeNewsletter from "./subscribe-newsletter";
import { mockSubscribeNewsletterData } from "./mock-data";

const meta: Meta<typeof SubscribeNewsletter> = {
  component: SubscribeNewsletter,
  title: "Blocks/Subscribe Newsletter",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SubscribeNewsletter>;

export const SimpleInline: Story = {
  args: {
    ...mockSubscribeNewsletterData.simpleInline,
  },
};

export const ProminentSection: Story = {
  args: {
    ...mockSubscribeNewsletterData.prominentSection,
  },
};

export const MinimalistIcon: Story = {
  args: {
    ...mockSubscribeNewsletterData.minimalistIcon,
  },
};
