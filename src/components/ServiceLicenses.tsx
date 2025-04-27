
import { License } from "@/types/services";

interface ServiceLicensesProps {
  licenses: {
    category: string;
    items: License[];
  }[];
}

const ServiceLicenses = ({ licenses }: ServiceLicensesProps) => {
  return (
    <div className="mt-8 space-y-8">
      {licenses.map((category) => (
        <div key={category.category}>
          <h4 className="text-xl font-semibold mb-4 text-accent">{category.category}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((license) => (
              <div 
                key={license.title} 
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h5 className="font-semibold text-business-blue">{license.title}</h5>
                <p className="text-gray-600 text-sm mt-1">{license.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceLicenses;
