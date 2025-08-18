import React from 'react';
import PromptCard from '@/components/PromptCard';
import promptsData from '@/data/prompts.json';

const PromptsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {promptsData.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default PromptsPage;