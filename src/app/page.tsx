import { About, Hero, Offerings } from "@/components/sections";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Offerings />
    </>
  );
};

export default Home;
