import React from 'react';
import { Camera, Coffee, Utensils, Megaphone } from 'lucide-react';

const portfolioItems = [
  {
    category: 'Social Media',
    icon: <Coffee className="h-10 w-10 text-emerald-600" />,
    items: [
      { image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Engaging Instagram story design for a local cafe' },
      { image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Facebook ad campaign for a fitness brand' },
      { image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Twitter header design for a tech startup' },
    ]
  },
  {
    category: 'Restaurant Menu',
    icon: <Utensils className="h-10 w-10 text-emerald-600" />,
    items: [
      { image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Modern and clean menu design for a sushi restaurant' },
      { image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Rustic menu layout for a farm-to-table eatery' },
      { image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Colorful and fun menu for a Mexican taqueria' },
    ]
  },
  {
    category: 'Promotional Advertisement',
    icon: <Megaphone className="h-10 w-10 text-emerald-600" />,
    items: [
      { image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Eye-catching flyer for a summer music festival' },
      { image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Digital banner ad for a new smartphone release' },
      { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Magazine spread for a luxury watch brand' },
    ]
  },
  {
    category: 'Food Photography',
    icon: <Camera className="h-10 w-10 text-emerald-600" />,
    items: [
      { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Mouthwatering burger shot for a gourmet restaurant' },
      { image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Artistic plating of a dessert for a pastry shop' },
      { image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', text: 'Vibrant salad bowl for a health food company' },
    ]
  },
];

const Portfolio = () => {
  return (
    <section className="py-32 bg-gradient-to-tl from-stone-100 to-stone-200 relative">
      <div className="absolute inset-0 bg-opacity-5 bg-emerald-500 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-24 text-emerald-900 font-sans tracking-tight">Our Portfolio</h2>
        {portfolioItems.map((category, index) => (
          <div key={index} className="mb-32">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white p-4 rounded-full shadow-lg mr-4">
                {category.icon}
              </div>
              <h3 className="text-4xl font-semibold text-stone-800 font-sans">{category.category}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500 transform hover:-translate-y-4 hover:rotate-1">
                  <img src={item.image} alt={item.text} className="w-full h-72 object-cover" />
                  <div className="p-8">
                    <p className="text-stone-700 font-light leading-relaxed text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
