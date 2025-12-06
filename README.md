# Fauna - Next.js Template

A modern, feature-rich Next.js application template built with TypeScript, TailwindCSS, and React 19. This template provides a complete foundation for building web applications with a clean architecture and reusable components.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The development server uses Turbopack for faster builds and hot reloading.

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages with dynamic routing
│   ├── contact/           # Contact page
│   ├── login/             # Authentication pages
│   ├── pricing/           # Pricing page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── layout/           # Layout-specific components
│   └── ui/               # Generic UI components
├── features/             # Feature-specific components
│   ├── about/            # About page components
│   ├── auth/             # Authentication components
│   ├── blog/             # Blog-related components
│   ├── contact/          # Contact form components
│   ├── home/             # Homepage components
│   └── pricing/          # Pricing components
├── data/                 # Static data files (JSON)
└── config/               # Application configuration
```

## 🎯 Adding New Pages

### 1. App Router Pages

Create new pages in the `src/app/` directory:

```bash
# Create a new page
mkdir src/app/services
touch src/app/services/page.tsx
```

Example page structure:
```tsx
export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      {/* Your page content */}
    </div>
  );
}
```

### 2. Dynamic Routes

For dynamic routes, use square brackets:

```bash
# Create dynamic route
mkdir src/app/services/[id]
touch src/app/services/[id]/page.tsx
```

### 3. Feature Components

Organize page-specific components in the `features/` directory:

```bash
mkdir src/features/services
mkdir src/features/services/components
```

## 🧩 Component Architecture

### UI Components (`src/components/ui/`)

Reusable, generic components like buttons, inputs, cards. Import from `src/components/ui/index.js`.

### Layout Components (`src/components/layout/`)

Page layout components like headers, footers, navigation.

### Feature Components (`src/features/*/components/`)

Page-specific components organized by feature area.

## 📊 Data Management

### Static Data

Store static content in `src/data/` as JSON files:

- `blog.json` - Blog posts
- `navigation.json` - Navigation links
- `pricing.json` - Pricing tiers
- `testimonials.json` - Customer testimonials

### Adding New Data

1. Create JSON file in `src/data/`
2. Import in your components:

```tsx
import blogData from '@/data/blog.json';
```

## 🎨 Styling

This template uses **TailwindCSS v4** for styling:

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind utility classes
- Configuration: `tailwind.config.ts` and `postcss.config.mjs`

### Adding Custom Styles

```css
/* src/app/globals.css */
.custom-class {
  @apply text-blue-500 font-bold;
}
```

## 🔧 Configuration

### App Configuration

Edit `src/config/index.js` for application-wide settings.

### TypeScript Configuration

The project uses TypeScript with strict configuration. See `tsconfig.json` for compiler options.

### ESLint Configuration

Code quality rules are configured in `eslint.config.mjs`.

## 📱 Features Included

- **Authentication Pages** - Login/Register forms
- **Blog System** - Dynamic blog with slug-based routing
- **Contact Forms** - Contact page with form components
- **Pricing Pages** - Pricing tables and comparison
- **About Pages** - Company information and team
- **Responsive Design** - Mobile-first responsive layout
- **Error Boundaries** - Error handling components
- **SEO Optimization** - Meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to [Vercel](https://vercel.com)
2. Deploy automatically on every push

### Other Platforms

Build the application:

```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment on any Node.js hosting platform.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **Runtime**: React 19.1.0
- **Build Tool**: Turbopack
- **Code Quality**: ESLint 9

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React 19 Documentation](https://react.dev)

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new files
3. Follow the component organization patterns
4. Run `npm run lint` before committing
5. Test your changes thoroughly

## 📄 License

This template is available for use in your projects. Customize it to fit your needs!
