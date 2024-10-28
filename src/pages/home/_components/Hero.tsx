import { CalendarIcon } from "@/components/icons";
import { useScroll } from "@/hooks";
import { FC, useState } from "react";
import { ParallaxContainer } from "./ParallaxContainer";
import { ImageContainer } from "./ImageContainer";

const images = {
  backgroundImage:
    "https://s3-alpha-sig.figma.com/img/7414/82fb/25b20fec776e1761125aa34c09da0223?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTRNX304H-bcS1GD50LErWGLnW8gbEa6JnVvYTj0iBkdiTfWKfZgPW5o42ZqdyDOxcfqXJkHMY9R0rIQJDhPTlDyT55L-1LQ231V2pQf~ODGZ0PbSwS3ou8fSXY2bVLsFfIlMmsoPalbj9uUuuozeNA7TEFc~WafaudaVTAFpTYuZMTXrooQBDfiiwzXt8IiKdmc9fmxF45IB0Frgl6rODxbtp2v2VRkxya9~Kpb8Jpk1I6fElDHoBF0qum6PY4kddB-qfx-GcvW3x0jtTHFaVDnyxdZE-wvbcl2vkjw7vwXPBHlgUdobfwRlkoeHA1gfDQnQEXo~4q3qUlABaQiHg__",
  foregroundImage:
    "https://s3-alpha-sig.figma.com/img/5052/ddd2/f207e3a9b11f1595058f4576e57d154a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdgtYs-zpnT4wBZf2hf8CBQkeRKEIIfaU1Q3S~Qvuez5~sK~Iab1ZYfN7V4RC0nxqSWblhHFBaT-UDtxtHIuw4DyvnLUYmvKIDClbfEyj90IcPlxYuXSO6ynJj6oYazeJrAWfo6QxlYiePRRP7A9h-9U-tvkC-olSQYQArVeaR~fnUML2mLckA1q7AHpEuXnwDHPM1ErYLxs8VgQhaRifs4E3bub~1V1PK8umw~pFttLWiCmK-Ozt4eR5SfCUg8mURHBOeaLML79xFM~tGnsZxxx6~-U860ENQyIkT2oi~Wc7TrTFiRl7gZGozKKrZ~NPmpCicRhvWr1j4BRmCaZeQ__",
} as const;

export const HeroSection: FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useScroll(() => {
    const position = window.scrollY;
    setScrollPosition(position);
  });

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Mountains & City Background */}
      <ParallaxContainer scrollPosition={scrollPosition} speed={0.5} zIndex={9}>
        <ImageContainer
          imageUrl={images.backgroundImage}
          className="absolute inset-0 top-[-10px] w-full h-full"
        />
      </ParallaxContainer>

      {/* F1 car*/}
      <ParallaxContainer
        scrollPosition={scrollPosition}
        speed={0.2}
        zIndex={11}
      >
        <ImageContainer
          imageUrl={images.foregroundImage}
          className="absolute inset-0 top-[40px]  w-full h-full"
        />
      </ParallaxContainer>

      {/* Hero Text */}
      <ParallaxContainer
        scrollPosition={scrollPosition}
        speed={0.3}
        zIndex={10}
      >
        <div className="absolute left-[24px] lg:left-[120px] top-[180px] text-white font-[800] text-[80px] lg:text-[193px] leading-[80px] lg:leading-[173.7px]">
          <h1>
            Monaco <br />
            Grand Prix
          </h1>
        </div>
      </ParallaxContainer>

      {/* Race date */}
      <div className="hidden lg:flex absolute left-[120px] bottom-[15vh] z-[12] text-[27px] leading-[30px] font-bold">
        <div className="flex flex-col gap-4 text-white text-[30px]">
          <div className="flex items-center gap-3">
            <CalendarIcon />
            <span className="">24 - 27 NOV 2023</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="monaco-flag.png" />
            <span className="">Monaco</span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 z-[11] w-full h-[175px]"
        style={{
          background:
            "linear-gradient(180.01deg, rgba(0, 22, 43, 0) 18.83%, #00162B 92.1%)",
        }}
      ></div>
    </div>
  );
};
