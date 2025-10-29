import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Microservices Shop App",
    description: "E-commerce application deployed on AWS using EKS, Terraform, Grafana, Prometheus, and GitHub Actions for complete CI/CD automation.",
    tags: ["AWS", "EKS", "Terraform", "Grafana", "Prometheus"],
    github: "https://github.com/nuelStarkOps/sockshop-app",
  },
  {
    title: "Microservices Demo",
    description: "Fault-tolerance simulation showcasing microservices architecture with Python, NodeJS, React, Docker, and Docker Compose.",
    tags: ["Python", "NodeJS", "React", "Docker"],
    github: "https://github.com/nuelStarkOps/microservices-demo",
  },
  {
    title: "Java App Deployment",
    description: "Production-ready Java application deployed using AWS EC2, CloudFormation, ECS, ECR, and complete CodePipeline suite.",
    tags: ["AWS", "Java", "EC2", "ECS", "CloudFormation"],
    github: "https://github.com/nuelStarkOps/java-app-cicd-nextwork",
  },
  {
    title: "LAMP Stack Deployment",
    description: "Automated LAMP stack deployment using custom shell scripting for rapid environment provisioning.",
    tags: ["Linux", "Apache", "MySQL", "PHP", "Shell", "Ansible"],
    github: "https://github.com/nuelStarkOps/laravel-with-LAMP-ansible",
  },
  {
    title: "Node App on EC2",
    description: "Lightweight Node.js application deployment on AWS EC2 with optimized performance configurations.",
    tags: ["Node.js", "AWS EC2", "Linux"],
    github: "https://github.com/nuelStarkOps/node-app-aws",
  },
  {
    title: "Static Web Hosting",
    description: "Multi-cloud static website hosting on GCP using Terraform for Infrastructure as Code.",
    tags: ["Terraform", "AWS", "GCP", "IaC"],
    github: "https://github.com/nuelStarkOps/static-web-gcp-terraform",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions showcasing cloud architecture, automation, and DevOps expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
