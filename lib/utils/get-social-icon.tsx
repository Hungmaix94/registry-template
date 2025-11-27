import * as LucideIcons from 'lucide-react';
import React from 'react';

// Define a map for available icons that we expect from Strapi
const ICON_MAP: { [key: string]: React.ElementType } = {
  facebook: LucideIcons.Facebook,
  twitter: LucideIcons.Twitter,
  instagram: LucideIcons.Instagram,
  linkedin: LucideIcons.Linkedin,
  youtube: LucideIcons.Youtube,
  github: LucideIcons.Github,
  // Add other social platforms as needed
};

export const getSocialIcon = (platform: string, props?: LucideIcons.LucideProps) => {
  const IconComponent = ICON_MAP[platform.toLowerCase()];
  return IconComponent ? <IconComponent {...props} /> : null;
};
