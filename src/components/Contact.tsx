import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reservationDate: '',
    guests: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      reservationDate: '',
      guests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience Feels Coffee? Send us a message, make a reservation, or just say hello. 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+250 788 123 456"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reservationDate">Reservation Date (Optional)</Label>
                    <Input
                      id="reservationDate"
                      name="reservationDate"
                      type="date"
                      value={formData.reservationDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="1"
                      min="1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your inquiry, reservation request, or any special requirements..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-coffee text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Social Media */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">KG-628 St, Rugando<br />Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+250 788 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@feelscoffee.rw</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <a
                    href="https://instagram.com/feels_coffeexstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                  >
                    <Instagram className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-foreground">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                  >
                    <Facebook className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-foreground">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                  >
                    <Twitter className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-foreground">Twitter</span>
                  </a>
                </div>
                <p className="text-muted-foreground text-center">
                  Follow <strong>@feels_coffeexstudio</strong> for daily updates, 
                  new menu items, and behind-the-scenes content!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;