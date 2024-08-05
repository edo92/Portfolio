import { Container } from '@client/app/components/Container';
import { Contact } from './components/ContactForm';
import { Header } from './components/Header';

export default function ContactPage() {
   return (
      <Container className="py-16 md:py-16" innerClassName="gap-16 md:gap-16">
         <Header />
         <Contact />
      </Container>
   );
}
