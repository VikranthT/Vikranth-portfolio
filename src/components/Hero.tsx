
import React from 'react';
import { FileText, ChevronRight, Cpu, Zap, Activity } from 'lucide-react';

interface HeroProps {
    onOpenResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden bg-white">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-50 via-white to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      
      {/* Abstract Silicon Graphic (Replacing Image) */}
      <div className="relative z-10 mb-12 animate-fade-in-up">
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-sky-500/10 rounded-2xl rotate-45 animate-pulse"></div>
            <div className="absolute inset-2 bg-sky-500/20 rounded-2xl rotate-12"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-sky-100 flex items-center justify-center">
                <Cpu className="w-16 h-16 text-sky-600" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -right-8 -top-4 p-3 bg-white rounded-xl shadow-lg border border-slate-100 animate-bounce delay-100">
                <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div className="absolute -left-8 -bottom-4 p-3 bg-white rounded-xl shadow-lg border border-slate-100 animate-bounce delay-700">
                <Activity className="w-5 h-5 text-emerald-500" />
            </div>
        </div>
      </div>

      <div className="container-width text-center z-10 relative">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Vikranth <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Tadepalli</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-slate-600 font-medium mb-8">
          <span className="hidden md:block h-px w-12 bg-slate-300"></span>
          <span>Silicon Validation Engineer</span>
          <span className="hidden md:block h-px w-12 bg-slate-300"></span>
        </div>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert in <span className="text-slate-900 font-semibold">Post-Silicon Validation</span>, <span className="text-slate-900 font-semibold">PMIC Characterization</span>, and <span className="text-slate-900 font-semibold">High-Speed Protocols</span>. Driving reliability in next-gen semiconductor technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={onOpenResume}
                className="px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-sky-600 transition-all flex items-center gap-2 shadow-xl hover:shadow-sky-500/25 hover:-translate-y-1 w-full sm:w-auto justify-center group"
            >
                <FileText className="w-5 h-5" />
                View Resume
            </button>
            
            <button 
                onClick={scrollToSkills}
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-medium rounded-full hover:border-sky-500 hover:text-sky-600 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:shadow-lg group"
            >
                Technical Expertise
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
