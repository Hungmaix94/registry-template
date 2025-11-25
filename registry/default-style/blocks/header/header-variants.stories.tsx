import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";
import { mockHeaderData } from "./mock-data";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Blocks/Header Variants",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const AllHeaders: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Simple Header</h2>
        <Header {...mockHeaderData.simpleHeader} navLinks={mockHeaderData.navLinks} ctaButton={mockHeaderData.ctaButton} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Auth Search Header</h2>
        <Header {...mockHeaderData.authSearchHeader} navLinks={mockHeaderData.navLinks} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Centered Nav Header</h2>
        <Header {...mockHeaderData.centeredNavHeader} navLinks={mockHeaderData.navLinks} />
      </div>
    </div>
  ),
};
