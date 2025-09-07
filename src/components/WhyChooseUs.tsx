// WhyChooseUs.js
import React from "react";
import { Shield, Users, Clock, Award } from "lucide-react";

const reasons = [
  {
    title: "Expert Team",
    description:
      "Our team of seasoned professionals brings industry-leading expertise to deliver cutting-edge solutions.",
    icon: Users,
  },
  {
    title: "Reliable Support",
    description:
      "We offer 24/7 customer support to ensure your operations run smoothly at all times.",
    icon: Clock,
  },
  {
    title: "Quality Assurance",
    description:
      "We prioritize high-quality development practices and rigorous testing to ensure flawless execution.",
    icon: Shield,
  },
  {
    title: "Innovative Solutions",
    description:
      "We use the latest technologies to create scalable and future-proof digital experiences.",
    icon: Award,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="p-8 bg-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
