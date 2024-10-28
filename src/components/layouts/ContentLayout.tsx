import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";

type ContentLayoutProps = PropsWithChildren & React.HTMLAttributes<HTMLElement>;

export const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  ...contentProps
}) => {
  const { className = "", ...rest } = contentProps;
  return (
    <section
      className={cn(
        "mt-20 p-5 md:px-10 lg:px-20 flex flex-col gap-5",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
