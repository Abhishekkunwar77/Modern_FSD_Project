import React from "react";
import {
  FaClipboardList,
  FaChartLine,
  FaFileExport,
  FaLock,
  FaListAlt,
  FaSyncAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaClipboardList className="text-4xl text-cyan-600" />,
    title: "Activity Logging",
    description:
      "Log all your club’s events and tasks in one place, organized and timestamped.",
  },
  {
    icon: <FaChartLine className="text-4xl text-cyan-600" />,
    title: "Dashboard Overview",
    description:
      "Visualize everything that’s happening across your club with a clean dashboard.",
  },
  {
    icon: <FaFileExport className="text-4xl text-cyan-600" />,
    title: "Data Export",
    description:
      "Export activity logs as PDF or CSV, easy sharing, hard saving.",
  },
  {
    icon: <FaListAlt className="text-4xl text-cyan-600" />,
    title: "Multi-Page Logs",
    description:
      "Scroll through past logs easily. Keep a clean timeline of club progress.",
  },
  {
    icon: <FaLock className="text-4xl text-cyan-600" />,
    title: "Secure Login System",
    description:
      "All access protected with local storage login, no backend needed.",
  },
  {
    icon: <FaSyncAlt className="text-4xl text-cyan-600" />,
    title: "Real-Time Updates",
    description:
      "See live changes across logs as they happen, no need to refresh.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16" id="services">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
