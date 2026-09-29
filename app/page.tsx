import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Training from "@/components/Training";
import Education from "@/components/Education";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Training />
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
