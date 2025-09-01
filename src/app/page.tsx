import Image from "next/image";
import Header from "../components/Header";
import Hero from "./../components/Hero";
import Services from "./../components/Services";
import About from "./../components/About";
import Portfolio from "./../components/Portfolio";
import Process from "./../components/Process";
import Testimonials from "./../components/Testimonials";
import TextSlider from "./../components/TextSlider";
import Team from "../components/Team";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        <Hero />
        <Services />
        <div className="horizontal-line bg-[#e6e6e6]"></div>
        <About />
        <Portfolio />
        <Process />
        <div className="horizontal-line bg-[#e6e6e6]"></div>
        <Testimonials />
        <TextSlider />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
