import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Works from "@/components/Works";
import Material from "@/components/Material";
import Service from "@/components/Service";
import Flow from "@/components/Flow";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Works />
        <Material />
        <Service />
        <Flow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
