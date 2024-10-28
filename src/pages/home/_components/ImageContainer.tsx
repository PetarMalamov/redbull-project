import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  imageUrl: string;
};

export const ImageContainer = (props: Props) => {
  const { style, imageUrl, ...rest } = props;

  return (
    <div
      {...rest}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
    />
  );
};
