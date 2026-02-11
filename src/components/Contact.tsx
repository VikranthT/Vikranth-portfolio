
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:vikranthmaturi@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl -translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 opacity-50"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                
                <div className="space-y-8 pt-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            I am actively looking for opportunities in Silicon Validation, PMIC Characterization, and High-Speed Protocol Testing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:vikranthmaturi@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 backdrop-blur-sm">
                            <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-sky-500" />
                            </div>
                            <span className="font-medium">vikranthmaturi@gmail.com</span>
                        </a>
                        
                        <div className="flex items-center gap-4 text-slate-300 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="p-2 bg-sky-500/10 rounded-lg">
                                <Phone className="w-6 h-6 text-sky-500" />
                            </div>
                            <span className="font-medium">+91 9951370102</span>
                        </div>
                        
                        <a href="https://www.linkedin.com/in/vikranth-tadepalli" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 backdrop-blur-sm">
                            <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-sky-500" />
                            </div>
                            <span className="font-medium">LinkedIn Profile</span>
                        </a>
                        
                        <div className="flex items-center gap-4 text-slate-300 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="p-2 bg-sky-500/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-sky-500" />
                            </div>
                            <span className="font-medium">Vijayawada, India</span>
                        </div>
                    </div>
                </div>

                {/* Glassmorphism Form Card */}
                <div className="bg-slate-800/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* Subtle Shine Effect */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full"></div>

                    <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                placeholder="Your Name"
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 focus:bg-white/15 transition-all duration-300" 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                required
                                placeholder="your.email@example.com"
                                onChange={handleChange}
                                className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 focus:bg-white/15 transition-all duration-300" 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                required
                                placeholder="Hello, I'd like to discuss..."
                                onChange={handleChange}
                                rows={4} 
                                className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 focus:bg-white/15 transition-all duration-300 resize-none" 
                            />
                        </div>

                        <div className="flex flex-col gap-4 pt-2">
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transform hover:-translate-y-1">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                            
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-white/10"></div>
                                <span className="flex-shrink-0 mx-4 text-slate-500 text-xs uppercase tracking-wider">or</span>
                                <div className="flex-grow border-t border-white/10"></div>
                            </div>

                            <a href="mailto:vikranthmaturi@gmail.com" className="w-full py-3.5 bg-white/5 border border-white/10 text-slate-300 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-all flex justify-center items-center gap-2 backdrop-blur-sm hover:border-white/20">
                                Open Email Client
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
