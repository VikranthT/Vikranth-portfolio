import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const expertise = [
    "Post-Silicon Validation & Electrical Characterization",
    "PMIC / LDO Validation (TPS7A4901, TPS7A8300)",
    "High-Speed I/O: PCIe, USB4, Ethernet, DDR",
    "Keysight 70GHz Oscilloscopes & M8 BERT",
    "Python & LabVIEW Test Automation"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    I am a <span className="font-semibold text-slate-900">Silicon Validation Engineer</span> with over 2 years of experience specializing in PMIC characterization, high-speed I/O protocols, and post-silicon validation. I bring proven expertise with advanced instrumentation including Keysight 70GHz oscilloscopes and Python-based test automation to ensure robust silicon performance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertise.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                            <CheckCircle2 className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0 group-hover:text-sky-600 transition-colors" />
                            <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;