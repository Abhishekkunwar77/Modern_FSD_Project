import React, { useState, useEffect } from "react";
import ActivityList from "../components/ActivityList";
import { getLogs, saveLogs } from "../utils/storage";

const Activities = () => {
  const [logs, setLogs] = useState(getLogs());

  const handleDelete = (id) => {
    const updated = logs.filter((log) => log.id !== id);
    setLogs(updated);
    saveLogs(updated);
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all logs?")) {
      setLogs([]);
      saveLogs([]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1a2a44] mb-4">
        Logged Activities
      </h1>
      <button
        onClick={handleClearAll}
        className="mb-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Clear All
      </button>
      <ActivityList logs={logs} onDelete={handleDelete} />
    </div>
  );
};

export default Activities;
