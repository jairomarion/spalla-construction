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
<section  id="projects" className="bg-gray-50 py-24 px-4 md:px-10 border-t">

      

      <div className="text-center mb-14">

        <p className="tracking-[6px] text-green-600 text-sm font-semibold">

          PORTFOLIO

        </p>



        <h1 className="text-4xl md:text-5xl font-bold mt-2">

          Our <span className="text-green-600">Projects</span>

        </h1>

      </div>



      {/* Tabs */}

      <div className="flex justify-center gap-4 mb-10">

        <button

          onClick={() => {

            setActiveTab("featured");

            setShowAll(false);

          }}

          className={`px-6 py-2 rounded-full ${

            activeTab === "featured"

              ? "bg-green-600 text-white"

              : "bg-gray-200"

          }`}

        >

          Featured

        </button>



        <button

          onClick={() => setActiveTab("all")}

          className={`px-6 py-2 rounded-full ${

            activeTab === "all" ? "bg-green-600 text-white" : "bg-gray-200"

          }`}

        >

          All Projects

        </button>

      </div>



      {/* Grid */}

      <div className="max-w-7xl mx-auto grid gap-8 

        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"

      >

        {visible.map((project, index) => (

          <ProjectCard

            key={project.id}

            image={project.image}

            index={index}

            onClick={() => setSelectedImage(project.image)}

          />

        ))}

      </div>



      {/* View More */}

      {activeTab === "all" && !showAll && (

        <div className="text-center mt-12">

          <button

            onClick={() => setShowAll(true)}

            className="px-8 py-3 bg-green-600 text-white rounded-full"

          >

            View More Projects

          </button>

        </div>

      )}



      {/* Modal */}

      <ProjectModal

        selectedImage={selectedImage}

        onClose={() => setSelectedImage(null)}

      />

    </section>

  );

}