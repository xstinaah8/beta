import React from 'react';
import { Sprout, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Sprout className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Organic Growth Strategy',
    description: 'Tailored social media strategies to nurture your business goals.'
  },
  {
    icon: <Users className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Community Cultivation',
    description: 'Engage and grow your audience across all platforms naturally.'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-green-600 mb-4" />,
    title: 'Analytics & Insights',
    description: 'In-depth analysis and actionable insights for sustainable improvement.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-stone-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-stone-800">{service.title}</h3>
              <p className="text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;