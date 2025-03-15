# Eduard Jacobs Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](/apps/client/public/static/projects/portfolio.png)

## Features

- 🌗 Dark and light theme support
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🧩 Component-based architecture
- 🎨 Custom UI component library
- 📊 Project showcases with detailed case studies
- 📝 Career timeline section
- 📬 Interactive contact form

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build System**: [Nx](https://nx.dev/) Monorepo
- **UI Components**: Custom library with [Tailwind Variants](https://www.tailwind-variants.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

## Project Structure

```
portfolio/
├── apps/
│   └── client/              # Next.js frontend application
│       ├── public/          # Static assets and images
│       └── src/
│           ├── app/         # Next.js App Router components
│           │   ├── (main)/  # Main pages (home, projects, contact)
│           │   └── components/ # Shared page components
│           └── content/     # Content data (projects, skills, etc.)
└── libs/
    ├── ui/                  # Reusable UI component library
    │   ├── src/lib/         # UI components (Button, Card, etc.)
    │   └── src/styles/      # Global styles and Tailwind config
    └── util/                # Shared utility functions
```

## Running the Project

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

1. Clone the repository

   ```sh
   git clone https://github.com/edo92/portfolio.git
   cd portfolio
   ```

2. Install dependencies

   ```sh
   pnpm install
   ```

3. Start the development server

   ```sh
   nx run client:dev
   ```

4. Open [http://localhost:4200](http://localhost:4200) in your browser

### Build

To create a production build:

```sh
nx run client:build --prod
```

### Adding New Components

To add a new UI component to the library:

```sh
nx g @nx/next:library libs/MyComponent 
```

## Project Structure

The project uses Nx to manage the monorepo structure with the following organization:

- **apps/client**: The Next.js application
- **libs/ui**: Reusable UI components
- **libs/util**: Shared utility functions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Nx Documentation](https://nx.dev)
- [Framer Motion Documentation](https://www.framer.com/motion/)
