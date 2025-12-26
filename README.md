# Portfolio 

A portfolio web page because why not?

**Live Demo:**  
[https://cimbir.vercel.app](https://cimbir.vercel.app)

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
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── projects/
│   │   └── page.tsx       # Projects page with sections (SWD, ML, Free)
│   ├── contact/
│   │   └── page.tsx       # Contact page with copy-to-clipboard
│   └── extra/
│       └── page.tsx       # Additional content page
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── index.ts       # Layout exports
│   └── ui/                # Shadcn/ui components (Badge, Button, Card, etc.)
├── constants/
│   └── index.ts           # Application constants (URLs, emails, etc.)
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

## Features

- **Multi-page Architecture**: Separate pages for About, Projects, Contact, and Extra content
- **Project Categorization**: Projects organized by field (Software Development, Machine Learning, Free Projects)
- **Quick Navigation**: Section-to-section navigation within the Projects page
- **Interactive Contact**: Copy-to-clipboard email functionality with fallback support
- **Terminal Aesthetic**: Command-line inspired design throughout the interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety across the application

## Customization

### Personal Information

Update the following files with your information:

1. **`src/constants/index.ts`** - Your email, GitHub URL, and other constants
2. **`src/app/page.tsx`** - Home page content and introduction
3. **`src/app/about/page.tsx`** - Your background and professional information
4. **`src/app/projects/page.tsx`** - Your project portfolio organized by sections
5. **`src/app/contact/page.tsx`** - Your contact information and social links
6. **`src/components/layout/Header.tsx`** - Navigation menu items
7. **`src/components/layout/Footer.tsx`** - Footer content and social links

### Project Categories

The projects page is organized into three main categories:
- **SWD (Software Development)**: Web applications, APIs, and software tools
- **ML (Machine Learning)**: AI/ML projects, data science, and research
- **Free**: Open-source contributions and experimental projects

Update the `projectSections` array in `src/app/projects/page.tsx` with your actual projects.

### Adding Static Files

Place downloadable files (like resumes, PDFs) in the `public/` folder to make them accessible via direct URLs.

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

