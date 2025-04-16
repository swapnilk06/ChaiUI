import React from "react";

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1px]">

      <div className="bg-neutral-900 p-6 rounded-lg w-96 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg">Find Components</h2>
          <button onClick={onClose} className="text-white">&times;</button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded bg-neutral-800 text-white"
        />
      </div>
    </div>
  );
};

export default SearchModal;
