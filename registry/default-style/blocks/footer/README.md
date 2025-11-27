# Footer Component

This is a flexible Footer component designed for Strapi + Next.js.

## Variants
- `simple`: Minimal footer with logo, description, and socials.
- `multi-column`: Standard multi-column footer with links.
- `centered`: Centered layout with inline menu.
- `company-info`: Includes contact details (phone, email, address).
- `dark`: Dark theme with newsletter subscription form.

## Strapi Structure

### 1. Components
You need to create the following components in Strapi:

**elements.link**
- `label` (String)
- `href` (String)
- `isExternal` (Boolean)

**elements.social-link**
- `platform` (Enumeration: facebook, twitter, instagram, linkedin, github, youtube)
- `url` (String)

**elements.footer-column**
- `title` (String)
- `links` (Component: elements.link, Repeatable)

**elements.contact-info**
- `phone` (String)
- `email` (String)
- `address` (Text)

### 2. Main Component (layout.footer)
Create a component `layout.footer` with:
- `variant` (Enumeration: simple, multi-column, centered, company-info, dark)
- `logo` (Media - Single)
- `description` (Text)
- `bottomText` (String)
- `showNewsletter` (Boolean)
- `socials` (Component: elements.social-link, Repeatable)
- `columns` (Component: elements.footer-column, Repeatable)
- `contacts` (Component: elements.contact-info, Single)

## Usage in Next.js

```tsx
import Footer from '@/components/footer';

// Fetch data from Strapi
const footerData = await getFooterData(); 

// Render
<Footer {...footerData} />
```
