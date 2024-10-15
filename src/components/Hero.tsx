import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <img src={image} alt={`Restaurant scene ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl md:text-7xl font-bold mb-2 text-white hover:text-yellow-300/75">Sweet Success Consulting</h2>
                <h1 className="text-4xl md:text-4xl font-bold mb-4 text-orange-500/75">Elevate Your Business Potential</h1>
                <p className="text-xl mb-8">Expert consulting to transform your customer experience and boost your bottom line</p>
                <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 inline-block">Schedule a Consultation</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
