import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Lightbulb, PieChart, ShieldCheck, Briefcase, Globe, Settings, X, ArrowRight, Check } from 'lucide-react';

const coreCards = [
  {
    id: 'incubation',
    icon: <Lightbulb size={36} className="text-white" />,
    title: 'Incubation Idea Validation',
    shortDesc: 'Strategic incubation support and concept validation to build a strong startup foundation.',
    image: '/images/team-collaboration.png',
    themeColor: 'bg-[#207a34]',
    features: [
      'Pre-startup Stage Advisory (Ideation/ Conceptualization/ Requirements)',
      'Incubation Advisory (Pitch/MVP)',
      'Mentorship (Growth Stages/ Expansion)',
      'Differentiating Strategy Advisory',
      'Competitor/ Market Analysis',
      'Milestone Evaluation (Product Scalability)'
    ]
  },
  {
    id: 'valuation',
    icon: <PieChart size={36} className="text-white" />,
    title: 'Valuation',
    shortDesc: 'Expert business and startup valuation for strategic decisions.',
    image: '/images/business-discussion.png',
    themeColor: 'bg-[#1c8446]',
    features: [
      'Business Valuation',
      'Startups Valuation',
      'Build / Review of Financial Models',
      'M&A/ Valuations for Acquisitions',
      'ESOPs & Sweat Equity',
      'SEBI/BSE/NSE/ NYSE/ Stock Exchange Valuation- Delisting Valuation /Takeover/Exit'
    ]
  },
  {
    id: 'transaction-advisory',
    icon: <ShieldCheck size={36} className="text-white" />,
    title: 'Transaction Advisory',
    shortDesc: 'End-to-end transaction support including revenue and financial models.',
    image: '/images/office-workspace.png',
    themeColor: 'bg-[#22a66e]',
    features: [
      'Revenue Model',
      'Financial Model',
      'Funding Advisory',
      'Investments Advisory',
      'Due Diligence',
      'Agreements Review (Shareholder/Partners)',
      'Exit Strategy (M&A/ Founders/Partners)'
    ]
  },
  {
    id: 'management-consultancy',
    icon: <Briefcase size={36} className="text-white" />,
    title: 'Management Consultancy',
    shortDesc: 'Strategic guidance for corporate development and board objectives.',
    image: '/images/contact-advisor.png',
    themeColor: 'bg-[#1ab8a0]',
    features: [
      'Business Development',
      'Corporate Advisory (Structuring/Restructuring)',
      'Support to Board’s Goals & Objectives',
      'Dashboard Performance Reporting',
      'Networking (Angels/VC/PE/Others)',
      'Valuation Support'
    ]
  },
  {
    id: 'outsourcing',
    icon: <Globe size={36} className="text-white" />,
    title: 'Outsourcing',
    shortDesc: 'Comprehensive support for accounting, tax, and legal requirements.',
    image: '/images/contact-header.png',
    themeColor: 'bg-[#10b1ca]',
    features: [
      'Company Incorporation',
      'Statutory Services',
      'Accounting Services',
      'Tax (Direct/Indirect)',
      'Legal (Pre/Post Startup)',
      'Banking Support'
    ]
  },
  {
    id: 'company-management',
    icon: <Settings size={36} className="text-white" />,
    title: 'Company Management',
    shortDesc: 'Virtual CFO and deep financial strategy solutions.',
    image: '/images/contact-exterior.png',
    themeColor: 'bg-[#0f8bcc]',
    features: [
      'Interim CFO Services',
      'Financial Strategy & Management',
      'Cashflow Management',
      'Accounting Policies and Procedures',
      'Management Information System',
      'Monthly Review Meetings',
      'Representing Stakeholders',
      'BOD Advisors'
    ]
  }
];

const stepperData = {
  'transaction-advisory': {
    title: 'Transaction Advisory Services',
    desc: 'As corporate finance transactions become increasingly complex, organizations are in search to find effective solutions to manage them with a great deal of precision and expertise. Our diverse teams combine integrated global solutions with extensive industry experience to give our clients the most effective solutions.',
    blocks: [
      {
        title: 'Valuation',
        desc: 'Business valuation is critical for transactions including fund raising, mergers & acquisitions (M&A), sale of businesses, strategic business decisions like family or shareholders disputes, voluntary value assessment and also for regulatory compliance, tax and financial reporting purposes in India under RBI, Income Tax, Companies Act, and SEBI Laws etc. Better Corporate Governance is also leading to requirement of independent Business Valuations.',
        image: '/images/business-discussion.png',
        reverse: false,
        imageHeight: true,
        bullets: ['Business Valuation', 'Intangible/ Brand Valuations', 'M&A/ Share Swap Valuations', 'Valuation for Acquisitions (Buy Side and Sell Side)', 'ESOP and Sweat Equity Valuation', 'FDI / ODI Valuations', 'Ind AS Valuation', 'Exit Valuation/ Valuation for Delisting of Shares from Stock exchange', 'Convertible/Complex Instrument Valuation', 'Start-up Valuation', 'SEBI/Stock Exchange Valuation', 'Derivative Valuations', 'Build / Review of Financial Models']
      },
      {
        title: 'Due Diligence Services',
        desc: 'Due diligence refers to the process of research and analysis that is done before an acquisition, investment, business partnership or bank loan in order to determine the value of the subject of the due diligence or whether there are any major issues or potential issues. The prospective acquirer / investor should obtain all the necessary information within the predetermined time and make sure that he makes a good deal and not a costly mistake. Our dedicated transaction advisory and due diligence teams can assist with financial, legal, tax and environmental due diligence and business analysis.',
        image: '/images/office-workspace.png',
        reverse: true,
        imageHeight: true,
        bullets: ['Corporate Due diligence', 'Financial Due diligence', 'Tax Due Diligence', 'Asset Purchase Due diligence', 'Commercial Due diligence', 'Investment Due diligence', 'Business Due diligence']
      },
      {
        title: 'Mergers and Acquisition support',
        desc: 'A Merger or Acquisition (M&A) can add considerable value to a business, but making sure that each stage of the transaction process—from valuation to negotiation and completion—is successful demands considerable experience and knowledge. We can assist you by assessing the strategic fit of a business by analyzing all aspects of a transaction.',
        image: '/images/team-collaboration.png',
        reverse: false,
        imageHeight: true,
        bullets: ['Identifying key targets locally and internationally', 'Valuation', 'Transaction structuring, and negotiation', 'Advice on financing', 'Supervising due diligence, legal and other issues', 'Developed detailed plans for executing strategy', 'Staffing models, organizational structure', 'Workforce needs analysis and modeling', 'Change management', 'Culture visioning and transformation']
      }
    ]
  },
  'risk-advisory': {
    title: 'Risk Advisory Services',
    desc: 'Comprehensive risk management solutions to secure and streamline your business operations.',
    blocks: [
      {
        title: 'Business Process Redesign',
        desc: 'We help businesses design their key business processes considering “best practices” and “benchmarks”, help operations become more efficient, speed up work flows and improve Management Information Systems.',
        image: '/images/business-discussion.png',
        reverse: false,
        bullets: ['Prepare Standard Operating Procedures (SOP)', 'Accounts Manual', 'Systems Manual', 'Chart of Accounts development and standardization']
      },
      {
        title: 'Information Technology Advisory services',
        image: '/images/team-collaboration.png',
        reverse: true,
        bullets: ['Internal Audit of IT Systems', 'Business Continuity & Disaster Recovery Plan', 'Regulation and Compliance Reviews', 'General IT Control Testing', 'Cyber Risk Services', 'ERP Implementation Review', 'Application and Technical audit', 'IT Strategy and Planning review', 'Digital Transformation']
      },
      {
        title: 'SOX Compliance',
        desc: 'SOX provides the framework for organizations for financial recording and reporting, which in turn improves many aspects of the organization. SOX compliance help companies report that the financial reports are more predictable, which makes stockholders contended. Companies also report that it makes access to capital markets much easier due to their improved financial reporting.',
        image: '/images/office-workspace.png',
        reverse: false,
        customRender: (
          <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-100 font-semibold text-emerald-900 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 mt-8">
            <div className="w-1.5 h-full min-h-[60px] bg-emerald-500 rounded-full shrink-0 shadow-sm mt-1"></div>
            <span className="leading-relaxed">Our experience and expertise, with team of Certified Public Accountants as associates of firm, enable us to provide solid guidance from the start of the SOX compliance engagement by creating long term compliance objectives for our clients. We aim at providing our clients with customized, industry approved approaches.</span>
          </div>
        )
      }
    ]
  },
  'virtual-cfo': {
    title: 'Virtual CFO Services',
    desc: 'Expert financial leadership to steer your company toward sustainable growth and operational excellence.',
    blocks: [
      { title: "1. Financial Advisory", desc: "Expert advisory for strategic growth, M&A, and financial structuring to maximize business value.", image: "/images/office-workspace.png", reverse: false, bullets: ["Strategic Financial Planning", "Capital & Debt Structuring", "M&A Financial Feasibility"] },
      { title: "2. Financial Projections", desc: "Robust financial modeling to forecast revenue, expenses, and growth scenarios for strategic planning.", image: "/images/business-discussion.png", reverse: true, bullets: ["Revenue Growth Forecasting", "Scenario & Sensitivity Analysis", "Long-term Business Modeling"] },
      { title: "3. Cash Flow Projections", desc: "Accurate cash flow forecasting to ensure liquidity, manage working capital, and avoid financial crunches.", image: "/images/team-collaboration.png", reverse: false, bullets: ["Working Capital Optimization", "Daily/Weekly Cash Formatting", "Liquidity Risk Management"] },
      { title: "4. Budgeting", desc: "Comprehensive budgeting frameworks to control costs, set financial targets, and track operational performance.", image: "/images/contact-advisor.png", reverse: true, bullets: ["Department-wise Budgeting", "Zero-based Budgeting", "Quarterly Reforecasting"] },
      { title: "5. Cost Management", desc: "Strategic cost analysis and reduction initiatives to improve profit margins and operational efficiency.", image: "/images/office-workspace.png", reverse: false, bullets: ["Overhead Cost Reduction", "Process Efficiency Analysis", "Vendor Negotiation Support"] },
      { title: "6. Audit Support", desc: "End-to-end support for statutory, internal, and tax audits, ensuring compliance and smooth execution.", image: "/images/business-discussion.png", reverse: true, bullets: ["Audit Readiness Check", "Coordination with External Auditors", "Resolving Audit Qualifications"] },
      { title: "7. Corporate Governance", desc: "Implementing strong governance frameworks to ensure transparency, accountability, and regulatory compliance.", image: "/images/team-collaboration.png", reverse: false, bullets: ["Board Meeting Support", "Ethics & Code of Conduct", "Stakeholder Communication"] },
      { title: "8. Organizational Structure", desc: "Designing and optimizing organizational structures for better financial control and resource allocation.", image: "/images/contact-advisor.png", reverse: true, bullets: ["Finance Function Transformation", "Role & KPI Definition", "Scalable Team Building"] },
      { title: "9. Risk Assessment", desc: "Identifying, quantifying, and mitigating financial and operational risks to protect business assets.", image: "/images/office-workspace.png", reverse: false, bullets: ["Enterprise Risk Management", "Mitigation Strategies", "Continuous Monitoring Framework"] },
      { title: "10. Compliances of the Various Acts Applicable", desc: "Ensuring adherence to all statutory laws, taxation acts, and regulatory requirements relevant to your industry.", image: "/images/business-discussion.png", reverse: true, bullets: ["Direct & Indirect Tax Filing", "FEMA & RBI Approvals", "Secretarial & ROC Filings"] },
      { title: "11. Internal Control", desc: "Developing and strengthening internal control systems to prevent fraud and operational inefficiencies.", image: "/images/team-collaboration.png", reverse: false, bullets: ["Fraud Prevention Checks", "Delegation of Authority Matrix", "System Access Reviews"] },
      { title: "12. Accounting Policies and Procedures", desc: "Drafting standardized accounting manuals, policies, and SOPs for consistent financial reporting.", image: "/images/contact-advisor.png", reverse: true, bullets: ["IndAS / IFRS Implementation", "Accounts Manual Drafting", "SOP Development"] },
      { title: "13. Setting up an Accounting System", desc: "Implementing robust accounting software and ERP systems tailored to your business needs.", image: "/images/office-workspace.png", reverse: false, bullets: ["ERP Evaluation & Selection", "Chart of Accounts Design", "System Integration Support"] },
      { title: "14. MIS Reporting", desc: "Designing comprehensive Management Information Systems (MIS) for data-driven executive decision making.", image: "/images/business-discussion.png", reverse: true, bullets: ["Customized Dashboards", "Monthly Performance Reviews", "Key Metric Tracking"] },
      { title: "15. Year End Accounts Closure and Filing", desc: "Managing the complete year-end accounting cycle, finalization of books, and timely statutory filings.", image: "/images/team-collaboration.png", reverse: false, bullets: ["Trial Balance Finalization", "Tax Provisioning & Audit Prep", "Annual Return Filing"] }
    ]
  }
};

const stepperSteps = [
  { id: 'transaction-advisory', title: 'Transaction Advisory Services' },
  { id: 'risk-advisory', title: 'Risk Advisory Services' },
  { id: 'virtual-cfo', title: 'Virtual CFO Services' }
];

export default function Services() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  const [activeStep, setActiveStep] = useState('transaction-advisory');
  const detailsRef = useRef(null);

  const handleStepClick = (id) => {
    setActiveStep(id);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeIndex = stepperSteps.findIndex(s => s.id === activeStep);
  const activeData = stepperData[activeStep];

  useEffect(() => {
    if (location.state && location.state.serviceStep) {
      setActiveStep(location.state.serviceStep);
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      window.history.replaceState({}, document.title);
    } else if (location.state && location.state.serviceId) {
      const el = document.getElementById(`service-${location.state.serviceId}`);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]);

  // Re-observe dynamic content when activeStep changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    const newElements = document.querySelectorAll('.animate-on-tab');
    newElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      el.classList.remove('opacity-100', 'translate-y-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <div className="w-full relative">
      {/* Header */}
      <section className="pt-6 pb-4 bg-slate-900 border-b border-slate-800 relative overflow-hidden">

        {/* Background */}
        <div className="absolute top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Title */}
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-outfit font-bold text-white mb-3">
            Our Service{" "}
            <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Offerings
            </span>
          </h1>

          {/* Description */}
          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            A complete ecosystem of advisory and execution to accelerate your growth.Comprehensive financial solutions designed to drive growth, efficiency, and long-term value.
          </p>

        </div>
      </section>
      {/* Main Service Cards Grid (Restored exactly to 6 pristine textual cards) */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {coreCards.map((service, idx) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white border border-slate-200 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 lg:p-10 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 opacity-0 translate-y-8 animate-on-scroll overflow-hidden flex flex-col h-full min-h-[320px] sm:min-h-[380px]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Subtle top border accent */}
                <div className={`absolute top-0 left-0 w-full h-2 ${service.themeColor} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                {/* Background faint tint on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 ${service.themeColor}`}></div>

                <div className="relative z-10 flex-grow">
                  <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 ${service.themeColor} text-white`}>
                    {service.icon}
                  </div>

                  <h3 className="text-[1.35rem] xl:text-[1.5rem] font-outfit font-extrabold text-slate-800 mb-4 tracking-tight leading-tight group-hover:text-slate-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-[15px] xl:text-base group-hover:text-slate-600 transition-colors">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center text-slate-500 font-semibold text-sm xl:text-[15px] uppercase tracking-wider group-hover:text-slate-900 transition-colors">
                  Explore Service <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2-Step Interactive Capability Stepper Section */}
      <section ref={detailsRef} className="py-20 lg:py-32 bg-white scroll-mt-0 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1400px]">

          <div className="text-center mb-10 lg:mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-outfit font-extrabold text-slate-900 mb-6 tracking-tight">
              In-Depth <span className="bg-gradient-to-br from-[#52b12c] to-[#7adb48] bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#52b12c] mx-auto rounded-full"></div>
            <p className="mt-8 text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our deeply embedded advisory frameworks via the interactive progress steps below.
            </p>
          </div>

          {/* Master Progress Bar / Stepper (2 Steps) */}
          <div className="w-full flex items-center justify-center max-w-3xl mx-auto mb-10 md:mb-16 relative animate-on-scroll opacity-0 translate-y-8 select-none">
            {stepperSteps.map((step, idx) => {
              const isActive = activeStep === step.id;
              const isCompleted = idx < activeIndex;

              return (
                <React.Fragment key={step.id}>
                  <div
                    onClick={() => handleStepClick(step.id)}
                    className="relative z-10 flex flex-col items-center cursor-pointer group"
                  >
                    {/* The Circle */}
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 border-4 relative bg-white
                      ${isActive ? 'border-[#52b12c] ring-[8px] ring-[#52b12c]/20 scale-105 shadow-[0_0_25px_rgba(82,177,44,0.4)]' : ''}
                      ${isCompleted ? 'bg-[#52b12c] border-[#52b12c]' : ''}
                      ${!isActive && !isCompleted ? 'border-slate-300 group-hover:border-[#52b12c]/50' : ''}
                    `}>
                      {isCompleted ? <Check size={32} className="text-white" strokeWidth={3.5} /> : <span className={`font-bold text-2xl md:text-3xl ${isActive ? 'text-[#52b12c]' : 'text-slate-400'}`}>{idx + 1}</span>}
                    </div>

                    {/* The Label */}
                    <span
                      className={`absolute top-36 md:top-20 md:w-max min-w-[150px] text-center font-outfit font-extrabold uppercase tracking-widest transition-all duration-300 px-2
    ${isActive ? 'text-[#429521] text-[13px] md:text-[15px] translate-y-1' : 'text-slate-400 text-[11px] md:text-[13px]'}
  `}
                    >
                      {step.title}
                    </span>
                  </div>

                  {/* Connecting Line between steps */}
                  {idx < stepperSteps.length - 1 && (
                    <div className="flex-1 max-w-[80px] sm:max-w-[150px] md:max-w-[200px] h-2 md:h-2.5 rounded-full mx-4 md:mx-6 relative z-0 transition-colors duration-700 bg-slate-200">
                      <div className={`absolute top-0 left-0 h-full rounded-full bg-[#52b12c] transition-all duration-1000 ease-in-out ${isCompleted ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>

          {/* Active Tab Content Renderer */}
          {activeData && (
            <div className="max-w-[1400px] mx-auto animate-[fadeIn_0.5s_ease-out_forwards]">
              <div className="text-center mb-10 lg:mb-20 animate-on-tab opacity-0 translate-y-8">
                <h3 className="text-4xl lg:text-5xl font-outfit font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm">{activeData.title}</h3>
                {activeData.desc && <p className="text-slate-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">{activeData.desc}</p>}
              </div>

              <div className="space-y-12 lg:space-y-16">
                {activeData.blocks.map((block, idx) => (
                  <div key={idx} className={`flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12 animate-on-tab opacity-0 translate-y-8`}>

                    <div className="w-full lg:w-1/2">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-[#52b12c]/10 text-[#52b12c] mb-8 font-outfit font-extrabold text-3xl border border-[#52b12c]/20 shadow-sm">{idx + 1}</div>
                      <h3 className="text-3xl lg:text-4xl font-outfit font-bold text-slate-900 mb-6 tracking-tight leading-tight">{block.title}</h3>
                      {block.desc && <p className="text-slate-600 text-[16px] lg:text-[19px] leading-relaxed mb-10">{block.desc}</p>}

                      {block.bullets && block.bullets.length > 0 && (
                        <div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-500">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                            {block.bullets.map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-[15px] font-medium text-slate-700 leading-snug group cursor-default">
                                <div className="w-3 h-3 rounded-full bg-[#52b12c] mt-1 shrink-0 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {block.customRender}
                    </div>

                    <div className="w-full lg:w-1/2">
                      <div className={`rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative ${block.imageHeight ? 'aspect-[3/4]' : 'aspect-[4/3]'} group border-[6px] border-white`}>
                        <img src={block.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                        <div className="absolute inset-0 bg-[#52b12c]/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem] lg:rounded-[3rem]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Basic Core Service Modal (For the 6 top-layer cards) */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity cursor-pointer" onClick={() => setSelectedService(null)}></div>

          <div className="relative bg-white w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row translate-y-8 animate-[slideUp_0.4s_ease-out_forwards] border border-slate-200">

            {/* Image Section */}
            <div className="w-full md:w-5/12 aspect-video md:aspect-auto md:h-full relative shrink-0 hidden md:block">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 opacity-80 mix-blend-multiply ${selectedService.themeColor}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>

              <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-6 sm:left-8 md:left-10 right-6 sm:right-8 md:right-10 text-white text-shadow-sm">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                  {React.cloneElement(selectedService.icon, { className: "text-white", size: 36 })}
                </div>
                <h2 className="text-3xl lg:text-4xl font-outfit font-bold leading-tight drop-shadow-lg">{selectedService.title}</h2>
                <p className="mt-4 text-slate-200 text-lg border-l-2 border-white pl-4 italic">
                  {selectedService.shortDesc}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-12 relative flex flex-col overflow-y-auto bg-white custom-scrollbar max-h-[95vh] sm:max-h-[90vh]">
              <div className="md:hidden flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0 shadow-inner ${selectedService.themeColor} text-white`}>
                  {React.cloneElement(selectedService.icon, { size: 28 })}
                </div>
                <h2 className="text-2xl font-outfit font-bold text-slate-900 leading-tight pr-8">{selectedService.title}</h2>
              </div>
              <button onClick={() => setSelectedService(null)} className="absolute top-5 right-5 md:top-8 md:right-8 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 hover:rotate-90 transition-all z-20 shadow-sm border border-slate-200"><X size={24} /></button>

              <div className="pr-1 md:pr-4 flex-grow">
                <div className="mb-4">
                  <h4 className="text-xl md:text-2xl font-outfit font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className={`w-1.5 h-6 rounded-full shadow-sm ${selectedService.themeColor}`}></div>
                    Key Capabilities
                  </h4>

                  {selectedService.features && selectedService.features.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-700 text-[15px] font-medium bg-slate-50 shadow-[0_3px_15px_rgba(0,0,0,0.03)] p-4 rounded-xl border border-slate-100 leading-snug hover:-translate-y-1 transition-all group">
                          <div className={`w-3 h-3 shrink-0 rounded-full mt-1.5 shadow-sm ${selectedService.themeColor} group-hover:scale-125 transition-transform border border-white`}></div>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end shrink-0 sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pb-2 z-10">
                {selectedService.id === 'transaction-advisory' ? (
                  <button onClick={() => { setSelectedService(null); handleStepClick('transaction-advisory'); }} className={`px-8 py-3.5 rounded-xl text-white font-outfit font-bold tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center bg-[#52b12c]`}>
                    See In-Depth Details Below
                  </button>
                ) : (
                  <button onClick={() => setSelectedService(null)} className={`px-8 py-3.5 rounded-xl text-white font-outfit font-bold tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center ${selectedService.themeColor}`}>
                    Close
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          to { transform: translateY(0); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .hide-scroll-mobile::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll-mobile {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
