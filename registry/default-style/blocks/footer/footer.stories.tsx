import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';
import { mockFooterData } from './mock-data';

const meta: Meta<typeof Footer> = {
    title: 'Blocks/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Simple: Story = {
    args: mockFooterData.simple,
};

export const MultiColumn: Story = {
    args: mockFooterData.multiColumn,
};

export const Centered: Story = {
    args: mockFooterData.centered,
};

export const CompanyInfo: Story = {
    args: mockFooterData.companyInfo,
};

export const Dark: Story = {
    args: mockFooterData.dark,
};
