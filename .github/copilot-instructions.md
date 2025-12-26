# Portfolio Project Instructions

## Project Overview
This is a portfolio website built with Next.js 15, Tailwind CSS v4, and Shadcn/ui components.

## Development Guidelines

### Component Structure
- Layout components (Header, Footer) are in `src/components/layout/`
- Section components (Hero, About, Projects, Skills, Contact) are in `src/components/sections/`
- Shadcn/ui components are in `src/components/ui/`

### Styling
- Use Tailwind CSS utility classes for styling
- Follow the existing design system with consistent spacing and colors
- Use Shadcn/ui components for UI elements (buttons, cards, badges, etc.)

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Export it from `src/components/sections/index.ts`
3. Import and add it to `src/app/page.tsx`

### Adding New Shadcn/ui Components
Run: `npx shadcn@latest add [component-name]`

### Code Style
- Use TypeScript for all new files
- Follow the existing naming conventions
- Keep components focused and single-purpose

## Running the Project
- Development: `npm run dev`
- Build: `npm run build`
- Production: `npm run start`
