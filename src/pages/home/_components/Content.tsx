import { Post } from "@/domain";
import { FC } from "react";
import { Card } from "./Card";

type ContentProps = {
  posts: Post[];
};

export const Content: FC<ContentProps> = ({ posts }) => {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col justify-between py-4 lg:py-8"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/b579/a7bf/ea3090e4d99869f55809071a48a697f3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuEAD-9in0w1OimaFfmgG6~FdUlE1g3GaIAEUWn1F3ZB2cbmgoIUwABMnKjf8bk4Z1JRT-S~Ytb1AXJTlVhWBtWSmGYNupWdhkKWYsa0VSSao4wUkLsRHRPQiCIaem70S8uSeH9D14y-NeSITv3WFkIh1p8mQCaq6W-kqyX1xVHCwWOndln1UuARqS63KwHoamIybcD34h-2HeZhvh-AIRZSYRW-TVGzqqmhkQl5GRFsCWeXN9hwLE4-UuonQg6uJ4OObIGeZ7IyFBlewavwegr6sSz-W7KPo-ZvIJZ1~ru-b2c3oomtIvUpTzIUjx5KTkYJwkrHg9NMvVgfqOu1mw__")',
      }}
    >
      <h1 className="text-[45px] leading-[45px] font-[800] lg:text-[60px] lg:leading-[64px] lg:font-[800] px-8">
        Oracle In Practice
      </h1>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-8 pb-4 min-w-max">
          {posts.map((post) => (
            <Card
              key={post.title}
              post={post}
              title={<Card.Title />}
              details={<Card.Details />}
              onClick={() => {
                console.log("clicked");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
