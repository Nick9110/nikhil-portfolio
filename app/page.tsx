import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Ambient3D from "@/components/Ambient3D";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Ambient3D />
      <div className="scanline" />
      <Cursor />
      <Navbar />
      <main className="relative z-10 depth-stage">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
