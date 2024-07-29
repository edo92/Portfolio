import { ABOUT_TEXT, NAME, HERO_TITLE } from './constants';

export const PageHero: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-9">
      <div className="mt-5 w-5/6 px-3 py-px">
        <div className="flex flex-col items-start px-12 pt-8">
          <div className="text-dark-300 dark:text-light-400 text-base max-md:max-w-full">
            {HERO_TITLE}
          </div>
          <div className="text-gradient-100 text-8xl font-bold max-md:max-w-full">
            {NAME}
          </div>
          <div className="text-dark-300 dark:text-light-400 text-sm max-md:max-w-full">
            {ABOUT_TEXT}
          </div>
        </div>
      </div>
    </div>
  );
};
