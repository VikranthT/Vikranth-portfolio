import  { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS, SKILLS } from './constants';
import { X, Printer, Cpu } from 'lucide-react';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      <Navigation onOpenResume={() => setIsResumeOpen(true)} />
      
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-500" />
                <span className="font-bold text-white">Vikranth Tadepalli</span>
                <span className="mx-2 text-slate-600">|</span>
                Silicon Validation Engineer
            </div>
            <div>
                 &copy; {new Date().getFullYear()} All Rights Reserved.
            </div>
        </div>
      </footer>

      {/* RESUME MODAL OVERLAY */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl flex flex-col shadow-2xl overflow-hidden">
                {/* Modal Header */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                    <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                        <span className="w-2 h-6 bg-sky-500 rounded-full"></span>
                        Resume Preview
                    </h3>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-sky-600 text-sm font-medium transition-colors"
                        >
                            <Printer className="w-4 h-4" />
                            Print / PDF
                        </button>
                        <button onClick={() => setIsResumeOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors p-1 hover:bg-slate-100 rounded">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Resume Content (Scrollable Preview) */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-100">
                     <div className="bg-white text-black max-w-3xl mx-auto p-12 shadow-sm min-h-full" style={{ fontFamily: 'Times New Roman, serif' }}>
                        {/* Resume Header */}
                        <div className="border-b border-black pb-6 mb-8">
                            <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">Vikranth Tadepalli</h1>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-lg font-medium text-gray-800">Silicon Validation Engineer</p>
                                    <p className="text-sm text-gray-600 mt-1">Vijayawada, India</p>
                                </div>
                                <div className="text-right text-sm text-gray-800 leading-snug">
                                    <p>vikranthmaturi@gmail.com</p>
                                    <p>+91 9951370102</p>
                                    <p>linkedin.com/in/vikranth-tadepalli</p>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Professional Summary</h2>
                            <p className="text-sm leading-relaxed text-gray-800 text-justify font-sans">
                                Silicon Validation Engineer with 2+ years of experience specializing in PMIC characterization, high-speed I/O protocols (PCIe, USB4, Ethernet), and post-silicon validation. Proven expertise with advanced instrumentation including Keysight 70GHz oscilloscopes and Python-based test automation.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-4 tracking-wide text-gray-900">Experience</h2>
                            <div className="space-y-6">
                                {EXPERIENCES.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-sm font-bold text-gray-900 font-sans">{exp.role}</h3>
                                            <span className="text-xs font-medium text-gray-600 font-sans">{exp.period}</span>
                                        </div>
                                        <div className="text-xs font-semibold text-gray-700 italic mb-2 font-sans">{exp.company}</div>
                                        
                                        <ul className="list-disc ml-4 text-xs text-gray-700 space-y-1 font-sans">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="pl-1">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Technical Skills</h2>
                            <div className="grid grid-cols-1 gap-2 text-xs font-sans">
                                {SKILLS.map((cat, i) => (
                                    <div key={i} className="flex">
                                        <span className="font-bold w-32 flex-shrink-0 text-gray-900">{cat.category}:</span>
                                        <span className="text-gray-700">{cat.skills.join(", ")}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="mb-8">
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Education</h2>
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="flex justify-between text-xs mb-2 font-sans">
                                    <div>
                                        <span className="font-bold text-gray-900">{edu.institution}</span>
                                        <span className="text-gray-700 mx-2">-</span>
                                        <span className="text-gray-700 italic">{edu.degree}</span>
                                    </div>
                                    <span className="font-medium text-gray-600">{edu.period}</span>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <div>
                            <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Key Achievements</h2>
                            {ACHIEVEMENTS.map((ach, i) => (
                                <div key={i} className="mb-2 text-xs flex justify-between font-sans">
                                    <span className="text-gray-800">{ach.title}</span>
                                    <span className="text-gray-600">{ach.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* HIDDEN PRINTABLE RESUME */}
      <div id="printable-resume" className="hidden">
           <div className="bg-white text-black p-12" style={{ fontFamily: 'Times New Roman, serif' }}>
                {/* Printable content matches modal content exactly */}
                <div className="border-b border-black pb-6 mb-8">
                    <h1 className="text-3xl font-bold uppercase tracking-wider mb-2">Vikranth Tadepalli</h1>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-lg font-medium text-gray-800">Silicon Validation Engineer</p>
                            <p className="text-sm text-gray-600 mt-1">Vijayawada, India</p>
                        </div>
                        <div className="text-right text-sm text-gray-800 leading-snug">
                            <p>vikranthmaturi@gmail.com</p>
                            <p>+91 9951370102</p>
                            <p>linkedin.com/in/vikranth-tadepalli</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Professional Summary</h2>
                    <p className="text-sm leading-relaxed text-gray-800 text-justify font-sans">
                        Silicon Validation Engineer with 2+ years of experience specializing in PMIC characterization, high-speed I/O protocols (PCIe, USB4, Ethernet), and post-silicon validation. Proven expertise with advanced instrumentation including Keysight 70GHz oscilloscopes and Python-based test automation.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-4 tracking-wide text-gray-900">Experience</h2>
                    <div className="space-y-6">
                        {EXPERIENCES.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-sm font-bold text-gray-900 font-sans">{exp.role}</h3>
                                    <span className="text-xs font-medium text-gray-600 font-sans">{exp.period}</span>
                                </div>
                                <div className="text-xs font-semibold text-gray-700 italic mb-2 font-sans">{exp.company}</div>
                                <ul className="list-disc ml-4 text-xs text-gray-700 space-y-1 font-sans">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="pl-1">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Technical Skills</h2>
                    <div className="grid grid-cols-1 gap-2 text-xs font-sans">
                        {SKILLS.map((cat, i) => (
                            <div key={i} className="flex">
                                <span className="font-bold w-32 flex-shrink-0 text-gray-900">{cat.category}:</span>
                                <span className="text-gray-700">{cat.skills.join(", ")}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Education</h2>
                    {EDUCATION.map((edu, i) => (
                        <div key={i} className="flex justify-between text-xs mb-2 font-sans">
                            <div>
                                <span className="font-bold text-gray-900">{edu.institution}</span>
                                <span className="text-gray-700 mx-2">-</span>
                                <span className="text-gray-700 italic">{edu.degree}</span>
                            </div>
                            <span className="font-medium text-gray-600">{edu.period}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-sm font-bold uppercase border-b border-gray-300 mb-3 tracking-wide text-gray-900">Key Achievements</h2>
                    {ACHIEVEMENTS.map((ach, i) => (
                        <div key={i} className="mb-2 text-xs flex justify-between font-sans">
                            <span className="text-gray-800">{ach.title}</span>
                            <span className="text-gray-600">{ach.year}</span>
                        </div>
                    ))}
                </div>
           </div>
      </div>
    </div>
  );
}

export default App;