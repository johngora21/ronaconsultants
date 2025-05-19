import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     
      {/* About Us Content */}
      <section className="pt-20 bg-business-blue text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in">About Us</h1>
          <p className="text-base sm:text-lg animate-fade-in">
            Your trusted partner in business excellence and regulatory compliance
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-business-blue mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional business consulting services that enable our clients to navigate 
              complex regulatory environments and achieve sustainable growth through expert guidance 
              and innovative solutions.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-business-blue mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading business consultancy firm in Tanzania, recognized for our expertise, 
              integrity, and commitment to delivering value-driven solutions that transform businesses 
              and drive economic growth.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-business-blue mb-12">Our Values</h2>
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
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-business-blue mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
