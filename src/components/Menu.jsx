import React from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';

const Menu = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella",
      price: "$14",
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
    },
    {
      id: 2,
      name: "Beef Short Rib",
      description: "Braised for 12 hours with red wine and root vegetables",
      price: "$32",
      category: "Main",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Seafood Linguine",
      description: "Fresh pasta with shrimp, scallops, and clams in a white wine sauce",
      price: "$26",
      category: "Main",
      image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
   },
    {
      id: 4,
      name: "Chocolate Fondant",
      description: "Warm chocolate cake with a molten center and vanilla ice cream",
      price: "$12",
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
    }
  ];

  return (
    <section id="menu" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase">Culinary Excellence</p>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our chefs create culinary magic with the freshest ingredients, crafting dishes 
            that are both visually stunning and delicious.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map(item => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-muted mb-6 aspect-[3/4]">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs tracking-widest uppercase bg-background/90 px-4 py-2">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="tracking-wide">{item.name}</h3>
                  <span className="text-primary tracking-wider">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button 
            onClick={() => onNavigate?.('menu')}
            className="px-10 py-4 border border-secondary text-secondary tracking-widest uppercase text-sm transition-all duration-300 hover:bg-secondary hover:text-background"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
