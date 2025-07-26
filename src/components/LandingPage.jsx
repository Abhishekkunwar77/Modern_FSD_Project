import React from "react";
import SplashPage from "../assets/LandingPage.png";
import { FiArrowRight } from "react-icons/fi";

const LandingPage = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 md:px-20 py-12 gap-10">
      <div className="max-w-2xl lg:max-w-[55%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a2a44] leading-snug">
          <p className="text-[2.6rem] sm:text-[3rem] font-bilbo tracking-wider mb-[30px] text-[#1a2a44]">
            Your smart companion for tracking club activities and fostering
            engagement.
          </p>
        </h1>

        <p className="mt-6 text-[#666] text-base sm:text-lg leading-relaxed">
          From event updates and participation logs to announcements and
          attendance, ZapLog helps your club stay connected and productive.
          Whether you're managing a cultural crew, coding cult, or NSS squad,
          this platform’s made for you.
        </p>

        <button
          onClick={() => {
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 h-12 px-6 bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer text-white font-medium rounded-full flex items-center justify-center gap-2 transition duration-300"
        >
          Get Started <FiArrowRight className="text-lg" />
        </button>
      </div>

      <div className="w-full max-w-md lg:max-w-[40%] animate-floatIn">
        <img
          src={SplashPage}
          alt="Agnidev"
          className="w-full h-auto object-contain drop-shadow-xl opacity-0 animate-floatIn"
        />
      </div>

      <style>{`
        @keyframes floatIn {
          0% {
            transform: translateX(100%) scale(0.95);
            opacity: 0;
          }
          60% {
            transform: translateX(-5%) scale(1.02);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .animate-floatIn {
          animation: floatIn 1.8s ease-out forwards, subtleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes subtleGlow {
          0% {
            filter:
              drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))
              brightness(1);
          }
          100% {
            filter:
              drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15))
              brightness(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
