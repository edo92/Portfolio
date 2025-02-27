import { projects } from './content';
import { ProjectDetail } from './components/Details';

export default function ProjectDetailPage() {
  return (
    <div className="size-full min-h-screen">
      <ProjectDetail projects={projects} />
    </div>
  );
}
