import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coffee, Sparkles } from 'lucide-react';
import menuShowcase from '@/assets/menu-showcase.jpg';

const Menu = () => {
  const menuCategories = [
    {
      id: 'coffee',
      name: 'Coffee & Espresso',
      icon: '☕',
      featured: true,
      items: [
        { name: 'Espresso', description: 'Rich, concentrated coffee shot', price: '800 RWF', popular: true },
        { name: 'Americano', description: 'Espresso with hot water', price: '1,200 RWF' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '1,500 RWF', popular: true },
        { name: 'Latte', description: 'Espresso with steamed milk', price: '1,600 RWF' },
        { name: 'Macchiato', description: 'Espresso "marked" with foam', price: '1,400 RWF' },
        { name: 'Mocha', description: 'Espresso with chocolate and milk', price: '1,800 RWF' },
        { name: 'Rwandan Single Origin', description: 'Local premium coffee beans', price: '2,000 RWF', signature: true }
      ]
    },
    {
      id: 'beverages',
      name: 'Teas & Other Beverages',
      icon: '🍵',
      items: [
        { name: 'Earl Grey Tea', description: 'Classic bergamot-scented black tea', price: '1,000 RWF' },
        { name: 'Green Tea', description: 'Antioxidant-rich Japanese green tea', price: '1,000 RWF' },
        { name: 'Chamomile Tea', description: 'Soothing herbal tea', price: '1,100 RWF' },
        { name: 'Hot Chocolate', description: 'Rich chocolate with steamed milk', price: '1,500 RWF', popular: true },
        { name: 'Fresh Orange Juice', description: 'Locally sourced oranges', price: '1,300 RWF' },
        { name: 'Passion Fruit Juice', description: 'Fresh Rwandan passion fruit', price: '1,400 RWF', signature: true },
        { name: 'Iced Tea', description: 'Refreshing cold-brewed tea', price: '1,200 RWF' }
      ]
    },
    {
      id: 'smoothies',
      name: 'Smoothies & Juices',
      icon: '🥤',
      items: [
        { name: 'Tropical Smoothie', description: 'Mango, pineapple, and banana', price: '2,500 RWF', popular: true },
        { name: 'Berry Blast', description: 'Mixed berries with yogurt', price: '2,600 RWF' },
        { name: 'Green Goddess', description: 'Spinach, apple, cucumber, and lime', price: '2,400 RWF' },
        { name: 'Protein Power', description: 'Banana, peanut butter, and protein powder', price: '2,800 RWF' },
        { name: 'Avocado Smoothie', description: 'Creamy avocado with honey', price: '2,700 RWF', signature: true },
        { name: 'Fresh Watermelon Juice', description: 'Hydrating seasonal fruit', price: '1,500 RWF' }
      ]
    },
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: '🥐',
      items: [
        { name: 'Continental Breakfast', description: 'Croissant, jam, butter, and coffee', price: '3,500 RWF', popular: true },
        { name: 'Eggs Benedict', description: 'Poached eggs with hollandaise sauce', price: '4,200 RWF' },
        { name: 'Pancakes', description: 'Fluffy pancakes with syrup and fruit', price: '3,800 RWF', popular: true },
        { name: 'Avocado Toast', description: 'Sourdough with smashed avocado', price: '3,000 RWF' },
        { name: 'Omelette', description: 'Three eggs with cheese and herbs', price: '3,200 RWF' },
        { name: 'French Toast', description: 'Brioche with cinnamon and vanilla', price: '3,600 RWF' },
        { name: 'Fruit Bowl', description: 'Seasonal fresh fruits', price: '2,500 RWF' }
      ]
    },
    {
      id: 'mains',
      name: 'Lunch & Dinner',
      icon: '🍽️',
      items: [
        { name: 'Ubugari & Beef Stew', description: 'Traditional Rwandan polenta with tender beef', price: '4,500 RWF', signature: true },
        { name: 'Grilled Tilapia', description: 'Fresh fish with rice and vegetables', price: '5,200 RWF', popular: true },
        { name: 'Chicken Curry', description: 'Aromatic curry with basmati rice', price: '4,800 RWF' },
        { name: 'Vegetarian Pasta', description: 'Penne with seasonal vegetables', price: '4,000 RWF' },
        { name: 'Club Sandwich', description: 'Triple-decker with chicken and bacon', price: '3,800 RWF', popular: true },
        { name: 'Ugali & Sukuma Wiki', description: 'Cornmeal with collard greens', price: '3,200 RWF' },
        { name: 'Beef Burger', description: 'Homemade patty with fries', price: '4,500 RWF' }
      ]
    },
    {
      id: 'cocktails',
      name: 'Evening Cocktails',
      icon: '🍹',
      items: [
        { name: 'Kigali Sunset', description: 'Rum, passion fruit, and lime', price: '3,500 RWF', signature: true },
        { name: 'Rwandan Coffee Martini', description: 'Vodka with local coffee', price: '4,000 RWF', signature: true },
        { name: 'Tropical Mojito', description: 'White rum with tropical fruits', price: '3,200 RWF', popular: true },
        { name: 'Banana Beer Cocktail', description: 'Traditional urwagwa with a twist', price: '2,800 RWF' },
        { name: 'Classic Gin & Tonic', description: 'Premium gin with tonic water', price: '3,000 RWF' },
        { name: 'Local Wine', description: 'Rwandan red or white wine', price: '2,500 RWF' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-coffee-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Our Menu
            </h2>
            <div className="absolute -top-8 -left-8 opacity-10">
              <Coffee className="w-20 h-20 text-primary animate-float" />
            </div>
          </div>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From authentic 
            <span className="font-dancing text-2xl text-accent mx-2">Rwandan specialties</span> 
            to international favorites, discover flavors that satisfy every craving
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 relative group">
          <img 
            src={menuShowcase} 
            alt="Feels Coffee Menu Showcase" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-coffee hover-lift"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center">
            <p className="text-primary-foreground font-dancing text-2xl mb-8">Crafted with Love</p>
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-secondary/50 backdrop-blur-sm">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs md:text-sm font-inter flex items-center gap-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden md:inline">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="shadow-coffee hover-lift transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="font-playfair text-3xl text-primary flex items-center justify-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`border-b border-border pb-4 last:border-b-0 group relative transition-all duration-300 hover:bg-secondary/30 p-4 rounded-lg ${
                          item.signature ? 'bg-gradient-to-r from-accent/10 to-transparent' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-playfair font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            {item.popular && (
                              <Sparkles className="w-4 h-4 text-accent animate-pulse-slow" />
                            )}
                            {item.signature && (
                              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-inter font-medium">
                                Signature
                              </span>
                            )}
                          </div>
                          <span className="font-bold text-primary ml-4 font-inter">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground font-inter">{item.description}</p>
                        {item.signature && (
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-pulse-slow"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Special Notice */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-warm shadow-coffee hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Coffee className="w-6 h-6 text-primary animate-float" />
                <h3 className="font-playfair text-2xl font-semibold text-primary">Special Dietary Requirements</h3>
                <Coffee className="w-6 h-6 text-primary animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <p className="font-inter text-muted-foreground leading-relaxed">
                We're happy to accommodate vegetarian, vegan, and gluten-free dietary needs. 
                Please speak with our friendly staff about customizing any dish to your preferences.
              </p>
              <p className="font-dancing text-lg text-accent mt-4">
                Because everyone deserves to feel at home
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;