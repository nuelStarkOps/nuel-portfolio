import profileImage from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute mx-auto w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-card group">
                <img
                  src={profileImage}
                  alt="Emmanuel Nwokeocha"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Emmanuel Nwokeocha</span>, a Cloud Practitioner and Tech Consultant with a focus on scalable cloud architecture and infrastructure automation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work blends efficiency, reliability, and forward-thinking design — leveraging{" "}
              <span className="text-foreground font-medium">AWS, Docker, Terraform, CI/CD, Linux, and Shell scripting</span>{" "}
              to build systems that just work.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold the <span className="text-foreground font-medium">AWS Certified Cloud Practitioner</span> certification, alongside multiple AWS and GCP skill badges that reinforce my hands-on cloud expertise.
            </p>

            <p className="text-lg text-primary font-medium italic">
              I believe great technology feels like magic when it's done right — so… let's make magic.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
