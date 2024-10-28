import { FC, PropsWithChildren } from "react";
import { Navbar } from "../navbar";

type PageLayoutProps = PropsWithChildren & {};

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};
