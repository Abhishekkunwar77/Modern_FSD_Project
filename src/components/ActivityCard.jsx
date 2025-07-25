import React, { useState } from "react";

const ActivityCard = ({ log, onDelete }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = () => {
    onDelete(log.id);
    setConfirmOpen(false);
  };

  return (
    <>
      <div className="mb-8 bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-cyan-700">{log.title}</h2>
          <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
            {log.type}
          </span>
        </div>

        <p className="text-gray-800 text-sm">
          <span className="font-medium">Description: </span>
          {log.description}
        </p>

        <p className="text-gray-700 text-sm">
          <span className="font-medium">Performed by: </span>
          {log.name}
        </p>

        <p className="text-gray-600 text-sm">
          <span className="font-medium">Scheduled on: </span>
          {new Date(log.dateTime).toLocaleString()}
        </p>

        <p className="text-gray-400 text-xs italic">
          Logged at: {log.createdAt}
        </p>

        <button
          onClick={() => setConfirmOpen(true)}
          className="text-sm text-red-600 hover:text-red-800 font-medium mt-2 cursor-pointer"
        >
          Delete
        </button>
      </div>

      {/* Fullscreen Modal */}
      {confirmOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
          <div className="border border-cyan-600 bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this activity? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-pointer"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
