import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-slate-50/50">
      <div className="container-width">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-6">
            {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex gap-4">
                        <div className="mt-1 p-2 bg-sky-50 rounded-lg h-fit text-sky-600">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">{edu.institution}</h3>
                            <p className="text-slate-600">{edu.degree}</p>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-sm font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-full ml-11 sm:ml-0">
                        {edu.period}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;