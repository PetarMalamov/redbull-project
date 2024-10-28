import React, { FC, PropsWithChildren } from "react";

type ParallaxContainerProps = PropsWithChildren & {
  scrollPosition: number;
  speed: number;
  zIndex: number;
};

export const ParallaxContainer: FC<ParallaxContainerProps> = ({
  scrollPosition,
  speed,
  zIndex,
  children,
}) => {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: zIndex,
        transform: `translateY(${scrollPosition * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};
