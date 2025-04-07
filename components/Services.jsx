const services = [
  {
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    icon: "/images/final.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    icon: "/images/implementation.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    icon: "/images/strategy-development.png",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F5F5F5]">
      <div className="text-center">
        <p className="text-blue-600 text-3xl">// Our Services</p>
        <h2 className="text-3xl font-bold mt-2 text-[#010E37]">
          Services We Provide to <br />
          <span className="text-blue-600">Elevate Your Business</span>
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service) => (
          <div className=" w-[100%]  md:w-80 h-95 p-5 border rounded-lg shadow-md bg-white transition-all hover:shadow-lg hover:border-blue-500">
            <div className="text-3xl bg-blue-100 p-4 rounded-lg inline-block">
              <img
                src={service.icon}
                className="  w-30 h-30"
                alt={service.title}
              />
            </div>
            <h3 className="text-xl font-bold text-[#010E37]  mt-4">
              {service.title}
            </h3>
            <p className="text-[#010E37] mt-2">{service.description}</p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-4 inline-flex items-center"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className="bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700">
          View All Services
        </div>
      </div>
    </section>
  );
}
