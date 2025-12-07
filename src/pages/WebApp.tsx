export default function WebApp() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const showFrame = vw > vh * 0.6;

  const height = vh * 0.9;
  const width = 0.5 * height;
  const borderRadius = height * 0.1;

  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="inner-container select-none justify-center overflow-x-hidden lg:overflow-x-visible">
        {showFrame ? (
          <div
            className="relative flex overflow-hidden"
            style={{ height, width }}
          >
            <img
              src="images/iPhone_Static.png"
              className="z-1 absolute"
              style={{ height, width }}
            />
            <iframe
              src="/app-specific/griddier/web-app/index.html"
              className="z-20 flex h-full w-full p-[29px] lg:z-50"
              style={{ borderRadius }}
            />
          </div>
        ) : (
          <div className="flex h-screen w-full flex-col items-center">
            <div className="h-[50px]"></div>
            <iframe
              src="/app-specific/griddier/web-app/index.html"
              className="flex w-full"
              style={{ height, maxWidth: width * 1.1 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
