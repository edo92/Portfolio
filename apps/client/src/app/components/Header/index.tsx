import { Icons } from '@client/components/Icons';

export const Header = () => {
  return (
    <div className="bg-dark-300 text-light-400 flex w-full items-center justify-center whitespace-nowrap px-16 py-7 max-md:max-w-full max-md:px-5">
      <div className="flex w-full justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-lg">DR</div>

        <div className="flex items-center justify-center gap-5 self-start px-1 text-sm">
          <div>Projects</div>
          <div>Resume</div>
          <div>Contact</div>

          <div className="cursor-pointer">
            <Icons.LightBulb className="aspect-square w-6 shrink-0 self-start" />
          </div>
        </div>
      </div>
    </div>
  );
};
