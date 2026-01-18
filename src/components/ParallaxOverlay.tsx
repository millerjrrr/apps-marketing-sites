import { useEffect, useState } from "react";

export default function ParallaxOverlay() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(-window.scrollY * 0.2);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-1/2 z-[-1] h-[300vh] w-full -translate-y-1/2 bg-cover bg-center bg-repeat-y will-change-transform"
      style={{
        backgroundImage: "url(/images/overlay.png)",
        transform: `translateY(calc(-50% + ${offset}px))`,
      }}
    />
  );
}
