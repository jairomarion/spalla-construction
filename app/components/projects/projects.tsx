import Image from "next/image";

const projects = [
  { id: 1, image: "/project1.jpg" },
  { id: 2, image: "/project2.jpg" },
  { id: 3, image: "/project3.jpg" },
  { id: 4, image: "/project4.jpg" },
  { id: 5, image: "/project5.jpg" },
  { id: 6, image: "/project6.jpg" },
  { id: 7, image: "/project7.jpg" },
  { id: 8, image: "/project8.jpg" },
  { id: 9, image: "/project9.jpg" },
  { id: 10, image: "/project10.jpg" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-28 px-6 border-t border-gray-200"
    >
      <div className="text-center mb-20">
        <p className="tracking-[6px] text-green-600 text-sm font-semibold">
          PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-2">
          Our <span className="text-green-600">Projects</span>
        </h1>
      </div>

      <div
        className="
          max-w-400
          mx-auto
          grid 
          gap-12
          
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              relative
              h-96
              rounded-[28px]
              overflow-hidden
              bg-white
              shadow-md
              hover:shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-3
            "
          >
            <Image
              src={project.image}
              alt="Project"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
