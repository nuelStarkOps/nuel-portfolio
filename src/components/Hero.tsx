import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const handleExploreWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Cloud Practitioner & Tech Consultant
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi,<br />
              I'm <span className="text-primary">Emmanuel Nwokeocha</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Building scalable systems that just work — and feel like magic.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleExploreWork}
                size="lg"
                className="bg-primary hover:bg-primary-dim shadow-glow hover:shadow-glow-lg transition-all"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-sm text-muted-foreground">AWS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-sm text-muted-foreground">DevOps Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-sm text-muted-foreground">Cloud Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Circles */}
              <div className="absolute -top-4 -right-4 w-72 h-72 border-2 border-primary/30 rounded-full animate-glow-pulse" />
              <div className="absolute -bottom-4 -left-4 w-56 h-56 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={profileImage}
                  alt="Emmanuel Nwokeocha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
