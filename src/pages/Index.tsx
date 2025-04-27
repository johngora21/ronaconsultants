import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-business-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/lovable-uploads/d421a722-52c3-46c4-9691-ee8647d5a8c8.png"
              alt="Rona Consultants"
              className="mx-auto mb-8 h-24 w-auto"
            />
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">
              Reliable ally for navigating the complexities of
              <span className="text-accent"> Tax, Transfer Pricing</span> and
              <span className="text-accent"> Business Support</span>
            </h1>
            <p className="text-lg mb-8 animate-fade-in">
              We provide comprehensive business solutions to help your organization thrive
            </p>
            <Button 
              variant="outline"
              className="bg-accent text-white hover:bg-accent/90 animate-fade-in"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Insights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-business-blue">Featured Insights</h2>
            <Button variant="link" className="text-accent">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <img 
                  src={`https://picsum.photos/600/400?random=${item}`}
                  alt="Featured Insight"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Latest Industry Updates</h3>
                  <p className="text-gray-600 mb-4">Stay informed with our expert analysis on recent developments.</p>
                  <Button variant="link" className="text-accent">Read Article</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
