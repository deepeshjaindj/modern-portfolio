import {
  About,
  Contact,
  Experience,
  Footer,
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
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
