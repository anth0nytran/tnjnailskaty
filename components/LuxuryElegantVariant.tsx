import React, { useState } from 'react';
import { MapPin, ArrowRight, Star, Quote, Phone, Clock, Instagram, Facebook, Sparkles, Check, Calendar, User, Mail } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, GALLERY_IMAGES, NEIGHBOR_REVIEWS } from '../constants';
import heroVideo from '../assets/hero_video.mp4';
import ownersImage from '../assets/owners.JPG';
import neighborsParallaxBg from '../assets/neighbors_parallax.jpg';

const LuxuryVariant: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-neutral-950 text-stone-200 font-sans selection:bg-gold-600 selection:text-white pb-20 md:pb-0">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Funnel Hook) */}
      <div className="bg-gold-600 text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center py-3 px-4 z-50 relative">
        <span>✨ Katy Neighbors: Book Online for 10% Off Your First Visit ✨</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-neutral-950/95 backdrop-blur-md z-40 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="hidden md:flex space-x-8 text-[10px] tracking-[0.2em] uppercase font-medium text-stone-400">
            <a href="#gallery" className="hover:text-gold-400 transition-colors">Our Work</a>
            <a href="#owners" className="hover:text-gold-400 transition-colors">The Family</a>
          </div>

          <a href="#" className="text-2xl font-serif font-bold tracking-wider text-white border-y border-gold-600 px-3 py-1 hover:text-gold-400 transition-colors">
            T&J
          </a>

          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToBooking}
              className="px-6 py-2 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-white transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION (The Offer & Authority) */}
      <header className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover brightness-75"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Scrims for readability (keep video visible, but protect text) */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full w-full">
          <div className="h-full w-full container mx-auto px-6 md:px-10 flex items-center">
            <div className="max-w-2xl mt-8">
              <div className="inline-flex items-center gap-2 border border-gold-500/50 rounded-full px-4 py-1 mb-8 bg-black/55 backdrop-blur-sm animate-fade-in">
                <Star size={12} className="text-gold-500 fill-gold-500" />
                <span className="text-gold-400 text-[10px] tracking-[0.2em] uppercase">Trusted by 2,000+ Katy Locals</span>
              </div>

              <h1 className="text-left text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-none drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
                Welcome to the <br />
                <span className="italic text-gold-500">Family.</span>
              </h1>
              
              <p className="text-left text-stone-200 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                More than just a salon. We are a family-owned sanctuary serving Katy, Cinco Ranch and Fulshear for over 25 years with warmth, care, and perfection.
              </p>
              
              <div className="flex flex-col items-start gap-4">
                <button 
                  onClick={scrollToBooking}
                  className="w-full md:w-auto px-12 py-5 bg-gold-600 text-black text-xs font-bold tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,40,0.3)] animate-pulse-slow"
                >
                  Book & Get 10% Off
                </button>
                <p className="text-stone-300 text-[10px] uppercase tracking-widest text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">Limited Time Offer</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. AUTHORITY BAR (Trust Signals) */}
      <div className="border-y border-stone-900 bg-neutral-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center">
            <div className="flex flex-col items-center md:items-start">
               <span className="font-serif text-2xl text-white">25+ Years</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Family Owned in Katy</span>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-stone-800"></div>
            <div className="flex flex-col items-center">
               <span className="font-serif text-2xl text-white">Medical Grade</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">We Prioritize Safety</span>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-stone-800"></div>
            <div className="flex flex-col items-center md:items-end">
               <span className="font-serif text-2xl text-white">4.9 Stars</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Loved by Neighbors</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. GALLERY (The Visual Proof - Masonry Layout) */}
      <section id="gallery" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Our Craft</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white">Beautiful Work, Happy Neighbors.</h2>
            </div>
            
            {/* Masonry Grid Implementation using CSS Columns */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {GALLERY_IMAGES.map((img, idx) => (
                    <div key={idx} className="break-inside-avoid relative group overflow-hidden border border-stone-800 bg-stone-900 rounded-sm">
                        <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors text-xs tracking-widest uppercase border-b border-stone-800 pb-1 hover:border-gold-500">
                    <Instagram size={14} /> See More Daily Looks
                </a>
            </div>
        </div>
      </section>

      {/* 5. MEET THE OWNERS (Building the Brand Connection) */}
      <section id="owners" className="py-24 bg-stone-50 text-neutral-900">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Image Side */}
                <div className="relative order-1">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-600/20 z-0"></div>
                    <div className="relative z-10 aspect-[4/5] overflow-hidden">
                         <img 
                            src={ownersImage} 
                            alt="Jenny and Tony Owners of T&J Nails Katy" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                         />
                    </div>
                </div>

                {/* Text Side */}
                <div className="order-2">
                    <span className="text-gold-600 text-xs font-bold tracking-[0.3em] uppercase block mb-4">Your Local Experts</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Hi, We're Jenny & Tony</h2>
                    
                    <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
                        "We raised our family right here in Katy, and we treat this salon as an extension of our home. When you walk in, we don't just want you to leave with beautiful nails—we want you to leave feeling cared for."
                    </p>
                    
                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-gold-100 p-2 rounded-full">
                                <Sparkles size={16} className="text-gold-700" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">Personal Attention</h4>
                                <p className="text-stone-500 text-sm font-light">We take the time to listen to exactly what you want.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="bg-gold-100 p-2 rounded-full">
                                <Check size={16} className="text-gold-700" />
                            </div>
                            <div>
                                <h4 className="font-serif text-lg">Clean & Safe</h4>
                                <p className="text-stone-500 text-sm font-light">Your health is our family's top priority.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={scrollToBooking} className="px-8 py-4 bg-neutral-900 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold-600 hover:text-white transition-all duration-300">
                        Come Say Hello
                    </button>
                </div>

            </div>
         </div>
      </section>

      {/* 3.5 SOCIAL PROOF (What Our Neighbors Say) - MOVED BELOW OWNERS */}
      <section id="neighbors" className="relative py-24 overflow-hidden border-b border-stone-900">
        {/* Parallax background image (desktop). */}
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-fixed"
          style={{ backgroundImage: `url(${neighborsParallaxBg})` }}
          aria-hidden="true"
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-neutral-950/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/90" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                From Our Community
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                What Our Neighbors Say
              </h2>
              <p className="text-stone-400 font-light mt-4 max-w-2xl leading-relaxed">
                Honest words from real Katy locals—because trust is earned one visit at a time.
              </p>
            </div>

            <a
              href={BUSINESS_INFO.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors text-xs tracking-widest uppercase border-b border-stone-800 pb-1 hover:border-gold-500 w-fit"
            >
              <Star size={14} className="text-gold-500" />
              Read more reviews
            </a>
          </div>

          {/* Mobile: swipeable carousel / Desktop: grid */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto pb-4">
            <div className="flex gap-4 snap-x snap-mandatory">
              {NEIGHBOR_REVIEWS.map((r, idx) => (
                <article
                  key={`${r.name}-${idx}`}
                  className="snap-start shrink-0 w-[85vw] max-w-[420px] border border-stone-800 bg-neutral-900/60 backdrop-blur-sm p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-white font-serif text-lg">{r.name}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-stone-500">
                        {r.meta?.badges?.includes('Local Guide') && (
                          <span className="text-gold-400/90 flex items-center gap-1">
                             <Star size={10} className="fill-gold-400/90" />
                             Local Guide
                          </span>
                        )}
                        {!r.meta?.badges?.includes('Local Guide') && (
                          <span>Neighbor</span>
                        )}
                      </div>
                    </div>
                    <Quote size={18} className="text-gold-500 shrink-0 mt-1" />
                  </div>

                  <p className="text-stone-300 font-light leading-relaxed text-sm">
                    {r.quote}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-6">
            {NEIGHBOR_REVIEWS.slice(0, 8).map((r, idx) => (
              <article
                key={`${r.name}-${idx}`}
                className="border border-stone-800 bg-neutral-900/60 backdrop-blur-sm p-8 hover:border-gold-600/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-white font-serif text-xl">{r.name}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-stone-500">
                      {r.meta?.badges?.includes('Local Guide') && (
                         <span className="text-gold-400/90 flex items-center gap-1">
                            <Star size={10} className="fill-gold-400/90" />
                            Local Guide
                         </span>
                      )}
                      {!r.meta?.badges?.includes('Local Guide') && (
                          <span>Neighbor</span>
                      )}
                    </div>
                  </div>
                  <Quote size={18} className="text-gold-500 shrink-0 mt-1" />
                </div>

                <p className="text-stone-300 font-light leading-relaxed text-sm">
                  {r.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SUMMARY (Condensed for Funnel) */}
      <section id="services" className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Menu</h2>
            <p className="text-stone-400 font-light">Honest pricing for premium care.</p>
          </div>

          <div className="grid gap-4">
            {SERVICES.slice(0, 4).map((service, index) => (
              <div key={index} className="flex justify-between items-center border-b border-stone-800 py-6 hover:bg-stone-900/50 px-4 transition-colors cursor-pointer" onClick={scrollToBooking}>
                <div>
                    <h3 className="text-xl font-serif text-white">{service.name}</h3>
                    <p className="text-stone-500 text-sm font-light hidden md:block">{service.description}</p>
                </div>
                <span className="text-gold-500 font-serif italic text-sm">Book This</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM (The Closer) */}
      <section id="booking" className="py-24 relative bg-stone-100">
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Form Side */}
                <div className="md:w-3/5 p-12">
                    {formStatus === 'success' ? (
                        <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <Check size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-3xl font-serif text-neutral-900 mb-4">You're All Set!</h3>
                            <p className="text-stone-600 mb-8">
                                Thank you for choosing our family. Jenny or Tony will call you shortly to confirm your time.
                            </p>
                            <div className="p-4 bg-gold-50 border border-gold-200 rounded-lg">
                                <p className="text-gold-800 font-bold uppercase tracking-widest text-xs">Don't forget!</p>
                                <p className="text-stone-800 mt-2">Mention this booking for your <span className="font-bold">10% Discount</span> at checkout.</p>
                            </div>
                            <button onClick={() => setFormStatus('idle')} className="mt-8 text-stone-400 underline hover:text-gold-600 text-sm">Book another appointment</button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Online Special</span>
                                <h3 className="text-3xl font-serif text-neutral-900 mt-2">Request Appointment</h3>
                                <p className="text-stone-500 text-sm mt-2">Fill out the form below to hold your spot and lock in your 10% discount.</p>
                            </div>

                            <form onSubmit={handleBookingSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-stone-400" size={16} />
                                        <input type="text" required className="w-full bg-stone-50 border border-stone-200 p-3 pl-10 text-stone-800 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Jane Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-stone-400" size={16} />
                                        <input type="tel" required className="w-full bg-stone-50 border border-stone-200 p-3 pl-10 text-stone-800 focus:outline-none focus:border-gold-500 transition-colors" placeholder="(281) 555-0123" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Service</label>
                                        <select className="w-full bg-stone-50 border border-stone-200 p-3 text-stone-800 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                                            <option>Manicure</option>
                                            <option>Pedicure</option>
                                            <option>Full Set</option>
                                            <option>Dip Powder</option>
                                            <option>Nail Art</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Preferred Day</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 text-stone-400" size={16} />
                                            <select className="w-full bg-stone-50 border border-stone-200 p-3 pl-10 text-stone-800 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                                                <option>Today</option>
                                                <option>Tomorrow</option>
                                                <option>This Weekend</option>
                                                <option>Next Week</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'submitting'}
                                    className="w-full py-4 bg-black text-white text-xs font-bold tracking-[0.25em] uppercase hover:bg-gold-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formStatus === 'submitting' ? 'Processing...' : 'Secure My 10% Off'}
                                </button>
                                <p className="text-[10px] text-stone-400 text-center">No payment required now. Pay after your service.</p>
                            </form>
                        </>
                    )}
                </div>

                {/* Info Side */}
                <div className="md:w-2/5 bg-neutral-900 p-12 flex flex-col justify-between text-stone-400">
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Salon Hours</h4>
                        <ul className="space-y-4 text-sm font-light border-l border-stone-800 pl-6">
                            <li className="flex justify-between"><span>Mon - Sat</span> <span className="text-white">9:00 AM - 7 PM</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span className="text-white">CLOSED</span></li>
                        </ul>
                    </div>
                    
                    <div className="mt-12 md:mt-0">
                         <div className="flex items-start gap-3 mb-4">
                            <MapPin size={18} className="text-gold-500 mt-1 shrink-0" />
                            <p className="text-sm leading-relaxed">
                                {BUSINESS_INFO.address}<br/>
                                {BUSINESS_INFO.city}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-gold-500 shrink-0" />
                            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white text-lg font-serif italic hover:text-gold-500 transition-colors">{BUSINESS_INFO.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-stone-500 py-12 border-t border-stone-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h4 className="font-serif text-2xl text-white mb-2">T&J Nails</h4>
                <p className="text-xs tracking-widest uppercase">{BUSINESS_INFO.address}</p>
            </div>
            
            <div className="flex gap-4">
                 <a href="#" className="p-2 border border-stone-800 rounded-full hover:border-gold-600 hover:text-gold-600 transition-colors"><Instagram size={18}/></a>
                 <a href="#" className="p-2 border border-stone-800 rounded-full hover:border-gold-600 hover:text-gold-600 transition-colors"><Facebook size={18}/></a>
            </div>
          </div>
          <div className="mt-12 text-center text-[10px] uppercase tracking-widest opacity-40">
            © {new Date().getFullYear()} T&J Nails Katy.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-neutral-900/90 backdrop-blur border-t border-stone-800 p-4 z-50">
        <button 
            onClick={scrollToBooking}
            className="block w-full text-center py-4 bg-gold-600 text-black text-xs font-bold tracking-[0.2em] uppercase"
        >
            Book Now & Save 10%
        </button>
      </div>

    </div>
  );
};

export default LuxuryVariant;