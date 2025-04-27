
interface ServiceFormsProps {
  forms: {
    category: string;
    items: string[];
  }[];
}

const ServiceForms = ({ forms }: ServiceFormsProps) => {
  return (
    <div className="mt-8 space-y-8">
      {forms.map((category) => (
        <div key={category.category}>
          <h4 className="text-xl font-semibold mb-4 text-accent">{category.category}</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.items.map((form, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-accent mt-1">•</span>
                <span className="text-gray-700">{form}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceForms;
