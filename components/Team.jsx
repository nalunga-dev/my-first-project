const teamMembers = [
  {
    name: "Jenny Alexander",
    role: "Chief Executive Officer",
    image: "/images/happy.jpg",
  },
  {
    name: "Olivia Hughes",
    role: "Chief Technology Officer",
    image: "/images/smile.avif",
  },
  {
    name: "Sophia Lewis",
    role: "IT Project Manager",
    image: "/images/offf5.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-12 px-4 md:px-16 text-center">
      <h3 className="text-lg text-blue-500">// Our Team</h3>
      <h2 className="text-3xl text-blue-900  font-bold">
        Meet Our <span className="text-blue-500">Expert Team</span>
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h4 className="mt-4 text-blue-500 font-bold">{member.name}</h4>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
        View All
      </button>
    </section>
  );
}
