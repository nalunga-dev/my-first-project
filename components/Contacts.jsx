export default function ContactPage() {
  return (
    <div className="container  bg-white py-8 px-4">
      <div className="grid md:grid-cols-2 gap-8  ">
        <div className="bg-[#0a1744] text-white p-4 mt-5 rounded-lg relative overflow-hidden">
          <div className=" Adress  space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Address</h2>
              <p className="text-gray-300">2464 Royal Ln. Mesa,</p>
              <p className="text-gray-300">New Jersey 45463</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-gray-300">Phone : +(000) 000-0000</p>
              <p className="text-gray-300">Email : example@gmail.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Open Time</h2>
              <p className="text-gray-300">Monday - Friday : 10:00 - 20:00</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white form p-8 rounded-lg">
          <div className="text-blue-500 mb-2">// Contact Us</div>
          <h1 className="text-4xl text-blue-700  font-bold mb-8">
            Get Your <span className="text-blue-500">Free Quote</span> Today!
          </h1>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-blue-500">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  placeholder="Ex. John Doe"
                  className="w-full p-3 border  border-blue-700 text-gray-800 rounded-md bg-[#F5F5F5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-blue-500">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-3 border  border-blue-700 text-gray-800  rounded-md bg-[#F5F5F5]"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-blue-500">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  placeholder="Enter Phone Number"
                  className="w-full p-3 border   border-blue-700 text-gray-800 rounded-md bg-[#F5F5F5]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-blue-500">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  className="w-full p-3 border  border-blue-700 text-gray-800 rounded-md bg-[#F5F5F5]"
                  required
                >
                  <option value="" disabled selected>
                    Select Services
                  </option>
                  <option value="consultation">Consultation</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-blue-500">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Enter here.."
                className="w-full h-40 p-3 border border-blue-700   text-gray-800 rounded-md bg-[#F5F5F5]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
