import { links } from './links';

export const LinkButtons: React.FC = () => (
  <div className="flex w-full self-stretch">
    <div className="flex w-full flex-row items-center justify-center pt-36">
      {links.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center whitespace-nowrap rounded-sm p-4 text-center text-lg font-light  text-stone-300"
        >
          <div className="border-gradient-100 flex justify-center gap-2.5 border px-9 max-md:px-5">
            <div>{item.name}</div>
            <item.Icon
              className={`text-light-400 dark:text-dark-300 aspect-square w-5 shrink-0 self-start`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
