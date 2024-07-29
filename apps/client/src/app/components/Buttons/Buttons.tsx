import { cn } from '@client/lib/cn';
import { Icons } from '@client/components/Icons';

export const links = [
  {
    name: 'GitHub',
    Icon: Icons.GitHub,
    style: 'from-gradient-17 to-gradient-18',
  },
  {
    name: 'LinkedIn',
    Icon: Icons.LinkedIn,
    style: 'from-gradient-18 to-gradient-19',
  },
  {
    name: 'GitHub',
    Icon: Icons.GitHub,
    style: 'from-gradient-20 to-gradient-21',
  },
  {
    name: 'LinkedIn',
    Icon: Icons.LinkedIn,
    style: 'from-gradient-22 to-gradient-23',
  },
];

export const LinkButtons: React.FC = () => (
  <div className="flex w-full self-stretch pt-36">
    <div className="flex w-full flex-wrap items-center justify-center gap-4 px-3">
      {links.map((item, index) => (
        <div
          key={index}
          className={cn(
            'bg-gradient-to-tr',
            item.style,
            'flex flex-col justify-center whitespace-nowrap rounded-sm p-0.5 text-center text-lg font-light'
          )}
        >
          <div className="bg-light-100 dark:bg-dark-300 dark:text-light-400 text-dark-300 flex items-center justify-center gap-2.5 px-3 py-2">
            <div>{item.name}</div>
            <item.Icon className="aspect-square w-5 shrink-0" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
