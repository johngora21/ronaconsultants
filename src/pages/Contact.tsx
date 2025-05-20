import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-business-blue mb-8">Contact Us</h1>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-12">
          Get in touch with our team of experts
        </p>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Consultation Booking Form */}
          <Card className="p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-business-blue mb-4 sm:mb-6">Book a Consultation</h2>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="business-registration">Business Registration</SelectItem>
                    <SelectItem value="tax-advisory">Tax Advisory</SelectItem>
                    <SelectItem value="legal-services">Legal Services</SelectItem>
                    <SelectItem value="business-consulting">Business Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Consultation Date</Label>
                <Input id="preferredDate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide any additional details about your consultation needs"
                  className="h-32"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90">
                Book Consultation
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
                  <p className="text-gray-600">Morocco Square, Dar es Salaam, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-business-blue">Call Us</h3>
                  <p className="text-gray-600">+255 717801745</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-business-blue">Email Us</h3>
                  <p className="text-gray-600">info@ronaconsultants.co.tz</p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gray-50 shadow-sm">
              <h3 className="font-semibold text-business-blue mb-3">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>

            {/* Map Section */}
            <Card className="p-6 bg-gray-50 shadow-sm">
              <h3 className="font-semibold text-business-blue mb-4">Our Location</h3>
              <div className="w-full h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7526223153847!2d39.2692!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0c9c0c0c0c%3A0x0!2sMorocco%20Square%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1620000000000!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rona Consultants Office Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
