import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import menuShowcase from '@/assets/menu-showcase.jpg';

const Menu = () => {
  const menuCategories = [
    {
      id: 'coffee',
      name: 'Coffee & Espresso',
      items: [
        { name: 'Espresso', description: 'Rich, concentrated coffee shot', price: '800 RWF' },
        { name: 'Americano', description: 'Espresso with hot water', price: '1,200 RWF' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '1,500 RWF' },
        { name: 'Latte', description: 'Espresso with steamed milk', price: '1,600 RWF' },
        { name: 'Macchiato', description: 'Espresso "marked" with foam', price: '1,400 RWF' },
        { name: 'Mocha', description: 'Espresso with chocolate and milk', price: '1,800 RWF' },
        { name: 'Rwandan Single Origin', description: 'Local premium coffee beans', price: '2,000 RWF' }
      ]
    },
    {
      id: 'beverages',
      name: 'Teas & Other Beverages',
      items: [
        { name: 'Earl Grey Tea', description: 'Classic bergamot-scented black tea', price: '1,000 RWF' },
        { name: 'Green Tea', description: 'Antioxidant-rich Japanese green tea', price: '1,000 RWF' },
        { name: 'Chamomile Tea', description: 'Soothing herbal tea', price: '1,100 RWF' },
        { name: 'Hot Chocolate', description: 'Rich chocolate with steamed milk', price: '1,500 RWF' },
        { name: 'Fresh Orange Juice', description: 'Locally sourced oranges', price: '1,300 RWF' },
        { name: 'Passion Fruit Juice', description: 'Fresh Rwandan passion fruit', price: '1,400 RWF' },
        { name: 'Iced Tea', description: 'Refreshing cold-brewed tea', price: '1,200 RWF' }
      ]
    },
    {
      id: 'smoothies',
      name: 'Smoothies & Juices',
      items: [
        { name: 'Tropical Smoothie', description: 'Mango, pineapple, and banana', price: '2,500 RWF' },
        { name: 'Berry Blast', description: 'Mixed berries with yogurt', price: '2,600 RWF' },
        { name: 'Green Goddess', description: 'Spinach, apple, cucumber, and lime', price: '2,400 RWF' },
        { name: 'Protein Power', description: 'Banana, peanut butter, and protein powder', price: '2,800 RWF' },
        { name: 'Avocado Smoothie', description: 'Creamy avocado with honey', price: '2,700 RWF' },
        { name: 'Fresh Watermelon Juice', description: 'Hydrating seasonal fruit', price: '1,500 RWF' }
      ]
    },
    {
      id: 'breakfast',
      name: 'Breakfast',
      items: [
        { name: 'Continental Breakfast', description: 'Croissant, jam, butter, and coffee', price: '3,500 RWF' },
        { name: 'Eggs Benedict', description: 'Poached eggs with hollandaise sauce', price: '4,200 RWF' },
        { name: 'Pancakes', description: 'Fluffy pancakes with syrup and fruit', price: '3,800 RWF' },
        { name: 'Avocado Toast', description: 'Sourdough with smashed avocado', price: '3,000 RWF' },
        { name: 'Omelette', description: 'Three eggs with cheese and herbs', price: '3,200 RWF' },
        { name: 'French Toast', description: 'Brioche with cinnamon and vanilla', price: '3,600 RWF' },
        { name: 'Fruit Bowl', description: 'Seasonal fresh fruits', price: '2,500 RWF' }
      ]
    },
    {
      id: 'mains',
      name: 'Lunch & Dinner',
      items: [
        { name: 'Ubugari & Beef Stew', description: 'Traditional Rwandan polenta with tender beef', price: '4,500 RWF' },
        { name: 'Grilled Tilapia', description: 'Fresh fish with rice and vegetables', price: '5,200 RWF' },
        { name: 'Chicken Curry', description: 'Aromatic curry with basmati rice', price: '4,800 RWF' },
        { name: 'Vegetarian Pasta', description: 'Penne with seasonal vegetables', price: '4,000 RWF' },
        { name: 'Club Sandwich', description: 'Triple-decker with chicken and bacon', price: '3,800 RWF' },
        { name: 'Ugali & Sukuma Wiki', description: 'Cornmeal with collard greens', price: '3,200 RWF' },
        { name: 'Beef Burger', description: 'Homemade patty with fries', price: '4,500 RWF' }
      ]
    },
    {
      id: 'cocktails',
      name: 'Evening Cocktails',
      items: [
        { name: 'Kigali Sunset', description: 'Rum, passion fruit, and lime', price: '3,500 RWF' },
        { name: 'Rwandan Coffee Martini', description: 'Vodka with local coffee', price: '4,000 RWF' },
        { name: 'Tropical Mojito', description: 'White rum with tropical fruits', price: '3,200 RWF' },
        { name: 'Banana Beer Cocktail', description: 'Traditional urwagwa with a twist', price: '2,800 RWF' },
        { name: 'Classic Gin & Tonic', description: 'Premium gin with tonic water', price: '3,000 RWF' },
        { name: 'Local Wine', description: 'Rwandan red or white wine', price: '2,500 RWF' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From authentic Rwandan specialties to international favorites, discover flavors that satisfy every craving
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <img 
            src={menuShowcase} 
            alt="Feels Coffee Menu Showcase" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-warm"
          />
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs md:text-sm"
              >
                {category.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg text-foreground">{item.name}</h4>
                          <span className="font-bold text-primary ml-4">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
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
          <Card className="bg-secondary/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Special Dietary Requirements</h3>
              <p className="text-muted-foreground">
                We're happy to accommodate vegetarian, vegan, and gluten-free dietary needs. 
                Please speak with our friendly staff about customizing any dish to your preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;