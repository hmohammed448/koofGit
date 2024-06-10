import React, { useEffect, useState } from "react";

export default function LikeOrderSearch({ onValueChange }) {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    onValueChange(searchItem);
  }, [searchItem]);

  return (
    <>
      <div className="text-white py-4">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-3 ps-10 text-sm text-gray-400 border border-gray-400 rounded-md bg-white focus:ring-gray-400 focus:border-white dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-gray-400 dark:focus:border-gray-500 outline-none"
            placeholder="Search your favourite food..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
