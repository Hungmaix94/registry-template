// lib/strapi-types.ts

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    url: string;
    // ... other relevant image attributes from Strapi
  };
}

export interface FooterLink {
  id: number;
  label: string;
  url: string;
  is_external?: boolean;
}

export interface NavigationColumn {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: number;
  platform: string; // e.g., "facebook", "twitter", "instagram" - for dynamic icon mapping
  url: string;
  icon?: StrapiImage; // For custom icons uploaded to Strapi
}

export interface FooterDataAttributes {
  background_color?: string; // CSS color string (e.g., "#FF0000", "red", "rgb(255,0,0)")
  logo?: { data: StrapiImage };
  tagline?: string;
  cta_text?: string;
  cta_link?: string;
  copyright_text: string;
  navigation_columns: NavigationColumn[];
  contact_info_enabled: boolean;
  contact_address?: string;
  contact_phone?: string;
  contact_email?: string;
  social_media_links: SocialLink[];
  newsletter_enabled: boolean;
  newsletter_title?: string;
  newsletter_description?: string;
  // Standard Strapi fields
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface StrapiFooterResponse {
  data: {
    id: number;
    attributes: FooterDataAttributes;
  };
  // Strapi pagination and meta can be added if needed, but for Single Type usually not.
}

// Type for simplified data passed to client components
export interface FooterProps {
  data: FooterDataAttributes;
}
