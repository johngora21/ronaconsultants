import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const industries = [
  {
    title: "Manufacturing",
    description: "Comprehensive solutions for manufacturing businesses, from permits to compliance.",
    details: "Our manufacturing consulting services include:\n- Factory setup and compliance (BRELA, TBS)\n- Production optimization\n- Quality control systems (TBS Standards)\n- Environmental compliance (NEMC)\n- Import/export documentation (TRA, TFDA)\n- Industrial permits (MIT)\n- Manufacturing licenses (BRELA, TBS)\n\nKey Regulatory Bodies:\n• BRELA - Business Registration and Licensing Agency\n• TBS - Tanzania Bureau of Standards\n• NEMC - National Environment Management Council\n• TRA - Tanzania Revenue Authority\n• MIT - Ministry of Industry and Trade",
    image: "/images/industries/what-is-Manufacturing-.webp"
  },
  {
    title: "Tourism & Hospitality",
    description: "Specialized services for tourism operators and hospitality businesses.",
    details: "We provide comprehensive support for:\n- Hotel and lodge licensing (TALA)\n- Tour operator permits (TTB)\n- Tourism board registration (TTB)\n- Health and safety compliance (TFDA)\n- Staff training documentation\n- Tourism investment advisory\n- Industry-specific tax guidance (TRA)\n\nKey Regulatory Bodies:\n• TTB - Tanzania Tourist Board\n• TALA - Tourism Agency Licensing Authority\n• TFDA - Tanzania Food and Drugs Authority\n• TRA - Tanzania Revenue Authority",
    image: "/images/industries/safari_in_serengeti.jpg"
  },
  {
    title: "Oil and Gas",
    description: "Expert consulting for oil and gas sector operations.",
    details: "Our oil and gas consulting includes:\n- Exploration permits (PURA)\n- Environmental compliance (NEMC)\n- Production sharing agreements (TPDC)\n- Local content requirements\n- Safety regulations (OSHA)\n- Resource management\n- Operational licenses\n\nKey Regulatory Bodies:\n• PURA - Petroleum Upstream Regulatory Authority\n• TPDC - Tanzania Petroleum Development Corporation\n• EWURA - Energy and Water Utilities Regulatory Authority\n• NEMC - National Environment Management Council",
    image: "/images/industries/oil-business.jpeg"
  },
  {
    title: "Renewable Energy",
    description: "Solutions for sustainable energy projects and initiatives.",
    details: "Renewable energy consulting services:\n- Solar project permits (EWURA)\n- Wind farm development (EWURA, TANESCO)\n- Geothermal exploration rights (MEM)\n- Environmental impact assessments (NEMC)\n- Green energy certifications\n- Power purchase agreements (TANESCO)\n- Renewable energy compliance (REA)\n\nKey Regulatory Bodies:\n• EWURA - Energy and Water Utilities Regulatory Authority\n• TANESCO - Tanzania Electric Supply Company\n• MEM - Ministry of Energy and Minerals\n• REA - Rural Energy Agency\n• NEMC - National Environment Management Council",
    image: "/images/industries/ECOenergy.jpg"
  },
  {
    title: "Construction & Real Estate",
    description: "Comprehensive support for construction and property development.",
    details: "Construction sector services include:\n- Building permits (CRB)\n- Construction licenses (AQRB)\n- Property development compliance (MLHHSD)\n- Safety certifications (OSHA)\n- Environmental clearances (NEMC)\n- Urban planning compliance (Municipal Authorities)\n- Real estate regulations (BRELA)\n\nKey Regulatory Bodies:\n• CRB - Contractors Registration Board\n• AQRB - Architects and Quantity Surveyors Registration Board\n• MLHHSD - Ministry of Lands, Housing and Human Settlements Development\n• OSHA - Occupational Safety and Health Authority",
    image: "/images/industries/ESG_Bild.png"},
  {
    title: "Transportation & Logistics",
    description: "Expert guidance for transport and logistics operations.",
    details: "Transportation consulting services:\n- Transport licenses (SUMATRA)\n- Fleet management compliance (TPA)\n- Logistics permits (TASAC)\n- Cross-border regulations (TRA)\n- Safety standards (SUMATRA)\n- Route optimization\n- Customs documentation (TRA)\n\nKey Regulatory Bodies:\n• SUMATRA - Surface and Marine Transport Regulatory Authority\n• TPA - Tanzania Ports Authority\n• TASAC - Tanzania Shipping Agencies Corporation\n• TRA - Tanzania Revenue Authority",
    image: "/images/industries/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-487.webp"
  },
  {
    title: "Finance",
    description: "Comprehensive financial services including banking, insurance, and microfinance.",
    details: "Financial sector consulting includes:\n- Banking licenses (BOT)\n- Insurance permits (TIRA)\n- Microfinance registration (BOT)\n- Regulatory compliance (CMSA, BOT)\n- Risk management frameworks\n- Financial reporting standards\n- Anti-money laundering compliance (FIU)\n\nKey Regulatory Bodies:\n• BOT - Bank of Tanzania\n• TIRA - Tanzania Insurance Regulatory Authority\n• CMSA - Capital Markets and Securities Authority\n• FIU - Financial Intelligence Unit",
    image: "/images/industries/finance-essentials.jpg"  // Updated with calculator/statements image
  },
  {
    title: "Import/Export",
    description: "Comprehensive import/export consulting solutions.",
    details: "Trade consulting services include:\n- Import licenses (TBS, TFDA)\n- Export permits (TanTrade)\n- Customs compliance (TRA)\n- Trade documentation (BRELA)\n- Quality certifications (TBS)\n- International trade regulations\n- Trade finance compliance (BOT)\n\nKey Regulatory Bodies:\n• TRA - Tanzania Revenue Authority\n• TBS - Tanzania Bureau of Standards\n• TFDA - Tanzania Food and Drugs Authority\n• TanTrade - Tanzania Trade Development Authority\n• BOT - Bank of Tanzania",
    image: "/images/industries/import-export-business-ideas.png"  // Updated with container port image
  },
  {
    title: "Retail & E-commerce",
    description: "Expert guidance for retail and online businesses.",
    details: "Retail sector consulting:\n- Retail licenses (BRELA)\n- E-commerce regulations (TCRA)\n- Consumer protection compliance (FCC)\n- Digital payment compliance (BOT)\n- Store location permits (Municipal Authorities)\n- Online marketplace regulations\n- Retail standards compliance (TBS)\n\nKey Regulatory Bodies:\n• BRELA - Business Registration and Licensing Agency\n• TCRA - Tanzania Communications Regulatory Authority\n• FCC - Fair Competition Commission\n• TBS - Tanzania Bureau of Standards",
    image: "/images/industries/investment-1.jpg"
  },
  {
    title: "Healthcare & Education",
    description: "Specialized consulting for healthcare and educational institutions.",
    details: "Public sector consulting includes:\n- Healthcare facility licenses (MOHCDGEC)\n- Educational institution permits (MoEST)\n- Quality standards compliance (NACTE, TCU)\n- Professional certifications (Medical Council)\n- Operational requirements\n- Safety regulations (OSHA)\n- Service delivery standards\n\nKey Regulatory Bodies:\n• MOHCDGEC - Ministry of Health\n• MoEST - Ministry of Education, Science and Technology\n• NACTE - National Council for Technical Education\n• TCU - Tanzania Commission for Universities\n• Medical Council of Tanganyika",
    image: "/images/industries/unnamed.jpg"  // Updated with correct image
  },
  {
    title: "Government & NGO Services",
    description: "Expert guidance for government and non-profit organizations.",
    details: "Government and NGO consulting:\n- NGO registration (NGO Board)\n- Compliance requirements (NGO Board)\n- Grant management\n- Project implementation\n- Regulatory reporting\n- Partnership agreements (Ministry of Home Affairs)\n- Operational permits\n\nKey Regulatory Bodies:\n• NGO Board - National NGO Coordination Board\n• Ministry of Home Affairs\n• Ministry of Community Development",
    image: "/images/industries/Economic-Implications-of-Tanzanias-NGO-Sector-In-Employment-Investment-and-Development.jpg"
  },
  {
    title: "ICT & Telecommunications",
    description: "Comprehensive solutions for information technology and telecommunications sector.",
    details: "ICT consulting services include:\n- Telecommunications licenses (TCRA)\n- Internet Service Provider permits (TCRA)\n- Data center compliance (TCRA)\n- Software development licenses (BRELA)\n- Cybersecurity compliance (TCRA)\n- Digital content regulations (TCRA)\n- IT equipment import permits (TBS)\n\nKey Regulatory Bodies:\n• TCRA - Tanzania Communications Regulatory Authority\n• BRELA - Business Registration and Licensing Agency\n• TBS - Tanzania Bureau of Standards\n• COSTECH - Tanzania Commission for Science and Technology",
    image: "/images/industries/ICT.jpg"
  },
  {
    title: "Mining & Minerals",
    description: "Expert guidance for mining operations and mineral processing.",
    details: "Mining sector services include:\n- Mining licenses (Mining Commission)\n- Mineral processing permits (MEM)\n- Environmental compliance (NEMC)\n- Safety regulations (OSHA)\n- Explosives handling permits (Ministry of Home Affairs)\n- Export permits (TRA)\n- Local content requirements\n\nKey Regulatory Bodies:\n• Mining Commission\n• MEM - Ministry of Energy and Minerals\n• NEMC - National Environment Management Council\n• OSHA - Occupational Safety and Health Authority",
    image: "/images/industries/miningminerals.jpg"  // Updated with mineral inspection image
  },
  {
    title: "Agriculture & Agro-Processing",
    description: "Specialized solutions for agricultural and food processing businesses.",
    details: "Agricultural consulting services:\n- Farm registration (MALF)\n- Food processing licenses (TFDA)\n- Agricultural input permits (TPRI)\n- Export certifications (TBS)\n- Storage facility compliance (TFRA)\n- Pesticide permits (TPRI)\n- Quality standards (TBS)\n\nKey Regulatory Bodies:\n• MALF - Ministry of Agriculture, Livestock and Fisheries\n• TFDA - Tanzania Food and Drugs Authority\n• TPRI - Tropical Pesticides Research Institute\n• TFRA - Tanzania Fertilizer Regulatory Authority",
    image: "/images/industries/agriculture.png"
  },
  {
    title: "Pharmaceuticals & Cosmetics",
    description: "Comprehensive guidance for pharmaceutical and cosmetic industries.",
    details: "Pharmaceutical sector services:\n- Drug manufacturing licenses (TFDA)\n- Product registration (TFDA)\n- GMP certification (TFDA)\n- Import permits (TFDA)\n- Clinical trial permits (NIMR)\n- Quality control systems (TBS)\n- Distribution licenses (TFDA)\n\nKey Regulatory Bodies:\n• TFDA - Tanzania Food and Drugs Authority\n• NIMR - National Institute for Medical Research\n• TBS - Tanzania Bureau of Standards\n• Pharmacy Council",
    image: "/images/industries/Pharmacy-Trends.jpg"  // Updated with pharmacist image
  },
  {
    title: "Media & Broadcasting",
    description: "Expert consulting for media and broadcasting organizations.",
    details: "Media sector consulting includes:\n- Broadcasting licenses (TCRA)\n- Content regulations (TCRA)\n- Media house registration (BRELA)\n- Frequency allocation (TCRA)\n- Copyright compliance (COSOTA)\n- Advertising standards (TCRA)\n- Cross-media ownership compliance\n\nKey Regulatory Bodies:\n• TCRA - Tanzania Communications Regulatory Authority\n• COSOTA - Copyright Society of Tanzania\n• Media Council of Tanzania\n• BRELA - Business Registration and Licensing Agency",
    image: "/images/industries/Photo-117.jpeg"  // Radio studio image
  }
];

const Industries = () => {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageError(prev => ({...prev, [index]: true}));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-business-blue mb-8">Industries we Serve</h1>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-12">
          Specialized solutions across key sectors of the Tanzanian economy
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="p-6 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-100">
                {!imageError[index] && industry.image && (
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                  />
                )}
                {(imageError[index] || !industry.image) && (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="mt-2 text-accent p-0 text-sm">
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-business-blue">
                          {industry.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        <img 
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="prose prose-sm max-w-none">
                          {industry.details.split('\n').map((line, index) => (
                            line.startsWith('-') ? (
                              <div key={index} className="flex items-start gap-2 mt-2">
                                <span className="text-accent mt-1">•</span>
                                <span className="text-gray-600">{line.substring(2)}</span>
                              </div>
                            ) : (
                              <p key={index} className="font-semibold text-business-blue mt-4 mb-2">{line}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
