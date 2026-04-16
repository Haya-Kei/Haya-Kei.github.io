import { useEffect, useRef } from "react";
import "../styles/Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const scale = useRef(1);
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const update = () => {
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;
      position.current.x = target.current.x;
      position.current.y = target.current.y;

      const speed = Math.hypot(dx, dy);
      const targetScale = 1 + Math.min(1.6, speed / 80);
      scale.current += (targetScale - scale.current) * 0.35;

      cursor.style.transform = `translate3d(${position.current.x - 8}px, ${position.current.y - 8}px, 0) scale(${scale.current})`;
      rafRef.current = requestAnimationFrame(update);
    };

    const onMove = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    const onDown = () => {
      cursor.classList.add("cursor--active");
    };

    const onUp = () => {
      cursor.classList.remove("cursor--active");
    };

    const onLeave = () => {
      cursor.classList.add("cursor--hidden");
    };

    const onEnter = () => {
      cursor.classList.remove("cursor--hidden");
    };

    rafRef.current = requestAnimationFrame(update);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return <div className="cursor" ref={cursorRef} aria-hidden="true" />;
}

export default Cursor;
