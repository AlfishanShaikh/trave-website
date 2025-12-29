import { Check } from "lucide-react";
import carImage from "@/assets/tata-altroz.jpg";

const CarSection = () => {
  const features = [
    "Clean and well-maintained interior",
    "Comfortable seats for long journeys",
    "Air-conditioned for all weather",
    "Spacious boot for luggage",
    "5-Star safety rated",
    "Regular servicing and maintenance",
  ];

  return (
    <section id="car" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <img
                src={carImage}
                alt="Tata Altroz - Clean and comfortable car for long-distance travel"
                className="relative rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Your Ride
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Travel in the <span className="text-accent">Tata Altroz</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The Tata Altroz is a premium hatchback known for its safety, comfort, 
              and reliability. With its 5-star safety rating and spacious interior, 
              it's the perfect companion for your long-distance journeys.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 p-6 bg-secondary/50 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5⭐</div>
                <div className="text-sm text-muted-foreground">Safety Rating</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">AC</div>
                <div className="text-sm text-muted-foreground">Climate Control</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Passengers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSection;
