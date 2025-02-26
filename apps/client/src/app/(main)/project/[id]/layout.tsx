import { Metadata } from 'next';
import { projects } from './content';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const _params = await params;

  const project = projects.find((p) => p.id === parseInt(_params.id, 10));

  if (!project) {
    return {
      title: 'Project Not Found | Eduard Jacobs Portfolio',
      description: 'The requested project could not be found.',
    };
  }
  return {
    title: `${project.title} | Eduard Jacobs Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Eduard Jacobs Portfolio`,
      description: project.longDescription,
      url: `https://ejresume.com/projects/${project.id}`,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.longDescription,
      images: [project.imageUrl],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
