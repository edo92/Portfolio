import { Metadata } from 'next';
import { PROJECTS } from '../../../content';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const _params = await params;

  const project = PROJECTS.find((p) => p.id === _params.id);

  if (!project) {
    return {
      title: 'Project Not Found | Eduard Jacobs Portfolio',
      description: 'The requested project could not be found.',
    };
  }
  return {
    title: `${project.title} | Eduard Jacobs Portfolio`,
    description: project.description,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
