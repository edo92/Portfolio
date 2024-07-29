import { Icons } from '@client/components/Icons';
import { cn } from '@client/lib/cn';

export const links = [
  {
    name: 'GitHub',
    Icon: Icons.GitHub,
    style: 'from-gradient-17 to-gradient-18',
  },
  {
    name: 'LinkedIn',
    Icon: Icons.LinkedIn,
    style: 'from-gradient-19 to-gradient-20',
  },
  {
    name: 'GitHub',
    Icon: Icons.GitHub,
    style: 'from-gradient-21 to-gradient-22',
  },
  {
    name: 'LinkedIn',
    Icon: Icons.LinkedIn,
    style: 'from-gradient-23 to-gradient-24',
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
            'flex flex-col justify-center whitespace-nowrap rounded-sm p-1 text-center text-lg font-light text-neutral-900'
          )}
        >
          <div className="bg-light-100 flex items-center justify-center gap-2.5 px-3 py-2">
            <div>{item.name}</div>
            <item.Icon className="aspect-square w-5 shrink-0" />
          </div>
        </div>
      ))}
    </div>
  </div>
);
