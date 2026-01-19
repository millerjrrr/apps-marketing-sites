export default function Loader({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  );
}
