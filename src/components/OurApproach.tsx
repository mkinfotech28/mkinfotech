// OurApproach.js
import React from "react";
import { Layout, Zap, BarChart, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Strategic Planning",
    description:
      "We begin by understanding your business goals and crafting tailored technology strategies.",
    icon: Layout,
  },
  {
    title: "Innovative Solutions",
    description:
      "Our team leverages the latest tools and trends to create forward-thinking solutions.",
    icon: Zap,
  },
  {
    title: "Performance Analysis",
    description:
      "We continuously monitor performance to ensure systems are optimized for maximum efficiency.",
    icon: BarChart,
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment doesn’t end with delivery—we provide long-term support to ensure sustained success.",
    icon: MessageSquare,
  },
];

const OurApproach = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Our Approach
          </h2>
          <p className="text-gray-600 text-lg">
            We believe that technology should drive growth, efficiency, and
            innovation. Our approach combines strategic insight, expert
            execution, and ongoing support to help businesses navigate the
            digital landscape with confidence.
          </p>
          <p className="text-gray-600">
            From planning to deployment and beyond, we partner with you every
            step of the way to ensure solutions are aligned with your goals.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="md:w-1/2 grid grid-cols-1 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
