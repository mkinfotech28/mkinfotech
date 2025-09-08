import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: project1Image,
      technologies: ["React JS", "Node JS", "MongoDB", "Next JS"],
      category: "Web Development",
      date: "2024",
      features: [
        "Real-time inventory tracking",
        "Multi-payment gateway integration",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
      ],
    },
    {
      id: 2,
      title: "Business Management App",
      description:
        "Mobile application for business management with CRM capabilities, task management, and team collaboration features.",
      image: project2Image,
      technologies: ["React Native", "Node JS", "MongoDB", "Java"],
      category: "Mobile Development",
      date: "2024",
      features: [
        "Cross-platform compatibility",
        "Real-time collaboration",
        "Cloud data synchronization",
        "Offline mode support",
      ],
    },
    {
      id: 3,
      title: "Enterprise Web Application",
      description:
        "Full-stack enterprise solution with advanced reporting, user management, and real-time data processing capabilities.",
      image: project3Image,
      technologies: ["Next JS", "Java", "SQL", "React JS"],
      category: "Enterprise Solutions",
      date: "2024",
      features: [
        "Advanced reporting system",
        "Role-based access control",
        "Real-time data processing",
        "Scalable architecture",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
              Our Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our latest work and successful project implementations
              across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gradient-primary text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-subtle hover:shadow-medium transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex gap-3">
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="professional" size="lg">
              View All Projects
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
