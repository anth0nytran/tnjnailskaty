import React from 'react';
import { MapPin, ArrowRight, Star, Quote, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from '../constants';

const LuxuryVariant: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-stone-200 font-sans selection:bg-gold-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-neutral-950/90 backdrop-blur-md z-50 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-400">
            <a href="#about" className="hover:text-gold-400 transition-colors duration-300">The Salon</a>
            <a href="#owners" className="hover:text-gold-400 transition-colors duration-300">Founders</a>
          </div>

          <a href="#" className="text-3xl font-serif font-bold tracking-wider text-white border-y-2 border-gold-600 px-4 py-1 hover:text-gold-400 transition-colors">
            T&J
          </a>

          <div className="flex items-center gap-8">
             <div className="hidden md:flex space-x-12 text-[11px] tracking-[0.25em] uppercase font-medium text-stone-400">
                <a href="#services" className="hover:text-gold-400 transition-colors duration-300">Menu</a>
                <a href="#contact" className="hover:text-gold-400 transition-colors duration-300">Visit</a>
            </div>
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-8 py-3 bg-gold-600 text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - SEO Optimized */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1632345031435-8727f68979a6?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern nail salon interior in Katy, Texas" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/30 to-neutral-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <p className="text-gold-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-8">
            Family-Owned Nail Care • Est. 1999
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
            Modern nail care<br/>
            <span className="text-gold-500 italic pr-2">with a neighborhood touch.</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
            We pair consistent sanitation with current techniques and friendly service for families across <strong>Cinco Ranch</strong>, <strong>Elyson</strong>, and <strong>Katy</strong>.
          </p>
          <div className="flex flex-col items-center gap-8">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="group relative px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase overflow-hidden hover:border-gold-500 transition-colors duration-300"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Book an Appointment</span>
              <div className="absolute inset-0 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </header>

      {/* About Section - SEO & Story */}
      <section id="about" className="py-24 md:py-32 bg-stone-50 text-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative p-4 border border-gold-600/30">
              <div className="absolute top-0 left-0 w-full h-full border border-neutral-200 transform translate-x-3 translate-y-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop" 
                alt="High End Manicure Services Katy TX" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-gold-600"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-gold-700 font-bold">Family Owned in Katy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
                Built in Katy. <span className="italic text-gold-700">Run by family.</span>
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
                For 25+ years we have focused on steady craftsmanship, honest advice, and a studio that feels easy to visit. Every service includes fresh tools, lined tubs, and the brands our regulars trust.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
                Whether you're driving in from <strong>Cinco Ranch</strong>, <strong>Elyson</strong>, or <strong>Old Katy</strong>, you get caring technicians, clear pricing, and a calm space to reset.
              </p>
              
              <div className="flex gap-12 border-t border-stone-200 pt-8">
                <div>
                  <h4 className="font-serif text-4xl mb-1 text-neutral-900">25+</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Years locally owned</p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl mb-1 text-neutral-900">Daily</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Sanitation checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owners Section */}
      <section id="owners" className="py-24 md:py-32 bg-neutral-900 relative border-t border-neutral-800">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                
                {/* Text Content */}
                <div className="md:col-span-5 order-2 md:order-1">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-6">Owners & Operators</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Meet Jenny & Tony</h2>
                    <h3 className="text-xl font-serif text-stone-400 italic mb-8">Hands-on leadership since 1999</h3>
                    
                    <p className="text-stone-400 leading-relaxed mb-6 font-light">
                        Jenny keeps the artistry sharp—she loves clean lines, healthy natural nails, and helping guests pick the right finish for work, school, or events.
                    </p>
                    <p className="text-stone-400 leading-relaxed mb-10 font-light">
                        Tony manages the day-to-day details so every technician has what they need and every guest feels like a neighbor. Together they make sure the studio feels approachable, honest, and consistent.
                    </p>
                    
                    <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center gap-3 text-white border-b border-gold-600 pb-2 hover:text-gold-500 transition-colors group">
                        <span className="uppercase tracking-widest text-xs">Meet the Team</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Image Content */}
                <div className="md:col-span-7 order-1 md:order-2 relative">
                    <div className="relative z-10 aspect-[4/3] md:aspect-video bg-neutral-800 border border-neutral-700 p-2 group">
                         <div className="absolute inset-0 border border-gold-600/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" 
                            alt="Professional Nail Salon Owners Consultation" 
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                         />
                         <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-6 py-3 border-l-2 border-gold-600">
                             <p className="text-white font-serif italic text-lg">Jenny & Tony</p>
                         </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Service Menu - Modern Offerings */}
      <section id="services" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
        {/* Decorative Gold Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-gold-600 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20 mt-12">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-600 block mb-4">Service Menu</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">What We Offer</h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
                Every appointment includes lined tubs, fresh files, and technicians who listen first. Pick the finish, shape, or design you need—we will walk you through honest upkeep tips before you leave.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            {SERVICES.map((service, index) => (
              <div key={index} className="group relative">
                <div className="flex justify-between items-end border-b border-stone-800 pb-4 mb-4 group-hover:border-gold-600/50 transition-colors duration-500">
                  <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors">{service.name}</h3>
                  <span className="text-gold-500 italic font-serif">from {service.price || "$30"}</span>
                </div>
                <p className="text-stone-500 font-light leading-relaxed text-sm tracking-wide">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-stone-500 text-sm mb-8 italic">Light refreshments available for longer appointments.</p>
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-block px-12 py-4 bg-white text-black text-xs font-bold tracking-[0.25em] uppercase hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Call to Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Cards */}
      <section id="reviews" className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-2 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-gold-600 fill-gold-600" />)}
                </div>
                <h2 className="text-4xl font-serif text-neutral-900 mb-4">Neighbors Vouch for Us</h2>
                <p className="text-stone-500 text-sm tracking-widest uppercase">Reviews from the families we serve</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-white p-12 shadow-xl shadow-stone-200/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 border-b-4 border-transparent hover:border-gold-500">
                        <Quote className="text-stone-200 mb-6 group-hover:text-gold-500 transition-colors" size={40} />
                        <p className="text-neutral-800 font-serif leading-relaxed text-lg mb-8 italic">
                            "{t.text}"
                        </p>
                        <div className="mt-auto">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 block mb-1">{t.author}</span>
                            <span className="text-[10px] uppercase tracking-wider text-gold-600">Katy Neighbor</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Location / Footer - SEO Optimized */}
      <footer id="contact" className="bg-black text-stone-400 pt-24 pb-12 border-t border-stone-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            
            {/* Brand */}
            <div className="max-w-md">
              <h4 className="font-serif text-4xl text-white mb-6">T&J Nails</h4>
              <p className="text-sm leading-relaxed mb-8 text-stone-500 font-light">
                A family-owned studio in <strong>Katy, Texas</strong> focused on clean tools, current techniques, and a friendly welcome every visit.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-stone-800 flex items-center justify-center text-stone-500 hover:border-gold-500 hover:text-gold-500 transition-all rounded-full">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-stone-800 flex items-center justify-center text-stone-500 hover:border-gold-500 hover:text-gold-500 transition-all rounded-full">
                    <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h5 className="text-white font-serif text-lg mb-6">Contact & Location</h5>
                    <address className="not-italic">
                        <div className="flex items-start gap-3 mb-4">
                            <MapPin size={18} className="text-gold-500 mt-1 shrink-0" />
                            <p className="text-sm tracking-wide leading-relaxed">
                                {BUSINESS_INFO.address}<br/>
                                {BUSINESS_INFO.city}<br/>
                                <span className="text-stone-600 text-xs mt-2 block">Serving Katy, Cinco Ranch, and Elyson families</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-gold-500 shrink-0" />
                            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white text-lg font-serif italic hover:text-gold-500 transition-colors">{BUSINESS_INFO.phone}</a>
                        </div>
                    </address>
                </div>
                <div>
                    <h5 className="text-white font-serif text-lg mb-6">Opening Hours</h5>
                    <ul className="space-y-3 text-sm font-light">
                        <li className="flex justify-between w-48 border-b border-stone-800 pb-1"><span>Mon - Sat </span> <span className="text-white"> 9:00 AM - 7:00 PM</span></li>
                        <li className="flex justify-between w-48 border-b border-stone-800 pb-1"><span>Sunday</span> <span className="text-white">CLOSED</span></li>
                    </ul>
                </div>
            </div>
          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600">
            <p>© {new Date().getFullYear()} T&J Nails Katy. All Rights Reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-gold-500 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gold-500 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryVariant;