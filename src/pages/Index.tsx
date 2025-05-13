import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustriesGrid from "../components/IndustriesGrid";
import ServicesSection from "@/components/ServicesSection";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import Insights from "./Insights";
import Contact from "./Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <IndustriesGrid />
      <ServicesSection />
      <AboutUs />
      <Industries />
      <Insights />
      <Contact />
    </div>
  );
};

export default Index;
