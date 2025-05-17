import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "/images/industries/black.jpg",
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" /> {/* Gradient overlay for better text readability */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Building Global Connections
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl">
          Empowering businesses across time zones with innovative consulting solutions
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero; 