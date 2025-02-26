export const projects = [
  {
    id: 0,
    title: 'Enterprise Microservices Platform',
    description:
      'A comprehensive cloud-native platform built with a microservices architecture, designed to handle high-volume transactions with fault tolerance and horizontal scalability.',
    longDescription:
      'This enterprise-grade platform leverages cutting-edge technologies to deliver a robust, scalable solution for financial institutions. Built with a microservices architecture using Python and TypeScript, it processes millions of transactions daily while maintaining sub-second response times. The system includes real-time analytics, automated failover mechanisms, and comprehensive monitoring.',
    imageUrl: '/placeholder.svg?height=600&width=1200',
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
    challenges: [
      'Designing a system that could scale horizontally to handle peak loads of over 10,000 requests per second',
      'Implementing fault tolerance and automatic failover mechanisms to ensure high availability',
      'Creating a comprehensive monitoring and alerting system to detect and respond to issues in real-time',
    ],
    solutions: [
      'Utilized Kubernetes for container orchestration, allowing for automatic scaling based on load',
      'Implemented circuit breakers and bulkheads using Hystrix to prevent cascading failures',
      'Developed a custom monitoring solution using Prometheus and Grafana with automated alerts',
    ],
    results: [
      'Achieved 99.99% uptime over the past 12 months',
      'Reduced average response time from 500ms to under 100ms',
      'Successfully handled peak loads of 12,000 requests per second during high-traffic events',
    ],
  },
  {
    id: 1,
    title: 'Cloud-Native Microservices Platform',
    description:
      'Scalable microservices architecture built with Python, FastAPI, and AWS',
    longDescription:
      'A highly scalable microservices platform designed for cloud-native deployments. This system uses FastAPI for high-performance API endpoints, with AWS services for infrastructure. The architecture follows domain-driven design principles and includes comprehensive testing and monitoring.',
    imageUrl: '/placeholder.svg?height=600&width=1200',
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
