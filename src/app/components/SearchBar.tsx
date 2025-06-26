"use client"
import React, { useEffect, useState } from "react";

type SearchProps = {
  value: string;
  onChange: (val: string) => void;
};

const SearchBar = ({ value, onChange }: SearchProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mb-4"
    />
  );
};

export default SearchBar;
