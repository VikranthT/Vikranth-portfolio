import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Key Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm card-hover flex gap-4 group">
                    <div className="p-3 bg-sky-50 rounded-full h-fit group-hover:bg-sky-100 transition-colors">
                        {ach.icon}
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{ach.title}</h3>
                        <div className="text-sm text-slate-500 mb-2 font-medium">{ach.year} {ach.location ? `• ${ach.location}` : ''}</div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {ach.description[0]}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;