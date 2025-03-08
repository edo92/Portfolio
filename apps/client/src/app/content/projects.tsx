export const PROJECTS_INTRODUCTION = `Explore my portfolio of software engineering projects showcasing microservices, full-stack applications, and cloud infrastructure. These projects demonstrate my expertise in building scalable, high-performance systems using modern technologies and best practices.`;

export const PROJECTS = [
  {
    id: '0',
    title: 'Cymatics - Chladni Pattern Visualization - 3D & 2D',
    description:
      'Interactive visualization of Chladni patterns in both 3D using Three.js and 2D using P5.js. This app simulates particle movement on vibrating surfaces, creating mesmerizing patterns controlled by adjustable parameters.',
    longDescription:
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
    title: 'Cloud-Native Microservices Platform',
    description:
      'Scalable microservices architecture built with Python, FastAPI, and AWS',
    longDescription:
      'A highly scalable microservices platform designed for cloud-native deployments. This system uses FastAPI for high-performance API endpoints, with AWS services for infrastructure. The architecture follows domain-driven design principles and includes comprehensive testing and monitoring.',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',

    category: 'Backend',
    tags: ['Python', 'FastAPI', 'AWS', 'Docker', 'Kubernetes'],
    stats: [
      { label: 'API Endpoints', value: '50+' },
      { label: 'Response Time', value: '<50ms' },
      { label: 'Test Coverage', value: '95%' },
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    challenges: [
      'Creating a consistent development experience across multiple microservices',
      'Ensuring reliable communication between services in a distributed system',
      'Maintaining comprehensive test coverage across the entire platform',
    ],
    solutions: [
      'Developed a shared library of common utilities and standardized project structure',
      'Implemented event-driven architecture using AWS SNS/SQS for reliable async communication',
      'Created an automated testing pipeline with unit, integration, and end-to-end tests',
    ],
    results: [
      'Reduced development time for new services by 40%',
      'Achieved 99.9% message delivery rate between services',
      'Maintained 95% test coverage across all services',
    ],
  },
  // Additional projects would be defined here
];

export const FEATURED_PROJECT = {
  id: '0',
  title: 'Enterprise Microservices Platform',
  description:
    'A comprehensive cloud-native platform built with a microservices architecture, designed to handle high-volume transactions with fault tolerance and horizontal scalability.',
  detailed:
    'This enterprise-grade platform leverages cutting-edge technologies to deliver a robust, scalable solution for financial institutions. Built with a microservices architecture using Python and TypeScript, it processes millions of transactions daily while maintaining sub-second response times. The system includes real-time analytics, automated failover mechanisms, and comprehensive monitoring.',
  imageUrl:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',

  category: 'Full Stack',
  tags: [
    'Python',
    'TypeScript',
    'AWS',
    'Kubernetes',
    'Microservices',
    'Redis',
    'PostgreSQL',
  ],
  stats: [
    { label: 'Response Time', value: '<100ms' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Daily Users', value: '50,000+' },
  ],
  githubUrl: 'https://github.com',
  demoUrl: 'https://demo.com',
};
