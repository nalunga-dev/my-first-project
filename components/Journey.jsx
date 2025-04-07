const awards = [
  {
    title: "Tech Innovator Award",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: "/images/award2.jpg",
  },
  {
    title: "Smart Solutions Award",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: "/images/award4.jpg",
  },
  {
    title: "Cloud Leadership Award",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    image: "/images/award1.jpg",
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl text-blue-500">// Our Awards</h2>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Our Journey to{" "}
        <span className="text-blue-600">Award-Winning Success</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-80 text-center border-b-4 border-blue-600"
          >
            <img
              src={award.image}
              alt={award.title}
              className="mx-auto mb-4 rounded-2xl"
            />
            <h3 className="font-bold text-blue-600">{award.title}</h3>
            <p className="text-blue-500 text-sm mb-2">{award.year}</p>
            <p className="text-blue-600 text-sm">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
