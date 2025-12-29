import { MapPin, ArrowLeftRight, Compass, Route } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Long-Distance Trips",
      description:
        "Comfortable travel across cities and states. Popular routes include Aurangabad to Mumbai, Aurangabad to Pune, and many more.",
    },
    {
      icon: ArrowLeftRight,
      title: "One-Way & Round Trips",
      description:
        "Flexible booking options for both one-way journeys and return trips at competitive rates.",
    },
    {
      icon: Compass,
      title: "Outstation Travel",
      description:
        "Perfect for weekend getaways, pilgrimages, business trips, or visiting family in other cities.",
    },
    {
      icon: Route,
      title: "Custom Routes",
      description:
        "Have a specific destination in mind? I can accommodate custom routes based on your travel needs.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel Services <span className="text-accent">Tailored</span> For You
          </h2>
          <p className="text-muted-foreground text-lg">
            From city-to-city transfers to custom routes, I provide reliable travel 
            solutions for all your long-distance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Popular Routes */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-soft border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Popular Routes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Aurangabad → Mumbai",
              "Aurangabad → Pune",
              "Mumbai → Nashik",
              "Pune → Shirdi",
              "Aurangabad → Nagpur",
              "Mumbai → Lonavala",
            ].map((route, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-medium"
              >
                {route}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
