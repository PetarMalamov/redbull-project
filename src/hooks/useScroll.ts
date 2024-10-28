import { useEffect } from "react";

export const useScroll = (
  onScroll: (event: WindowEventMap["scroll"]) => void
) => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
};
