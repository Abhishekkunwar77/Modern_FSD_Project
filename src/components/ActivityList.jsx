import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

const ActivityList = ({ logs, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

 const filteredLogs = logs
   .filter((log) => {
     const name = log?.name?.toLowerCase() || "";
     const activity = log?.activity?.toLowerCase() || "";
     const query = searchQuery.toLowerCase();
     return name.includes(query) || activity.includes(query);
   })

   .sort((a, b) => {
     return sortBy === "newest"
       ? new Date(b.date) - new Date(a.date)
       : new Date(a.date) - new Date(b.date);
   });

  return (
    <section className="mt-10 max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Total Activities ({filteredLogs.length})
        </h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name or activity"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-sm w-full md:w-64"
          />
          
        </div>
      </div>

      {filteredLogs.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <h3 className="text-lg font-semibold mb-2">No activities found.</h3>
          <p className="text-sm mb-4">
            Try adding new activities or change the filter.
          </p>
          <a
            href="/add-activities"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm transition"
          >
            Add Activity
          </a>
        </div>
      ) : (
        <div className="space-y-5">
          {filteredLogs.map((log) => (
            <ActivityCard key={log.id} log={log} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ActivityList;
