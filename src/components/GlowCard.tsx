import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";

import { cn } from "@/lib/utils";

const GlowCard = ({
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  style,
  ...props
}: HTMLMotionProps<"div">) => {
  const frameRef = useRef<number>(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.dataset.active = "true";

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--card-x", `${x}px`);
    event.currentTarget.style.setProperty("--card-y", `${y}px`);

    onMouseEnter?.(event);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    pointerRef.current.x = event.clientX;
    pointerRef.current.y = event.clientY;

    if (!frameRef.current) {
      frameRef.current = window.requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const x = pointerRef.current.x - rect.left;
        const y = pointerRef.current.y - rect.top;
        target.style.setProperty("--card-x", `${x}px`);
        target.style.setProperty("--card-y", `${y}px`);
        frameRef.current = 0;
      });
    }

    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    }
    event.currentTarget.dataset.active = "false";
    onMouseLeave?.(event);
  };

  return (
    <motion.div
      data-active="false"
      className={cn("glow-card relative overflow-hidden", className)}
      style={{
        "--card-x": "50%",
        "--card-y": "50%",
        ...style,
      } as React.CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;