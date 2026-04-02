import { useState } from "react";
import { projects } from "@/app/components/projects/data/project";

export function useProjects() {
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    activeTab === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  const visible =
    activeTab === "featured"
      ? filtered
      : showAll
      ? filtered
      : filtered.slice(0, 8);

  return {
    activeTab,
    setActiveTab,
    showAll,
    setShowAll,
    selectedImage,
    setSelectedImage,
    visible,
  };
}