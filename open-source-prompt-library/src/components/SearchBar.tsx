'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div
      className={`relative mb-6 w-full max-w-2xl mx-auto transform transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div
        className={`relative group glass-effect rounded-xl transition-all duration-300 ${
          isFocused ? 'shadow-lg shadow-blue-500/20' : ''
        }`}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className={`h-5 w-5 transition-colors duration-300 ${
            isFocused ? 'text-blue-400' : 'text-slate-400'
          }`} />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search prompts by title, description, or category..."
          className="w-full bg-transparent pl-12 pr-12 py-4 text-slate-200 placeholder-slate-400 
                   rounded-xl focus:outline-none focus:ring-0 transition-all duration-300"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 
                     hover:text-slate-200 transition-colors duration-300"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 
                    opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </div>
  );
};

export default SearchBar;