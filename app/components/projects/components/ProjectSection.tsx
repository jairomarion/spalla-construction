"use client";

import { useProjects } from "@/app/components/projects/hooks/useProjects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const {
    activeTab,
    setActiveTab,
    showAll,
    setShowAll,
    selectedImage,
    setSelectedImage,
    visible,
  } = useProjects();

  return (
    <section id="projects" className="bg-gray-50 py-24 px-4 md:px-10 border-t">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="tracking-[6px] text-spalla-green text-sm font-semibold uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">
          Our <span className="text-spalla-green">Projects</span>
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("featured");
            setShowAll(false);
          }}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "featured"
              ? "bg-spalla-green text-white shadow-md"
              : "bg-gray-200 text-slate-600 hover:text-spalla-orange hover:bg-orange-50"
          }`}
        >
          Featured
        </button>

        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "all" 
              ? "bg-spalla-green text-white shadow-md" 
              : "bg-gray-200 text-slate-600 hover:text-spalla-orange hover:bg-orange-50"
          }`}
        >
          All Projects
        </button>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            index={index}
            onClick={() => setSelectedImage(project.image)}
          />
        ))}
      </div>

      {/* View More Button */}
      {activeTab === "all" && !showAll && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-spalla-green text-white font-medium rounded-full shadow-sm hover:bg-spalla-green/90 hover:shadow-md transition-all duration-300"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* Image Modal */}
      <ProjectModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}