import type { Meta, StoryObj } from "@storybook/react";
import Testimonial from "./testimonial";
import { mockTestimonialData } from "./mock-data";

const meta: Meta<typeof Testimonial> = {
  component: Testimonial,
  title: "Blocks/Testimonial",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sectionTitle: mockTestimonialData.sectionTitle,
    sectionDescription: mockTestimonialData.sectionDescription,
  }
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const SingleTestimonial: Story = {
  args: {
    testimonials: mockTestimonialData.testimonials.slice(0, 1),
    variant: "single",
  },
};

export const GridTestimonials: Story = {
  args: {
    testimonials: mockTestimonialData.testimonials,
    variant: "grid",
  },
};

export const CarouselTestimonials: Story = {
  args: {
    testimonials: mockTestimonialData.testimonials,
    variant: "carousel",
  },
};
