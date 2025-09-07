// MissionAndServices.js
import React from "react";
import { Globe, Code, Server, Smartphone, Cloud, Lock } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, scalable, and SEO-friendly websites tailored to your business goals.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Developing user-friendly mobile applications on Android and iOS platforms for enhanced engagement.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    description:
      "Offering secure and cost-effective cloud infrastructure to ensure seamless operations and scalability.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with cutting-edge security solutions and proactive monitoring.",
    icon: Lock,
  },
  {
    title: "Custom Software",
    description:
      "Creating bespoke software solutions that meet unique business challenges and improve efficiency.",
    icon: Code,
  },
  {
    title: "IT Consulting",
    description:
      "Providing expert advice and strategic planning to help you navigate complex technology landscapes.",
    icon: Server,
  },
];

const Services = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Mission & Services
      </h2>

      <div className="max-w-4xl text-center mb-12 px-4">
        <p className="text-lg text-gray-700 mb-4">
          At <span className="font-semibold text-blue-600">MK INFOTECH</span>,
          our mission is to empower businesses with innovative and reliable
          technology solutions.
        </p>
        <p className="text-gray-600">
          We believe that technology should simplify processes, enhance
          efficiency, and unlock new opportunities. Our team of experts is
          committed to delivering solutions that are tailored to your unique
          needs and aligned with industry best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
