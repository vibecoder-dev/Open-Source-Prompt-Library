'use client';

import { Check, Copy, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Prompt } from '@/types/prompt';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, index }) => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setCopying(true);
      setTimeout(() => {
        setCopied(false);
        setCopying(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className={`glass-effect rounded-xl p-6 card-hover relative overflow-hidden
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        transition-all duration-500 ease-out`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full">
          {prompt.category}
        </span>
        <Sparkles className={`w-4 h-4 text-violet-400 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} />
      </div>

      {/* Title with gradient on hover */}
      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isHovered ? 'gradient-text' : 'text-white'}`}>
        {prompt.title}
      </h3>

      <p className="text-slate-300 mb-4 transition-opacity duration-300">
        {prompt.description}
      </p>

      {/* Prompt content */}
      <div className="bg-slate-900/50 p-4 rounded-lg mb-4 backdrop-blur-sm border border-slate-800/50 group">
        <p className="text-slate-200 whitespace-pre-wrap font-mono text-sm">
          {prompt.prompt}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-400 flex items-center gap-2">
          <span className="text-slate-500">by</span> {prompt.author}
        </span>
        <button
          onClick={copyToClipboard}
          className={`primary-button flex items-center gap-2 ${copying ? 'animate-shake' : ''}`}
          disabled={copying}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Prompt</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;