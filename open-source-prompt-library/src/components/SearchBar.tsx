'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          placeholder="Search prompts..."
          className="w-full bg-slate-800 pl-12 pr-4 py-3 text-white placeholder-slate-400 
                   rounded-lg border border-slate-700 focus:ring-2 focus:ring-blue-500 
                   focus:border-transparent outline-none"
        />
      </div>
    </div>
  );
}