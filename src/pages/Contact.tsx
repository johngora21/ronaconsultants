
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-business-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-lg mb-8 animate-fade-in">
            Get in touch with our team of experts
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-business-blue mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input type="text" placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input type="text" placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea placeholder="How can we help you?" className="h-32" />
                </div>
                <Button className="w-full bg-accent text-white hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-business-blue mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-business-blue">Visit Us</h3>
                    <p className="text-gray-600">123 Business Street, Dar es Salaam, Tanzania</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-business-blue">Call Us</h3>
                    <p className="text-gray-600">+255 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-business-blue">Email Us</h3>
                    <p className="text-gray-600">info@ronaconsultants.com</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gray-50">
                <h3 className="font-semibold text-business-blue mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
