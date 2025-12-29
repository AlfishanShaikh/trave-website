import { Shield, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is my top priority on every journey",
    },
    {
      icon: Clock,
      title: "Always Punctual",
      description: "I value your time and ensure timely pickups",
    },
    {
      icon: Heart,
      title: "Friendly Service",
      description: "Travel with someone who cares about your comfort",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              About Your Driver
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">Abrar</span> — Your Trusted Travel Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hello! I'm Abrar, a professional long-distance driver with over 5 years 
              of experience on the road. I specialize in providing safe, comfortable, 
              and affordable outstation travel services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're traveling for business, family trips, or tourism, I ensure 
              every journey is smooth and enjoyable. My well-maintained Tata Altroz and 
              commitment to punctuality make me the preferred choice for hundreds of 
              satisfied customers.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <div className="bg-card rounded-xl shadow-card p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">A</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Abrar</h3>
                <p className="text-muted-foreground mb-4">Professional Driver</p>
                <div className="flex justify-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-muted-foreground">Years</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Trips</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-muted-foreground">Safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
