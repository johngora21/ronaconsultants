import Image from 'next/image';
import { useState } from 'react';

const industries = [
  {
    title: "Government & NGO",
    image: "/images/government-ngo.webp",
    description: "Supporting public sector and non-profit organizations",
    details: "Our expertise in government and NGO sector includes policy analysis, program evaluation, capacity building, and strategic planning. We help organizations optimize their operations and maximize social impact."
  },
  {
    title: "Construction",
    image: "/images/construction.webp",
    description: "Modern sustainable construction solutions"
  },
  {
    title: "Finance",
    image: "/images/finance.webp",  // removed /industries/
    description: "Financial services and consulting"
  },
  {
    title: "Import & Export",
    image: "/images/import-export.webp",  // removed /industries/
    description: "International trade and logistics solutions"
  },
  {
    title: "Manufacturing",
    image: "/images/manufacturing.webp",  // removed /industries/
    description: "Advanced manufacturing and industrial solutions"
  },
  {
    title: "Tourism",
    image: "/images/tourism.webp",  // removed /industries/
    description: "Tourism and hospitality management"
  },
  {
    title: "Oil & Gas",
    image: "/images/oil-gas.webp",  // removed /industries/
    description: "Energy sector consulting and solutions"
  },
  {
    title: "Renewable Energy",
    image: "/images/renewable-energy.webp",  // removed /industries/
    description: "Sustainable energy solutions"
  },
  {
    title: "Transportation",
    image: "/images/transportation.webp",  // removed /industries/
    description: "Transportation and logistics solutions"
  },
  {
    title: "Retail",
    image: "/images/retail.webp",  // removed /industries/
    description: "Retail and consumer services"
  },
  {
    title: "Healthcare & Education",
    image: "/images/healthcare-education.webp",  // removed /industries/
    description: "Healthcare and educational services"
  },
  {
    title: "ICT",
    image: "/images/ict.webp",  // removed /industries/
    description: "Information and Communication Technology"
  },
  {
    title: "Mining",
    image: "/images/mining.webp",  // removed /industries/
    description: "Mining and resource extraction"
  },
  {
    title: "Agriculture",
    image: "/images/agriculture.webp",  // removed /industries/
    description: "Agricultural and farming solutions"
  },
  {
    title: "Pharmaceutical",
    image: "/images/pharmaceutical.webp",  // removed /industries/
    description: "Pharmaceutical and medical research"
  },
  {
    title: "Media",
    image: "/images/media.webp",  // removed /industries/
    description: "Media and entertainment solutions"
  }
];

const IndustriesGrid = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Calculate the row position of each card
  const getRowStart = (index: number) => {
    const cols = {
      'xl': 4,
      'lg': 3,
      'md': 2,
      'sm': 1
    };
    return Math.floor(index / cols.xl);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {industries.map((industry, index) => {
        const isExpanded = expandedCard === index;
        const rowStart = getRowStart(index);
        
        return (
          <>
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  priority={index < 4}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
                <button 
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="text-blue-600 hover:text-blue-800 font-medium mt-4 flex items-center"
                >
                  {isExpanded ? 'Show Less' : 'Learn More'} 
                  <span className="ml-1">{isExpanded ? '↑' : '↓'}</span>
                </button>
              </div>
            </div>
            {isExpanded && (
              <div className={`col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-white rounded-lg shadow-md p-4 -mt-2`}>
                {industry.details}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default IndustriesGrid;