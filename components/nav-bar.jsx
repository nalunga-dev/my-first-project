import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { SiBitcomet } from "react-icons/si";
export default function NavBar() {
  return (
    <nav className="relative z-30">
      <div className="hidden  md:flex w-full bg-[#010E37] justify-between items-center p-3">
        <div className="flex ml-10 space-x-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>000 000 (000)</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail /> <span>forexample@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationSharp /> <span>newjersey street44000</span>
          </div>
        </div>
        <div className="flex gap-2 mr-10 p-2 text-white">
          <AiFillTwitterCircle />
          <FaPinterest />
          <FaSquareInstagram />
          <IoLogoYoutube />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-white justify-between items-center p-4">
        <div className="flex items-center gap-2 ml-4">
          <SiBitcomet className="text-3xl text-[#010E37]" />
          <span className="text-[#010E37] text-2xl font-bold">IT Company</span>
        </div>

        <div className="hidden md:flex flex-col md:flex-row gap-6 px-7 py-2 text-center md:text-left">
          {["Home", "Services", "Projects", "Blogs", "About Us"].map((item) => (
            <p
              key={item}
              className="text-[#010E37] p-2 cursor-pointer hover:text-[#3D72FC]"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="hidden md:flex bg-[#3D72FC] text-white p-2 mt-2 md:mt-0 mr-10 font-bold rounded-lg cursor-pointer text-center">
          Get A Quote
        </div>
      </div>
    </nav>
  );
}
