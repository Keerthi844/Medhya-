import React, { useEffect, useState } from 'react';
import { Check, Brain, Lightbulb, Users, CalendarCheck, X, ArrowRight } from 'lucide-react';

export default function Approach() {
  const [selectedLifeCard, setSelectedLifeCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const approachSteps = [
    { title: "CREATION", desc: "Creation of comprehensive library of regulation and controls." },
    { title: "EXAMINATION", desc: "Examination of positions taken by the company." },
    { title: "ANALYSIS", desc: "Thorough examination of the processes and policies adopted by leading companies." },
    { title: "IDENTIFICATION", desc: "Identification of gaps and benchmarking these with the practices of leading companies." },
    { title: "PERFORMANCE", desc: "Focused on business performance by aligning business processes to critical compliance requirements." },
    { title: "KNOWLEDGE APPLICATION", desc: "Integrated industry specific knowledge." },
    { title: "END TO END SOLUTION", desc: "End-to-end solution from diagnosis to execution." }
  ];

  const lifeAtMedhyaData = [
    {
      icon: <Brain size={28} className="text-blue-600" />,
      iconWrapClass: "bg-blue-50/80 border-blue-100",
      cardHoverClass: "hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]",
      title: 'TGIF & Interactive Teams',
      shortDesc: 'Enriching technical sessions and interactive team meetings that give ample proof of commitment.',
      fullDesc: 'Enriching technical sessions every week (called TGIF) intersperse with interactive team meetings and educative client visits while intensive orientation programmes and offsite visits combined with our unique budget synopsis give ample proof of commitment and professionalism.TGIF sessions are designed to bring energy, relaxation, and connection into the workplace at the end of a productive week. We create engaging Friday experiences where teams unwind, celebrate achievements, and strengthen relationships',
      image: '/images/office-workspace.png'
    },
    {
      icon: <Lightbulb size={28} className="text-green-600" />,
      iconWrapClass: "bg-green-50/80 border-green-100",
      cardHoverClass: "hover:border-green-300 hover:shadow-[0_10px_30px_rgba(34,197,94,0.12)]",
      title: 'Dynamic Environment',
      shortDesc: 'New challenges and opportunities make up a typical day in our energetic and enthusiastic environment.',
      fullDesc: 'New challenges, new opportunities and a great deal of learning make up a typical day at Medhya. This is an employee friendly company where an energetic and enthusiastic environment encourages every member to reach beyond what they thought possible.We foster a dynamic environment that adapts quickly to changing business needs and market trends. Our workplace culture encourages flexibility, innovation, and continuous improvement, enabling teams to stay ahead in a fast-paced world',
      image: '/images/team-collaboration.png'
    },
    {
      icon: <Users size={28} className="text-orange-600" />,
      iconWrapClass: "bg-orange-50/80 border-orange-100",
      cardHoverClass: "hover:border-orange-300 hover:shadow-[0_10px_30px_rgba(249,115,22,0.12)]",
      title: 'Mentoring & Growth',
      shortDesc: 'Mentoring by senior directors defines career paths, giving every employee a panorama of opportunities.',
      fullDesc: 'Mentoring by senior directors and management defines career paths while regular knowledge building practices keep service expertise up to date thus giving every employee a panorama of opportunities. The RC club organizes many an interactive activity while picnics and get together add the fun quotient.We believe that continuous learning and strong mentorship are the foundations of long-term success. Our Mentoring & Growth initiatives are designed to support individuals at every stage of their career by providing guidance, knowledge sharing, and development opportunities.',
      image: '/images/office-workspace.png'
    },
    {
      icon: <CalendarCheck size={28} className="text-purple-600" />,
      iconWrapClass: "bg-purple-50/80 border-purple-100",
      cardHoverClass: "hover:border-purple-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.12)]",
      title: 'Flexitime & Balance',
      shortDesc: 'Our flexitime option and inclusive culture ensure excellent work-life balance for all professionals.',
      fullDesc: 'Our flexitime option allows employees to come an hour late to work and yet make up their 9 hours per day with numerous celebrations on the social calendar ensure work life balance. An inclusive culture brings professionals on a gender equality platform whilst allowing personal perspectives to flourish in a free and fair mannerWe prioritize a healthy work-life balance by offering flexible working hours that empower individuals to manage their professional and personal commitments effectively. Our flexitime approach allows employees to work at their most productive hours while maintaining harmony between career and personal life.',
      image: '/images/team-collaboration.png'
    }
  ];

  return (
    <div className="w-full relative">
      <section className="pt-28 pb-10 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-outfit font-extrabold text-white mb-6 animate-[fadeIn_0.8s_ease-out_forwards]">
            Our <span className="bg-gradient-to-br from-[#f97316] to-[#fb923c] bg-clip-text text-transparent">Approach</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto animate-[fadeIn_0.8s_ease-out_forwards] opacity-0" style={{ animationDelay: '200ms' }}>
            How we translate complex financial challenges into sustainable success.<br/>
            A disciplined, strategic methodology focused on transparency and results.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-outfit font-bold text-slate-400 mb-10 opacity-70">Our Approach</h2>
              <div className="flex flex-col gap-6">
                {approachSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 hover:-translate-y-0.5 transition-transform duration-300 group">
                    <div className="mt-1 flex-shrink-0 bg-slate-100 p-1.5 rounded text-slate-500 shadow-sm border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-700 transition-colors">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-outfit font-semibold text-slate-800 tracking-wide mb-1 leading-none">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-[15px]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden shadow-2xl rounded-xl">
              <img src="/images/team-collaboration.png" alt="Team collaborating" className="absolute w-full h-full object-cover" />
              <div className="absolute inset-0 ring-4 ring-inset ring-white rounded-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-green-500 hidden lg:block rounded pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Medhya */}
      <section className="py-10 lg:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1700px] mx-auto w-full px-6 lg:px-12">
          <div className="mb-10 text-center xl:text-left">
            <h2 className="text-4xl font-outfit font-bold text-slate-900 mb-4 inline-block pb-2 border-b-2 border-blue-600">Life at Medhya</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Cards Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {lifeAtMedhyaData.map((data, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedLifeCard(data)}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 text-center cursor-pointer h-full flex flex-col group transition-all duration-300 ${data.cardHoverClass}`}
                >
                   <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 ${data.iconWrapClass}`}>
                     {data.icon}
                   </div>
                   <h3 className="text-lg font-outfit font-bold text-slate-800 mb-3">{data.title}</h3>
                   <p className="text-slate-600 text-[14.5px] leading-[1.65] text-left flex-grow">
                     {data.shortDesc}
                   </p>
                   <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                     Read More <ArrowRight size={16} />
                   </div>
                </div>
              ))}
            </div>

            {/* Images Column */}
            <div className="relative h-[450px] lg:h-[600px] w-full hidden xl:block perspective-1000">
              <img src="/images/office-workspace.png" alt="Workspace" className="absolute top-0 left-0 w-[65%] h-[70%] object-cover border-[8px] border-white rounded-3xl shadow-xl z-10 hover:z-40 transition-all hover:scale-105 duration-500 bg-slate-100" />
              <img src="/images/business-discussion.png" alt="Executives Discussing" className="absolute top-[15%] right-0 w-[50%] h-[50%] object-cover border-[8px] border-white rounded-3xl shadow-lg z-20 hover:z-40 transition-all hover:scale-105 duration-500 bg-slate-100" />
              <img src="/images/team-collaboration.png" alt="Team Collaboration" className="absolute bottom-0 left-[15%] w-[65%] h-[45%] object-cover border-[8px] border-white rounded-3xl shadow-xl z-30 hover:z-40 transition-all hover:scale-105 duration-500 bg-slate-100" />
            </div>

          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedLifeCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" onClick={() => setSelectedLifeCard(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row translate-y-8 animate-[slideUp_0.4s_ease-out_forwards]">
            
            {/* Image Section */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-auto relative">
              <img src={selectedLifeCard.image} alt={selectedLifeCard.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 to-slate-900/20"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/20 backdrop-blur-sm border border-white/30">
                  {React.cloneElement(selectedLifeCard.icon, { className: "text-white" })}
                </div>
                <h2 className="text-2xl md:text-3xl font-outfit font-bold leading-tight">{selectedLifeCard.title}</h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative flex flex-col">
              <button 
                onClick={() => setSelectedLifeCard(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="flex-grow flex items-center">
                <p className="text-[17px] md:text-lg text-slate-600 leading-relaxed">
                  {selectedLifeCard.fullDesc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button onClick={() => setSelectedLifeCard(null)} className="px-8 py-3 rounded-xl font-outfit font-semibold shadow-md transition-all text-white bg-slate-900 hover:bg-slate-800">
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes slideUp {
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
