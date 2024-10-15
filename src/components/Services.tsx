import React from 'react';
import { Sprout, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Sprout className="h-16 w-16 text-emerald-600 mb-6" />,
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
    <section id="services" className="py-24 bg-gradient-to-br from-stone-100 to-stone-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800 font-sans">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-emerald-100 rounded-full p-6 inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-stone-800 font-sans">{service.title}</h3>
              <p className="text-stone-600 font-light">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/portfolio" className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
            View Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
