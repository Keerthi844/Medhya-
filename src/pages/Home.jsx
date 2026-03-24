import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lightbulb, PieChart, Briefcase, DollarSign, Globe, Settings,
  ShieldCheck, ArrowRight, TrendingUp, Target, Users,
  Brain, Calculator, Scale, HeartHandshake, RefreshCw
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCfoService, setActiveCfoService] = useState(0);

  const virtualCfoServices = [
    { title: "Financial Advisory", desc: "Expert advisory for strategic growth, M&A, and financial structuring to maximize business value.", img: "/images/office-workspace.png", bullets: ["Strategic Financial Planning", "Capital & Debt Structuring", "M&A Financial Feasibility"] },
    { title: "Financial Projections", desc: "Robust financial modeling to forecast revenue, expenses, and growth scenarios for strategic planning.", img: "/images/business-discussion.png", bullets: ["Revenue Growth Forecasting", "Scenario & Sensitivity Analysis", "Long-term Business Modeling"] },
    { title: "Cash Flow Projections", desc: "Accurate cash flow forecasting to ensure liquidity, manage working capital, and avoid financial crunches.", img: "/images/team-collaboration.png", bullets: ["Working Capital Optimization", "Daily/Weekly Cash Formatting", "Liquidity Risk Management"] },
    { title: "Budgeting", desc: "Comprehensive budgeting frameworks to control costs, set financial targets, and track operational performance.", img: "/images/contact-advisor.png", bullets: ["Department-wise Budgeting", "Zero-based Budgeting", "Quarterly Reforecasting"] },
    { title: "Cost Management", desc: "Strategic cost analysis and reduction initiatives to improve profit margins and operational efficiency.", img: "/images/office-workspace.png", bullets: ["Overhead Cost Reduction", "Process Efficiency Analysis", "Vendor Negotiation Support"] },
    { title: "Audit Support", desc: "End-to-end support for statutory, internal, and tax audits, ensuring compliance and smooth execution.", img: "/images/business-discussion.png", bullets: ["Audit Readiness Check", "Coordination with External Auditors", "Resolving Audit Qualifications"] },
    { title: "Corporate Governance", desc: "Implementing strong governance frameworks to ensure transparency, accountability, and regulatory compliance.", img: "/images/team-collaboration.png", bullets: ["Board Meeting Support", "Ethics & Code of Conduct", "Stakeholder Communication"] },
    { title: "Organizational Structure", desc: "Designing and optimizing organizational structures for better financial control and resource allocation.", img: "/images/contact-advisor.png", bullets: ["Finance Function Transformation", "Role & KPI Definition", "Scalable Team Building"] },
    { title: "Risk Assessment", desc: "Identifying, quantifying, and mitigating financial and operational risks to protect business assets.", img: "/images/office-workspace.png", bullets: ["Enterprise Risk Management", "Mitigation Strategies", "Continuous Monitoring Framework"] },
    { title: "Compliances of the Various Acts Applicable", desc: "Ensuring adherence to all statutory laws, taxation acts, and regulatory requirements relevant to your industry.", img: "/images/business-discussion.png", bullets: ["Direct & Indirect Tax Filing", "FEMA & RBI Approvals", "Secretarial & ROC Filings"] },
    { title: "Internal Control", desc: "Developing and strengthening internal control systems to prevent fraud and operational inefficiencies.", img: "/images/team-collaboration.png", bullets: ["Fraud Prevention Checks", "Delegation of Authority Matrix", "System Access Reviews"] },
    { title: "Accounting Policies and Procedures", desc: "Drafting standardized accounting manuals, policies, and SOPs for consistent financial reporting.", img: "/images/contact-advisor.png", bullets: ["IndAS / IFRS Implementation", "Accounts Manual Drafting", "SOP Development"] },
    { title: "Setting up an Accounting System", desc: "Implementing robust accounting software and ERP systems tailored to your business needs.", img: "/images/office-workspace.png", bullets: ["ERP Evaluation & Selection", "Chart of Accounts Design", "System Integration Support"] },
    { title: "MIS Reporting", desc: "Designing comprehensive Management Information Systems (MIS) for data-driven executive decision making.", img: "/images/business-discussion.png", bullets: ["Customized Dashboards", "Monthly Performance Reviews", "Key Metric Tracking"] },
    { title: "Year End Accounts Closure and Filing", desc: "Managing the complete year-end accounting cycle, finalization of books, and timely statutory filings.", img: "/images/team-collaboration.png", bullets: ["Trial Balance Finalization", "Tax Provisioning & Audit Prep", "Annual Return Filing"] }
  ];

  useEffect(() => {
    setIsVisible(true);
    
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

  const handleServiceClick = (serviceId) => {
    navigate('/services', { state: { service: serviceId } });
  };

  const services = [
    {
      id: 'incubation',
      icon: <Lightbulb size={28} className="text-blue-600" />,
      title: 'Incubation Idea Validation',
      desc: 'Strategic incubation support and concept validation to build a strong startup foundation.'
    },
    {
      id: 'valuation',
      icon: <PieChart size={28} className="text-blue-600" />,
      title: 'Valuation',
      desc: 'Expert business valuation services using globally accepted methodologies.'
    },
    {
      id: 'transaction-advisory',
      icon: <ShieldCheck size={28} className="text-blue-600" />,
      title: 'Transaction Advisory',
      desc: 'End-to-end guidance through complex financial and M&A transactions.'
    },
    {
      id: 'management-consultancy',
      icon: <Briefcase size={28} className="text-blue-600" />,
      title: 'Management Consultancy',
      desc: 'Strategic consulting to optimize operations and enhance corporate performance.'
    },
    {
      id: 'outsourcing',
      icon: <Globe size={28} className="text-blue-600" />,
      title: 'Outsourcing',
      desc: 'Comprehensive outsourcing for accounting, payroll, and statutory compliance.'
    },
    {
      id: 'company-management',
      icon: <Settings size={28} className="text-blue-600" />,
      title: 'Company Management',
      desc: 'Professional management acting as your virtual executives for daily excellence.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Motion */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
          <style>{`
            @keyframes kenburns {
              0% { transform: scale(1); }
              100% { transform: scale(1.15); }
            }
            .animate-kenburns {
              animation: kenburns 25s ease-in-out infinite alternate;
            }
          `}</style>
          <img 
            src="/images/office-workspace.png" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-60 animate-kenburns" 
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex justify-center">
          <div className={`text-center max-w-4xl transition-all duration-1000 transform bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl p-10 md:p-16 rounded-[2rem] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-outfit font-extrabold mb-6 leading-tight tracking-tight text-slate-900 drop-shadow-sm">
              <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Medhya</span> Investments
            </h1>
            <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-medium text-slate-800 mb-6">
              Empowering Wealth, Enabling Growth
            </h2>
            <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your trusted financial partner delivering end-to-end financial solutions. 
              From guiding startups through fund-raising to empowering individuals with strategic wealth creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-outfit font-semibold px-8 py-3.5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide text-sm">
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-700 font-outfit font-semibold px-8 py-3.5 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all uppercase tracking-wide text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8 lg:mb-10 opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
             Our Services <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent"></span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial expertise tailored to your specific business goals and life stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] relative overflow-hidden opacity-0 translate-y-8 flex flex-col h-full" 
                style={{ transitionDelay: `${idx * 100}ms`, transitionProperty: 'opacity, transform, box-shadow, border-color' }}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-outfit font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 opacity-70 transform translate-x-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300 mt-auto pt-4 border-t border-slate-100">
                  <span className="font-semibold text-sm tracking-wide uppercase group-hover:text-blue-700">Learn More</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual CFO Services Section */}
      <section className="py-10 lg:py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              Virtual <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">CFO Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert financial leadership to steer your company toward sustainable growth and operational excellence.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative">
            {/* Mobile scrollable list, Desktop full list */}
            <div className="w-full lg:w-1/3 bg-slate-50 border border-slate-200 rounded-3xl p-6 relative shadow-sm max-h-[350px] lg:max-h-none overflow-y-auto lg:overflow-visible custom-scrollbar">
              <div className="flex flex-col gap-2 relative z-10 w-full">
                {virtualCfoServices.map((service, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                      setActiveCfoService(idx);
                      // Scroll to content on mobile screens
                      if (window.innerWidth < 1024) {
                        setTimeout(() => {
                          const el = document.getElementById('virtual-cfo-content');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                      }
                    }}
                    className={`flex items-center gap-4 p-3 rounded-2xl w-full text-left transition-all duration-300 relative ${activeCfoService === idx ? 'bg-white shadow-[0_4px_20px_rgba(37,99,235,0.1)] border border-blue-100 translate-x-2' : 'hover:bg-white/60 hover:translate-x-1'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors border-2 ${activeCfoService === idx ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-white border-slate-300 text-slate-500'}`}>
                      {idx + 1}
                    </div>
                    <span className={`font-semibold text-sm xl:text-base transition-colors ${activeCfoService === idx ? 'text-blue-700' : 'text-slate-600'}`}>
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Display - Sticky so it follows the user */}
            <div id="virtual-cfo-content" className="w-full lg:w-2/3 bg-white border border-slate-100 rounded-3xl p-6 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col gap-8 min-h-[600px] animate-[fadeIn_0.5s_ease-out] sticky top-32 z-10">
              
              {/* Enlarged Image Header */}
              <div className="w-full h-[300px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden shadow-md relative group">
                <img src={virtualCfoServices[activeCfoService].img} alt={virtualCfoServices[activeCfoService].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-outfit font-extrabold text-xl border border-blue-100 shadow-sm shrink-0">
                    {activeCfoService + 1}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-outfit font-bold text-slate-900 tracking-tight leading-tight">
                    {virtualCfoServices[activeCfoService].title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-[17px] leading-relaxed mb-8">
                  {virtualCfoServices[activeCfoService].desc}
                </p>

                {/* Additional Content: Feature Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-auto">
                  {virtualCfoServices[activeCfoService].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-sm group-hover:scale-125 transition-transform"></div>
                      <span className="text-slate-700 font-medium text-[15px] leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-start">
                  <button 
                    onClick={() => navigate('/services', { state: { serviceStep: 'virtual-cfo' } })}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-outfit font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide text-[15px]"
                  >
                    Learn More About CFO Services <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Life Cycle */}
      <section className="py-10 lg:py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              The Startup <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Life Cycle</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our end-to-end expertise is designed to elevate your startup at every crucial milestone.
            </p>
          </div>

          <div className="relative pb-10">
            {/* Vertical Line */}
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-blue-200 to-slate-200 md:-translate-x-1/2 rounded-full"></div>

            <div className="flex flex-col gap-12 lg:gap-16">
              {/* Lifecycle Stage Map */}
              {[
                {
                  stage: "Idea incubation",
                  icon: <Lightbulb size={26} />,
                  desc: "We help validate your business idea with financial feasibility assessments, market sizing, and business model structuring — laying a sound economic foundation before you invest a single rupee."
                },
                {
                  stage: "Start up",
                  icon: <Target size={26} />,
                  desc: "From company incorporation and regulatory registrations (GST, MSME, DPIIT) to setting up accounting systems and initial tax structuring — we ensure your startup is legally sound and operationally ready from day one."
                },
                {
                  stage: "Growth stage",
                  icon: <TrendingUp size={26} />,
                  desc: "As your revenue scales, we step in as your Virtual CFO — managing MIS reporting, cash flow planning, budgeting, and investor-ready financials that demonstrate the strength of your growth story."
                },
                {
                  stage: "Funding",
                  icon: <DollarSign size={26} />,
                  desc: "This is our core strength. We structure and execute equity and debt fund raises — from angel rounds and VC pitch decks to bank loans and NCDs — connecting you with the right capital partners and negotiating terms that protect your equity."
                },
                {
                  stage: "Getting established",
                  icon: <ShieldCheck size={26} />,
                  desc: "As your business matures, we advise on corporate governance, compliance frameworks, strategic financial decisions, and capital structure optimisation — helping you build institutional credibility."
                },
                {
                  stage: "Expansion",
                  icon: <Globe size={26} />,
                  desc: "Expanding into new markets requires financial planning. We guide you through M&A advisory, cross-border FEMA compliance, multi-entity structuring, and larger-scale debt or equity raises."
                },
                {
                  stage: "Mature",
                  icon: <PieChart size={26} />,
                  desc: "At maturity, we help you prepare for a public listing — coordinating DRHP filing, SEBI compliance, and investor roadshows. Our IPO handholding ensures you enter public markets with confidence."
                },
                {
                  stage: "Exit",
                  icon: <ArrowRight size={26} />,
                  desc: "Whether it is a strategic sale, secondary buyout, or post-IPO exit, we advise founders and shareholders on maximising exit value — structuring the transaction, managing due diligence, and ensuring tax-efficient outcomes."
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-16 opacity-0 translate-y-8 transition-all duration-700 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`} data-scroll-animate="true">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-7 md:left-1/2 w-5 h-5 rounded-full bg-blue-600 border-[4px] border-white shadow shadow-blue-400 -translate-x-[10px] md:-translate-x-1/2 z-10 top-8 md:top-1/2 md:-translate-y-1/2"></div>

                  {/* Stage Label Block */}
                  <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-start pl-[4.5rem] md:pl-0' : 'md:justify-end pl-[4.5rem] md:pr-0'}`}>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-5 w-full md:max-w-[400px] shadow-sm hover:shadow-md transition-shadow group cursor-default">
                      <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-inner group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-outfit font-bold text-slate-800 text-center sm:text-left">{item.stage}</h3>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end pl-[4.5rem] md:pl-0' : 'md:justify-start pl-[4.5rem] md:pl-0'}`}>
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 w-full md:max-w-[450px] shadow-sm hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)] transition-all relative group cursor-default">
                      {/* Arrow pointer for desktop */}
                      <div className={`hidden md:block absolute top-[50%] -translate-y-1/2 w-5 h-5 bg-white border-y border-slate-200 ${idx % 2 === 0 ? 'right-[-11px] border-r rotate-45' : 'left-[-11px] border-l -rotate-45'}`}></div>
                      
                      
                      <p className="text-slate-600 leading-relaxed text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-10 lg:py-16 bg-white overflow-hidden relative border-y border-slate-100">
        {/* Subtle dynamic background gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 lg:mb-14 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The core strengths that set us apart and drive your sustainable, long-term success.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-0 relative w-full pt-4 pb-4">
            
            {/* Mobile Vertical Connection Line */}
            <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2 -z-10 rounded-full"></div>

            {[
              { title: "Industry Specific Knowledge", icon: <Brain size={44} strokeWidth={1.5} /> },
              { title: "Cost Saving", icon: <Calculator size={44} strokeWidth={1.5} /> },
              { title: "Exclusive team for Litigation & Compliance", icon: <Scale size={44} strokeWidth={1.5} /> },
              { title: "Continuous Support & Commitment", icon: <HeartHandshake size={44} strokeWidth={1.5} /> },
              { title: "Agile Working", icon: <RefreshCw size={44} strokeWidth={1.5} /> },
            ].map((adv, idx) => (
              <div 
                key={idx} 
                className="w-full lg:w-1/5 flex flex-col items-center opacity-0 translate-y-8 transition-all duration-700 relative group" 
                data-scroll-animate="true"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Desktop Staggering using padding */}
                <div className={`flex flex-col items-center w-full ${idx % 2 !== 0 ? 'lg:pt-[130px]' : 'lg:pb-[130px]'}`}>
                  
                  {/* Circle Node */}
                  <div className={`w-36 h-36 rounded-full bg-white border-[8px] flex items-center justify-center shadow-2xl mb-8 relative transition-all duration-500 z-10 ${idx % 2 === 0 ? 'border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100' : 'border-blue-500 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-50'}`}>
                    
                    {/* SVG Curve Connector to Next Node (Desktop Only) */}
                    {idx < 4 && (
                      <svg 
                        viewBox="0 0 100 100" 
                        preserveAspectRatio="none" 
                        className="hidden lg:block absolute left-[50%] top-[50%] w-[calc(100vw/5)] max-w-[280px] h-[130px] overflow-visible -z-10 pointer-events-none" 
                        style={{ transform: idx % 2 === 0 ? 'translateY(0)' : 'translateY(-130px)' }}
                      >
                        <path 
                          d={idx % 2 === 0 ? "M0,0 C40,0 60,100 100,100" : "M0,100 C40,100 60,0 100,0"} 
                          fill="none" 
                          stroke="#cbd5e1" 
                          strokeWidth="2" 
                          strokeDasharray="6, 6" 
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}
                    
                    <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {adv.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-[1.15rem] font-outfit font-bold text-slate-800 text-center max-w-[200px] leading-snug group-hover:text-blue-600 transition-colors">
                    {adv.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Overview */}
      <section className="py-8 lg:py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-700">
          <Users className="text-blue-600 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-outfit font-bold text-slate-900 mb-4">Built by <span className="bg-gradient-to-br from-blue-800 to-blue-600 bg-clip-text text-transparent">Experts</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Our team comprises dynamic professionals with broad expertise from various streams including Chartered Accountants, Company Secretaries, Certified Public Accountants, Ex-Bankers, Management Graduates & Legal teams.
          </p>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-blue-50 border border-blue-100 mb-10">
            <p className="font-outfit text-xl md:text-2xl font-semibold text-blue-900 tracking-wide">
              "WE ARE BUILT ON A COMMON OBJECTIVE TO PROVIDE THE BEST ADVISORY IN THE MARKET TO BUILD WORLD CLASS COMPANIES."
            </p>
          </div>
          <Link to="/team" className="inline-flex items-center justify-center gap-2 bg-transparent text-blue-700 font-outfit font-semibold px-8 py-3.5 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all uppercase tracking-wide text-sm">
            Meet Our Leadership
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-14 relative bg-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,rgba(15,23,42,1)_70%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">Ready to Transform Your Financial Future?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Contact us today to discuss your goals with our expert advisors.</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-outfit font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide text-sm">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
