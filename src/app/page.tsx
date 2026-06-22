import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Reviews from "@/components/Reviews";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Impact />
      <WorkSection />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
