import GradientBackground from "@/components/ui/GradientBackground";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Featured from "@/components/sections/Featured";
import Projects from "@/components/sections/Projects";
import HowIBuild from "@/components/sections/HowIBuild";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Exploring from "@/components/sections/Exploring";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <GradientBackground /><Cursor /><Navbar />
      <main>
        <Hero /><About /><Featured /><Projects /><HowIBuild /><Skills /><Journey /><Exploring /><Philosophy /><Contact />
      </main>
      <Footer />
    </>
  );
}
