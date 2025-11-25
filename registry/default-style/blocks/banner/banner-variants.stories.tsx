import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./banner";
import { mockBannerData } from "./mock-data";

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: "Blocks/Banner Variants",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const AllBanners: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <h2 className="text-2xl font-bold mb-4">Default Banner</h2>
        <Banner {...mockBannerData.default} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Compact Banner</h2>
        <Banner {...mockBannerData.compact} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Full-Width Banner</h2>
        <Banner {...mockBannerData["full-width"]} />
      </div>
    </div>
  ),
};
