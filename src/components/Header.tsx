export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center font-bold p-4 bg-red-500">
      <div className="flex flex-col items-center font-bold text-WHITE ">
        <img src="adaptive-icon.png" className="w-12 h-12" />
      </div>
      <div className="flex flex-row">
        <p className="app-link">HOME</p>
        <p className="app-link">ABOUT</p>
        <p className="app-link">WEB APP</p>
      </div>
    </header>
  );
}
