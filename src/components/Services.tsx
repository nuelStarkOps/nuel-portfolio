import { Cloud, Code, Cog, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Tech Consulting",
    description: "Offering tech solutions to businesses and individuals, including implementation and optimization strategies.",
    icon: Globe,
  },
  {
    title: "Cloud Architecture",
    description: "Designing cost-optimized, scalable cloud architectures that grow with your business needs.",
    icon: Cloud,
  },
  {
    title: "Automation",
    description: "Writing shell scripts and infrastructure-as-code for seamless deployment and operations.",
    icon: Cog,
  },
  {
    title: "Web Design",
    description: "Occasional 'side quest' web projects — bringing creative ideas to life with modern technologies.",
    icon: Code,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
