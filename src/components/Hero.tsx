import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional IT workspace"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Innovative
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              IT Solutions
            </span>
            <br />
            for Modern Business
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We provide clear, simple and straight to the point solutions to the
            Businesses worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="professional"
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-4"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground text-center">
                Tailored software solutions built with cutting-edge technologies
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Website Development
              </h3>
              <p className="text-muted-foreground text-center">
                Comprehensive website solutions according to your needs
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
              <p className="text-muted-foreground text-center">
                Expert advice and strategic planning for smooth development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
