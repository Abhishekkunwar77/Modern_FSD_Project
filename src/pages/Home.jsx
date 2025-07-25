import React, { useState, useEffect } from "react";
import ActivityForm from "../components/ActivityForm";
import { getLogs, saveLogs } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [logs, setLogs] = useState(getLogs());
  const navigate = useNavigate();

  const handleAdd = (log) => {
    const updatedLogs = [log, ...logs];
    setLogs(updatedLogs);
    saveLogs(updatedLogs);
  };

  useEffect(() => {
    saveLogs(logs);
  }, [logs]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1a2a44] mb-6">
        Add New Activity
      </h1>
      <ActivityForm onAdd={handleAdd} />
      <button
        onClick={() => navigate("/activities")}
        className="mt-6 bg-[#1a2a44] text-white px-5 py-2 rounded hover:bg-[#ff6600] transition"
      >
        View All Logs
      </button>
    </div>
  );
};

export default Home;
