import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./hero-section";
import { mockHeroSectionData } from "./mock-data";

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  title: "Blocks/Hero Section",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const DefaultHero: Story = {
  args: {
    ...mockHeroSectionData.default,
  },
};

export const CenteredImageHero: Story = {
  args: {
    ...mockHeroSectionData.centeredImage,
  },
};

export const HeroBanner: Story = {
  args: {
    ...mockHeroSectionData.heroBanner,
  },
};
