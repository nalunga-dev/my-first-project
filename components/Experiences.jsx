export default function Experiences() {
  return (
    <section className="relative experienceSection max-w-9xl h-[677px] md:h-[518px] mb-0 mx-auto py-2 px-8 md:px-8 md:mb-0 overflow-hidden">
      <div className="absolute h-auto inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/offf5.jpg')] bg-cover bg-center" />
        <div className="absolute h-[500px] bg-gradient-to-r from-red-500 to-transparent" />
      </div>

      <div className="relative z-30 flex flex-col lg:flex-row items-center gap-8">
        <div className="content w-full lg:w-1/2">
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 items-start mb-4">
              <div>
                <h2 className="font-script text-3xl pt-6  leading-tight">
                  Experience the Best It experiences
                </h2>
                <h1 className="text-5xl font-bold pt-6  leading-none">
                  Where creativity <br /> meets the cutting <br /> edge of
                  technology
                </h1>
                <p className="text-2xl font-bold pt-6 leading-none">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className=" text-white font-medium px-8 py-3 rounded-full text-center bg-[#3D72FC] "
              >
                Veiw all our services
              </a>
              <a
                href="#"
                className=" text-white font-medium px-8 py-3 rounded-full text-center hover:bg-opacity-90 transition-colors"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
