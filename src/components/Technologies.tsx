import { Badge } from "@/components/ui/badge";

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend Development",
      technologies: [
        {
          name: "React JS",
          level: "Expert",
          color: "bg-gradient-white",
          image: "../../src/assets/react-native.png",
        },
        {
          name: "Next JS",
          level: "Advanced",
          color: "bg-gradient-white",
          image: "../../src/assets/nextjs.png",
        },
      ],
    },
    {
      category: "Mobile Development",
      technologies: [
        {
          name: "React Native",
          level: "Expert",
          color: "bg-gradient-white",
          image: "../../src/assets/react-native.png",
        },
      ],
    },
    {
      category: "Backend Development",
      technologies: [
        {
          name: "Node JS",
          level: "Expert",
          color: "bg-gradient-white",
          image: "../../src/assets/node.jpeg",
        },
        {
          name: "Java",
          level: "Advanced",
          color: "bg-gradient-white",
          image: "../../src/assets/java.png",
        },
      ],
    },
    {
      category: "Database Technologies",
      technologies: [
        {
          name: "MongoDB",
          level: "Advanced",
          color: "bg-gradient-white",
          image: "../../src/assets/mongo.png",
        },
        {
          name: "SQL",
          level: "Expert",
          color: "bg-gradient-white",
          image: "../../src/assets/sql.png",
        },
      ],
    },
  ];

  const allTechnologies = [
    "React JS",
    "React Native",
    "Node JS",
    "Next JS",
    "SQL",
    "MongoDB",
    "Java",
  ];

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable,
              and innovative solutions for your business needs.
            </p>
          </div>

          {/* Featured Technologies Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-16">
            {allTechnologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-card p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 border border-border/50 hover:border-primary/20 text-center"
              >
                <div className="absolute inset-0 bg-gradient-white opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg mb-4 mx-auto flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <span className="text-primary font-bold text-lg">
                      {tech.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                    {tech}
                  </h3>
                </div>
              </div>
            ))}
          </div> */}

          {/* Detailed Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/40"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="border-l-4 border-primary pl-3">
                    {category.category}
                  </span>
                </h3>

                <div className="space-y-5">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl border border-border/30 hover:bg-secondary/30 transition"
                    >
                      {/* Left Section */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center shadow-inner hover:scale-105 transition`}
                        >
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {tech.name}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="text-[10px] uppercase tracking-wide px-2 py-0.5"
                          >
                            {tech.level}
                          </Badge>
                        </div>
                      </div>

                      {/* Right Section - Progress Bar */}
                      <div className="w-28 bg-border rounded-full h-2 relative overflow-hidden">
                        <div
                          className={`h-2 ${tech.color} rounded-full transition-all duration-500`}
                          style={{
                            width: tech.level === "Expert" ? "90%" : "75%",
                            background:
                              "linear-gradient(90deg, #3b82f6, #06b6d4)",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-hero rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology expertise can transform your
              ideas into powerful, scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Full-Stack Development
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Mobile Solutions
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Cloud Architecture
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
