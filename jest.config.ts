import { getJestProjectsAsync } from '@nx/jest';

const config = async () => ({
  projects: await getJestProjectsAsync(),
});

export default config;
