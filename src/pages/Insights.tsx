
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "Business Registration Guide 2024",
    category: "Business Registration",
    date: "April 2024",
    description: "A comprehensive guide to registering your business in Tanzania."
  },
  {
    title: "Understanding Tax Compliance",
    category: "Tax Advisory",
    date: "March 2024",
    description: "Key insights into maintaining tax compliance for your business."
  },
  {
    title: "Latest Industry Regulations",
    category: "Regulatory Updates",
    date: "March 2024",
    description: "Stay updated with the latest regulatory changes affecting businesses."
  }
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-business-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Business Insights</h1>
          <p className="text-lg mb-8 animate-fade-in">
            Stay informed with our latest industry insights and expert analysis
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={`https://picsum.photos/600/300?random=${index}`}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-accent">{insight.category}</span>
                    <span className="text-sm text-gray-500">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-business-blue mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <Button variant="link" className="text-accent p-0">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
