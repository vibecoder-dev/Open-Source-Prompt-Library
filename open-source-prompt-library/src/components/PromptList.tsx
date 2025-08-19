import React from 'react';
import { Prompt } from '../types/prompt';
import PromptCard from './PromptCard';

interface PromptListProps {
  prompts: Prompt[];
}

const PromptList: React.FC<PromptListProps> = ({ prompts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
};

export default PromptList;