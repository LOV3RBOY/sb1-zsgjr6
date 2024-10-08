import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-charcoal text-center">About Loverboy</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-charcoal mb-6">
              Loverboy is a premium lifestyle brand that embodies elegance, simplicity, and modern aesthetics. Our mission is to provide high-quality products that elevate your everyday experiences.
            </p>
            <p className="text-lg text-charcoal">
              With a focus on minimalist design and luxurious details, Loverboy creates timeless pieces that seamlessly blend into your life, making every moment feel special.
            </p>
          </div>
          <div className="aspect-square bg-cover bg-center rounded-lg shadow-xl" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")'}}></div>
        </div>
      </div>
    </section>
  );
};

export default About;