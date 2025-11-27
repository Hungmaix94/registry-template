export type StrapiImage = {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
};

export type Link = {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
};

export type SocialLink = {
  id: number;
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'github' | 'youtube' | 'tiktok';
  url: string;
};

export type FooterColumn = {
  id: number;
  title: string;
  links: Link[];
};

export type ContactInfo = {
  id: number;
  phone?: string;
  email?: string;
  address?: string;
};

export type FooterVariant = 'simple' | 'multi-column' | 'centered' | 'company-info' | 'dark';

export type FooterProps = {
  variant: FooterVariant;
  logo?: {
    data: {
      attributes: StrapiImage;
    };
  };
  description?: string;
  socials?: SocialLink[];
  bottomText?: string;
  columns?: FooterColumn[];
  contacts?: ContactInfo;
  showNewsletter?: boolean;
};
