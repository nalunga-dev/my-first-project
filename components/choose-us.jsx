import { FaDollarSign, FaUserTie, FaBriefcase, FaAward } from "react-icons/fa";

export default function WhyChooseUs() {
  function Feature({ icon, title }) {
    return (
      <div className="flex flex-col items-center  space-x-4 mt-6  p-2 sm:p-4 ">
        <div className="text-blue-400 text-4xl">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#0C1230] text-white w-full flex flex-col lg:flex-row gap-2 p-4 md:px-20">
      <div className="flex flex-col w-full lg:w-[50%] p-2 mt-8 text-center">
        <h3 className="text-blue-400 text-lg font-semibold">
          // Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Why Trust Us for Your IT Needs?
        </h2>
        <div className="w-full mt-2">
          <img
            src="/images/offf5.jpg"
            alt="Team Meeting"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[50%] p-2 mt-5 text-center">
        <div className="mt-5">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all">
            Get A Quote
          </button>
        </div>
        <div className="w-full p-2 grid grid-cols-1 mt-12 sm:grid-cols-2 gap-6">
          <Feature icon={<FaDollarSign />} title="Affordable Price" />
          <Feature icon={<FaUserTie />} title="Professional Team" />
          <Feature icon={<FaBriefcase />} title="18+ Years Experience" />
          <Feature icon={<FaAward />} title="Award Winning" />
        </div>
      </div>
    </section>
  );
}
