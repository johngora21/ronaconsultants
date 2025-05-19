import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const insights = [
  {
    title: "Tanzania's Mining Sector: Opportunities and Challenges",
    category: "Mining & Minerals",
    date: "April 2024",
    description: "An in-depth analysis of Tanzania's mining sector, including recent policy changes and investment opportunities.",
    image: "/images/industries/miningminerals.jpg",
    detailedContent: `Tanzania's mining sector continues to be a cornerstone of the country's economic development. Recent policy changes have created new opportunities for both local and international investors.

Key Highlights:
• New mining regulations implemented in 2024
• Increased focus on local content requirements
• Growing investment in gold, gemstones, and rare earth minerals
• Enhanced environmental protection measures
• Development of value addition initiatives

Investment Opportunities:
• Gold mining and processing
• Gemstone exploration and cutting
• Rare earth minerals extraction
• Mining equipment and services
• Infrastructure development

The government's commitment to sustainable mining practices and local value addition presents significant opportunities for businesses looking to enter or expand in Tanzania's mining sector.`
  },
  {
    title: "Tourism Growth in Tanzania: 2024 Outlook",
    category: "Tourism",
    date: "March 2024",
    description: "Exploring the growth potential of Tanzania's tourism sector and its impact on the economy.",
    image: "/images/industries/safari_in_serengeti.jpg",
    detailedContent: `Tanzania's tourism sector is experiencing unprecedented growth, driven by its unique natural attractions and improved infrastructure.

Key Developments:
• Record-breaking visitor numbers in 2023
• New luxury accommodations opening across the country
• Enhanced air connectivity with major international hubs
• Digital transformation in tourism services
• Community-based tourism initiatives

Growth Areas:
• Wildlife safaris and eco-tourism
• Beach tourism in Zanzibar
• Cultural tourism experiences
• Adventure tourism
• Luxury travel experiences

The sector's growth is creating numerous opportunities for investment in hospitality, transportation, and tourism-related services.`
  },
  {
    title: "Digital Transformation in Tanzania",
    category: "Technology",
    date: "March 2024",
    description: "How digital innovation is reshaping business operations across Tanzania.",
    image: "/images/industries/ICT.jpg",
    detailedContent: `Tanzania's digital landscape is rapidly evolving, creating new opportunities for businesses and entrepreneurs.

Key Trends:
• Rapid growth in mobile money adoption
• Expansion of 4G and 5G networks
• Increasing e-commerce penetration
• Government digital services initiatives
• Growing tech startup ecosystem

Opportunities:
• Fintech solutions
• E-commerce platforms
• Digital payment systems
• Software development
• IT infrastructure services

The government's commitment to digital transformation is creating a favorable environment for technology investments and innovation.`
  },
  {
    title: "Agricultural Investment Opportunities",
    category: "Agriculture",
    date: "February 2024",
    description: "Key insights into Tanzania's agricultural sector and emerging investment opportunities.",
    image: "/images/industries/agriculture.png",
    detailedContent: `Tanzania's agricultural sector offers significant opportunities for investment and growth.

Key Areas:
• Large-scale commercial farming
• Agribusiness processing
• Export-oriented agriculture
• Technology-driven farming
• Organic farming initiatives

Investment Opportunities:
• Cashew nut processing
• Coffee and tea production
• Horticulture exports
• Agricultural technology
• Food processing facilities

The sector benefits from favorable climate conditions, available land, and government support for agricultural development.`
  },
  {
    title: "Energy Sector Development",
    category: "Energy",
    date: "February 2024",
    description: "Analysis of Tanzania's energy sector growth and renewable energy initiatives.",
    image: "/images/industries/ECOenergy.jpg",
    detailedContent: `Tanzania's energy sector is undergoing significant transformation with a focus on renewable energy and infrastructure development.

Key Developments:
• Expansion of renewable energy projects
• Grid infrastructure improvements
• Rural electrification programs
• Natural gas development
• Solar energy initiatives

Investment Areas:
• Solar power projects
• Wind energy
• Hydroelectric power
• Natural gas infrastructure
• Energy storage solutions

The government's commitment to increasing energy access and promoting renewable energy creates numerous investment opportunities.`
  },
  {
    title: "Manufacturing Industry Trends",
    category: "Manufacturing",
    date: "January 2024",
    description: "Latest developments in Tanzania's manufacturing sector and industrial growth.",
    image: "/images/industries/what-is-Manufacturing-.webp",
    detailedContent: `Tanzania's manufacturing sector is experiencing significant growth and transformation.

Key Trends:
• Industrial park development
• Value addition initiatives
• Export-oriented manufacturing
• Technology adoption
• Local content development

Growth Areas:
• Textile and apparel manufacturing
• Food processing
• Construction materials
• Automotive assembly
• Electronics manufacturing

The government's industrialization strategy and regional market access create favorable conditions for manufacturing investments.`
  }
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-business-blue text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">Business Insights</h1>
          <p className="text-base sm:text-lg animate-fade-in">
            Stay informed with our latest industry insights and expert analysis on Tanzania's business landscape
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
                  src={insight.image}
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="text-accent p-0">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-business-blue">
                          {insight.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{insight.category}</span>
                          <span>{insight.date}</span>
                        </div>
                        <img 
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="prose prose-sm max-w-none">
                          {insight.detailedContent.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-gray-600 mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
