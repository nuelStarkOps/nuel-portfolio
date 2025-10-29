import { Cloud, Code, Cog, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure", "Cloud Architecture", "Infrastructure Design"],
  },
  {
    title: "Automation",
    icon: Cog,
    skills: ["Terraform", "Shell Scripting", "Python", "CI/CD", "Infrastructure as Code"],
  },
  {
    title: "DevOps",
    icon: Code,
    skills: ["Docker", "Kubernetes", "ECS", "GitHub Actions", "Monitoring"],
  },
  {
    title: "Consulting",
    icon: Users,
    skills: ["Tech Solutions", "Client Relations", "Business Optimization", "Strategy"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
