export default function Home() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-PRIMARY to-TERTIARY flex flex-col items-start justify-center">
      <h1 className="text-4xl font-extrabold mb-4 text-CONTRAST drop-shadow">
        Home
      </h1>
      <p className="text-lg text-alt_CONTRAST bg-WHITE/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
        Welcome to your new site.
      </p>

      <button className="mt-6 px-6 py-3 bg-SECONDARY text-CONTRAST rounded-xl shadow hover:bg-PRIMARY transition">
        Explore
      </button>
    </div>
  );
}
