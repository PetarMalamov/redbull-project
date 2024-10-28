import { StartIcon } from "@/components/icons";
import { Post } from "@/domain";
import React, { createContext, FC, useContext } from "react";

const CardContext = createContext<{ post: Post | null }>({
  post: null,
});

export const useCardContext = (): { post: Post | null } => {
  return useContext(CardContext);
};

type CardProps = {
  post: Post;
  title?: React.ReactNode;
  details?: React.ReactNode;
  onClick?: () => void;
};

export const Card = ({ post, onClick, details, title }: CardProps) => {
  return (
    <CardContext.Provider value={{ post }}>
      <div
        key={post.title}
        className="relative h-[400px] w-[300px] rounded-sm text-white overflow-hidden flex flex-col justify-end cursor-pointer"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${post.image})`,
        }}
        onClick={onClick}
      >
        <div className="absolute top-4 right-4">
          <StartIcon />
        </div>

        <div className="flex flex-col gap-4 p-4">
          {title}
          {details}
        </div>
      </div>
    </CardContext.Provider>
  );
};

const CardTitle: FC = () => {
  const { post } = useCardContext();
  return (
    <h3 className="text-[20px] leading-[24px] font-[400]">{post?.title}</h3>
  );
};

const CardDetails: FC = () => {
  const { post } = useCardContext();
  return (
    <div className="flex justify-between">
      <div className="bg-white/20 rounded-[4px] px-2">{post?.type}</div>
      <p>{post?.readTime}</p>
    </div>
  );
};

Card.Details = CardDetails;
Card.Title = CardTitle;
