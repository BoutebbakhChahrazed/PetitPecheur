import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const About = () => {
  return (
    <section id="about" className="py-32 bg-muted">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6">
              <p className="text-primary text-sm tracking-[0.3em] uppercase">Since 2015</p>
            </div>
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, Petit Pêcheur was born from a passion for creating memorable 
                dining experiences that transport you to the French coastline. Our philosophy 
                is simple: exceptional food, impeccable service, and a warm atmosphere.
              </p>
              <p>
                Our executive chef, Maria Johnson, brings over 15 years of international 
                experience to our kitchen. She crafts each dish with precision and creativity, 
                using only the finest locally sourced ingredients.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12">
              <div>
                <h3 className="mb-4 tracking-wide">Hours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mon-Thu: 5pm-10pm<br />
                  Fri-Sat: 5pm-11pm<br />
                  Sunday: 5pm-9pm
                </p>
              </div>
              <div>
                <h3 className="mb-4 tracking-wide">Location</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  123 Trendy Avenue<br />
                  Downtown District<br />
                  City, State 10001
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-full h-full border border-primary/20 hidden lg:block"></div>
              <div className="relative overflow-hidden aspect-[4/5]">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
