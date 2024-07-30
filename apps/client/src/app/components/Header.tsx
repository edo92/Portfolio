import dynamic from 'next/dynamic';
const ThemeSwitch = dynamic(() => import('./ThemeSwitch').then((c) => c.ThemeSwitch), {
   ssr: false,
   loading: () => <div>Loading...</div>,
});

export const Header: React.FC = () => {
   return (
      <header className="flex w-full flex-col items-center">
         <ThemeSwitch />
      </header>
   );
};
