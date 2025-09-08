import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                  <img
                    src={logo}
                    alt="MK Infotech"
                    className="w-24 h-24 rounded-lg"
                  />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Innovative IT solutions for modern businesses. Transforming
                ideas into powerful digital experiences.
              </p>
              <div className="flex space-x-4">
                {/* <a 
                  href="#" 
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a> */}
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Website Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Web Designing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    IT Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#about"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-foreground transition-colors"
                  >
                    Our Work
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Amritsar, Punjab, India - 143001</p>
                <p className="mt-4">
                  <a
                    href="tel:+918360084391"
                    className="hover:text-foreground transition-colors"
                  >
                    +91 83600 84391
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:mkinfotech28@gmail.com"
                    className="hover:text-foreground transition-colors"
                  >
                    mkinfotech28@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2025 MK Infotech. All rights reserved.
              </p>
              {/* <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
