import { Section } from '@client/app/components/Section';
import { Container } from '@client/app/components/Container';
import { DividerCenter } from '@client/app/components/Divider-Center';

import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';

export default function LandingPage() {
   return (
      <Container>
         <Hero />
         <Profiles />
         <Section>
            <Timeline />
            <DividerCenter />
            <Projects />
         </Section>
      </Container>
   );
}
