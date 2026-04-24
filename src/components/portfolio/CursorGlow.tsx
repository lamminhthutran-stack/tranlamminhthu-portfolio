import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [variant, setVariant] = useState<"default" | "hover" | "focus">("default");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch / small screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (isTouch || isSmall) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);

      const el = e.target as HTMLElement | null;
      if (el?.closest("[data-cursor='focus']")) setVariant("focus");
      else if (el?.closest("a, button, [data-cursor='hover']")) setVariant("hover");
      else setVariant("default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const loop = () => {
      // Smooth easing
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  if (!enabled) return null;

  const sizes = {
    default: { size: 520, opacity: 0.32, blur: 90 },
    hover: { size: 600, opacity: 0.45, blur: 90 },
    focus: { size: 280, opacity: 0.6, blur: 50 },
  };
  const s = sizes[variant];

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full transition-[width,height,opacity,filter] duration-500 ease-out mix-blend-screen will-change-transform"
      style={{
        width: s.size,
        height: s.size,
        opacity: visible ? s.opacity : 0,
        filter: `blur(${s.blur}px)`,
        background:
          "radial-gradient(circle, #3B82F6 0%, rgba(59,130,246,0.6) 40%, transparent 70%)",
      }}
    />
  );
}
