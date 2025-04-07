export default function About() {
  return (
    <section className=" bg-white mt-7 py-12 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 flex gap-2    rounded-full ">
          <div className="w-full  flex flex-col gap-2">
            <img
              src="/images/happy.jpg"
              alt=""
              className="w-full h-auto rounded-lg rounded-tl-4xl"
            />
            <img
              src="/images/smile.avif"
              alt=""
              className="w-full h-auto rounded-lg rounded-tr-4xl "
            />
          </div>
          <div className="w-full  flex flex-col gap-2 ">
            <img
              src="/images/successful.avif"
              alt=""
              className="w-full h-auto rounded-lg rounded-tr-4xl "
            />
            <img
              src="/images/colleges.avif"
              alt=""
              className="w-full h-auto rounded-lg rounded-tr-4xl "
            />
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <p className="text-blue-600 font-semibold">// About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#010E37]">
            Transforming <span className="text-blue-600">Ideas</span> into{" "}
            <span className="text-blue-600">Digital Reality</span>
          </h2>
          <p className="mt-4 text-[#010E37]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex justify-center lg:justify-start mt-6 gap-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">150+</p>
              <p className="text-[#010E37] text-sm">Team Members</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">2000+</p>
              <p className="text-[#010E37] text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">99%</p>
              <p className="text-[#010E37] text-sm">Client Satisfaction</p>
            </div>
          </div>
          <p className="mt-8 text-lg font-bold  text-blue-600 ">
            Jenny Alexander
          </p>
          <p className="text-[#010E37] text-sm">CEO</p>
        </div>
      </div>
    </section>
  );
}
