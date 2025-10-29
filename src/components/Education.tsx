import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (CLF-C02)",
    year: "2025",
    icon: Award,
  },
  {
    degree: "Certificate in Professional Foundations",
    institution: "ALX",
    year: "2025",
    icon: Award,
  },
  {
    degree: "Diploma in Cloud Engineering",
    institution: "AltSchool Africa",
    year: "2024",
    icon: Award,
  },  
  {
    degree: "BSc. Biochemistry",
    institution: "McPherson University, Nigeria",
    grade: "First Class Honours",
    year: "2020",
    icon: GraduationCap,
  },

];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {item.degree}
                          </h3>
                          <p className="text-primary font-medium">{item.institution}</p>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      {item.grade && (
                        <p className="text-muted-foreground">{item.grade}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
