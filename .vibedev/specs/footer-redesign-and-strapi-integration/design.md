# Design Document for Footer Redesign and Strapi Integration

## 1. Overview

The Footer component will be a modular, responsive, and content-managed component for Next.js applications, leveraging Strapi as a headless CMS. It will support a flexible layout including a brand/CTA section, multi-column navigation, copyright, legal links, social media, a newsletter signup, and contact information. Key features include dynamic content fetched from Strapi, configurable background color, and optimized for SEO and accessibility.

## 2. Architecture

*   **Next.js App Router:** The component will be designed for Next.js 14 App Router.
*   **Server Component (Data Fetching):** The main `Footer` component will be a Server Component responsible for fetching footer data from Strapi. This allows for efficient data fetching at build time (SSG/ISR) or request time (SSR) directly on the server, improving performance and SEO.
*   **Static Site Generation (SSG) / Incremental Static Regeneration (ISR):** Data will be fetched using static-safe data fetching patterns, allowing the footer content to be generated at build time or revalidated periodically. The `fetch` API with `revalidate` option will be primarily used.
*   **Strapi API:** The component will interact with the Strapi API to retrieve footer content from a `Footer` Single Type.
*   **Client Components (Interactivity):** Interactive elements within the footer (e.g., newsletter signup form, language selector dropdowns, mobile navigation toggles) will be implemented as Client Components, passed down as children or through props.
*   **Styling:** Tailwind CSS will be used for styling, ensuring a consistent and utility-first approach. ShadCN UI components will be utilized where appropriate (e.g., Button, Input).

## 3. Components and Interfaces

### A. Core Component:

*   **`Footer` (Server Component):**
    *   **Props:**
        *   `className?: string`: Optional Tailwind CSS classes for custom styling.
        *   `apiUrl: string`: The base URL of the Strapi API.
        *   `revalidateInterval?: number`: Optional interval in seconds for ISR.
    *   **Responsibility:** Fetches footer data from Strapi, orchestrates sub-components, and passes data down. Applies dynamic background color using inline styles or dynamic Tailwind classes.

### B. Sub-Components (Internal/Potentially Client Components):

*   **`FooterTopSection`:** Displays logo, tagline, and CTA.
    *   **Props:** `logo`, `tagline`, `ctaText`, `ctaLink`.
*   **`FooterNavigationColumn`:** Renders a single navigation column.
    *   **Props:** `title`, `links: { label: string; url: string; isExternal?: boolean }[]`.
*   **`FooterSocialLinks`:** Displays social media icons and links.
    *   **Props:** `socialLinks: { platform: string; url: string; icon?: string }[]`.
*   **`FooterNewsletterSignup` (Client Component):** Handles newsletter subscription.
    *   **Props:** `title`, `description`. Utilizes ShadCN `Input` and `Button`.
*   **`FooterContactInfo`:** Displays address, phone, email.
    *   **Props:** `address`, `phone`, `email`.
*   **`FooterBottomSection`:** Displays copyright text and legal links.
    *   **Props:** `copyrightText`, `legalLinks`.

### C. Type Definitions (TypeScript Interfaces):

These interfaces will mirror the Strapi API response structure.

```typescript
// lib/strapi-types.ts (or similar file for API types)

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
  logo?: StrapiImage;
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
```

### D. Dynamic Lucide Icons:
Lucide icons can be dynamically rendered by mapping the `platform` string from Strapi to the corresponding Lucide component. This will be handled by a utility function.

```typescript
// lib/utils/get-social-icon.tsx
import * as LucideIcons from 'lucide-react';
import React from 'react';

// Define a map for available icons that we expect from Strapi
const ICON_MAP: { [key: string]: React.ElementType } = {
  facebook: LucideIcons.Facebook,
  twitter: LucideIcons.Twitter,
  instagram: LucideIcons.Instagram,
  linkedin: LucideIcons.Linkedin, // Example addition
  // Add other social platforms as needed
};

export const getSocialIcon = (platform: string, props?: LucideIcons.LucideProps) => {
  const IconComponent = ICON_MAP[platform.toLowerCase()];
  return IconComponent ? <IconComponent {...props} /> : null;
};
```
This approach ensures only explicitly supported icons are rendered and provides a fallback.

## 4. Data Models (API & Frontend)

*   **Strapi `Footer` Single Type:** As defined in the requirements and confirmed goal, a `Footer` Single Type will be created in Strapi with all the specified fields and repeatable components.
*   **API Endpoint:** The Next.js component will fetch data from a Strapi API endpoint such as `/api/footer?populate=deep`. The `populate=deep` ensures all nested components and media files (like `logo` and `social_media_links[i].icon`) are included in a single request.
*   **Frontend Data Model:** The TypeScript interfaces defined above (`StrapiImage`, `FooterLink`, `NavigationColumn`, `SocialLink`, `FooterDataAttributes`, `StrapiFooterResponse`) will represent the precise shape of the data consumed by the frontend components.

## 5. Error Handling

*   **Data Fetching Errors:**
    *   The `Footer` Server Component will implement robust `try-catch` blocks around its data fetching logic.
    *   If the Strapi API call fails (e.g., network error, invalid API response, 404), a fallback UI will be rendered. This fallback could be a simplified, hardcoded footer, a skeleton loader, or a user-friendly error message, depending on the severity and context.
    *   Server-side logging will be crucial to capture these errors for monitoring and debugging.
*   **Component Rendering Errors:** For any complex client-side interactions (e.g., within `FooterNewsletterSignup`), React Error Boundaries can be implemented to gracefully handle rendering errors within their sub-trees, preventing the entire application from crashing.
*   **Newsletter Signup Errors:** The `FooterNewsletterSignup` client component will manage its own state for form validation and submission. Errors (e.g., invalid email format, API submission failure) will be displayed inline to the user.

## 6. Testing Strategy

*   **Unit Tests:**
    *   **Components:** Jest and React Testing Library will be used to test individual, isolated sub-components (`FooterNavigationColumn`, `FooterSocialLinks`, `FooterContactInfo`, `FooterTopSection`, `FooterBottomSection`, `FooterNewsletterSignup`). This will verify their rendering, props handling, and basic interactions.
    *   **Utilities:** Helper functions like `getSocialIcon` and any data transformation utilities will have dedicated unit tests to ensure correctness.
*   **Integration Tests:**
    *   The main `Footer` Server Component's data fetching and orchestration logic will be tested. This includes verifying that data from a mock Strapi response is correctly processed and passed down to the appropriate child components.
    *   Integration between `FooterNewsletterSignup` and its `Input`/`Button` elements will be tested, including form submission and state updates.
*   **End-to-End Tests:**
    *   Playwright (or similar E2E framework) will be employed to verify the complete user flow involving the footer. This includes checking:
        *   Correct rendering of all footer sections based on Strapi data.
        *   Responsiveness and layout integrity across different breakpoints (mobile, tablet, desktop).
        *   Navigation links functionality (clicking and navigating).
        *   Newsletter signup form submission and success/error states.
*   **Visual Regression Tests (Optional):** Integration with Storybook (if components are documented there) and a visual regression testing tool like Chromatic could be considered to automatically detect unintended visual changes to the footer during development cycles.

