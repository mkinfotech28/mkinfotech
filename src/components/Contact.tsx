import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const SERVICE_ID = "service_8byqbl9";
const TEMPLATE_ID = "template_yfbl6ki";
const PUBLIC_KEY = "r_hSNlKUbLELWyBT-";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    const formattedData = {
      firstName: data.firstName || "--",
      lastName: data.lastName || "--",
      email: data.email || "--",
      company: data.company || "--",
      service: data.service || "--",
      message: data.message || "--",
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formattedData, PUBLIC_KEY);
      toast("Message sent successfully!", { type: "success" });
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast("Failed to send message.", { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with innovative IT solutions?
              Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you need custom software development, cloud solutions,
                or IT consulting, our team is here to help you achieve your
                goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email Us
                    </h4>
                    <p className="text-muted-foreground">
                      mkinfotech28@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Call Us
                    </h4>
                    <p className="text-muted-foreground">+91 83600 84391</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Visit Us
                    </h4>
                    <p className="text-muted-foreground">
                      Amritsar, Punjab, India - 143001
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-hero rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Why Choose MK Infotech?
                </h4>
                <div className="text-sm text-muted-foreground">
                  We&#39;re experts in android and iOS app development.
                  We&#39;ve developed and designed numerous mobile apps in
                  diverse niches. Also, we&#39;ve been working on website
                  development using different technologies. We listen and
                  understand our customers demand and implement methodologies
                  accordingly to help their brands gain excellence. Our
                  developers are always at your service to assist you with the
                  years of experience.
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-large">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company Name"
                    {...register("company")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    {...register("service", {
                      required: "Service selection is required",
                    })}
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="IT Consulting">IT Consulting</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={loading || isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? "Submitting..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
