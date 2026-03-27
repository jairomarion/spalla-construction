import { Building2, Droplets, HardHat, Briefcase } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Building Works",
    icon: Building2,
    color: "bg-orange-500",
    image: "/building.jpg",
    description: "We deliver top-quality design-build...",
    details: [
      "Architectural design & construction",
      "Renovations & refurbishments",
      "Interior finishing & fit-outs",
      "Commercial & residential buildings",
      "Structural engineering solutions",
      "Green building & sustainable design",
    ],
  },
  {
    id: 2,
    title: "Water Works",
    icon: Droplets,
    color: "bg-blue-500",
    image: "/waterWorks.jpg",
    description: "We provide expert solutions...",
    details: ["Water supply systems", "Irrigation", "Storage"],
  },
  {
    id: 3,
    title: "Road Works",
    icon: HardHat,
    color: "bg-green-500",
    image: "/road.jpg",
    description: "Comprehensive road construction...",
    details: ["Road construction", "Drainage", "Maintenance"],
  },
  {
    id: 4,
    title: "Project Management",
    icon: Briefcase,
    color: "bg-purple-500",
    image: "/ProjectManagement.jpg",
    description: "End-to-end project management...",
    details: ["Planning", "Procurement", "Execution"],
  },
];
