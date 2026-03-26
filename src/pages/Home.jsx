import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Lightbulb, PieChart, Briefcase, DollarSign, Globe, Settings,
  ShieldCheck, ArrowRight, TrendingUp, Target, Users,
  Brain, Calculator, Scale, HeartHandshake, RefreshCw, Star
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCfoService, setActiveCfoService] = useState(0);

  const virtualCfoServices = [
    { title: "Financial Advisory", desc: "Expert advisory for strategic growth, M&A, and financial structuring to maximize business value.Empowering businesses and individuals with expert financial guidance, data-driven insights, and tailored strategies to achieve long-term success.", img: "/images/office-workspace.png", bullets: ["Strategic Financial Planning", "Capital & Debt Structuring", "M&A Financial Feasibility"] },
    { title: "Financial Projections", desc: "Robust financial modeling to forecast revenue, expenses, and growth scenarios for strategic planning.Our projections are built on realistic assumptions, market trends, and your business objectives—enabling you to make informed strategic decisions and present credible financials to investors and stakeholders.", img: "/images/business-discussion.png", bullets: ["Revenue Growth Forecasting", "Scenario & Sensitivity Analysis", "Long-term Business Modeling"] },
    { title: "Cash Flow Projections", desc: "Accurate cash flow forecasting to ensure liquidity, manage working capital, and avoid financial crunches.By analyzing your revenue cycles, expense patterns, and growth plans, we create structured cash flow models that ensure your business remains financially agile and prepared for both opportunities and challenges.", img: "/images/team-collaboration.png", bullets: ["Working Capital Optimization", "Daily/Weekly Cash Formatting", "Liquidity Risk Management"] },
    { title: "Budgeting", desc: "Comprehensive budgeting frameworks to control costs, set financial targets, and track operational performance.At Medhya Investments, our Budgeting services are designed to help businesses and individuals manage their finances with clarity and control. We create structured budgets that align with your strategic objectives, ensuring optimal allocation of resources and improved financial discipline.", img: "/images/contact-advisor.png", bullets: ["Department-wise Budgeting", "Zero-based Budgeting", "Quarterly Reforecasting"] },
    { title: "Cost Management", desc: "Strategic cost analysis and reduction initiatives to improve profit margins and operational efficiency.At Medhya Investments, our Cost Management services help businesses gain better control over their expenses while maintaining operational excellence. We analyze your cost structures, identify inefficiencies, and implement strategies to optimize spending without compromising quality or growth.", img: "/images/office-workspace.png", bullets: ["Overhead Cost Reduction", "Process Efficiency Analysis", "Vendor Negotiation Support"] },
    { title: "Audit Support", desc: "End-to-end support for statutory, internal, and tax audits, ensuring compliance and smooth execution.At Medhya Investments, our Audit Support services are designed to help businesses navigate audits with confidence and ease. We assist in preparing, organizing, and reviewing financial records to ensure accuracy, transparency, and compliance with regulatory requirements.", img: "/images/business-discussion.png", bullets: ["Audit Readiness Check", "Coordination with External Auditors", "Resolving Audit Qualifications"] },
    { title: "Corporate Governance", desc: "Implementing strong governance frameworks to ensure transparency, accountability, and regulatory compliance.At Medhya Investments, our Corporate Governance services help organizations establish robust frameworks that promote ethical practices, regulatory compliance, and effective decision-making. We support businesses in implementing governance structures that enhance accountability, protect stakeholder interests, and strengthen organizational integrity.", img: "/images/team-collaboration.png", bullets: ["Board Meeting Support", "Ethics & Code of Conduct", "Stakeholder Communication"] },
    { title: "Organizational Structure", desc: "Designing and optimizing organizational structures for better financial control and resource allocation.At Medhya Investments, we help businesses design and optimize their Organizational Structure to support growth, improve efficiency, and enhance decision-making. A well-defined structure ensures clear roles, streamlined communication, and effective coordination across teams.", img: "/images/contact-advisor.png", bullets: ["Finance Function Transformation", "Role & KPI Definition", "Scalable Team Building"] },
    { title: "Risk Assessment", desc: "Identifying, quantifying, and mitigating financial and operational risks to protect business assets.At Medhya Investments, our Risk Assessment services help businesses identify potential threats, evaluate their impact, and implement effective mitigation strategies. We provide a structured approach to managing financial, operational, and strategic risks—ensuring your organization is prepared for uncertainties.", img: "/images/office-workspace.png", bullets: ["Enterprise Risk Management", "Mitigation Strategies", "Continuous Monitoring Framework"] },
    { title: "Compliances of the Various Acts Applicable", desc: "Ensuring adherence to all statutory laws, taxation acts, and regulatory requirements relevant to your industry.At Medhya Investments, we assist businesses in ensuring full compliance with all applicable laws, regulations, and statutory requirements. Our services are designed to help organizations navigate complex legal frameworks while minimizing risks and avoiding penalties.", img: "/images/business-discussion.png", bullets: ["Direct & Indirect Tax Filing", "FEMA & RBI Approvals", "Secretarial & ROC Filings"] },
    { title: "Internal Control", desc: "Developing and strengthening internal control systems to prevent fraud and operational inefficiencies.At Medhya Investments, our Internal Control services are designed to help organizations establish strong control frameworks that ensure accuracy, accountability, and risk management. We assess your existing processes, identify control gaps, and implement structured systems to improve operational efficiency and financial reliability.", img: "/images/team-collaboration.png", bullets: ["Fraud Prevention Checks", "Delegation of Authority Matrix", "System Access Reviews"] },
    { title: "Accounting Policies and Procedures", desc: "Drafting standardized accounting manuals, policies, and SOPs for consistent financial reporting.At Medhya Investments, we help organizations develop and implement comprehensive Accounting Policies and Procedures that ensure financial accuracy, consistency, and compliance with applicable standards.At Medhya Investments, we help organizations develop and implement comprehensive Accounting Policies and Procedures that ensure financial accuracy, consistency, and compliance with applicable standards.", img: "/images/contact-advisor.png", bullets: ["IndAS / IFRS Implementation", "Accounts Manual Drafting", "SOP Development"] },
    { title: "Setting up an Accounting System", desc: "Implementing robust accounting software and ERP systems tailored to your business needs.At Medhya Investments, we help businesses set up robust and scalable accounting systems tailored to their operational needs. A well-structured accounting system is the foundation of effective financial management, enabling accurate record-keeping, compliance, and informed decision-making.We assist in selecting the right tools, defining processes, and implementing standardized practices to ensure your financial data is organized, reliable, and easily accessible.", img: "/images/office-workspace.png", bullets: ["ERP Evaluation & Selection", "Chart of Accounts Design", "System Integration Support"] },
    { title: "MIS Reporting", desc: "Designing comprehensive Management Information Systems (MIS) for data-driven executive decision making.At Medhya Investments, our MIS (Management Information System) Reporting services provide businesses with accurate, timely, and insightful financial reports that support informed decision-making. We convert complex financial data into clear, structured reports that highlight key performance indicators, trends, and actionable insights.Our MIS reports are tailored to your business needs, enabling management to monitor performance, control costs.", img: "/images/business-discussion.png", bullets: ["Customized Dashboards", "Monthly Performance Reviews", "Key Metric Tracking"] },
    { title: "Year End Accounts Closure and Filing", desc: "Managing the complete year-end accounting cycle, finalization of books, and timely statutory filings.At Medhya Investments, we provide end-to-end support for Year-End Accounts Closure and Filing, ensuring your financial records are accurate, complete, and compliant with all regulatory requirements.Our team assists in closing books of accounts, reconciling balances, preparing financial statements, and managing statutory filings. We ensure that your financial data reflects a true and fair view of your business while meeting all compliance deadlines efficiently.", img: "/images/team-collaboration.png", bullets: ["Trial Balance Finalization", "Tax Provisioning & Audit Prep", "Annual Return Filing"] }
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
    navigate('/services', { state: { serviceId: serviceId } });
  };

  const services = [
    {
      id: 'incubation',
      icon: <Lightbulb size={28} className="text-blue-600" />,
      title: 'Incubation Idea Validation',
      desc: 'Strategic incubation support and concept validation to build a strong startup foundation.',
      image: '/images/team-collaboration.png',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'valuation',
      icon: <PieChart size={28} className="text-blue-600" />,
      title: 'Valuation',
      desc: 'Expert business valuation services using globally accepted methodologies.',
      image: '/images/business-discussion.png',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'transaction-advisory',
      icon: <ShieldCheck size={28} className="text-blue-600" />,
      title: 'Transaction Advisory',
      desc: 'End-to-end guidance through complex financial and M&A transactions.',
      image: '/images/office-workspace.png',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 'management-consultancy',
      icon: <Briefcase size={28} className="text-blue-600" />,
      title: 'Management Consultancy',
      desc: 'Strategic consulting to optimize operations and enhance corporate performance.',
      image: '/images/contact-advisor.png',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'outsourcing',
      icon: <Globe size={28} className="text-blue-600" />,
      title: 'Outsourcing',
      desc: 'Comprehensive outsourcing for accounting, payroll, and statutory compliance.',
      image: '/images/contact-header.png',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      id: 'company-management',
      icon: <Settings size={28} className="text-blue-600" />,
      title: 'Company Management',
      desc: 'Professional management acting as your virtual executives for daily excellence.',
      image: '/images/contact-exterior.png',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
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
            className="w-full h-full object-cover animate-kenburns"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

          <h1 className="text-[clamp(3rem,6vw,5rem)] font-extrabold leading-tight tracking-tight text-white">
            Medhya Investments
          </h1>
          <h2 className="mt-4 text-[clamp(1.2rem,2.5vw,2rem)] font-medium text-blue-100">
            Empowering Wealth, Enabling Growth
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Your trusted financial partner delivering end-to-end financial solutions.
            From guiding startups through fund-raising to empowering individuals with
            strategic wealth creation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/services"
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3.5 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>

          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-8 lg:mb-10 opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial expertise tailored to your specific business goals and life stage.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-max">
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center h-full
      transition-all duration-500 ease-out
      hover:bg-blue-50 hover:border-blue-200
      hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)]
      active:-translate-y-2 active:shadow-[0_20px_40px_rgba(37,99,235,0.15)]
      p-4 sm:p-5 md:p-6"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >

                {/* 🔥 Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow items-center text-center">

                  <h3 className="text-lg sm:text-xl font-outfit font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 pt-3 border-t border-slate-100 mt-2">
                    <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">
                      Learn More
                    </span>
                    <ArrowRight size={16} />
                  </div>

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
            <div className="w-full lg:w-1/3 bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-6 relative shadow-sm max-h-[280px] sm:max-h-[320px] lg:max-h-none overflow-y-auto lg:overflow-visible custom-scrollbar">
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
            <div
              id="virtual-cfo-content"
              className="group w-full lg:w-2/3 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 flex flex-col gap-4 sm:gap-6 lg:gap-8 min-h-auto lg:min-h-[600px] lg:sticky lg:top-32 z-10
  bg-white border border-slate-100
  transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:bg-gradient-to-br hover:from-blue-700 hover:to-green-300
  hover:shadow-[0_25px_60px_rgba(37,99,235,0.3)]"
            >

              {/* Enlarged Image Header */}
              <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden shadow-md relative group cursor-pointer aspect-video">
                <img src={virtualCfoServices[activeCfoService].img} alt={virtualCfoServices[activeCfoService].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-outfit font-extrabold text-xl border border-blue-100 shadow-sm shrink-0">
                    {activeCfoService + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-slate-900 tracking-tight leading-tight">
                    {virtualCfoServices[activeCfoService].title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8">
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

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From application to deployment — a structured, transparent process.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal connecting line - Desktop only */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full -z-0"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4">
              {[
                {
                  number: '1',
                  title: 'Startup Applies',
                  desc: 'Submit your pitch deck and application through our platform. Our team reviews every submission.'
                },
                {
                  number: '2',
                  title: 'Deal Screening',
                  desc: 'Our investment committee reviews and scores each application rigorously across 6 key criteria.'
                },
                {
                  number: '3',
                  title: 'Syndicate Formed',
                  desc: 'Qualified investors are invited to review the deal memo and commit capital within 30 days.'
                },
                {
                  number: '4',
                  title: 'Capital Deployed',
                  desc: 'Funds are pooled and deployed via SPV with clear terms, legal structure, and investor protections.'
                },
                {
                  number: '5',
                  title: 'Post-Investment Support',
                  desc: 'Ongoing support through our mentor network, portfolio community, and ecosystem resources.'
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start relative">
                  {/* Circle Number */}
                  <div className="relative z-10 w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mb-4 shadow-lg flex-shrink-0">
                    <span className="font-outfit font-bold text-white text-3xl sm:text-4xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="font-outfit font-semibold text-lg sm:text-xl text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Than Capital */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-white mb-4">
              More Than Capital
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Gain strategic investors who help scale your company. We're partners, not just funders.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: <Users size={28} />,
                title: 'Access to Investors',
                desc: 'Direct introductions to 150+ active angels and institutional co-investors across every major sector.'
              },
              {
                icon: <Star size={28} />,
                title: 'Strategic Mentorship',
                desc: 'Paired with advisors who\'ve scaled companies in your sector. Real operators, not just check-writers.'
              },
              {
                icon: <TrendingUp size={28} />,
                title: 'Fundraising Support',
                desc: 'Pitch coaching, deck review, and warm introductions to our network. We guide you through every step.'
              },
              {
                icon: <Globe size={28} />,
                title: 'Ecosystem Access',
                desc: 'Events, communities, and resources to accelerate your growth across 20+ global startup hubs.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)]"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-orange-400">{benefit.icon}</div>
                </div>

                {/* Content */}
                <h3 className="font-outfit font-semibold text-xl text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  {benefit.desc}
                </p>

                {/* Hover Bottom Line */}
               <div className="absolute bottom-0 left-0 w-full md:w-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 md:group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Life Cycle */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 border-y border-slate-100 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-4">
              The Startup <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Life Cycle</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our end-to-end expertise is designed to elevate your startup at every crucial milestone. From ideation to exit, we're your strategic financial partner.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical connecting line - Desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-orange-300 -translate-x-1/2 rounded-full"></div>

            {/* Responsive Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 relative">
              {[
                {
                  stage: "Idea Incubation",
                  icon: <Lightbulb size={32} />,
                  desc: "We help validate your business idea with financial feasibility assessments, market sizing, and business model structuring — laying a sound economic foundation.",
                  color: "from-orange-500 to-orange-200",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200"
                },
                {
                  stage: "Start Up",
                  icon: <Target size={32} />,
                  desc: "From company incorporation and regulatory registrations to setting up accounting systems and initial tax structuring — we ensure your startup is operationally ready.",
                  color: "from-blue-500 to-blue-200",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200"
                },
                {
                  stage: "Growth Stage",
                  icon: <TrendingUp size={32} />,
                  desc: "As your revenue scales, we step in as your Virtual CFO — managing MIS reporting, cash flow planning, and investor-ready financials that demonstrate growth.",
                  color: "from-emerald-500 to-emerald-200",
                  bgColor: "bg-emerald-50",
                  borderColor: "border-emerald-200"
                },
                {
                  stage: "Funding",
                  icon: <DollarSign size={32} />,
                  desc: "We structure and execute equity and debt fund raises — from angel rounds and VC pitch decks to bank loans — connecting you with the right capital partners.",
                  color: "from-violet-500 to-violet-200",
                  bgColor: "bg-violet-50",
                  borderColor: "border-violet-200"
                },
                {
                  stage: "Getting Established",
                  icon: <ShieldCheck size={32} />,
                  desc: "We advise on corporate governance, compliance frameworks, strategic financial decisions, and capital structure optimisation — building institutional credibility.",
                  color: "from-cyan-500 to-cyan-200",
                  bgColor: "bg-cyan-50",
                  borderColor: "border-cyan-200"
                },
                {
                  stage: "Expansion",
                  icon: <Globe size={32} />,
                  desc: "Expanding into new markets requires financial planning. We guide you through M&A advisory, cross-border FEMA compliance, and multi-entity structuring.",
                  color: "from-pink-500 to-pink-200",
                  bgColor: "bg-pink-50",
                  borderColor: "border-pink-200"
                },
                {
                  stage: "Mature",
                  icon: <PieChart size={32} />,
                  desc: "We help you prepare for a public listing — coordinating DRHP filing, SEBI compliance, and investor roadshows with confidence.",
                  color: "from-indigo-500 to-indigo-200",
                  bgColor: "bg-indigo-50",
                  borderColor: "border-indigo-200"
                },
                {
                  stage: "Exit",
                  icon: <ArrowRight size={32} />,
                  desc: "Whether strategic sale, secondary buyout, or post-IPO exit, we advise on maximising exit value and ensuring tax-efficient outcomes.",
                  color: "from-amber-500 to-amber-200",
                  bgColor: "bg-amber-50",
                  borderColor: "border-amber-200"
                }
              ].map((item, idx) => (
                <div key={idx} className="opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true" style={{ transitionDelay: `${idx * 50}ms` }}>
                  {/* Desktop Connector */}
                  {idx % 2 === 0 && (
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-slate-300 to-transparent -translate-y-1/2 ml-0"></div>
                  )}
                  {idx % 2 === 1 && (
                    <div className="hidden lg:block absolute top-1/2 -left-1/2 w-1/2 h-1 bg-gradient-to-r to-slate-300 from-transparent -translate-y-1/2"></div>
                  )}

                  <div className={`group relative h-full rounded-2xl sm:rounded-3xl border-2 p-5 sm:p-6 md:p-8 transition-all duration-500 cursor-pointer
                    bg-white ${item.borderColor}
                    hover:shadow-2xl hover:-translate-y-2 hover:border-opacity-100
                    active:shadow-2xl active:-translate-y-2 active:border-opacity-100
                    overflow-hidden`}>

                    {/* Animated background gradient on hover - Visible on mobile */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.color} -z-10`}></div>

                    {/* Step Number Badge */}
                    <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-outfit font-bold text-lg sm:text-xl shadow-lg`}>
                      {idx + 1}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
                        <div className={`w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-active:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-900 group-hover:text-white group-active:text-white transition-colors duration-300 pt-1">
                          {item.stage}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 group-hover:text-white/90 group-active:text-white/90 text-sm sm:text-base leading-relaxed transition-colors duration-300">
                        {item.desc}
                      </p>

                      {/* Bottom accent line - Visible on mobile */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full group-active:w-full transition-all duration-500 rounded-tl-full`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-14 sm:mt-18 md:mt-24 text-center opacity-0 translate-y-8 transition-all duration-700 delay-300" data-scroll-animate="true">
            <p className="text-slate-600 text-sm sm:text-base mb-6">Ready to transform your startup journey?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-outfit font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
              Get Started Today
              <ArrowRight size={20} />
            </Link>
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
              Our <span className="bg-gradient-to-br from-blue-800 to-green-600 bg-clip-text text-transparent">Advantages</span>
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
                  <div className={`w-36 h-36 rounded-full bg-white border-[8px] flex items-center justify-center shadow-2xl mb-8 relative transition-all duration-500 z-10 ${idx % 2 === 0 ? 'border-blue-600 text-blue-600 group-hover:bg-blue-600 group-active:bg-blue-600 group-hover:text-white group-active:text-white group-hover:border-blue-100 group-active:border-blue-100' : 'border-blue-500 text-blue-500 group-hover:bg-blue-500 group-active:bg-blue-500 group-hover:text-white group-active:text-white group-hover:border-blue-50 group-active:border-blue-50'}`}>

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

                    <div className="transform transition-transform duration-500 group-hover:scale-110 group-active:scale-110 group-hover:rotate-6 group-active:rotate-6">
                      {adv.icon}
                    </div>
                  </div>

                  <h4 className="text-[1.15rem] font-outfit font-bold text-slate-800 text-center max-w-[200px] leading-snug group-hover:text-blue-600 group-active:text-blue-600 transition-colors">
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
      <section className="py-10 lg:py-14 relative bg-slate-700 overflow-hidden">

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-700 to-slate-800 opacity-90 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10 opacity-0 translate-y-8 transition-all duration-700">

          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
            Ready to Transform Your Financial Future?
          </h2>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your goals with our expert advisors.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-outfit font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase tracking-wide text-sm"
          >
            Get Started Today <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      <style>{`
        /* Mobile-friendly hover states - Make effects visible on touch devices */
        @media (max-width: 768px) {
          /* Services: Show gradient backgrounds on mobile */
          .group .absolute.inset-0.bg-gradient-to-br,
          .group .absolute.top-0.left-0.w-full.h-1 {
            opacity: 0.5 !important;
          }
          
          /* Startup Life Cycle: Show colored backgrounds and accents on mobile */
          .grid.grid-cols-1.lg\\:grid-cols-2 .group .absolute.inset-0.opacity-0 {
            opacity: 0.7 !important;
          }
          
          /* Advantages circles - enhance visibility */
          .w-36.h-36 {
            opacity: 1;
            visibility: visible;
          }
        }
        
        /* On touch devices, enhance active state feedback */
        @media (hover: none) and (pointer: coarse) {
          .group:active {
            transform: translateY(-4px) !important;
          }
          
          /* Services cards - ensure gradient shows on touch */
          .group:active > div:first-child,
          .group:focus-within > div:first-child {
            opacity: 1 !important;
          }
        }
        
        /* Improved touch feedback and better gradient visibility */
        .group:focus-within .absolute.inset-0.opacity-0 {
          opacity: 0.8 !important;
        }
        
        .group:focus-within .absolute.bottom-0.left-0.h-1 {
          width: 100% !important;
        }
      `}</style>
    </div>
  );
}
