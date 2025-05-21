import Navbar from "@/components/Navbar";

interface AboutUsProps {
  isSection?: boolean;
}

const AboutUs = ({ isSection = false }: AboutUsProps) => {
  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">About Us</h1>
      <p className="text-base sm:text-lg text-center text-gray-300 mb-8">
        Your trusted partner in business excellence
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To provide exceptional business consulting services that enable our clients to navigate 
            complex regulatory environments and achieve sustainable growth through expert guidance 
            and innovative solutions.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be the leading business consultancy firm in Tanzania, recognized for our expertise, 
            integrity, and commitment to delivering value-driven solutions that transform businesses 
            and drive economic growth.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-white mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Excellence",
            description: "We strive for excellence in everything we do, delivering high-quality solutions."
          },
          {
            title: "Integrity",
            description: "We maintain the highest standards of professional ethics and transparency."
          },
          {
            title: "Innovation",
            description: "We embrace innovation to provide cutting-edge solutions for our clients."
          }
        ].map((value, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Team member cards would be populated here */}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Why choose us cards would be populated here */}
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Our approach cards would be populated here */}
        </div>
      </div>
    </div>
  );

  if (isSection) {
    return content;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      {content}
    </div>
  );
};

export default AboutUs;
