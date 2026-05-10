import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Pipeline from "@/components/Pipeline";
import FAQ from "@/components/FAQ";
import Creator from "@/components/Creator";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Installation />
        <Pipeline />
        <FAQ />
        <Creator />
      </main>
      <Footer />
    </>
  );
}
