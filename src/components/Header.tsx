export default function Header() {
  return (
    <div>
      <div className="h-20"></div>
      <header className="header">
        <div className="inner-container flex-row">
          <img
            src="adaptive-icon.png"
            className="site-icon bg-PRIMARY md:bg-transparent rounded-full"
          />
          <div className="flex flex-row bg-PRIMARY md:bg-transparent pl-2 rounded-l-full translate-x-[8px] border-2 border-TERTIARY border-r-0 md:border-0">
            <p className="app-link">HOME</p>
            <p className="app-link">ABOUT</p>
            <p className="app-link">WEB APP</p>
          </div>
        </div>
      </header>
    </div>
  );
}
