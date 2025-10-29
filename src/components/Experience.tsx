import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "IT & Operations",
    company: "Sub-Sea 9 Ocean Services Ltd",
    period: "2021 - Present",
    responsibilities: [
      "Manage company tech solutions and website",
      "Maintain shared file directory systems for company and fleet",
      "Handle reports, certifications, personnel data, and bookkeeping",
      "Implement automation solutions for operational efficiency",
    ],
  },
  {
    title: "Tech Consultant",
    company: "Self-Employed",
    period: "2020 - Present",
    responsibilities: [
      "Provide remote tech solutions to individuals and businesses",
      "Integrate cloud and automation tools for business optimization",
      "Design and implement scalable cloud architectures",
      "Consult on DevOps best practices and CI/CD pipelines",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium text-lg">{exp.company}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
