import { About, Experience, Hero, Offerings } from "@/components/sections";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Offerings />
      <Experience />
    </>
  );
};

export default Home;
