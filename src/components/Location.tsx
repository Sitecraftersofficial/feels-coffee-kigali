import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Car, Phone, Mail } from 'lucide-react';

const Location = () => {
  const operatingHours = [
    { day: 'Monday - Sunday', hours: '7:30 AM - 11:00 PM' }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find us in the heart of Rugando, Kigali. We're open every day and ready to welcome you home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="h-5 w-5 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground mb-2">KG-628 St, Rugando</p>
                <p className="text-lg text-foreground mb-4">Kigali, Rwanda</p>
                <p className="text-muted-foreground">
                  Located in the vibrant Rugando neighborhood, easily accessible by public transport 
                  or private vehicle. Look for our distinctive coffee sign and welcoming terrace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="h-5 w-5 mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.hours}</span>
                  </div>
                ))}
                <p className="text-muted-foreground mt-4">
                  Open every day of the week, including holidays. We're here whenever you need 
                  your coffee fix or a comfortable place to work and relax.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Car className="h-5 w-5 mr-2" />
                  Parking & Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">Free parking available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">Wheelchair accessible entrance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">Accessible restroom facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground">Multiple seating options available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-accent mr-3" />
                  <span className="text-foreground">+250 788 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-accent mr-3" />
                  <span className="text-foreground">hello@feelscoffee.rw</span>
                </div>
                <p className="text-muted-foreground mt-4">
                  Have questions or want to make a reservation? Don't hesitate to call or email us. 
                  We're always happy to help!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Embed */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5434!2d30.084!3d-1.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnNDIuMCJTIDMwwrAwNScwMi40IkU!5e0!3m2!1sen!2srw!4v1234567890!5m2!1sen!2srw"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Feels Coffee Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Directions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-primary">Getting Here</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">By Car:</strong> Take KG-628 Street in Rugando. 
                    Look for our sign on the left side.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">By Public Transport:</strong> Take any bus to Rugando 
                    and ask for KG-628 Street. We're a short walk from the main road.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">By Motorcycle Taxi:</strong> Show the driver this address: 
                    "KG-628 St, Rugando, Kigali"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;