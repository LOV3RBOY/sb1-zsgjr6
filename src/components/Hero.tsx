import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex flex-col items-center justify-center bg-white text-black relative overflow-hidden px-4">
      <h1 ref={titleRef} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-center leading-none tracking-tighter">
        LOVERBOY
      </h1>
      <p className="mt-4 text-xl md:text-2xl opacity-0 animate-fade-in">Premium Hoodies</p>
    </section>
  );
};

export default Hero;