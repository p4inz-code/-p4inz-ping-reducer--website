import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const BackgroundEffects = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#b43cff" },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.15,
        distance: 150,
        width: 1,
      },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 0.8,
        direction: MoveDirection.none,
        random: true,
        straight: false,
        outModes: { default: OutMode.out },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false, mode: "repulse" },
        onClick: { enable: false },
        resize: { enable: true },
      },
      modes: { repulse: { distance: 100 } },
    },
    detectRetina: true,
  }), []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#03020a",
      }}
    >
      {ready && (
        <Particles
          id="particles-js"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default BackgroundEffects;