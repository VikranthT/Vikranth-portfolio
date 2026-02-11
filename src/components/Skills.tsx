import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50/80">
      <div className="container-width">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive toolkit for silicon validation and characterization.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
            {SKILLS.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Category Header */}
                    <div className="md:w-64 flex-shrink-0 flex items-center gap-3">
                        <div className="p-2.5 bg-sky-50 rounded-lg text-sky-600">
                            {category.icon}
                        </div>
                        <h4 className="font-semibold text-slate-900">{category.category}</h4>
                    </div>

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block w-px h-12 bg-slate-100"></div>

                    {/* Skills Pills */}
                    <div className="flex-1 flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                            <span 
                                key={sIdx} 
                                className="skill-pill px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-sm font-medium border border-slate-100 hover:border-sky-200 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;