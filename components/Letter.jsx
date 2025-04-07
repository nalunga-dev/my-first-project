const NewsletterSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#3b82f6] font-bold mb-4">
          // Our Newsletter
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Subscribe for{" "}
          <span className="text-[#3b82f6]">
            Expert IT Tips & Special Offers
          </span>
        </h2>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center w-full sm:max-w-md bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <svg
              className="w-5 h-5 text-[#3b82f6] mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 6.34A2 2 0 014.8 5h10.4a2 2 0 011.86 1.34L10 11.586 2.94 6.34zM18 8.09V14a2 2 0 01-2 2H4a2 2 0 01-2-2V8.09l7.64 5.382a1 1 0 001.12 0L18 8.09z" />
            </svg>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full outline-none text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
