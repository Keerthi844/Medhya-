import React, { useEffect } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.opacity-0.translate-y-8, .opacity-0.transition-opacity, [data-scroll-animate="true"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    { name: "Devender Kodam", role: "Founder & Director", delay: "0ms" },
    { name: "Swathi", role: "Partner, Tax & Regulatory", delay: "100ms" },
    { name: "Rakesh", role: "Partner, Audit & Assurance", delay: "200ms" },
    { name: "Yugendar", role: "Director, Corporate Finance", delay: "300ms" },
    { name: "Jaipal Reddy Naidi", role: "Head of Legal & Compliance", delay: "400ms" }
  ];

  return (
    <div className="w-full">
      {/* Header */}
     <section className="pt-8 pb-6 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
  
  {/* Background */}
  <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>

  <div className="container mx-auto px-4 relative z-10 text-center">
    
    {/* Title */}
    <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-outfit font-bold text-white mb-3">
      Our <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">Leadership</span> Team
    </h1>

    {/* Description */}
    <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
      Dynamic professionals with broad expertise across finance, law, and management.<br/>
      Committed to driving excellence and steering your business toward long-term success.
    </p>

  </div>
</section>

      {/* Team Grid */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center p-8 bg-slate-50 border border-slate-200 rounded-3xl hover:-translate-y-2 hover:border-blue-300 hover:shadow-lg transition-all duration-300 opacity-0 translate-y-8" 
                style={{ transitionDelay: member.delay }}
              >
                <div className="w-32 h-32 rounded-full bg-white border-2 border-slate-200 mb-6 flex items-center justify-center shadow-sm overflow-hidden group-hover:border-blue-600 transition-all duration-300">
                  <img src={`https://i.pravatar.cc/150?img=${idx + 10}&u=${encodeURIComponent(member.name)}`} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-2 text-center">{member.name}</h3>
                <p className="text-slate-600 text-center mb-6">{member.role}</p>
                <div className="flex gap-4 mt-auto">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
