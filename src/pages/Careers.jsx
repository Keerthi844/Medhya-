import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
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

  const openPositions = [
    {
      title: "Senior Financial Analyst",
      department: "Valuation & Advisory",
      location: "Hyderabad / Remote",
      type: "Full-time"
    },
    {
      title: "Transaction Services Manager",
      department: "M&A Advisory",
      location: "Hyderabad",
      type: "Full-time"
    },
    {
      title: "Virtual CFO",
      department: "Company Management",
      location: "Remote",
      type: "Contract / Full-time"
    }
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
      Join Our <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">Team</span>
    </h1>

    {/* Description */}
    <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
      Shape the future of finance and build world-class companies with us.<br/>
      Start your journey with unparalleled mentorship, high-impact projects, and clear growth paths.
    </p>

  </div>
</section>

      {/* Why Join Us */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div data-scroll-animate="true" className=" opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
                Empower Your <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Career</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Medhya Investment Advisors, our dynamic professionals with broad expertise across various streams—including Chartered Accountants, Company Secretaries, CPAs, Ex-Bankers, Management Graduates & Legal teams—are the driving force behind our success.
              </p>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4 text-slate-700 text-lg">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={24} /> 
                  <span>Work on high-impact transactions and multi-million dollar funds.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 text-lg">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={24} /> 
                  <span>Incredible mentorship from seasoned industry experts.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 text-lg">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={24} /> 
                  <span>Clear progression path with performance-based incentives.</span>
                </li>
                <li className="flex items-start gap-4 text-slate-700 text-lg">
                  <CheckCircle className="text-blue-600 shrink-0 mt-1" size={24} /> 
                  <span>A collaborative, transparent, and results-driven culture.</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden opacity-0 translate-y-8 transition-all duration-700 delay-200 group">
               <img src="/images/team-collaboration.png" alt="Team Collaboration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent pointer-events-none transition-colors duration-500 group-hover:bg-slate-900/40"></div>
               
               {/* Animated floating elements mimicking "div motion" */}
               <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/20 backdrop-blur-xl rounded-full animate-[bounce_4s_infinite] pointer-events-none border border-blue-400/30"></div>
               <div className="absolute bottom-32 left-8 w-12 h-12 bg-orange-500/20 backdrop-blur-xl rounded-full animate-[pulse_3s_infinite] pointer-events-none border border-orange-400/30"></div>

               <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                 <h3 className="text-4xl font-outfit font-bold text-white mb-2 transform transition-all duration-500 group-hover:-translate-y-2">Growing Together</h3>
                 <p className="text-xl text-blue-300 transform transition-all duration-500 group-hover:-translate-y-1">Join a network of excellence.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-8 lg:py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12 opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
              Open <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover opportunities to join our fast-growing advisory firm.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 delay-200">
            {openPositions.map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-white border border-slate-200 rounded-2xl hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg transition-all duration-300 gap-6">
                <div>
                  <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-medium">
                      <Briefcase size={16}/> {job.department}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-sm font-medium">
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-lg text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-outfit font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all uppercase tracking-wide text-sm">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <p className="text-lg text-slate-600 mb-6">Don't see a fit? We are always looking for exceptional talent.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors">
              Send your resume <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
