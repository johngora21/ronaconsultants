
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const industries = [
  {
    title: "Manufacturing",
    description: "Comprehensive solutions for manufacturing businesses, from permits to compliance."
  },
  {
    title: "Tourism & Hospitality",
    description: "Specialized services for tourism operators and hospitality businesses."
  },
  {
    title: "Mining & Resources",
    description: "Expert guidance for mining operations and resource management."
  },
  {
    title: "Agriculture",
    description: "Support for agricultural businesses and agro-processing industries."
  },
  {
    title: "Technology",
    description: "Services tailored for technology and telecommunications companies."
  },
  {
    title: "Professional Services",
    description: "Solutions for accounting, legal, and other professional service firms."
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-business-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Industries We Serve</h1>
          <p className="text-lg mb-8 animate-fade-in">
            Specialized solutions across key sectors of the Tanzanian economy
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-business-blue mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
