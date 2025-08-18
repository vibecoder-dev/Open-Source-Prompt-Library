'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Filter } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: '', label: 'All Prompts', icon: '🎯' },
  { id: 'Coding', label: 'Coding', icon: '💻' },
  { id: 'Study', label: 'Study', icon: '📚' },
  { id: 'Career', label: 'Career', icon: '💼' },
  { id: 'Creativity', label: 'Creativity', icon: '🎨' },
  { id: 'Health', label: 'Health', icon: '🌱' }
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCategory = categories.find(c => c.id === selectedCategory) || categories[0];

  return (
    <div 
      ref={dropdownRef}
      className={`relative mb-6 w-full max-w-xs mx-auto transform transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass-effect rounded-xl px-4 py-3 flex items-center justify-between
                 text-slate-200 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-400" />
          <span className="flex items-center gap-2">
            <span className="text-lg mr-2">{currentCategory.icon}</span>
            {currentCategory.label}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown menu */}
      <div className={`absolute mt-2 w-full z-50 transform transition-all duration-300 origin-top
                      ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="glass-effect rounded-xl py-2 shadow-xl shadow-black/10">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 flex items-center justify-between text-left text-slate-200
                         transition-all duration-300 hover:bg-slate-800/50
                         ${index === 0 ? '' : 'border-t border-slate-800/50'}`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </span>
              {category.id === selectedCategory && (
                <Check className="w-4 h-4 text-blue-400" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
export default CategoryFilter;