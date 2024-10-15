import React from 'react';
import { Sprout, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Sprout className="h-20 w-20 text-emerald-600" />,
    title: 'Organic Growth Strategy',
    description: 'Tailored social media strategies to nurture your business goals.'
  },
  {
    icon: <Users className="h-16 w-16 text-emerald-600 mb-6" />,
    title: 'Community Cultivation',
    description: 'Engage and grow your audience across all platforms naturally.'
  },
  {
    icon: <TrendingUp className="h-16 w-16 text-emerald-600 mb-6" />,
    title: 'Analytics & Insights',
    description: 'In-depth analysis and actionable insights for sustainable improvement.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-10 bg-emerald-500 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-24 text-emerald-900 font-sans tracking-tight">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition duration-500 transform hover:-translate-y-4 hover:rotate-1">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full p-8 inline-block mb-8 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-3xl font-semibold mb-6 text-stone-800 font-sans">{service.title}</h3>
              <p className="text-stone-600 font-light text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-24">
          <Link to="/portfolio" className="inline-flex items-center bg-emerald-700 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-emerald-800 transition duration-300 transform hover:scale-105 shadow-lg">
            View Our Portfolio
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
