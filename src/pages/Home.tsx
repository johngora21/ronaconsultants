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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-sm"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Main Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 animate-fade-in text-white drop-shadow-lg">
                Your Strategic Partner in <span className="text-accent">Business Excellence</span> and <span className="text-accent">Regulatory Compliance</span>
              </h1>
              <p className="text-base sm:text-lg mb-8 sm:mb-10 animate-fade-in text-white drop-shadow-md leading-relaxed">
                We specialize in navigating Tanzania's complex regulatory landscape, offering tailored solutions that drive business success. From startup registration to full-scale operations, our expert team ensures your business thrives in East Africa's dynamic market.
              </p>
            </div>

            {/* Info Card */}
            <div className="absolute bottom-8 right-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 shadow-2xl max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Your Growth Partner</h3>
                </div>
                <div className="relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-accent rounded-full"></div>
                  <p className="text-white/90 text-lg leading-relaxed mb-8 pl-4">
                    At Rona Consultants, we provide comprehensive professional solutions that transform challenges into opportunities. Our expertise helps businesses & organizations optimize their operations, ensure compliance, and achieve sustainable growth in the dynamic East African market.
                  </p>
                </div>
                <div className="flex justify-end">
                  <a 
                    href="tel:+255717801745" 
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-business-blue mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional business consulting services that enable our clients to navigate 
                complex regulatory environments and achieve sustainable growth through expert guidance 
                and innovative solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-business-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - First to establish who we are */}
      <section className="bg-white">
        <AboutUs />
      </section>

      {/* Services Section - Show what we offer */}
      <section className="bg-gray-50">
        <ServicesSection />
      </section>

      {/* Industries Section - Display our expertise areas */}
      <section className="bg-white">
        <Industries />
      </section>

      {/* Insights Section - Share our knowledge */}
      <section className="bg-gray-50">
        <Insights />
      </section>

      {/* Contact Section - Call to action at the end */}
      <section className="bg-white">
        <Contact />
      </section>

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