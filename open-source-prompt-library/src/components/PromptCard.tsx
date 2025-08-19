'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Prompt } from '@/types/prompt';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, index }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (copied) return; // Prevent multiple clicks while copying
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <div className="mb-4">
        <span className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full">
          {prompt.category}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {prompt.title}
      </h3>

      <p className="text-slate-300 mb-4">
        {prompt.description}
      </p>

      <div className="bg-slate-900 p-4 rounded-md mb-4">
        <pre className="text-slate-200 font-mono text-sm whitespace-pre-wrap">
          {prompt.prompt}
        </pre>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-400">
          by <span className="text-slate-300">{prompt.author}</span>
        </span>
        
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
            ${copied 
              ? 'bg-green-500/10 text-green-400 animate-shake' 
              : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
            }`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;