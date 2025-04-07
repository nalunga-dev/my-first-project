const processSteps = [
  {
    title: "Consultation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "/images/implementation.png",
    step: "01",
  },
  {
    title: "Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: "/images/strategy-development.png",
    step: "02",
  },
  {
    title: "Implementation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: " /images/clarification.png",
    step: "03",
  },
  {
    title: "Final Result",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    icon: " /images/final.png",
    step: "04",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 text-center bg-white">
      <p className="text-blue-600 text-4xl">// Our Work Process</p>
      <h2 className="text-3xl font-bold text-[#010E37] mt-2">
        Our Proven <span className="text-blue-600">Work Process</span>
      </h2>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {processSteps.map((step) => (
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center w-20 h-20">
              <img
                src={step.icon}
                className="bg-blue-600 p-6 text-[#010E37] rounded-full text-3xl  w-full h-full"
                alt={step.title}
              />

              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                {step.step}
              </span>
            </div>
            <h3 className="text-lg font-bold mt-4 text-blue-600 ">
              {step.title}
            </h3>
            <p className="text-[#010E37] mt-2 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
