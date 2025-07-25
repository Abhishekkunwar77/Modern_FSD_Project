import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_w8r9bsg", // 🔧 Your Service ID
        "template_hudjw9u", // 🔧 Your Template ID
        {
          ...formData,
          time: new Date().toLocaleString(), // optional if used in template
        },
        "l2roj5HNd18J5Ou6g" // 🔧 Your Public Key
      )
      .then(() => {
        toast.success("Your message has been sent!", {
          autoClose: 1500,
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div id='contact' className="flex flex-col lg:flex-row gap-60 px-6 md:px-12 py-16 max-w-screen-xl mx-auto">
      {/* Left Contact Info Section */}
      <div className="flex-1.2 pr-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 whitespace-nowrap max-w-xl font-sans">
          Contact Us For More Info
        </h2>
        <hr className="border-t border-gray-300 mb-12" />

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-6">
            For Service Enquiry
          </h3>
          <div className="pl-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-13 h-13 bg-cyan-600 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>
              <span className="text-lg text-gray-900 font-normal">
                +91 7708520329
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-13 h-13 bg-cyan-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <span className="text-lg text-gray-900 font-normal">
                sales@zaplog.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <hr className="border-t border-gray-300 mb-6" />
          <h3 className="text-xl font-medium text-gray-900 mb-6">
            To Join Our Team
          </h3>
          <div className="pl-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-13 h-13 bg-cyan-600 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-xl" />
              </div>
              <span className="text-lg text-gray-900 font-normal">
                +91 9384735572
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-13 h-13 bg-cyan-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <span className="text-lg text-gray-900 font-normal">
                support@zaplog.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 bg-white p-8 max-w-lg mx-auto rounded-3xl shadow-md flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-black mb-6 w-full text-left tracking-tight leading-tight">
          Get in touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-14 px-5 rounded-full bg-[#f8f8f8] text-gray-800 placeholder-gray-600 text-base outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full h-14 px-5 rounded-full bg-[#f8f8f8] text-gray-800 placeholder-gray-600 text-base outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-14 px-5 rounded-full bg-[#f8f8f8] text-gray-800 placeholder-gray-600 text-base outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full h-32 px-5 py-4 rounded-2xl bg-[#f8f8f8] text-gray-800 placeholder-gray-600 text-base outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className={`w-auto min-w-[200px] h-14 rounded-full text-white text-base font-medium px-10 mx-auto transition-all duration-200 ${
              isSending
                ? "bg-cyan-900 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-700 cursor-pointer"
            }`}
          >
            {isSending ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
