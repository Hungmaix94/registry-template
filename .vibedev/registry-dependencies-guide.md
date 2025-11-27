# Registry Dependencies Guide

## Overview
This document explains how dependencies are configured for the Shadcn component registry.

## What Was Fixed
The `framer-motion` dependency was added to all components that use it. This ensures that when someone installs a component from your registry using the Shadcn CLI, the required npm packages are automatically installed.

## How It Works

### Dependencies Field
In `registry.json`, each component can have a `dependencies` array that specifies npm packages:

```json
{
  "name": "hero-section",
  "type": "registry:component",
  "title": "Hero Section",
  "description": "A hero section for a landing page.",
  "dependencies": [
    "framer-motion"
  ],
  "registryDependencies": [
    "button"
  ],
  "files": [...]
}
```

### Two Types of Dependencies

1. **`dependencies`**: NPM packages that will be installed via `npm install`
   - Example: `"framer-motion"`, `"embla-carousel"`, `"zod"`
   - These are external packages from npm

2. **`registryDependencies`**: Other components from your registry
   - Example: `"button"`, `"card"`, `"input"`
   - These are Shadcn UI components that will be installed from the registry

## Components Updated

The following components now have `framer-motion` as a dependency:

- ✅ hero-section
- ✅ banner
- ✅ blog
- ✅ bundles
- ✅ categories
- ✅ contact
- ✅ content
- ✅ cart
- ✅ map
- ✅ faq
- ✅ featured
- ✅ header
- ✅ instagram
- ✅ product-list
- ✅ side-cart
- ✅ sticky-top-bar
- ✅ subscribe-newsletter
- ✅ testimonial
- ✅ benefits-trust

## Usage Example

When someone installs a component from your registry:

```bash
npx shadcn@latest add https://your-registry-url/r/hero-section
```

The Shadcn CLI will:
1. Install the component files
2. Automatically run `npm install framer-motion` (if not already installed)
3. Install any registry dependencies (like `button`)

## Adding Dependencies to New Components

When creating a new component that uses external packages:

1. Add the import in your component:
   ```tsx
   import { motion } from "framer-motion"
   ```

2. Update `registry.json`:
   ```json
   {
     "name": "your-component",
     "dependencies": [
       "framer-motion"
     ]
   }
   ```

3. Rebuild the registry:
   ```bash
   npm run registry:build
   ```

## Common Dependencies

Here are common dependencies you might need:

- **Animations**: `framer-motion`
- **Carousels**: `embla-carousel`, `embla-carousel-react`, `embla-carousel-autoplay`
- **Validation**: `zod`
- **Forms**: `react-hook-form`
- **Icons**: `lucide-react`
- **Utilities**: `clsx`, `tailwind-merge`

## Verification

After updating dependencies, always:
1. Run `npm run registry:build` to rebuild the registry
2. Test installing a component in a fresh project
3. Verify all dependencies are installed correctly
