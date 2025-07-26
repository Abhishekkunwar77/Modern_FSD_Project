import React, { useState } from "react";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }

    setLoading(true); // Start loading
    const formData = new FormData();
    formData.append("email", email);

    try {
      const res = await fetch("https://formspree.io/f/xyzpwdaz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        toast.success("Thanks for subscribing!");
        setEmail("");
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="mt-20 mb-20 flex flex-col items-center justify-center text-center space-y-2">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      >
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email id"
          required
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`md:px-12 px-8 h-full text-white transition-all cursor-pointer rounded-md rounded-l-none ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-600 hover:bg-cyan-700"
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
