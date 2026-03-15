import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [shouldLoadImage, setShouldLoadImage] = React.useState(false);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const onVisible = () => {
      const idleWindow = window as Window & {
        requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      };

      if (typeof idleWindow.requestIdleCallback === "function") {
        idleWindow.requestIdleCallback(() => setShouldLoadImage(true), { timeout: 1200 });
      } else {
        globalThis.setTimeout(() => setShouldLoadImage(true), 120);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          onVisible();
          observer.disconnect();
        }
      },
      {
        rootMargin: "350px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold font-display text-foreground">
              Unleash the full power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                Your Device
              </span>
            </h2>
          </>
        }
      >
        {shouldLoadImage ? (
          <img
            src="/dashboard.png"
            alt="Dashboard preview"
            className="mx-auto rounded-2xl object-contain md:object-cover h-full w-full object-center"
            draggable={false}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        ) : (
          <div className="h-full w-full rounded-2xl bg-card" aria-hidden="true" />
        )}
      </ContainerScroll>
    </div>
  );
}
