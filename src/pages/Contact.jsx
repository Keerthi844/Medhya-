import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. Our team will get back to you shortly.");
  };

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
      Get In <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
    </h1>

    {/* Description */}
    <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
      Discuss your financial goals with our expert advisors today.<br/>
      Whether it's strategy, compliance, or fundraising, we're here to help you succeed.
    </p>

  </div>
</section>

      {/* Main Contact Section */}
      <section className="py-8 lg:py-12 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 lg:gap-8 items-center">
            
            {/* Left: Contact Info */}
            <div data-scroll-animate="true" className="opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-12">Contact Us</h2>
              
              <div className="flex flex-col gap-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit font-bold text-slate-900 mb-1">Address:</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] max-w-xs">Financial District, Gachibowli<br/>Hyderabad, Telangana, India<br/>500032</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit font-bold text-slate-900 mb-1">Contact Numbers:</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px]">+91 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit font-bold text-slate-900 mb-1">Email Address:</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px]">info@medhyainvestments.com<br/>advisory@medhyainvestments.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Graphic and Image */}
            <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto aspect-[4/3] flex items-center justify-center opacity-0 translate-y-8 transition-all duration-700 delay-200" data-scroll-animate="true">
              {/* Background Shapes replicating the user reference */}
              <div className="absolute top-0 right-0 w-[85%] h-full bg-blue-800 rounded-tl-[100px] rounded-br-[100px] shadow-lg"></div>
              <div className="absolute bottom-0 right-0 w-[85%] h-[45%] bg-blue-400 rounded-br-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-[45%] h-[30%] bg-blue-600 rounded-bl-[100px] rounded-tr-[100px]"></div>
              
              {/* Foreground Image */}
              <div className="relative z-10 w-[88%] h-[80%] rounded-[2rem] overflow-hidden border-[8px] border-white shadow-xl bg-slate-200">
                <img src="/images/contact-header.png" alt="Get In Touch" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Send Message Section (Form) */}
      <section className="py-8 lg:py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-12 opacity-0 translate-y-8 transition-all duration-700" data-scroll-animate="true">
             <h2 className="text-4xl font-outfit font-bold text-slate-900 mb-4">Send us a Message</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">Fill out the form below and our advisors will reach out shortly.</p>
           </div>
           
           <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-xl opacity-0 translate-y-8 transition-all duration-700 delay-200" data-scroll-animate="true">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                    <input type="text" id="firstName" placeholder="John" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all font-inter" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input type="text" id="lastName" placeholder="Doe" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all font-inter" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all font-inter" />
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject / Service of Interest</label>
                  <select id="subject" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all font-inter appearance-none pr-12 cursor-pointer relative z-20 bg-transparent">
                    <option value="">Select a service...</option>
                    <option value="startup">Startup Advisory</option>
                    <option value="investor">Investor Services</option>
                    <option value="valuation">Valuation</option>
                    <option value="cfo">Virtual CFO</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-[38px] pointer-events-none text-slate-500 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your requirements..." required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all font-inter resize-y"></textarea>
                </div>
                
                <button type="submit" className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-outfit font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase tracking-wide text-sm">
                  Send Message <Send size={18} />
                </button>
              </form>
           </div>
        </div>
      </section>

      {/* Office location visual */}
      <section className="w-full h-[500px] bg-slate-100 relative overflow-hidden opacity-0 transition-opacity duration-1000" data-scroll-animate="true">
        <img src="/images/contact-exterior.png" alt="Medhya Office Exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-12 lg:p-24">
          <h2 className="text-4xl font-outfit font-bold text-white mb-4">Visit Our Headquarters</h2>
          <p className="text-xl text-slate-200 flex items-center gap-3">
            <MapPin size={28} className="text-blue-400" /> Financial District, Gachibowli, Hyderabad
          </p>
        </div>
      </section>
    </div>
  );
}
