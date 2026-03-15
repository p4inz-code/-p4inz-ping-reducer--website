import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
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
        <img
          src="/dashboard.png"
          alt="Dashboard preview"
          className="mx-auto rounded-2xl object-contain md:object-cover h-full w-full object-center"
          draggable={false}
          loading="lazy"
        />
      </ContainerScroll>
    </div>
  );
}
