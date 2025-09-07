import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Settings,
  Code2Icon,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Designing",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Focused",
        "Scalable Architecture",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "Push Notifications",
        "Offline Support",
      ],
    },
    {
      icon: Code2Icon,
      title: "Website Development",
      description:
        "Professional websites built with clean code, scalable architecture, and optimized for user experience.",
      features: [
        "Custom Development",
        "CMS Integration",
        "E-commerce Solutions",
        "Maintenance & Support",
      ],
    },
    {
      icon: Laptop,
      title: "Internet Marketing",
      description:
        "Data-driven digital marketing strategies to help businesses grow and reach their target audience.",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting",
      ],
    },
    // {
    //   icon: Database,
    //   title: "Data Analytics",
    //   description:
    //     "Business intelligence solutions and data analytics to drive informed decisions.",
    //   features: [
    //     "Data Visualization",
    //     "Predictive Analytics",
    //     "Real-time Dashboards",
    //     "Custom Reports",
    //   ],
    // },
    // {
    //   icon: Settings,
    //   title: "IT Consulting",
    //   description:
    //     "Strategic technology consulting to align IT solutions with business objectives.",
    //   features: [
    //     "Digital Strategy",
    //     "Technology Roadmap",
    //     "Process Optimization",
    //     "Training & Support",
    //   ],
    // },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Offering a well-integrated full-scale technological environment to
              empower your business with cutting-edge software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-medium hover:shadow-large transition-all duration-300 border border-border group"
                >
                  <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-6 group-hover:bg-gradient-primary transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* 
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                  </Button> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
