export const PROJECTS_INTRODUCTION = `Dive into my collection of projects showcasing microservices, full-stack applications, and cloud infrastructure.`;

export const PROJECTS = [
  {
    id: '0',
    title: 'Cymatics - Chladni Pattern Visualization - 3D & 2D',
    summary:
      'Interactive visualization of Chladni patterns in both 3D using Three.js and 2D using P5.js. This app simulates particle movement on vibrating surfaces, creating mesmerizing patterns controlled by adjustable parameters.',
    description:
      'A Next.js-based application that visualizes Chladni cymatics patterns in both 2D and 3D environments. The 2D version uses P5.js to simulate particles that form patterns according to the Chladni equation, while the 3D version leverages Three.js and React Three Fiber for immersive visualization. The app features interactive controls allowing users to adjust frequency, amplitude, vibration strength, and particle count parameters to explore various cymatics patterns in real-time.',
    imageUrl: '/static/projects/cymatic-dark.png',
    category: 'Frontend',
    tags: ['React', 'Next.js', 'Three.js', 'P5.js', 'TypeScript', 'Cymatics'],
    stats: [
      { label: 'Particles', value: 'Up to 20,000' },
      { label: 'Visualization Modes', value: '2D & 3D' },
      { label: 'Interactive Parameters', value: '6' },
    ],
    githubUrl: 'https://github.com/StellarScript/Cymatics',
    demoUrl: 'https://cymatics-one.vercel.app',
    challenges: [
      'Optimizing performance while rendering up to 20,000 particles in real-time',
      'Creating smooth transitions between parameter changes to maintain visual appeal',
      'Implementing the mathematical Chladni equations correctly to produce accurate cymatics patterns',
      'Ensuring responsive design and consistent experience across both 2D and 3D visualizations',
    ],
    solutions: [
      'Utilized instanced mesh rendering in Three.js for efficient 3D particle management',
      'Implemented react-spring for smooth parameter transitions and animations',
      'Applied mathematical optimization to the Chladni equation implementation',
      'Created dynamic canvas sizing to adapt to different screen dimensions',
    ],
    results: [
      'Achieved smooth real-time visualization with up to 20,000 particles',
      'Implemented intuitive controls with informative tooltips for educational purposes',
      'Successfully created both 2D and 3D visualization options with consistent interfaces',
      'Ensured responsive design that adapts to various screen sizes and devices',
    ],
  },
  {
    id: '1',
    title: 'Full-Stack AWS Monorepo with Next.js, NestJS, and CDK',
    summary:
      'A comprehensive monorepo solution with cloud-native architecture and infrastructure as code',
    description:
      'A modern full-stack application monorepo featuring Next.js for the frontend, NestJS for the backend, and AWS CDK for infrastructure automation. The application is built with a focus on type safety, security, and scalability, organized within an NX monorepo for efficient development workflows. The architecture includes containerized deployments on ECS Fargate, PostgreSQL database with Prisma ORM, and blue-green deployment through AWS CodeDeploy.',
    imageUrl: '/static/projects/ecs_diagram.png',
    category: 'Full-Stack',
    tags: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Prisma',
      'AWS CDK',
      'Tailwind CSS',
      'ECS',
      'Docker',
      'Clerk Auth',
      'NX Monorepo',
    ],
    stats: [
      { label: 'Frontend', value: 'Next.js with Tailwind' },
      { label: 'Backend', value: 'NestJS with Prisma' },
      { label: 'Infrastructure', value: 'AWS CDK with ECS' },
      { label: 'CI/CD', value: 'Blue-Green Deployment' },
    ],
    githubUrl: 'https://github.com/StellarScript/Full-Stack-Monorepo-v2',
    challenges: [
      'Creating a unified development experience within a monorepo structure',
      'Implementing secure authentication and authorization across the stack',
      'Automating infrastructure provisioning with proper security configurations',
      'Designing a scalable container-based deployment architecture',
      'Ensuring type safety between frontend and backend services',
    ],
    solutions: [
      'Utilized NX workspace for shared code and efficient workflows',
      'Implemented Clerk authentication with custom JWT validation',
      'Defined infrastructure as code using AWS CDK for consistent deployments',
      'Created containerized services with ECS Fargate for scalable deployment',
      'Used shared DTOs and interfaces between frontend and backend',
    ],
    results: [
      'Consistent development experience with shared utilities and types',
      'Secure, token-based authentication with proper authorization guards',
      'Automated infrastructure provisioning with separation of concerns',
      'Blue-green deployment capability minimizing downtime',
      'Type-safe API interfaces between frontend and backend',
    ],
  },

  {
    id: '2',
    title: 'Modern Portfolio Website',
    summary:
      'A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring animated UI components, dynamic content loading, and responsive design.',
    description:
      'A sophisticated personal portfolio website for Eduard Jacobs showcasing projects, skills, and professional experience. The website is built using a monorepo architecture with Next.js for the frontend, featuring smooth animations with Framer Motion, a custom UI component library, and a dark/light theme toggle. The site includes dedicated project pages with detailed case studies, a responsive timeline component for career history, and an interactive contact form.',
    imageUrl: '/static/projects/portfolio.png',
    category: 'Frontend',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'Monorepo',
      'UI Components',
    ],
    stats: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Styling', value: 'Tailwind CSS' },
      { label: 'Animation', value: 'Framer Motion' },
      { label: 'Architecture', value: 'Monorepo (NX)' },
    ],
    githubUrl: 'https://github.com/edo92/portfolio',
    challenges: [
      'Creating a cohesive design system with consistent component styling across the application',
      'Implementing smooth animations and transitions that enhance user experience without impacting performance',
      'Building a maintainable component library that can be reused across different sections of the site',
      'Ensuring optimal performance with dynamic imports and code splitting for faster page loads',
    ],
    solutions: [
      'Developed a custom UI component library with Tailwind CSS and TypeScript for consistent styling',
      'Used Framer Motion for performant animations with staggered effects and scroll-based animations',
      'Implemented a monorepo structure with shared utilities and components for better code organization',
      'Utilized Next.js dynamic imports for component-level code splitting and improved load times',
    ],
    results: [
      'A visually impressive portfolio that effectively showcases professional work and skills',
      'Smooth, engaging user experience with performant animations and transitions',
      'Fully responsive design that works seamlessly across all device sizes',
      'Maintainable codebase with reusable components and consistent styling patterns',
    ],
  },
];
