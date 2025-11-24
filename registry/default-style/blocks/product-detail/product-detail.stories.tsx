import type { Meta, StoryObj } from "@storybook/react";
import ProductDetail from "./product-detail";
import { mockProductDetailData } from "./mock-data";

const meta: Meta<typeof ProductDetail> = {
  component: ProductDetail,
  title: "Blocks/Product Detail",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProductDetail>;

export const StandardProduct: Story = {
  args: {
    ...mockProductDetailData.standardProduct,
  },
};

export const GalleryFocusedProduct: Story = {
  args: {
    ...mockProductDetailData.galleryProduct,
  },
};

export const ProductWithReviews: Story = {
  args: {
    ...mockProductDetailData.reviewsProduct,
  },
};
