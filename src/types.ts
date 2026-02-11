import React from 'react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  projects?: ProjectDetails[];
  logo?: string;
}

export interface ProjectDetails {
  title: string;
  period: string;
  description: string[];
  tools: string[];
  impact?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'validation' | 'hsio' | 'pmic' | 'automation';
  company: string;
  duration: string;
  tech: string[];
  description: string;
  impact?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Achievement {
  title: string;
  year: string;
  location?: string;
  description: string[];
  icon?: React.ReactNode;
}