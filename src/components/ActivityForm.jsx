import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdEventNote, MdOutlineTitle } from "react-icons/md";
import { FaUserAlt, FaAlignLeft, FaRegClock } from "react-icons/fa";
import { BsTag } from "react-icons/bs";

const ActivityForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    dateTime: "",
    type: "Event",
    tag: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, title, description, dateTime, type } = formData;
    if (!name || !title || !description || !dateTime || !type) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const newLog = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleString(),
    };

    onAdd(newLog);
    toast.success("Activity added!");

    setFormData({
      name: "",
      title: "",
      description: "",
      dateTime: "",
      type: "Event",
      tag: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-10 mb-20 p-8 bg-white shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-cyan-700 mb-4">
        Log Club Activity
      </h2>

      {/* Name */}
      <div className="flex items-center gap-3">
        <FaUserAlt className="text-cyan-600" />
        <input
          type="text"
          name="name"
          placeholder="Member Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-cyan-500"
        />
      </div>

      {/* Title */}
      <div className="flex items-center gap-3">
        <MdOutlineTitle className="text-cyan-600" />
        <input
          type="text"
          name="title"
          placeholder="Activity Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-cyan-500"
        />
      </div>

      {/* Description */}
      <div className="flex items-start gap-3">
        <FaAlignLeft className="text-cyan-600 mt-2" />
        <textarea
          name="description"
          placeholder="Activity Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded resize-none h-28 focus:outline-cyan-500"
        />
      </div>

      {/* Date & Time */}
      <div className="flex items-center gap-3">
        <FaRegClock className="text-cyan-600" />
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-cyan-500"
        />
      </div>

      {/* Activity Type */}
      <div className="flex items-center gap-3">
        <MdEventNote className="text-cyan-600" />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-cyan-500"
        >
          <option value="Event">Event</option>
          <option value="Meeting">Meeting</option>
          <option value="Workshop">Workshop</option>
          <option value="Task">Task</option>
          <option value="Others">Others</option>
        </select>
      </div>

     

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
