
export interface License {
  title: string;
  description: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  items: string[];
  subCategories?: {
    title: string;
    items: string[];
  }[];
  licenses?: {
    category: string;
    items: License[];
  }[];
  forms?: {
    category: string;
    items: string[];
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    title: "Tax Consultations",
    description: "Expert guidance for all your tax compliance needs",
    items: [
      "Tax planning for compliance with TRA regulations",
      "Filing corporate income tax, VAT, PAYE, and withholding taxes",
      "Advisory on tax incentives like Export Processing Zones and Special Economic Zones",
      "Handling TRA audits and resolving tax disputes",
      "Guidance on local taxes (e.g., property tax, service levy)",
      "Tax compliance for cross-border trade under EAC and SADC regulations"
    ]
  },
  {
    title: "Business/Company Registration",
    description: "Complete business registration solutions",
    items: [
      "Advisory on business structure (sole proprietorship, partnership, private limited company)",
      "Name search and reservation via BRELA",
      "Preparation and submission of Memorandum and Articles of Association",
      "Obtaining a TIN and VAT registration with TRA",
      "Registration with local government authorities for business permits",
      "Assistance with opening a business bank account"
    ],
    forms: [
      {
        category: "Company Registration Forms",
        items: [
          "Application for Registration of a Company",
          "Notice of Change in Situation or Address of Registered Office (Form No. 111)",
          "Change of Particulars for a Director or Secretary (Form No. 210c)",
          "Particulars for the Registration of a Charge (Form No. 98a)",
          "Return of Allotment of Shares (Form No. 55a)",
          "Notice of Increase in Nominal Capital (Form No. 66)",
          "Annual Return of the Company (Form No. 128)"
        ]
      },
      {
        category: "Business Name Registration Forms",
        items: [
          "Application for Registration of a Business Name",
          "Notice of Change in Business Name Particulars",
          "Cessation of Business Name Registration"
        ]
      },
      {
        category: "Trademark and Patent Filing",
        items: [
          "Application for Registration of a Trademark",
          "Application for a Patent or Industrial Design",
          "Particulars of a Contract Relating to Shares Allotted"
        ]
      }
    ]
  },
  {
    title: "Tender-Acquiring Proposals",
    description: "Professional assistance with tender applications",
    items: [
      "Identifying tenders through the PPRA portal",
      "Preparing compliant bid documents per PPRA guidelines",
      "Ensuring eligibility (e.g., valid BRELA registration, TRA clearance)",
      "Developing cost estimates and competitive pricing strategies",
      "Submission via the TANePS platform",
      "Support for post-bid clarifications and contract negotiations"
    ]
  },
  {
    title: "Business Plans & Proposals",
    description: "Strategic business planning services",
    items: [
      "Conducting market research focusing on Tanzanian sectors",
      "Financial projections compliant with Tanzanian accounting standards",
      "Developing business models for local and EAC markets",
      "Drafting proposals for investors or financial institutions",
      "Integrating SMEs Development Policy incentives",
      "Conducting risk analyses to address local challenges"
    ]
  },
  {
    title: "Business Licenses",
    description: "Comprehensive licensing assistance",
    items: [
      "Identifying required licenses based on industry",
      "Assisting with sector-specific permits",
      "Obtaining local government business licenses",
      "Compliance with health, safety, and environmental regulations",
      "Managing renewals and updates of licenses through BRELA"
    ],
    licenses: [
      {
        category: "Business Licenses",
        items: [
          { title: "Class A Licenses", description: "Issued by BRELA for larger businesses operating across regions" },
          { title: "Class B Licenses", description: "Issued by Local Government Authorities for smaller, localized businesses" }
        ]
      },
      {
        category: "Sector-Specific Licenses",
        items: [
          { title: "Tourism License", description: "Regulated by the Ministry of Natural Resources and Tourism" },
          { title: "Mining License", description: "Issued by the Mining Commission" },
          { title: "Telecommunications License", description: "Provided by TCRA" },
          { title: "Industrial License", description: "For manufacturing businesses, issued by the Ministry of Industry and Trade" },
          { title: "Agricultural License", description: "For agribusinesses, regulated by the Ministry of Agriculture" },
          { title: "Energy License", description: "For energy production and distribution, issued by EWURA" },
          { title: "Transport License", description: "For logistics and transport services, regulated by SUMATRA" }
        ]
      },
      {
        category: "Professional Licenses",
        items: [
          { title: "Accounting/Auditing Licenses", description: "Issued by NBAA" },
          { title: "Legal Practice Licenses", description: "Provided by the Tanganyika Law Society" },
          { title: "Medical Practice Licenses", description: "Issued by the Medical Council of Tanganyika" },
          { title: "Engineering Licenses", description: "Regulated by the Engineers Registration Board" },
          { title: "Architectural Licenses", description: "Issued by the Architects and Quantity Surveyors Registration Board" }
        ]
      },
      {
        category: "Other Licenses",
        items: [
          { title: "Environmental License", description: "For businesses impacting the environment, issued by NEMC" },
          { title: "Broadcasting License", description: "For media and broadcasting companies, regulated by TCRA" },
          { title: "Fishing License", description: "For commercial fishing, issued by the Ministry of Livestock and Fisheries" },
          { title: "Pharmaceutical License", description: "For pharmacies and drug manufacturers, regulated by TMDA" }
        ]
      }
    ]
  },
  {
    title: "NGO Registration",
    description: "Complete NGO registration and compliance services",
    items: [
      "Structuring NGOs under the Non-Governmental Organizations Act, 2002",
      "Registration with the Registrar of NGOs",
      "Drafting constitutions and governance documents",
      "Obtaining tax-exempt status from TRA for charitable activities",
      "Ensuring compliance with NGO reporting requirements",
      "Guidance on fundraising and donor compliance in Tanzania"
    ]
  },
  {
    title: "Data Analytics",
    description: "Data-driven insights for your business",
    items: [
      "Data collection from Tanzanian sources",
      "Market trend analysis for local sectors",
      "Predictive analytics for demand forecasting",
      "Developing visualization dashboards",
      "Integration with local ERP systems",
      "Training on data tools tailored for Tanzanian businesses"
    ]
  },
  {
    title: "Risk Analysis and Management",
    description: "Comprehensive risk assessment and mitigation",
    items: [
      "Assessing risks specific to Tanzania",
      "Financial risk analysis",
      "Operational risk management",
      "Compliance risk assessment",
      "Developing business continuity plans",
      "Training on frameworks like ISO 31000"
    ]
  },
  {
    title: "Permits",
    description: "Assistance with various permits for business operations",
    items: [
      "Identification of required permits for business activities",
      "Application and processing of various types of permits",
      "Compliance with regulatory requirements for permit holders",
      "Renewal and management of existing permits",
      "Advisory on permit conditions and requirements",
      "Liaison with government authorities for permit approvals"
    ],
    subCategories: [
      {
        title: "Work Permits",
        items: [
          "Class A: For investors",
          "Class B: For professionals with specialized skills",
          "Class C: For missionaries, researchers, or volunteers"
        ]
      },
      {
        title: "Other Permits",
        items: [
          "Construction Permits",
          "Import and Export Permits",
          "Environmental Impact Assessment Certificate"
        ]
      }
    ]
  }
];
