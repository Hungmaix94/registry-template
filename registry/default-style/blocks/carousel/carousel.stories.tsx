import type { Meta, StoryObj } from "@storybook/react"
import Carousel from "./carousel"
import { carouselItems } from "./mock-data"

const meta: Meta<typeof Carousel> = {
  title: "Blocks/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of carousel items",
    },
    options: {
      control: "object",
      description: "Embla Carousel options",
    },
    showArrows: {
      control: "boolean",
      description: "Show navigation arrows",
    },
    showIndicators: {
      control: "boolean",
      description: "Show pagination indicators",
    },
    autoplay: {
      control: "boolean",
      description: "Enable autoplay",
    },
    autoplayOptions: {
      control: "object",
      description: "Autoplay options",
    },
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    items: carouselItems,
  },
  render: (args) => <Carousel {...args} />,
}

export const WithoutArrows: Story = {
  args: {
    items: carouselItems,
    showArrows: false,
  },
  render: (args) => <Carousel {...args} />,
}

export const WithoutIndicators: Story = {
  args: {
    items: carouselItems,
    showIndicators: false,
  },
  render: (args) => <Carousel {...args} />,
}

export const NoAutoplay: Story = {
  args: {
    items: carouselItems,
    autoplay: false,
  },
  render: (args) => <Carousel {...args} />,
}
