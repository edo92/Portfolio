# Portfolio Documentation

## Overview

This is a modern web application built using [Nx](https://nx.dev) workspace, providing a scalable and maintainable development environment. The project uses Next.js for the frontend application.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Development

### Running the Development Server

To start the development server:

```bash
npx nx dev client
```

The application will be available at `http://localhost:4200` (default Nx port)

### Building for Production

To create a production build:

```bash
npx nx build client
```

### Project Structure

The project follows Nx workspace conventions:

- `apps/` - Contains main applications
- `libs/` - Contains shared libraries and components

## Project Management

### Available Commands

- View all available project commands:

```bash
npx nx show project client
```

### Adding New Components

#### Creating a New Application

```bash
npx nx g @nx/next:app your-app-name
```

#### Creating a New Library

```bash
npx nx g @nx/react:lib your-lib-name
```

## Development Tools

### Nx Console

For better development experience, install the Nx Console extension:

- [VSCode Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
- [IntelliJ Nx Console](https://plugins.jetbrains.com/plugin/21060-nx-console)

## Remote Caching

This project supports Nx Cloud for remote caching. To complete the setup, visit the [Nx Cloud setup page](https://cloud.nx.app/connect/sLVQWmcP6D).

## Additional Resources

### Official Documentation

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

MIT license
