"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Jenny Wilson",
    role: "Owner, Furniture Store",
    image: "/images/final.png",
    rating: 5.0,
    title: "A Wonderful Experience!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    name: "Bessie Cooper",
    role: "CEO, Car Rental App",
    image: "/images/happy.jpg",
    rating: 5.0,
    title: "Highly Recommended!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    name: "Jenny Wilson",
    role: "Owner, Furniture Store",
    image: "/images/final.png",
    rating: 5.0,
    title: "A Wonderful Experience!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    name: "Jenny Wilson",
    role: "Owner, Furniture Store",
    image: "/images/final.png",
    rating: 5.0,
    title: "A Wonderful Experience!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#010E37] text-white py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Testimonials: <span className="text-blue-500">Trusted</span>
      </h2>
      <h3 className="text-xl text-blue-500 mb-6">by Our Clients</h3>

      <div className="bg-[#1A264B] p-6 rounded-2xl max-w-lg mx-auto shadow-md">
        <div className="flex justify-center gap-1 text-yellow-400 text-lg">
          {"★★★★★"}{" "}
          <span className="text-white font-semibold">
            {testimonials[current].rating}
          </span>
        </div>
        <h4 className="mt-3 text-lg font-bold">
          {testimonials[current].title}
        </h4>
        <p className="mt-2 text-gray-300">{testimonials[current].text}</p>
        <div className="mt-4 flex items-center gap-3 justify-center">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{testimonials[current].name}</p>
            <p className="text-gray-400 text-sm">
              {testimonials[current].role}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-6 rounded-full transition-all ${
              current === index ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
