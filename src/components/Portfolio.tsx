import React from 'react';

const portfolioItems = [
  {
    category: 'Social Media',
    items: [
      { image: 'path/to/social1.jpg', text: 'Engaging Instagram story design for a local cafe' },
      { image: 'path/to/social2.jpg', text: 'Facebook ad campaign for a fitness brand' },
      { image: 'path/to/social3.jpg', text: 'Twitter header design for a tech startup' },
    ]
  },
  {
    category: 'Restaurant Menu',
    items: [
      { image: 'path/to/menu1.jpg', text: 'Modern and clean menu design for a sushi restaurant' },
      { image: 'path/to/menu2.jpg', text: 'Rustic menu layout for a farm-to-table eatery' },
      { image: 'path/to/menu3.jpg', text: 'Colorful and fun menu for a Mexican taqueria' },
    ]
  },
  {
    category: 'Promotional Advertisement',
    items: [
      { image: 'path/to/promo1.jpg', text: 'Eye-catching flyer for a summer music festival' },
      { image: 'path/to/promo2.jpg', text: 'Digital banner ad for a new smartphone release' },
      { image: 'path/to/promo3.jpg', text: 'Magazine spread for a luxury watch brand' },
    ]
  },
  {
    category: 'Food Photography',
    items: [
      { image: 'path/to/food1.jpg', text: 'Mouthwatering burger shot for a gourmet restaurant' },
      { image: 'path/to/food2.jpg', text: 'Artistic plating of a dessert for a pastry shop' },
      { image: 'path/to/food3.jpg', text: 'Vibrant salad bowl for a health food company' },
    ]
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-tl from-stone-100 to-stone-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-emerald-800 font-sans">Our Portfolio</h2>
        {portfolioItems.map((category, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-3xl font-semibold mb-8 text-stone-800 font-sans border-b-4 border-emerald-500 inline-block pb-2">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                  <img src={item.image} alt={item.text} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <p className="text-stone-700 font-light leading-relaxed">{item.text}</p>
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
