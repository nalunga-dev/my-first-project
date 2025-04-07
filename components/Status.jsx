"use client";

const stats = [
  { value: "150+", label: "Team Members" },
  { value: "2000+", label: "Happy Clients" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "18+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section
      className="relative py-16 bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/images/colleges.avif)" }}
    >
      <div className="absolute inset-0 bg-[#333853c5] bg-opacity-30"></div>
      <div className="relative z-10 container mx-auto flex flex-wrap justify-center md:justify-between gap-6 px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center  last:border-none border-r-2 border-white px-6"
          >
            <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
            <p className="text-lg text-white font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
