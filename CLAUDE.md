# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm run dev` (opens at http://localhost:3000)
- **Build for production**: `pnpm run build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm run lint`

## Environment Setup

Create a `.env.local` file with:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

## Architecture Overview

This is a Next.js 15 portfolio/blog site using the App Router with the following key architecture:

- **Framework**: Next.js 15 with TypeScript and React 19
- **Styling**: Tailwind CSS v4 with typography plugin
- **Content**: MDX for articles stored in `src/app/articles/[slug]/page.mdx`
- **Theming**: Dark/light mode support via next-themes
- **Components**: Headless UI for interactive elements

### Key Directories

- `src/app/`: App Router pages and layouts
- `src/components/`: Reusable UI components (Layout, Button, Card, etc.)
- `src/lib/`: Utilities including article loading logic
- `src/images/`: Static assets including photos and logos

### Article System

Articles are MDX files stored in `src/app/articles/[date-slug]/page.mdx` format. The `src/lib/articles.ts` module
handles:

- Dynamic article discovery using fast-glob
- Metadata extraction from MDX exports
- Sorting by publication date

### Key Components

- **Layout.tsx**: Main site layout with navigation
- **ArticleLayout.tsx**: Template for blog posts
- **SimpleLayout.tsx**: Clean layout for other pages

### Content Structure

The site uses file-based routing where:

- Articles live in `src/app/articles/[slug]/page.mdx`
- Each article exports metadata (title, description, author, date)
- MDX processing includes syntax highlighting (Prism) and GitHub Flavored Markdown

This is a Tailwind Plus commercial template, so maintain the existing design system and component patterns when making
changes.