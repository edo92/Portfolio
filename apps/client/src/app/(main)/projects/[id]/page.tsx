import dynamic from 'next/dynamic';
import { PROJECTS } from '../../../content';

const ProjectDetails = dynamic(() =>
  import('./components/Details').then((mod) => mod.ProjectDetail)
);

export default function ProjectDetailsPage() {
  return <ProjectDetails projects={PROJECTS} />;
}
