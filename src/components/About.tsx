import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Users, Laptop, Heart } from 'lucide-react';
import terraceView from '@/assets/terrace-view.jpg';
import coffeeBeans from '@/assets/coffee-beans.jpg';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Locally sourced Rwandan beans roasted to perfection, serving authentic flavors that tell the story of our beautiful country.'
    },
    {
      icon: Laptop,
      title: 'Laptop Friendly',
      description: 'Strong Wi-Fi, comfortable seating, and power outlets throughout. Perfect for remote work, studying, or creative sessions.'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'A welcoming space where locals and visitors come together to connect, share stories, and build lasting friendships.'
    },
    {
      icon: Heart,
      title: 'Cozy Atmosphere',
      description: 'Thoughtfully designed interiors with warm lighting, comfortable furniture, and beautiful terrace views of Kigali.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Feels Coffee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a café, Feels Coffee is Kigali's home away from home. We're passionate about 
            creating a space where exceptional coffee meets genuine community spirit.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Founded in the heart of Kigali, Feels Coffee was born from a simple vision: to create 
              a space where quality coffee, delicious food, and meaningful connections flourish together.
            </p>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Located in Rugando, we've become known for our cozy ambiance, reliable Wi-Fi, and 
              commitment to serving both international favorites and local Rwandan specialties. 
              Whether you're a digital nomad, a student, or simply someone who appreciates great coffee, 
              you'll find your perfect spot here.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our beautiful terrace offers stunning views, while our indoor spaces provide the perfect 
              atmosphere for work, study, or catching up with friends. Every day from 7:30 AM to 11:00 PM, 
              we're here to make your experience feel like home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={terraceView} 
              alt="Feels Coffee Terrace" 
              className="rounded-lg shadow-warm w-full h-48 object-cover"
            />
            <img 
              src={coffeeBeans} 
              alt="Rwandan Coffee Beans" 
              className="rounded-lg shadow-warm w-full h-48 object-cover mt-8"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Quality First</h4>
              <p className="text-muted-foreground">We source the finest local ingredients and never compromise on the quality of our coffee and food.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Community Focus</h4>
              <p className="text-muted-foreground">Supporting local farmers, creating jobs, and building connections within the Kigali community.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Exceptional Value</h4>
              <p className="text-muted-foreground">Offering premium experiences at prices that make quality coffee accessible to everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;