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
import { Toaster } from "react-hot-toast";

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
      {/* Toaster */}
      <Toaster />
    </>
  );
};

export default Home;
