import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Industries from "./Industries";
import Insights from "./Insights";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-black py-20" style={{ backgroundImage: "url('/images/team.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">
              Your Strategic Partner in
              <span className="text-accent"> Business Excellence</span> and
              <span className="text-accent"> Regulatory Compliance</span>
            </h1>
            <p className="text-lg mb-8 animate-fade-in">
              We provide comprehensive professional solutions that transform challenges into opportunities. Our expertise helps businesses & organizations optimize their operations, ensure compliance, and achieve sustainable growth in the dynamic East African market.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section - First to establish who we are */}
      <AboutUs />

      {/* Services Section - Show what we offer */}
      <ServicesSection />

      {/* Industries Section - Display our expertise areas */}
      <Industries />

      {/* Insights Section - Share our knowledge */}
      <Insights />

      {/* Contact Section - Call to action at the end */}
      <Contact />

      {/* Final Call to Action Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-business-blue mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our comprehensive range of services or get in touch with us today.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              className="bg-business-blue text-white hover:bg-business-blue/90"
              onClick={() => navigate('/services')}
            >
              Our Services
            </Button>
            <Button 
              variant="outline"
              className="bg-accent text-white hover:bg-accent/90"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;