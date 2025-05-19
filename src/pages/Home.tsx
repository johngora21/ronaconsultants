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
      
      <section className="relative text-black min-h-[100vh] flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('/images/industries/black.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-12 animate-fade-in text-white drop-shadow-lg">
            Your Strategic Partner in <span className="text-accent">Business Excellence</span> and <span className="text-accent">Regulatory Compliance</span>
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 animate-fade-in text-white drop-shadow-md max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            At Rona Consultants, we provide comprehensive professional solutions that transform challenges into opportunities. Our expertise helps businesses & organizations optimize their operations, ensure compliance, and achieve sustainable growth in the dynamic East African market.
          </p>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-business-blue mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional business consulting services that enable our clients to navigate 
                complex regulatory environments and achieve sustainable growth through expert guidance 
                and innovative solutions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-business-blue mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading business consultancy firm in Tanzania, recognized for our expertise, 
                integrity, and commitment to delivering value-driven solutions that transform businesses 
                and drive economic growth.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-business-blue mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, delivering high-quality solutions."
                },
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of professional ethics and transparency."
                },
                {
                  title: "Innovation",
                  description: "We embrace innovation to provide cutting-edge solutions for our clients."
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-business-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - First to establish who we are */}
      <AboutUs />

      {/* Services Section - Show what we offer */}
      <section className="pt-20 bg-business-blue text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">Our Services</h1>
          <p className="text-base sm:text-lg animate-fade-in">
            Comprehensive professional solutions tailored to your business needs
          </p>
        </div>
      </section>
      <div className="pt-16">
        <ServicesSection />
      </div>

      {/* Industries Section - Display our expertise areas */}
      <Industries />

      {/* Insights Section - Share our knowledge */}
      <Insights />

      {/* Contact Section - Call to action at the end */}
      <Contact />

      {/* Final Call to Action Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-business-blue mb-6">Ready to Get Started?</h2>
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