import { Container } from '@client/app/components/Container';
import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';

export default function LandingPage() {
   return (
      <Container>
         <Hero />
         <Profiles />
      </Container>
   );
}
