import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Services Header */}
      <section className="pt-20 bg-business-blue text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-lg mb-8 animate-fade-in">
            Comprehensive professional solutions tailored to your business needs
          </p>
        </div>
      </section>

      <div className="pt-16">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;
