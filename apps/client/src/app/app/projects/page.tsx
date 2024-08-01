import { Container } from '@client/app/components/Container';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

export default function ProjectsPage() {
   return (
      <Container>
         <Hero />
         <Projects />
      </Container>
   );
}
