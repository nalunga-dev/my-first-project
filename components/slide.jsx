import { FaStarOfLife } from "react-icons/fa";
export default function Slide() {
  return (
    <div className="flex w-full bg-[#3D72FC] justify-between items-center p-3 overflow-x-auto whitespace-nowrap ls:hidden">
      <div className="flex items-center gap-3">
        <FaStarOfLife className="text-3xl font-bold " />
        <span className="text-3xl font-bold">WebDevelopment</span>
      </div>
      <div className="flex items-center gap-3">
        <FaStarOfLife className="text-3xl font-bold " />
        <span className="text-3xl font-bold">AppDevelopment</span>
      </div>
      <div className="flex items-center gap-3">
        <FaStarOfLife className="text-3xl font-bold " />
        <span className="text-3xl font-bold">UIUXDesign</span>
      </div>
      <div className="flex items-center gap-3">
        <FaStarOfLife className="text-3xl font-bold " />
        <span className="text-3xl font-bold">Graphic design</span>
      </div>
    </div>
  );
}
