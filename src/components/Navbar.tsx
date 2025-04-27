
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/lovable-uploads/09ee892d-acb8-4033-8f3a-222b45bbef3b.png" alt="Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {["Home", "About Us", "Services", "Industries", "Insights", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-600 hover:text-nav-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {["Home", "About Us", "Services", "Industries", "Insights", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-nav-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
