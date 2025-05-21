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
      
      <section className="relative text-black min-h-[80vh] flex flex-col" 
        style={{ 
          backgroundImage: "url('/images/industries/black.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="text-left max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in text-white drop-shadow-lg">
                Your Strategic Partner in <span className="text-accent">Business Excellence</span> and <span className="text-accent">Regulatory Compliance</span>
              </h1>
            </div>
          </div>

          {/* Info Card */}
          <div className="w-full lg:w-auto lg:ml-auto lg:mr-0 lg:absolute lg:right-0 lg:bottom-0">
            <div className="bg-white/10 backdrop-blur-md rounded-t-2xl p-3 sm:p-4 lg:p-6 border border-white/20 shadow-2xl w-full max-w-sm mx-auto lg:mx-0 lg:mr-0">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Your Growth Partner</h3>
              </div>
              <div className="relative">
                <div className="absolute -left-2 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 pl-4">
                  At Rona Consultants, we provide comprehensive professional solutions that transform challenges into opportunities. Our expertise helps businesses & organizations optimize their operations, ensure compliance, and achieve sustainable growth in the dynamic East African market.
                </p>
              </div>
              <div className="flex justify-end">
                <a 
                  href="tel:+255717801745" 
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-2 rounded-lg font-medium text-sm transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional business consulting services that enable our clients to navigate 
                complex regulatory environments and achieve sustainable growth through expert guidance 
                and innovative solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading business consultancy firm in Tanzania, recognized for our expertise, 
                integrity, and commitment to delivering value-driven solutions that transform businesses 
                and drive economic growth.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-900">
        <AboutUs isSection={true} />
      </section>

      {/* Services Section */}
      <section className="bg-gray-100">
        <ServicesSection />
      </section>

      {/* Industries Section */}
      <section className="bg-gray-900">
        <Industries isSection={true} />
      </section>

      {/* Insights Section */}
      <section className="bg-gray-100">
        <Insights />
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900">
        <Contact isSection={true} />
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our comprehensive range of services or get in touch with us today.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              className="bg-gray-900 text-white hover:bg-gray-800"
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