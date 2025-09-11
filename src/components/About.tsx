import { CheckCircle, Users, Trophy, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-6">
              Custom Software Development Company
            </h2>
            <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Established in 2023, MK Infotech is a Software Development Company
              dedicated to Native and Hybrid apps for different platforms
              (Android &amp; iOS), Web Development, UI/UX Design, E- commerce
              Solutions, and Internet Marketing. We feel pride of successfully
              serving clients in the USA, UK, Australia, Europe and other parts
              of the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our development and design team stands ready for endless ideas
                and creative assistance. Whether you need a simple website or a
                highly advanced web/cloud, desktop or mobile application that
                computes engineering scientific or calculations in an easy to
                use interface, we are always ready to assist you with proper
                suggestion. We specialize at delivering high quality products
                and applications for various platforms.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Innovation-Driven
                    </h4>
                    <p className="text-muted-foreground">
                      Leveraging the latest technologies to create cutting-edge
                      solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Client-Focused
                    </h4>
                    <p className="text-muted-foreground">
                      Understanding your unique needs to deliver personalized
                      solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Quality Assured
                    </h4>
                    <p className="text-muted-foreground">
                      Rigorous testing and quality control in every project
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-medium text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">15+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">20+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  24/7
                </h4>
                <p className="text-muted-foreground">Support Available</p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">99%</h4>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
