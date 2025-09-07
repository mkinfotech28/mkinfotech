import { Button } from "@/components/ui/button";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16  rounded-lg flex items-center justify-center">
            <img
              src={logo}
              alt="MK Infotech"
              className="w-16 h-16 rounded-lg"
            />
          </div>
          {/* <span className="text-xl font-bold text-foreground">MK Infotech</span> */}
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button
          variant="default"
          size="sm"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
