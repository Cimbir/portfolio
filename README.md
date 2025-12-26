# Portfolio 

A portfolio web page because why not?

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Language**: TypeScript

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with Header and Footer
│   └── page.tsx           # Home page with all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── index.ts       # Layout exports
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section with intro
│   │   ├── About.tsx      # About me section
│   │   ├── Projects.tsx   # Featured projects
│   │   ├── Skills.tsx     # Skills & technologies
│   │   ├── Contact.tsx    # Contact information
│   │   └── index.ts       # Section exports
│   └── ui/                # Shadcn/ui components
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

1. **`src/components/sections/Hero.tsx`** - Your name, title, and introduction
2. **`src/components/sections/About.tsx`** - Your background and what you do
3. **`src/components/sections/Projects.tsx`** - Your featured projects
4. **`src/components/sections/Skills.tsx`** - Your skills and technologies
5. **`src/components/sections/Contact.tsx`** - Your contact information
6. **`src/components/layout/Footer.tsx`** - Your social links

### Adding Profile Image

Replace the avatar placeholder by adding your image to the `public/` folder and updating the `src` in `Hero.tsx`.

### Adding More Shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be deployed to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any other hosting platform that supports Next.js.

```bash
npm run build
npm run start
```

## License

MIT License - feel free to use this template for your own portfolio!

