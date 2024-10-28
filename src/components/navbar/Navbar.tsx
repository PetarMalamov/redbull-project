import { useScroll } from "@/hooks";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
  const [hasScrolled, setHasScrolling] = useState(false);

  useScroll(() => {
    setHasScrolling(window.scrollY > 0);
  });

  return (
    <section
      className={`fixed top-0 left-0 right-0 z-[999] px-4 py-6 flex justify-between ${
        hasScrolled && "backdrop-blur-[20px] bg-white/20"
      }`}
    >
      <Link to="/">
        <img
          className="h-[36px]"
          src="https://www.redbullracing.com/_next/static/media/redbullracing-logo.d791f20e.png"
          alt="logo"
        />
      </Link>
      <div>{/* for future links */}</div>
    </section>
  );
};
