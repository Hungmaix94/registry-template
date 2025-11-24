import type { Meta, StoryObj } from "@storybook/react";
import BenefitsTrust from "./benefits-trust";
import { mockBenefitsTrustData } from "./mock-data";

const meta: Meta<typeof BenefitsTrust> = {
  component: BenefitsTrust,
  title: "Blocks/Benefits & Trust",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BenefitsTrust>;

export const IconList: Story = {
  args: {
    ...mockBenefitsTrustData.iconList,
  },
};

export const TrustBadges: Story = {
  args: {
    ...mockBenefitsTrustData.trustBadges,
  },
};

export const DetailedBenefit: Story = {
  args: {
    ...mockBenefitsTrustData.detailedBenefit,
  },
};
