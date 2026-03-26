import React, { useEffect, useState } from 'react';
import { Target, TrendingUp, Award, Users, Lightbulb, Network, Clock, Briefcase, Globe, X } from 'lucide-react';

const successFactors = [
  {
    letter: 'S',
    text: "ector Specific Experienced Advisory Board",
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Sector Specific Experienced Advisory Board",
    content: "Our advisory board comprises industry veterans with decades of specialized experience across diverse sectors. They provide invaluable strategic foresight, regulatory guidance, and deep market insights, ensuring that our investment strategies are not just theoretically sound, but practically viable and ahead of industry curves."
  },
  {
    letter: 'U',
    text: "nderstanding Your Business Need",
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: "Understanding Your Business Need",
    content: "We don't believe in one-size-fits-all solutions. Our approach begins with a profound dive into your unique business model, operational challenges, and long-term aspirations. By fully comprehending your specific ecosystem, we tailor financial strategies and capital structures that align perfectly with your fundamental goals."
  },
  {
    letter: 'C',
    text: "ontacts with Angel Investors / VC / PE",
    icon: <Network size={28} strokeWidth={1.5} />,
    title: "Contacts with Angel Investors / VC / PE",
    content: "Leverage our extensive global network of high-net-worth individuals, Venture Capitalists, and Private Equity firms. We bridge the gap between innovative startups and visionary capital, facilitating introductions, structuring pitch decks, and negotiating terms that protect founders while satisfying investor mandates."
  },
  {
    letter: 'C',
    text: "ombined experience of more than 2 decades",
    icon: <Clock size={28} strokeWidth={1.5} />,
    title: "Combined experience of more than 2 decades",
    content: "Our core team brings over 20 years of cumulative expertise in corporate finance, investment banking, and strategic advisory. This depth of experience means we have navigated multiple economic cycles, allowing us to foresee risks, identify hidden opportunities, and execute complex transactions with unwavering precision."
  },
  {
    letter: 'E',
    text: "xperienced & Dedicated Outsourced Team",
    icon: <Briefcase size={28} strokeWidth={1.5} />,
    title: "Experienced & Dedicated Outsourced Team",
    content: "Scale your operations without the overhead. Our dedicated outsourced teams act as an extension of your own company, handling critical financial, accounting, and compliance functions. Led by seasoned professionals, our teams ensure operational excellence, allowing your leadership to focus purely on strategic growth."
  },
  {
    letter: 'S',
    text: "trategically located in India, connects with USA & Middle East",
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: "Strategically located in India, connects with USA & Middle East",
    content: "Headquartered in India with strong active channels across the USA and the Middle East, we are perfectly positioned to manage cross-border investments and international scaling. Our geographic footprint allows us to navigate complex multi-jurisdictional regulations and tap into diverse global capital markets seamlessly."
  },
  {
    letter: 'S',
    text: "trong Experienced Execution Team",
    icon: <Target size={28} strokeWidth={1.5} />,
    title: "Strong Experienced Execution Team",
    content: "Strategy is useless without execution. Our robust execution team is trained to deliver under pressure, ensuring that every financial model, DD report, and fund-raise mandate is closed efficiently. From initial term sheets to final disbursement, we handle the rigorous operational heavy-lifting to get the deal done."
  },
];

export default function About() {
  const [selectedFactor, setSelectedFactor] = useState(null);

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

  return (
    <div className="w-full relative">
      {/* Header */}
      <section className="pt-6 pb-4 bg-slate-900 border-b border-slate-800 relative overflow-hidden">

        {/* Background */}
        <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Title */}
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-outfit font-bold text-white mb-3">
            About <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">Medhya</span>
          </h1>

          {/* Description */}
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Empowering wealth, Enabling Growth.<br />
            Bridging vision with capital to build a sustainable, future-ready financial ecosystem.
          </p>

        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            <div data-scroll-animate="true" className=" opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-8 leading-tight">
                Your Trusted <br /><span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Financial Partner</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Medhya Investment Advisors Private Limited delivers end-to-end financial solutions — from guiding startups through fund-raising and IPOs to empowering individuals with strategic wealth creation, tax efficiency, and financial independence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team comprises dynamic professionals with broad expertise from various streams including Chartered Accountants, Company Secretaries, Certified Public Accountants, Ex-Bankers, Management Graduates & Legal teams.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center shadow-sm flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold text-blue-600 mb-2">100+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Startups Advised</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center shadow-sm flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-extrabold text-blue-600 mb-2">50+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">VC/PE Connections</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center shadow-sm flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-extrabold text-blue-600 mb-2">Growth</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Focused Strategies</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl text-center shadow-sm flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-extrabold text-blue-600 mb-2">End-to-End</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Financial Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 lg:py-14 bg-slate-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full relative flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-[600px] opacity-0 translate-y-8 transition-all duration-1000" data-scroll-animate="true">

          {/* Left Block - Vision */}
          <div className="w-[90%] lg:w-[48%] bg-slate-800 rounded-[40px] lg:rounded-l-none lg:rounded-r-[150px] p-12 lg:p-20 lg:pr-40 xl:pr-56 text-center text-white shadow-2xl relative z-10 lg:mt-10 self-start">
            <div className="w-24 h-24 mx-auto lg:mr-auto lg:ml-8 rounded-full bg-[#f97316] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(249,115,22,0.4)] border-4 border-slate-700">
              <Target size={40} className="text-white" />
            </div>
            <h3 className="text-4xl font-outfit font-bold mb-6 lg:text-left lg:pl-8">Vision</h3>
            <p className="text-slate-300 leading-relaxed text-lg lg:text-left lg:pl-8">
              To be India's most trusted financial partner — for businesses of every scale and Stake holders at every life stage.
            </p>
          </div>

          {/* Center Pill Image (Absolute layout to perfectly overlap) */}
          <div className="hidden lg:block absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] xl:w-[400px] h-[500px] xl:h-[600px] rounded-full overflow-hidden border-[12px] border-slate-50 shadow-2xl z-30">
            <img src="/images/team-collaboration.png" alt="Collaborating Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#f97316]/50 mix-blend-multiply"></div>
          </div>

          {/* Right Block - Mission */}
          <div className="w-[90%] lg:w-[48%] bg-slate-800 rounded-[40px] lg:rounded-r-none lg:rounded-l-[150px] p-12 lg:p-20 lg:pl-40 xl:pl-56 text-center text-white shadow-2xl relative z-10 mt-16 md:mt-24 lg:mt-60 self-end">
            <div className="w-24 h-24 mx-auto lg:ml-auto lg:mr-8 rounded-full bg-[#f97316] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(249,115,22,0.4)] border-4 border-slate-700">
              <TrendingUp size={40} className="text-white" />
            </div>
            <h3 className="text-4xl font-outfit font-bold mb-6 lg:text-right lg:pr-8">Mission</h3>
            <p className="text-slate-300 leading-relaxed text-lg lg:text-right lg:pr-8">
              To deliver integrated, transparent, and results-driven financial solutions that create enduring value.
            </p>
          </div>

        </div>

        {/* Mobile Center Image */}
        <div className="lg:hidden w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-[8px] border-white shadow-2xl mt-16 relative z-30 opacity-0 translate-y-8 transition-all duration-700 delay-200" data-scroll-animate="true">
          <img src="/images/team-collaboration.png" alt="Collaborating Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f97316]/40 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Why Medhya Investments - SUCCESS Framework */}
      <section className="py-10 lg:py-16 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
        {/* Subtle background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-10 lg:mb-16 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
              Why Medhya <span className="bg-gradient-to-br from-orange-600 to-orange-400 bg-clip-text text-transparent">Investments</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our core strengths spell out our commitment to your sustainable growth.
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            {successFactors.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedFactor(item)}
                className="group flex flex-col sm:flex-row items-center gap-4 sm:gap-6 opacity-0 translate-y-8 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                data-scroll-animate="true"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon Box */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-slate-200 text-slate-400 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Text Box w/ Letter */}
                <div className="flex-1 w-full flex items-center bg-white border border-slate-100 p-5 sm:p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)] group-hover:border-orange-200 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-xl sm:text-2xl font-outfit text-slate-700 group-hover:text-slate-900 transition-colors pl-2 sm:pl-4 flex items-center m-0">
                    <span className="font-extrabold text-3xl sm:text-4xl text-orange-600 shrink-0">{item.letter}</span>
                    <span className="font-medium tracking-wide text-lg sm:text-lg lg:text-xl text-slate-800 ml-[2px] mt-[3px]">{item.text}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedFactor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedFactor(null)}></div>
          <div className="relative bg-white w-full max-w-xl rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 md:p-10 animate-[fadeIn_0.3s_ease-out_forwards] max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setSelectedFactor(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 shadow-inner border border-orange-100">
              {React.cloneElement(selectedFactor.icon, { size: 32, className: "text-orange-600" })}
            </div>

            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-4">{selectedFactor.title}</h2>
            <div className="w-12 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-6 rounded-full"></div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {selectedFactor.content}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button onClick={() => setSelectedFactor(null)} className="px-6 py-3 rounded-xl bg-slate-900 text-white font-outfit font-semibold hover:bg-orange-500 shadow-md transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
