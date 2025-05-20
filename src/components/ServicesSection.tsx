import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceDetail, servicesData } from '@/types/services';
import { FileText } from 'lucide-react';
import ServiceLicenses from './ServiceLicenses';
import ServiceForms from './ServiceForms';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-business-blue">Our Services</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-12">
          Comprehensive professional solutions tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {servicesData.map((service) => (
            <Card 
              key={service.title}
              className="bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-business-blue">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="link" 
                          className="mt-2 text-accent hover:text-accent/80 p-0 text-sm"
                        >
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-business-blue">
                            {service.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-4 text-accent">Key Services</h4>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                              {service.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {service.subCategories && (
                            <div>
                              {service.subCategories.map((category, idx) => (
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

                          {service.licenses && (
                            <ServiceLicenses licenses={service.licenses} />
                          )}

                          {service.forms && (
                            <ServiceForms forms={service.forms} />
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
