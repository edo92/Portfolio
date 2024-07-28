export const Header = () => {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full font-light whitespace-nowrap bg-neutral-900 text-stone-300 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 justify-between w-full max-w-[1153px] max-md:flex-wrap max-md:max-w-full">
        <div className="text-2xl">DR</div>
        <div className="flex gap-5 justify-center self-start px-1 text-lg">
          <div className="py-1">Projects</div>
          <div className="pt-1 pb-2.5">Resume</div>
          <div className="pt-1 pb-2.5">Contact</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93ea801a38cdebac8709809c2ac65eec1d15b481a88f02c597b62314cd7821b8?apiKey=e3660d42c58b4c259ebe598b9e99176a&&apiKey=e3660d42c58b4c259ebe598b9e99176a"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
