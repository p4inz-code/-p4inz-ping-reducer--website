import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[data-cursor='interactive']",
].join(", ");

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(any-pointer: coarse)");
    const updateEnabled = () => setEnabled(!mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return;
    }

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let hovered = false;
    let frame = 0;

    const render = () => {
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const onMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }

      const nextHovered = Boolean((event.target as Element | null)?.closest(INTERACTIVE_SELECTOR));
      if (nextHovered !== hovered) {
        hovered = nextHovered;
        ring.classList.toggle("cursor-expand", hovered);
      }
    };

    const onDown = () => {
      ring.classList.add("cursor-pressed");
    };

    const onUp = () => {
      ring.classList.remove("cursor-pressed");
    };

    const onLeave = () => {
      hovered = false;
      ring.classList.remove("cursor-expand");
    };

    render();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} id="cursor-dot" aria-hidden="true" className="custom-cursor-dot" />
      <div ref={ringRef} id="cursor-ring" aria-hidden="true" className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;