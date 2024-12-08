import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <div className="">
      {/* Intro section */}
        <Introduction />

      {/* About section */}
        <About />

      {/* education section */}
        <Education />

      
      {/* education section */}
        <Skills />

      {/* Projects section */}
        <Projects />

      {/* contact section */}
        <Contact />

    </div>
  );
}
