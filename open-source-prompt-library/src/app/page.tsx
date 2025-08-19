'use client';

import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import PromptCard from '@/components/PromptCard';
import promptsData from '@/data/prompts.json';
import { Prompt } from '@/types/prompt';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter prompts based on search term and category
  const filteredPrompts = promptsData.filter(prompt => {
    const matchesSearch = searchTerm === '' || 
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      !selectedCategory || prompt.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 px-4 pt-24 pb-8">
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400" />
            Prompt Library
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover and use powerful prompts for coding, learning, creativity, and more.
            Each prompt is crafted for maximum effectiveness.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Results count */}
        <div className="mb-8 text-center">
          <p className="text-slate-400">
            Showing <span className="text-white font-medium">{filteredPrompts.length}</span> prompts
          </p>
        </div>

        {/* Prompt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard 
              key={prompt.id} 
              prompt={prompt} 
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No prompts found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;