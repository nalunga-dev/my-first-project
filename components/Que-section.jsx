"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide a range of IT solutions including software development, cloud computing, and cybersecurity.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our services cater to industries like healthcare, finance, education, and e-commerce.",
  },
  {
    question: "Do you offer customized IT solutions?",
    answer:
      "Yes, we tailor our solutions to meet the unique needs of our clients.",
  },
  {
    question: "How can I contact your support team?",
    answer:
      "You can reach us via email, phone, or our contact form on the website.",
  },
  {
    question: "How secure are your IT solutions?",
    answer:
      "We implement top-tier security protocols to protect your data and systems.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 w-full text-blue-600 flex md:px-16 flex-col md:flex-row">
      <div className="p-4 w-full md:w-7/12">
        <h2 className="text-2xl md:text-3xl text-blue-900 font-bold text-center">
          FAQs: <span className="text-blue-500">Look here.</span>
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-sm cursor-pointer transition-all ${
                openIndex === index ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{faq.question}</p>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="support p-2 w-full md:w-5/12 flex flex-col mt-8 md:mt-20 gap-6">
        <div className="bg-[#1b264b] text-white p-7 rounded-2xl shadow-lg flex-col text-center">
          <h3 className="text-lg font-semibold">
            You have different questions?
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Our team will answer all your questions. We ensure a quick response.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 rounded-full">
            Contact Us
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg flex flex-col p-6 text-center">
          <p className="text-gray-500 text-sm">Your Comfort, Our Priority</p>
          <h4 className="text-blue-900 font-bold">24/7 Service</h4>
          <p className="text-gray-600">(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
}
