import React, { useState } from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';
import { Badge } from '../Components/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../Components/tabs';
import { Input } from '../Components/input';

const FullMenuPage = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const fullMenu = {
    appetizers: [
      {
        id: 1,
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and aged parmesan",
        price: "$14",
        dietary: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 2,
        name: "Oysters Rockefeller",
        description: "Six fresh oysters topped with herb butter and parmesan gratinée",
        price: "$18",
        dietary: ["gluten-free"],
        chefSpecial: true,
        image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 3,
        name: "Burrata & Heirloom Tomatoes",
        description: "Creamy burrata with garden tomatoes, basil oil, and aged balsamic",
        price: "$16",
        dietary: ["vegetarian", "gluten-free"],
        image: "https://media.istockphoto.com/id/1312142952/photo/colorful-tomatoes.jpg?s=1024x1024&w=is&k=20&c=GU7vZgndP2Z2QyfdIB9s5p_6-dmnaO4_RHq2DTGrPaI="},
      {
        id: 4,
        name: "Tuna Tartare",
        description: "Yellowfin tuna with avocado, sesame, and citrus soy dressing",
        price: "$19",
        dietary: ["gluten-free"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 5,
        name: "French Onion Soup",
        description: "Classic onion soup with gruyère crostini and fresh herbs",
        price: "$12",
        dietary: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      }
    ],
    mains: [
      {
        id: 6,
        name: "Beef Short Rib",
        description: "Slow-braised for 12 hours with burgundy wine and winter root vegetables",
        price: "$38",
        dietary: ["gluten-free"],
        chefSpecial: true,
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      {
        id: 7,
        name: "Seafood Linguine",
        description: "House-made pasta with prawns, scallops, clams in white wine reduction",
        price: "$32",
        dietary: [],
        image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
      },
      {
        id: 8,
        name: "Pan-Seared Halibut",
        description: "Wild halibut with champagne beurre blanc, asparagus, and fingerling potatoes",
        price: "$42",
        dietary: ["gluten-free"],
        chefSpecial: true,
        image: "https://images.unsplash.com/photo-1720787066773-3e2dbd9225f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       },
      {
        id: 9,
        name: "Duck Confit",
        description: "Crispy duck leg with cherry gastrique, duck fat potatoes, and seasonal greens",
        price: "$36",
        dietary: ["gluten-free"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 10,
        name: "Mushroom Risotto",
        description: "Creamy arborio rice with wild mushrooms, truffle oil, and pecorino",
        price: "$28",
        dietary: ["vegetarian", "gluten-free"],
        image: "https://plus.unsplash.com/premium_photo-1694850980331-fd0dd7f6617b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      {
        id: 11,
        name: "Rack of Lamb",
        description: "Herb-crusted lamb with rosemary jus, gratin dauphinois, and roasted vegetables",
        price: "$45",
        dietary: [],
        chefSpecial: true,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      }
    ],
    desserts: [
      {
        id: 12,
        name: "Chocolate Fondant",
        description: "Warm molten chocolate cake with Madagascar vanilla bean ice cream",
        price: "$12",
        dietary: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80"
      },
      {
        id: 13,
        name: "Tarte Tatin",
        description: "Caramelized apple tart with crème fraîche and salted caramel",
        price: "$11",
        dietary: ["vegetarian"],
        chefSpecial: true,
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 14,
        name: "Crème Brûlée",
        description: "Classic French custard with vanilla bean and caramelized sugar",
        price: "$10",
        dietary: ["vegetarian", "gluten-free"],
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      },
      {
        id: 15,
        name: "Lemon Tart",
        description: "Tangy lemon curd in buttery pastry with Italian meringue",
        price: "$11",
        dietary: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=781&q=80"
      }
    ],
   
  };

  const allItems = [
    ...fullMenu.appetizers,
    ...fullMenu.mains,
    ...fullMenu.desserts
  ];

  const filteredItems = searchQuery
    ? allItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const renderMenuItems = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl rounded-lg"
        >
          <div className="relative overflow-hidden  aspect-[3/4] ">
            <ImageWithFallback
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 mb-5"
            />
            {item.chefSpecial && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-secondary border-0">Chef's Special</Badge>
              </div>
            )}
          </div>
          <div className="p-12">
            <div className="flex justify-between items-start ">
              <h3 className="text-lg tracking-wide group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <span className="text-primary tracking-wider whitespace-nowrap ml-4">
                {item.price}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {item.description}
            </p>
            {item.dietary && item.dietary.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((diet) => (
                  <Badge key={diet} variant="outline" className="text-xs">
                    {diet}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      
      <section className="relative py-20 lg:py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="Menu background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-secondary"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <div className="inline-block mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase">Discover Our Cuisine</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-background mb-8 tracking-tight">
            Full Menu
          </h1>
          <p className="text-background/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our complete selection of French coastal cuisine, crafted with passion 
            and the finest seasonal ingredients.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Find Your Dish</p>
              <h2 className="text-2xl md:text-3xl">Search Our Menu</h2>
            </div>
            <div className="relative group ">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-background p-[100px]  w-[100px] m-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 ">
               
                <Input
                  type="text"
                  placeholder="Search dishes, ingredients, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-[12px] bg-transparent border-0 focus:ring-0 focus:outline-none text-base rounded-full"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute  top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredItems ? (
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">
                  Search Results ({filteredItems.length})
                </h2>
                {filteredItems.length === 0 && (
                  <p className="text-muted-foreground">
                    No items found matching "{searchQuery}"
                  </p>
                )}
              </div>
              {filteredItems.length > 0 && renderMenuItems(filteredItems)}
            </div>
          ) : (
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-16">
                <TabsList className="inline-flex bg-muted/50 backdrop-blur-sm rounded-full p-2 gap-8 shadow-lg">
                  <TabsTrigger 
                    value="all" 
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-md transition-all duration-300 text-sm tracking-wider uppercase "
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger 
                    value="appetizers" 
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-md transition-all duration-300 text-sm tracking-wider uppercase"
                  >
                    Appetizers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="mains" 
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-md transition-all duration-300 text-sm tracking-wider uppercase"
                  >
                    Mains
                  </TabsTrigger>
                  <TabsTrigger 
                    value="desserts" 
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-secondary data-[state=active]:shadow-md transition-all duration-300 text-sm tracking-wider uppercase"
                  >
                    Desserts
                  </TabsTrigger>
                 
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-20">
                <div>
                  <h2 className="text-3xl md:text-4xl mb-8">Appetizers</h2>
                  {renderMenuItems(fullMenu.appetizers)}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl mb-8">Main dishes</h2>
                  {renderMenuItems(fullMenu.mains)}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl mb-8">Desserts</h2>
                  {renderMenuItems(fullMenu.desserts)}
                </div>
                
              </TabsContent>

              <TabsContent value="appetizers">
                <h2 className="text-3xl md:text-4xl mb-8">Appetizers</h2>
                {renderMenuItems(fullMenu.appetizers)}
              </TabsContent>

              <TabsContent value="mains">
                <h2 className="text-3xl md:text-4xl mb-8">Main dishes</h2>
                {renderMenuItems(fullMenu.mains)}
              </TabsContent>

              <TabsContent value="desserts">
                <h2 className="text-3xl md:text-4xl mb-8">Desserts</h2>
                {renderMenuItems(fullMenu.desserts)}
              </TabsContent>

             
            </Tabs>
          )}
        </div>
      </section>

      {/* Wine Pairing Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <p className="text-primary text-sm tracking-[0.3em] uppercase">Wine Pairing</p>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Expert Wine Selection</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our sommelier has carefully curated a wine list that perfectly complements each dish. 
              Ask your server for pairing recommendations with your meal.
            </p>
            <button
              onClick={() => onNavigate('reservation')}
              className="px-10 py-4 bg-primary text-secondary tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
            >
              Make a Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm tracking-wider uppercase">Back to Home</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FullMenuPage;