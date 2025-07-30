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
      items: [
        { name: 'Espresso Single', description: 'Rich, full-bodied shot of coffee', price: '1,500 RWF', popular: true },
        { name: 'Espresso Double', description: 'Double shot for extra strength', price: '2,000 RWF' },
        { name: 'Americano', description: 'Espresso with hot water', price: '2,500 RWF', popular: true },
        { name: 'Macchiato', description: 'Espresso with a dollop of foam', price: '2,000 RWF' },
        { name: 'Cortado', description: 'Equal parts espresso and warm milk', price: '3,000 RWF' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '3,000 RWF', popular: true },
        { name: 'Café Latte', description: 'Espresso with steamed milk', price: '3,000 RWF' },
        { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '3,500 RWF', signature: true },
        { name: 'Vanilla Latte', description: 'Latte with vanilla syrup', price: '3,500 RWF' },
        { name: 'Caramel Macchiato', description: 'Macchiato with caramel', price: '3,500 RWF' },
        { name: 'Cinnamon Latte', description: 'Latte with cinnamon spice', price: '3,500 RWF' }
      ]
    },
    {
      id: 'tea',
      name: 'Tea & Chocolate',
      icon: '🍵',
      items: [
        { name: 'African Tea', description: 'Traditional African tea blend', price: '2,500 RWF' },
        { name: 'English Tea', description: 'Classic black tea', price: '2,500 RWF' },
        { name: 'Spiced Tea', description: 'Tea with warming spices', price: '3,000 RWF' },
        { name: 'Herbal Tea', description: 'Caffeine-free herbal blend', price: '2,500 RWF' },
        { name: 'Feels Formula', description: 'Our signature tea blend', price: '3,500 RWF', signature: true },
        { name: 'Hot Chocolate', description: 'Rich chocolate drink', price: '3,000 RWF' }
      ]
    },
    {
      id: 'iced-drinks',
      name: 'Iced Coffee & Tea',
      icon: '🧊',
      items: [
        { name: 'Iced Americano', description: 'Chilled americano with ice', price: '3,000 RWF' },
        { name: 'Iced Latte', description: 'Cold latte with ice', price: '3,500 RWF', popular: true },
        { name: 'Iced Vanilla Latte', description: 'Iced latte with vanilla', price: '3,700 RWF' },
        { name: 'Iced Mocha', description: 'Cold chocolate coffee', price: '3,700 RWF' },
        { name: 'Iced Caramel Macchiato', description: 'Iced macchiato with caramel', price: '3,700 RWF' },
        { name: 'Take me to Feels', description: 'Our signature iced tea', price: '3,000 RWF', signature: true },
        { name: 'Flavored Iced Tea', description: 'Passion or Pineapple', price: '2,500 RWF' },
        { name: 'Iced Herbal Tea', description: 'Peppermint or Green Tea', price: '2,500 RWF' }
      ]
    },
    {
      id: 'juices',
      name: 'Fresh Juices & Smoothies',
      icon: '🥤',
      items: [
        { name: 'Mango Juice', description: 'Fresh squeezed mango', price: '4,000 RWF', popular: true },
        { name: 'Passion Juice', description: 'Local passion fruit juice', price: '3,500 RWF' },
        { name: 'Orange Juice', description: 'Fresh squeezed oranges', price: '4,500 RWF' },
        { name: 'Tropical Juice', description: 'Mixed tropical fruits', price: '4,000 RWF' },
        { name: 'Mango Berry Smoothie', description: 'Mango and berry blend', price: '4,500 RWF', popular: true },
        { name: 'Green Detox Smoothie', description: 'Healthy green vegetable blend', price: '4,500 RWF', signature: true },
        { name: 'Chocolate Twist Smoothie', description: 'Chocolate protein smoothie', price: '4,500 RWF' },
        { name: 'Classic Lemonade', description: 'Fresh squeezed lemons', price: '2,500 RWF' },
        { name: 'Strawberry Lemonade', description: 'Lemonade with fresh strawberries', price: '3,000 RWF' }
      ]
    },
    {
      id: 'breakfast',
      name: 'Breakfast',
      icon: '🍳',
      items: [
        { name: 'Rolex', description: 'Ugandan rolled chapati with eggs', price: '3,500 RWF', popular: true },
        { name: 'Pancake', description: 'Fluffy pancakes with syrup', price: '7,000 RWF' },
        { name: 'French Toast', description: 'Classic French toast', price: '3,500 RWF' },
        { name: 'Morning Combo', description: 'Complete breakfast combo', price: '8,000 RWF', signature: true },
        { name: 'Plain Omelet', description: 'Simple three-egg omelet', price: '4,000 RWF' },
        { name: 'Special Omelet', description: 'Omelet with your choice of fillings', price: '5,000 RWF' },
        { name: 'Ham & Cheese Sandwich', description: 'Grilled sandwich with ham and cheese', price: '5,000 RWF' },
        { name: 'Avocado & Toast', description: 'Smashed avocado on artisan bread', price: '2,500 RWF' },
        { name: 'Eggs & Croissant', description: 'Fresh eggs with buttery croissant', price: '5,000 RWF' }
      ]
    },
    {
      id: 'mains',
      name: 'Main Dishes',
      icon: '🍽️',
      items: [
        { name: 'Beef Burger', description: 'Homemade beef patty with sides', price: '6,000 RWF', popular: true },
        { name: 'Chicken Burger', description: 'Grilled chicken burger', price: '6,000 RWF' },
        { name: 'Grilled Chicken Breast', description: 'Served with chips & salads', price: '7,000 RWF' },
        { name: 'Grilled Fillet Steak', description: 'Premium beef fillet', price: '7,500 RWF', signature: true },
        { name: 'Chicken Alfredo', description: 'Creamy pasta with chicken', price: '7,500 RWF' },
        { name: 'Spaghetti Bolognese', description: 'Traditional pasta with meat sauce', price: '6,000 RWF' },
        { name: 'Grilled Fish Fillet', description: 'Tilapia served with chips & salad', price: '9,000 RWF' },
        { name: 'Club Sandwich', description: 'Triple-decker with chicken and bacon', price: '6,500 RWF' },
        { name: 'Chicken Quesadilla', description: 'Served with guacamole and salsa', price: '6,500 RWF' },
        { name: 'Beef Stroganoff', description: 'Tender beef in creamy sauce', price: '8,000 RWF' }
      ]
    },
    {
      id: 'cocktails',
      name: 'Cocktails & Alcoholic Drinks',
      icon: '🍹',
      items: [
        { name: 'Feels Mojito', description: 'Our signature mojito', price: '7,500 RWF', signature: true },
        { name: 'Passion Fruit Margarita', description: 'Local passion fruit margarita', price: '10,000 RWF' },
        { name: 'Long Island', description: 'Classic Long Island iced tea', price: '10,000 RWF' },
        { name: 'Gin Tonic', description: 'Premium gin and tonic', price: '7,500 RWF' },
        { name: 'White Wine', description: 'Glass of white wine', price: '7,000 RWF' },
        { name: 'Red Wine', description: 'Glass of red wine', price: '7,000 RWF' },
        { name: 'Heineken', description: 'Premium beer', price: '2,000 RWF', popular: true },
        { name: 'Dawa', description: 'Traditional honey-based cocktail', price: '10,000 RWF' },
        { name: 'Take me to Feels', description: 'Signature cocktail experience', price: '10,000 RWF', signature: true }
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
          <div className="absolute inset-0  bg-gradient-to-t from-black/80 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center">
            <p className="text-primary-foreground group-hover:text-yellow-50 font-dancing text-2xl mb-8">Crafted with Love</p>
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-secondary/50 backdrop-blur-sm h-auto p-1">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs md:text-sm font-inter flex flex-col md:flex-row items-center gap-1 data-[state=active]:bg-primary data-[state=active]:text-black py-2 px-2"
              >
                <span className="text-base md:text-lg">{category.icon}</span>
                <span className="text-xs md:text-sm">{category.name.split(' ')[0]}</span>
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