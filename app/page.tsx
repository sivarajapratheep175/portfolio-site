import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Credentials from "@/components/Credentials";
import GithubPulse from "@/components/GithubPulse";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Journey />
        <Credentials />
        <GithubPulse />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
