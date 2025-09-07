import React from "react";
import {
  Database,
  Zap,
  Code,
  Feather,
  Server,
  Activity,
  Layers,
  Box,
  Cloud,
  Cpu,
  Lock,
  FileText,
} from "lucide-react";
const Technologies2 = () => {
  const techStack = [
    { name: "MongoDB", icon: Database },
    { name: "Firebase", icon: Zap },
    { name: "Java", icon: Code },
    { name: "SQLite", icon: Server },
    { name: "React Native", icon: Activity },
    { name: "Next.js", icon: Box },
    { name: "Ionic", icon: Cloud },
    { name: "Flutter", icon: Cpu },
    { name: "Machine Learning", icon: Lock },
    { name: "Node.js", icon: FileText },
    { name: "Python", icon: Code },
    { name: "React.js", icon: Feather },
  ];
  return (
    <div className="p-8 bg-gray-50 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 bg-white p-6 rounded-lg shadow-md">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-2" />
              <span className="text-sm text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies2;
