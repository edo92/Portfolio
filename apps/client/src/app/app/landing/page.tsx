import { Container } from '@client/app/components/Container';
import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Section } from './components/Section';

export default function LandingPage() {
   return (
      <Container>
         <Hero />
         <Profiles />
         <Section>
            <Timeline />
            <Projects />
         </Section>
      </Container>
   );
}
