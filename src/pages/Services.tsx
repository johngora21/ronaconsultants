
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;
