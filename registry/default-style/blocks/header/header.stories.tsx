import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";
import { mockHeaderData } from "./mock-data";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Blocks/Header",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    navLinks: mockHeaderData.navLinks,
    ctaButton: mockHeaderData.ctaButton,
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const SimpleHeader: Story = {
  args: {
    ...mockHeaderData.simpleHeader,
  },
};

export const AuthSearchHeader: Story = {
  args: {
    ...mockHeaderData.authSearchHeader,
  },
};

export const CenteredNavHeader: Story = {
  args: {
    ...mockHeaderData.centeredNavHeader,
  },
};
