# Registry Dependencies Guide

## Overview
This document explains how dependencies are configured for the Shadcn component registry.

## What Was Fixed

### 1. NPM Dependencies (framer-motion)
The `framer-motion` dependency was added to all components that use it. This ensures that when someone installs a component from your registry using the Shadcn CLI, the required npm packages are automatically installed.

### 2. Library Files (lib/cva.ts)
The `lib/cva.ts` utility file was added to components that use the custom CVA wrapper. This file provides a typed wrapper around `class-variance-authority`.

### 3. UI Components
All UI components (button, card, input, label, textarea, accordion, badge) were added to the registry so they can be properly installed with their dependencies.

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

### Files Array
Components can include multiple files, including library utilities:

```json
{
  "name": "button",
  "type": "registry:ui",
  "files": [
    {
      "path": "registry/default-style/ui/button.tsx",
      "type": "registry:ui"
    },
    {
      "path": "lib/cva.ts",
      "type": "registry:lib"
    }
  ]
}
```

### Three Types of Dependencies

1. **`dependencies`**: NPM packages that will be installed via `npm install`
   - Example: `"framer-motion"`, `"@radix-ui/react-slot"`, `"zod"`
   - These are external packages from npm

2. **`registryDependencies`**: Other components from your registry
   - Example: `"button"`, `"card"`, `"input"`
   - These are Shadcn UI components that will be installed from the registry

3. **`files`**: Component and library files
   - Component files: The main component code
   - Library files: Shared utilities like `lib/cva.ts`, `lib/utils.ts`

## Components Updated

### Block Components with framer-motion

The following components now have `framer-motion` as a dependency:

- ✅ hero-section
- ✅ banner (also includes lib/cva.ts)
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

### UI Components Added

The following UI components were added to the registry:

- ✅ button (includes lib/cva.ts, depends on @radix-ui/react-slot)
- ✅ card
- ✅ input
- ✅ label (depends on @radix-ui/react-label)
- ✅ textarea
- ✅ accordion (depends on @radix-ui/react-accordion)
- ✅ badge

## Usage Example

When someone installs a component from your registry:

```bash
npx shadcn@latest add https://your-registry-url/r/hero-section
```

The Shadcn CLI will:
1. Install the component files
2. Automatically run `npm install framer-motion` (if not already installed)
3. Install any registry dependencies (like `button`)
4. When installing `button`, it will also install `lib/cva.ts` and `@radix-ui/react-slot`

## The lib/cva.ts File

This is a custom wrapper around `class-variance-authority` that provides better TypeScript support:

```typescript
import { cva as originalCva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';

type CvaFn = <T>(
  base?: ClassValue,
  config?: any
) => (props?: any) => string;

export type { VariantProps };
export const cva: CvaFn = (base, config) => originalCva(base, config);
```

**When to include it:**
- Include `lib/cva.ts` in the `files` array if your component imports from `@/lib/cva`
- Don't include it if your component imports directly from `class-variance-authority`

## Adding Dependencies to New Components

When creating a new component that uses external packages:

1. Add the import in your component:
   ```tsx
   import { motion } from "framer-motion"
   import { cva, type VariantProps } from "@/lib/cva"
   ```

2. Update `registry.json`:
   ```json
   {
     "name": "your-component",
     "dependencies": [
       "framer-motion"
     ],
     "files": [
       {
         "path": "registry/default-style/blocks/your-component/your-component.tsx",
         "type": "registry:component"
       },
       {
         "path": "lib/cva.ts",
         "type": "registry:lib"
       }
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
- **Radix UI**: `@radix-ui/react-slot`, `@radix-ui/react-label`, `@radix-ui/react-accordion`

## Verification

After updating dependencies, always:
1. Run `npm run registry:build` to rebuild the registry
2. Test installing a component in a fresh project
3. Verify all dependencies are installed correctly
4. Check that lib files (like `lib/cva.ts`) are copied to the correct location

