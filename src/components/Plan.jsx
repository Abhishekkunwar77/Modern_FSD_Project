import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    price: 29,
    color: "white",
    textColor: "text-gray-800/80",
    borderColor: "border-gray-200",
    features: [
      "Access to all basic courses",
      "Community support",
      "10 practice projects",
      "Course completion certificate",
      "Basic code review",
    ],
    buttonColor: "bg-cyan-600 hover:bg-cyan-700 text-white",
  },
  {
    title: "Pro",
    price: 79,
    color: "bg-cyan-600",
    textColor: "text-white",
    borderColor: "border-cyan-700/30",
    badge: "Most Popular",
    features: [
      "Access to all Pro courses",
      "Priority community support",
      "30 practice projects",
      "Course completion certificate",
      "Advance code review",
      "1-on-1 mentoring sessions",
      "Job assistance",
    ],
    buttonColor: "bg-white text-cyan-600 hover:bg-gray-200",
  },
  {
    title: "Enterprise",
    price: 199,
    color: "white",
    textColor: "text-gray-800/80",
    borderColor: "border-gray-200",
    features: [
      "Access to all courses",
      "Dedicated support",
      "Unlimited projects",
      "Course completion certificate",
      "Premium code review",
      "Weekly 1-on-1 mentoring",
      "Job guarantee",
    ],
    buttonColor: "bg-cyan-600 hover:bg-cyan-700 text-white",
  },
];

const allFeatures = [
  "Access to all basic courses",
  "Access to all Pro courses",
  "Access to all courses",
  "Community support",
  "Priority community support",
  "Dedicated support",
  "10 practice projects",
  "30 practice projects",
  "Unlimited projects",
  "Course completion certificate",
  "Basic code review",
  "Advance code review",
  "Premium code review",
  "1-on-1 mentoring sessions",
  "Weekly 1-on-1 mentoring",
  "Job assistance",
  "Job guarantee",
];

const Pricing = () => {
  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-500 mb-8 sm:mb-10 max-w-xl mx-auto">
        Whether you're just starting or ready to scale, we’ve got a plan that
        fits your learning journey.
      </p>

      {/* Pricing Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative w-full sm:w-80 lg:w-72 ${plan.color} ${
              plan.textColor
            } border ${
              plan.borderColor
            } p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              plan.badge ? "pb-14" : "pb-16"
            }`}
          >
            {plan.badge && (
              <p className="absolute px-3 text-sm -top-3 left-1/2 transform -translate-x-1/2 py-1 bg-cyan-700 text-white rounded-full shadow-md whitespace-nowrap">
                {plan.badge}
              </p>
            )}
            <p className="font-semibold pt-2">{plan.title}</p>
            <h1 className="text-3xl font-semibold">
              ${plan.price}
              <span className="text-sm font-normal ">/month</span>
            </h1>
            <ul
              className={`list-none mt-6 text-sm space-y-2 ${
                plan.textColor === "text-white"
                  ? "text-white/90"
                  : "text-gray-600"
              }`}
            >
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheck className="text-cyan-600 mt-0.5 flex-shrink-0" />
                  <p className="text-left">{feature}</p>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`hover:cursor-pointer w-full py-2.5 text-sm font-medium rounded mt-7 transition-all ${plan.buttonColor}`}
              aria-label={`Get started with ${plan.title} plan`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="flex justify-center mt-16 overflow-x-auto">
        <table className="min-w-200 table-auto border-collapse border border-gray-300 text-sm text-left">
          <thead>
            <tr className="  bg-gray-100 text-gray-700">
              <th className=" flex justify-center items-center border border-gray-300 px-4 py-2">
                Features
              </th>
              <th className="  border border-gray-300 px-4 py-2">Basic</th>
              <th className="  border border-gray-300 px-4 py-2">Pro</th>
              <th className="  border border-gray-300 px-4 py-2">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, index) => {
              const hasBasic = plans[0].features.includes(feature);
              const hasPro = plans[1].features.includes(feature);
              const hasEnterprise = plans[2].features.includes(feature);
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="w-65 border border-gray-300 px-4 py-2 font-medium">
                    {feature}
                  </td>
                  <td className="w-30 border border-gray-300 px-4 py-2 text-center">
                    {hasBasic ? (
                      <FaCheck className="text-green-600 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className=" w-30 border border-gray-300 px-4 py-2 text-center">
                    {hasPro ? (
                      <FaCheck className="text-green-600 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="w-50 border border-gray-300 px-4 py-2 text-center">
                    {hasEnterprise ? (
                      <FaCheck className="text-green-600 mx-auto" />
                    ) : (
                      <FaTimes className="text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
