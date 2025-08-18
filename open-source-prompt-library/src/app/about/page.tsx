// src/app/about/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Book, Code, Brain, Palette, Heart } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Coding & Development',
    description: 'Prompts for code review, refactoring, debugging, and learning new technologies.'
  },
  {
    icon: Book,
    title: 'Study & Learning',
    description: 'Effective prompts for note-taking, comprehension, and knowledge retention.'
  },
  {
    icon: Brain,
    title: 'Career Growth',
    description: 'Professional development prompts for resumes, interviews, and skill enhancement.'
  },
  {
    icon: Palette,
    title: 'Creativity',
    description: 'Spark your creativity with prompts for writing, art, music, and more.'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Prompts for fitness planning, mental health, and personal development.'
  }
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-16">
      <div className={`max-w-4xl mx-auto transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Prompt Library
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            An open-source collection of carefully crafted prompts to enhance your productivity,
            creativity, and learning journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-effect p-6 rounded-xl transition-all duration-500 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className={`text-center mb-16 transition-all duration-500 delay-500 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We believe in the power of well-crafted prompts to unlock human potential.
            Our mission is to provide a comprehensive library of high-quality prompts
            that help people achieve more in their work and personal lives.
          </p>
        </div>

        {/* Community Section */}
        <div className={`glass-effect p-8 rounded-xl text-center transition-all duration-500 delay-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            This is an open-source project. We welcome contributions from the community
            to help make this library even better.
          </p>
          <a
            href="https://github.com/yourusername/prompt-library"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button inline-block"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}