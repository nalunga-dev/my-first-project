"use client";

const blogPosts = [
  {
    category: "Web Development",
    date: "February 10, 2025",
    title: "The Future of Web Development: Trends to Watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/award1.jpg",
  },
  {
    category: "Cloud Computing",
    date: "February 09, 2025",
    title: "The Role of AI in Cloud Computing and Automation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/award2.jpg",
  },
  {
    category: "Mobile App",
    date: "February 08, 2025",
    title: "The Rise of Super Apps: What It Means for Businesses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: "/images/award4.jpg",
  },
];

export default function BlogNews() {
  return (
    <section className="py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl text-blue-900  font-bold">
        Our Latest <span className="text-blue-500">News & Blogs</span>
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full">
                {post.category}
              </span>
              <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              <h3 className=" font-bold text-blue-900 mt-3">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <a href="#" className="text-blue-500 font-semibold mt-4 block">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
