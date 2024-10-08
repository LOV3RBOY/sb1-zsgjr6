import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: 'Classic Hoodie', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
  { name: 'Signature Tee', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
];

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top center+=100',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
        <div ref={productsRef} className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img src={product.image} alt={product.name} className="w-full h-[70vh] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={`/product${index + 1}`} className="text-4xl font-bold text-black hover:underline">
                  {product.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;