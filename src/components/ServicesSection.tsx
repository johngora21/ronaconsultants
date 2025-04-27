
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  details: string[];
}

const services: Record<string, Service> = {
  "Tax Consultations": {
    title: "Tax Consultations",
    description: "Expert guidance for all your tax compliance needs",
    details: [
      "Tax planning for compliance with TRA regulations",
      "Filing corporate income tax, VAT, PAYE",
      "Advisory on tax incentives",
      "Handling TRA audits",
      "Tax compliance for cross-border trade"
    ]
  },
  "Business Registration": {
    title: "Business Registration",
    description: "Complete business registration solutions",
    details: [
      "Advisory on business structure",
      "Name search and reservation via BRELA",
      "Preparation of legal documents",
      "TIN and VAT registration",
      "Business permits assistance"
    ]
  },
  "Business Plans": {
    title: "Business Plans",
    description: "Strategic business planning services",
    details: [
      "Market research and analysis",
      "Financial projections",
      "Business model development",
      "Risk assessment",
      "Investment proposals"
    ]
  }
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-business-blue">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {Object.keys(services).map((serviceKey) => (
            <Card key={serviceKey} 
                  className={`p-6 transition-all duration-300 hover:shadow-lg cursor-pointer
                            ${selectedService === serviceKey ? 'border-accent' : ''}`}
                  onClick={() => setSelectedService(serviceKey)}>
              <h3 className="text-xl font-semibold mb-4">{services[serviceKey].title}</h3>
              <p className="text-gray-600">{services[serviceKey].description}</p>
              <Button variant="link" className="mt-4 text-accent">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {selectedService && (
          <div className="animate-fade-in bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">{services[selectedService].title}</h3>
            <ul className="space-y-4">
              {services[selectedService].details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
