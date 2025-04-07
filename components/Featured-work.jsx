export default function FeaturedWorks() {
  function ProjectCard({ image, title, tags }) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <img src={image} alt={title} className="w-full h-auto " />
        <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-20 p-4  text-white">
          <h3 className="font-bold text-2xl line-clamp-1 ">{title}</h3>
          <div className="flex  sm:flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-300 border-2 border-white   transition-transform group-hover:scale-105  text-blue-700 font-bold hidden sm:block line-clamp-1  px-4 py-3 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <div className="max-w-6xl mx-auto">
        <h3 className=" text-blue-700 text-3xl  font-bold">
          Explore Our Showcase of
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">
          <span className="text-blue-500">Featured Works</span>
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="absolute inset-0 bg-gradient-to-r from-black/98 to-transparent"></div>
        <ProjectCard
          className="relative"
          image="/images/colleges.avif"
          title="Care Connect - Doctor Appointment App"
          tags={["UI/UX Design", "App Design", "Wireframe"]}
        />
        <ProjectCard
          image="/images/happy.jpg"
          title="Dental - Dentist and Dental Clinic Website UI/UX Design"
          tags={["UI/UX Design", "Web Design", "Wireframe"]}
        />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          className="relative"
          image="/images/smile.avif"
          title="Care Connect - Doctor Appointment App"
          tags={["UI/UX Design", "App Design", "Wireframe"]}
        />
        <ProjectCard
          image="/images/successful.avif"
          title="Dental - Dentist and Dental Clinic Website UI/UX Design"
          tags={["UI/UX Design", "Web Design", "Wireframe"]}
        />
      </div>
    </section>
  );
}
