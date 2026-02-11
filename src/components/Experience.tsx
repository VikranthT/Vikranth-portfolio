import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>

            <div className="relative border-l-2 border-slate-100 ml-3 md:ml-6 space-y-16">
                {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-[-9px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-sky-500 shadow-sm group-hover:scale-110 transition-transform"></div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded mt-2 sm:mt-0">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.period}
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-base text-slate-700 font-semibold mb-4">
                            <Briefcase className="w-4 h-4 text-sky-500" />
                            {exp.company}
                        </div>

                        <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100 hover:border-sky-100 transition-colors">
                            <ul className="space-y-3">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-slate-600 leading-relaxed text-sm md:text-base flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0"></span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;