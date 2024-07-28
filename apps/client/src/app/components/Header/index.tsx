export const Header = () => {
  return (
    <div className="bg-dark-300 text-light-400 flex w-full items-center justify-center whitespace-nowrap px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="flex w-full justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-lg">DR</div>
        <div className="flex justify-center gap-5 self-start px-1 text-sm">
          <div className="py-1">Projects</div>
          <div className="pb-2.5 pt-1">Resume</div>
          <div className="pb-2.5 pt-1">Contact</div>
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
