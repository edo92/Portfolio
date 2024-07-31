import { Container } from '@client/app/components/Container';
import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';
import { Projects } from './components/Projects';

export default function LandingPage() {
   return (
      <Container>
         <Hero />
         <Profiles />
         <Projects />
      </Container>
   );
}
