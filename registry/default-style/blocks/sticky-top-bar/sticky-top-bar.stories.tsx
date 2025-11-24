import type { Meta, StoryObj } from "@storybook/react";
import StickyTopBar from "./sticky-top-bar";
import { mockStickyTopBarData } from "./mock-data";

const meta: Meta<typeof StickyTopBar> = {
  component: StickyTopBar,
  title: "Blocks/Sticky Top Bar",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof StickyTopBar>;

export const AnnouncementBar: Story = {
  args: {
    ...mockStickyTopBarData.announcement,
  },
};

export const PromotionalBar: Story = {
  args: {
    ...mockStickyTopBarData.promotional,
  },
};

export const DismissibleTimerBar: Story = {
  args: {
    ...mockStickyTopBarData.dismissibleTimer,
  },
};
