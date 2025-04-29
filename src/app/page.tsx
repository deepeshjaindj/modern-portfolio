import {
  About,
  Experience,
  Hero,
  Offerings,
  Projects,
  TechStack,
} from "@/components/sections";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Offerings />
      <Experience />
      <Projects />
      <TechStack />
    </>
  );
};

export default Home;
