// components/SearchBar.js
"use client";
import React from "react";
import { useStore } from "../store/store";
const SearchBar = () => {
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      className="border p-2 mb-4"
    />
  );
};

export default SearchBar;
