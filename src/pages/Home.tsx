export default function Home() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-primary to-tertiary flex flex-col items-start justify-center">
      <h1 className="text-4xl font-extrabold mb-4 text-contrast drop-shadow">
        Home
      </h1>
      <h1 className="text-red-500">Test</h1>
      <p className="text-lg text-alt_contrast bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
        Welcome to your new site.
      </p>

      <button className="mt-6 px-6 py-3 bg-secondary text-contrast rounded-xl shadow hover:bg-primary transition">
        Explore
      </button>
    </div>
  );
}
