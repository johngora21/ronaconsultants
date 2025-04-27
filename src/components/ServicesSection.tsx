
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceDetail, servicesData } from '@/types/services';
import { FileText } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-business-blue">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service) => (
            <Card 
              key={service.title}
              className={`p-6 transition-all duration-300 hover:shadow-lg cursor-pointer
                        ${selectedService?.title === service.title ? 'border-accent bg-accent/5' : ''}`}
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <Button variant="link" className="mt-4 text-accent p-0">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedService && (
          <div className="animate-fade-in bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-business-blue">{selectedService.title}</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent">Key Services</h4>
                <ul className="space-y-3">
                  {selectedService.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedService.subCategories && (
                <div>
                  {selectedService.subCategories.map((category, idx) => (
                    <div key={idx} className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-accent">{category.title}</h4>
                      <ul className="space-y-3">
                        {category.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
