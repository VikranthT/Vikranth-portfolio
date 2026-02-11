import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

interface NavigationProps {
    onOpenResume: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy Logic
      const scrollPosition = window.scrollY + 150; // Offset for visual comfort and header height
      
      // Check if user is near bottom of page (activate Contact)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
         setActiveSection('contact');
         return;
      }

      let current = '';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
            if (scrollPosition >= section.offsetTop) {
                current = link.id;
            }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-300 ${
            isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-width flex justify-between items-center">
            {/* Logo */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="flex items-center gap-2 font-sans font-bold text-xl tracking-tight text-slate-900 group"
            >
                <div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-sky-500 transition-colors">
                    <Cpu className="w-5 h-5" />
                </div>
                <span>Vikranth<span className="text-sky-500">.</span></span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                <button 
                    key={link.name} 
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-medium transition-all relative group ${
                        activeSection === link.id 
                        ? 'text-sky-600' 
                        : 'text-slate-600 hover:text-sky-600'
                    }`}
                >
                    {link.name}
                    {/* Active Indicator */}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-sky-600 rounded-full transition-transform duration-300 origin-left ${
                        activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </button>
                ))}
                
                <button 
                    onClick={onOpenResume}
                    className="text-sm font-medium text-white bg-slate-900 px-5 py-2 rounded-full hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 transition-all"
                >
                    Resume
                </button>
            </div>

            {/* Mobile Toggle */}
            <button 
                className="md:hidden p-2 text-slate-900"
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-6 flex flex-col animate-fade-in">
            <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 p-2">
                    <X className="w-8 h-8" />
                </button>
            </div>
            <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                    <button 
                    key={link.name} 
                    onClick={() => scrollToSection(link.id)}
                    className={`text-2xl font-medium transition-colors ${
                        activeSection === link.id ? 'text-sky-600' : 'text-slate-900'
                    }`}
                    >
                    {link.name}
                    </button>
                ))}
                <button 
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        onOpenResume();
                    }}
                    className="mt-4 px-8 py-3 bg-slate-900 text-white font-medium rounded-full w-full max-w-xs shadow-lg"
                    >
                    View Resume
                </button>
            </div>
        </div>
      )}
    </>
  );
};

export default Navigation;