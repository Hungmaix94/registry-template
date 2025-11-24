import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./contact";
import { mockContactData } from "./mock-data";

const meta: Meta<typeof Contact> = {
  component: Contact,
  title: "Blocks/Contact",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const BasicForm: Story = {
  args: {
    sectionTitle: mockContactData.sectionTitle,
    sectionDescription: mockContactData.sectionDescription,
    variant: "basic-form",
  },
};

export const FormWithInfo: Story = {
  args: {
    sectionTitle: mockContactData.sectionTitle,
    sectionDescription: mockContactData.sectionDescription,
    contactInfo: mockContactData.contactInfo,
    variant: "form-with-info",
  },
};

export const FormWithMap: Story = {
  args: {
    sectionTitle: mockContactData.sectionTitle,
    sectionDescription: mockContactData.sectionDescription,
    contactInfo: mockContactData.contactInfo,
    variant: "form-with-map",
  },
};
