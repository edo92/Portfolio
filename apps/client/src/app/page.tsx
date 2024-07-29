import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { LinkButtons } from './components/Buttons/Buttons';

export default function Index() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <div className="dark:bg-dark-300 bg-light-100 w-full px-5">
        <Hero />
        <LinkButtons />
      </div>
    </div>
  );
}
