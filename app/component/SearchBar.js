// components/SearchBar.js
"use client";
import React from "react";
import { FcDataSheet } from "react-icons/fc";
import { useStore } from "../store/store";
const SearchBar = () => {
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" flex items-center justify-evenly bg-gray-600 w-full">
      <div className="flex items-center justify-evenly ">
        <FcDataSheet className="h-6 w-6" />
        <p className="text-gray-100 text-lg font-medium ml-8"> Book</p>
      </div>

      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="border p-2 m-2  rounded-md"
      />
    </div>
  );
};

export default SearchBar;
