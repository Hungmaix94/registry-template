import { FooterProps } from './types';

export const mockFooterData: Record<string, FooterProps> = {
    simple: {
        variant: 'simple',
        logo: {
            data: {
                attributes: {
                    url: '/next.svg',
                    alternativeText: 'Acme Corp',
                    width: 120,
                    height: 40,
                },
            },
        },
        description: 'Simple footer description for a clean look.',
        socials: [
            { id: 1, platform: 'twitter', url: 'https://twitter.com' },
            { id: 2, platform: 'github', url: 'https://github.com' },
        ],
        bottomText: '© 2024 Acme Corp. All rights reserved.',
    },
    multiColumn: {
        variant: 'multi-column',
        logo: {
            data: {
                attributes: {
                    url: '/next.svg',
                    alternativeText: 'Acme Corp',
                    width: 120,
                    height: 40,
                },
            },
        },
        description: 'Building the future of web development.',
        socials: [
            { id: 1, platform: 'twitter', url: 'https://twitter.com' },
            { id: 2, platform: 'github', url: 'https://github.com' },
            { id: 3, platform: 'linkedin', url: 'https://linkedin.com' },
        ],
        columns: [
            {
                id: 1,
                title: 'Product',
                links: [
                    { id: 1, label: 'Features', href: '#' },
                    { id: 2, label: 'Pricing', href: '#' },
                    { id: 3, label: 'Documentation', href: '#' },
                ],
            },
            {
                id: 2,
                title: 'Company',
                links: [
                    { id: 4, label: 'About', href: '#' },
                    { id: 5, label: 'Blog', href: '#' },
                    { id: 6, label: 'Careers', href: '#' },
                ],
            },
            {
                id: 3,
                title: 'Legal',
                links: [
                    { id: 7, label: 'Privacy', href: '#' },
                    { id: 8, label: 'Terms', href: '#' },
                ],
            },
        ],
        bottomText: '© 2024 Acme Corp. All rights reserved.',
    },
    centered: {
        variant: 'centered',
        logo: {
            data: {
                attributes: {
                    url: '/next.svg',
                    alternativeText: 'Acme Corp',
                    width: 120,
                    height: 40,
                },
            },
        },
        description: 'Centered footer layout for balanced design.',
        socials: [
            { id: 1, platform: 'instagram', url: 'https://instagram.com' },
            { id: 2, platform: 'facebook', url: 'https://facebook.com' },
        ],
        columns: [
            {
                id: 1,
                title: 'Menu',
                links: [
                    { id: 1, label: 'Home', href: '#' },
                    { id: 2, label: 'About', href: '#' },
                    { id: 3, label: 'Services', href: '#' },
                    { id: 4, label: 'Contact', href: '#' },
                ],
            },
        ],
        bottomText: '© 2024 Acme Corp. All rights reserved.',
    },
    companyInfo: {
        variant: 'company-info',
        logo: {
            data: {
                attributes: {
                    url: '/next.svg',
                    alternativeText: 'Acme Corp',
                    width: 120,
                    height: 40,
                },
            },
        },
        description: 'Contact us for more information.',
        contacts: {
            id: 1,
            phone: '+1 (555) 123-4567',
            email: 'contact@acme.com',
            address: '123 Innovation Dr, Tech City, TC 90210',
        },
        socials: [
            { id: 1, platform: 'linkedin', url: 'https://linkedin.com' },
        ],
        columns: [
            {
                id: 1,
                title: 'Quick Links',
                links: [
                    { id: 1, label: 'Support', href: '#' },
                    { id: 2, label: 'Sales', href: '#' },
                ],
            },
        ],
        bottomText: '© 2024 Acme Corp. All rights reserved.',
    },
    dark: {
        variant: 'dark',
        logo: {
            data: {
                attributes: {
                    url: '/next.svg',
                    alternativeText: 'Acme Corp',
                    width: 120,
                    height: 40,
                },
            },
        },
        description: 'Join our newsletter for updates.',
        showNewsletter: true,
        socials: [
            { id: 1, platform: 'twitter', url: 'https://twitter.com' },
            { id: 2, platform: 'github', url: 'https://github.com' },
        ],
        columns: [
            {
                id: 1,
                title: 'Resources',
                links: [
                    { id: 1, label: 'Blog', href: '#' },
                    { id: 2, label: 'Community', href: '#' },
                ],
            },
            {
                id: 2,
                title: 'Platform',
                links: [
                    { id: 3, label: 'Download', href: '#' },
                    { id: 4, label: 'Status', href: '#' },
                ],
            },
        ],
        bottomText: '© 2024 Acme Corp. All rights reserved.',
    },
};
