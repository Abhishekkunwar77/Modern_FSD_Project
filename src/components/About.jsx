import React from "react";
import {
  FaReact,
  FaLaptopCode,
  FaUserFriends,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "../assets/aboutImage.png";
import { Link } from 'react-router-dom';
import AboutContact from './AboutContact';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="text-cyan-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const About = () => {
  return (
    <div className="px-6 md:px-20 py-16 max-w-screen-xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Streamlining Club Activities <br className="hidden md:block" />
          <span className="text-cyan-600">With Smart Tracking</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          ZapLog revolutionizes club management with intuitive, local-first
          activity tracking designed to enhance member engagement without the
          complexity of traditional systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 mb-20">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <FaLightbulb className="text-cyan-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We're transforming the way student clubs operate by turning raw
            enthusiasm into structured, impactful participation. ZapLog isn't
            just a tool — it's your club’s digital backbone. It fosters
            accountability, tracks every meaningful contribution, and builds a
            lasting archive of activity that tells your story. From
            brainstorming sessions to events and achievements, ZapLog captures
            it all, ensuring no effort goes unnoticed and every member leaves a
            legacy that lives beyond their college years.
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="font-medium text-gray-700 italic">
              "ZapLog helped our club increase member participation by 40% while
              reducing administrative work."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FaRocket className="text-cyan-600" />
            Core Features
          </h2>
          <div className="grid gap-4 ">
            <FeatureCard
              icon={<FaReact />}
              title="Modern Interface"
              description="Beautiful React.js UI with intuitive controls for seamless user experience"
            />
            <FeatureCard
              icon={<FaLaptopCode />}
              title="Zero Infrastructure"
              description="Runs entirely in the browser with no servers or databases to manage"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20  rounded-2xl overflow-hidden ">
        <div className="order-last lg:order-first">
          <img
            src={aboutImage}
            alt="ZapLog Dashboard"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-10">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-cyan-600 bg-cyan-100 rounded-full mb-4">
            Why ZapLog?
          </span>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            The Smarter Way to <br />
            <span className="text-cyan-600">Manage Clubs</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Designed specifically for student organizations, ZapLog eliminates
            administrative overhead while providing powerful tracking
            capabilities.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-600 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Instant setup:</strong> No accounts or configuration
                needed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-600 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Privacy focused:</strong> Your data never leaves your
                device
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-cyan-600 text-xl mt-1 flex-shrink-0" />
              <span className="text-gray-700">
                <strong>Portable records:</strong> Export your activity history
                for resumes and portfolios
              </span>
            </li>
          </ul>
          <Link
            to="/"
            onClick={scrollToTop}
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer text-white font-medium rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
          <FaUserFriends className="text-cyan-600" />
          Behind ZapLog
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gopal</h3>
            <p className="text-gray-600 mb-3">
              Full Stack Developer & Designer
            </p>
            <p className="text-gray-700">
              Created ZapLog to solve real problems faced in student
              organizations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Your Clubmates
            </h3>
            <p className="text-gray-600 mb-3">Beta Testers & Advisors</p>
            <p className="text-gray-700">
              Providing feedback to shape ZapLog into the perfect club
              companion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              The Future
            </h3>
            <p className="text-gray-600 mb-3">Coming Soon</p>
            <p className="text-gray-700">
              Cloud sync, advanced analytics, and more features based on user
              needs.
            </p>
          </div>
        </div>
      </div>
      <AboutContact/>
    </div>
  );
};

export default About;
