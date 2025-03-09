export const PROJECTS_INTRODUCTION = `Explore my portfolio of software engineering projects showcasing microservices, full-stack applications, and cloud infrastructure. These projects demonstrate my expertise in building scalable, high-performance systems using modern technologies and best practices.`;

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
    title: 'Full-Stack Monorepo with Next.js, NestJS, and AWS CDK',
    summary:
      'Modern full-stack application with secure authentication and scalable architecture',
    description:
      'Full-stack monorepo designed for building scalable web applications. It features a Next.js frontend with Tailwind CSS, a NestJS backend with Prisma ORM, and AWS CDK for infrastructure deployment. The application follows a modular architecture with proper separation of concerns, robust authentication, and type safety across the entire stack. Infrastructure is defined as code using AWS CDK, enabling consistent and repeatable deployments across multiple environments.',
    imageUrl: '/static/projects/ecs_diagram.png',
    category: 'Full-Stack',
    tags: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Prisma',
      'AWS CDK',
      'Tailwind CSS',
      'IaC',
      'JWT',
    ],
    stats: [
      { label: 'Frontend', value: 'Next.js' },
      { label: 'Backend', value: 'NestJS' },
      { label: 'Infrastructure', value: 'AWS IaC' },
      { label: 'Database', value: 'Prisma ORM' },
    ],
    githubUrl: 'https://github.com/StellarScript/Full-Stack-Monorepo-v2',
    challenges: [
      'Building a secure, type-safe application across frontend and backend',
      'Creating a scalable architecture that supports multiple environments',
      'Automating infrastructure deployment with appropriate security configurations',
      'Maintaining consistent development experience in a monorepo structure',
    ],
    solutions: [
      'Implemented secure JWT-based authentication and authorization',
      'Used shared DTO types across frontend and backend for type consistency',
      'Created a modular architecture with clear separation of concerns and dependency injection',
      'Defined infrastructure as code using AWS CDK for consistent and repeatable deployments',
    ],
    results: [
      'Secure, role-based access control with proper authorization guards',
      'Consistent development experience with shared types and utilities',
      'Automated infrastructure deployments with AWS CDK for development and production environments',
      'Easy-to-maintain infrastructure code that evolves alongside application code',
    ],
  },
  // Additional projects would be defined here
];
