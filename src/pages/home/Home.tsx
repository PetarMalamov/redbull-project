import { HeroSection } from "./_components/Hero";
import { Content } from "./_components/Content";
import { Post } from "@/domain";

const posts: Post[] = [
  {
    title: "Oracle Virtual Lap in Monza",
    type: "Virtual Lap",
    readTime: "6 min read",
    image:
      "https://s3-alpha-sig.figma.com/img/9e67/ca76/22d9adb9f1ef1c9271e48b27334162d5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cokcyqjhh-eE4xI6bxnDjjpf~eQ2t~6HDQJ8f2aJ1SMP4VdQ8P2X8JUJMk8~9kTEw7SlLodVTejzizE~rDuHeUIb6FisK0IBTdsvOs2LcU29IPxaIxLvu6rKposDoQL7xN1~~bc3ciRtduBbJjLMJ6K~HgO3ybuZrfi1MQ8EgUwuc~L0HInlS~NwfyIr6gXme2Nztw5uG2iAy9ChyhqRPWf2dCINBdEPju2VitqRlHhjYhmuhklcISPPWvJMcHsekEFrt-DXmPAY7dHsamuqSo5lYUvgYfOuh7fRwvy1DsftiQtJE673H0C62gEiwQ2rjiNADbv9yQY6a0YgsoPv7Q__",
  },
  {
    title: "Oracle Strategy Guide",
    type: "Oracle Strategy Guide",
    readTime: "4 min read",
    image:
      "https://s3-alpha-sig.figma.com/img/164b/487a/6d0b2a65887b277016fc65a0d14f767a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E~hvBzDc~UvtlbN8AtgYdmZtbihCS6EEkYT92sUxEXps9Tcs09bZaKOTpxUuoQkBbpShYMxE-reLPAD9WCmtlp08ENcTiypCCmTvrR8lzkzoj6IH-xZ0Hmif4IHhsFDiieL~tgmGALhI2dT-Tb2yH2MJkOdG1forAsIAyotk31xH7FaBIv8uUoS55iSiz1flCYdDWJjOKJ4LCwaAP4ZMJRU5dMQKw7n1s4yt39pk6AjEkb1sdlSKcXmwzm~qHxPMu4KC9bOw5HhkTLT0a3nx0mUfRFSyrkCfhK1sFFVvUnnjkZbEXV5ZuXfWZx5Y7iOaAqJJXwkWmm5t9k98L7LxWQ__",
  },
  {
    title: "Oracle Cloud Telemetry Data",
    type: "Data",
    readTime: "3 min read",
    image:
      "https://s3-alpha-sig.figma.com/img/0e05/cfa7/1e571813b869ce7b692499b36f1dc7c7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6U3TmdzpmWjJTo8l7LA8JJqxK7GVXsJAPFnp8zNQsfVQNzhDqtH-AAi66Ld5fVKYqrM6~LthJ3wzXE6A9Dg5-9L-C62waVofRAshlcdBohbkEGvfU~Z4xfhQq-J1J8s8KASa5z9kerEeZmttpQs4qNliZy~6ZRIqbNEgWmo95tY5k8-Z2V-BTMt7IPPYW1giKdtubaujC8u~YAkvQ5H0x6b9uPQuMtEukdF4J~GL8FE-FUNc8BOBkl-OeljFQJxdE0lgHo0IQM7RaTP2qjOEy1BckEPFnzhyHZ7~5kw~8vIT090TM7diJbZxTBJsqTRIfcnSMMHge0FIkEc9vpsXA__",
  },
];

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="h-[500px]">{/* empty section for scrolling */}</div>
      <Content posts={posts} />
    </>
  );
};
