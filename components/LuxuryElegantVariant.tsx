import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Star, Quote, Phone, Clock, Instagram, Facebook, Sparkles, Check, Building2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, GALLERY_IMAGES, NEIGHBOR_REVIEWS } from '../constants';
import { MENU_DATA } from '../menuData';
import heroVideo from '../assets/hero_video.mp4';
import ownersImage from '../assets/owners.JPG';
import neighborsParallaxBg from '../assets/neighbors_parallax.jpg';
import BookingForm from './BookingForm';

const LuxuryVariant: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-950 text-stone-200 font-sans selection:bg-gold-600 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Funnel Hook) */}
      <div className="bg-gold-600 text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center py-3 px-4 z-50 relative">
        <span>✨ Katy Neighbors: Book Online & Experience 25+ Years of Family Care ✨</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-neutral-950/95 backdrop-blur-md z-40 border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo - Left */}
          <Link to="/" className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white border-y border-gold-600 px-2 md:px-3 py-1 hover:text-gold-400 transition-colors shrink-0">
            T&J
          </Link>

          {/* Nav Items - Center (hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center flex-1 absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-8 text-[10px] tracking-[0.2em] uppercase font-medium text-stone-400">
            <a href="#gallery" className="hover:text-gold-400 transition-colors whitespace-nowrap">Gallery</a>
            <a href="#owners" className="hover:text-gold-400 transition-colors whitespace-nowrap">About</a>
            <Link to="/menu" className="hover:text-gold-400 transition-colors whitespace-nowrap">Menu</Link>
          </div>

          {/* CTA Buttons - Right */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-3 md:px-4 py-1.5 md:py-2 border border-gold-600 text-gold-400 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-600 hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
            <button 
              onClick={scrollToBooking}
              className="px-3 md:px-6 py-1.5 md:py-2 bg-white text-black text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-white transition-all duration-300"
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
          <div className="h-full w-full container mx-auto px-4 md:px-6 lg:px-10 flex items-center">
            <div className="max-w-2xl mt-8 w-full">
              <div className="inline-flex items-center gap-2 border border-gold-500/50 rounded-full px-4 py-1 mb-8 bg-black/55 backdrop-blur-sm animate-fade-in">
                <Star size={12} className="text-gold-500 fill-gold-500" />
                <span className="text-gold-400 text-[10px] tracking-[0.2em] uppercase">Trusted by 2,000+ Katy Locals</span>
              </div>

              <h1 className="text-left text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-4 md:mb-6 tracking-tight leading-none drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
                Welcome to the <br />
                <span className="text-gold-400">Family</span>
              </h1>
              
              <p className="text-left text-stone-200 text-base sm:text-lg md:text-xl font-light max-w-xl mb-6 md:mb-10 leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                Experience the difference of family-owned care. For over 25 years, we've been Katy's trusted nail salon, where every visit feels like coming home. Expert service, genuine warmth, and results that speak for themselves.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
                <button 
                  onClick={scrollToBooking}
                  className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-gold-600 text-black text-xs sm:text-sm font-bold tracking-[0.25em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,40,0.3)] animate-pulse-slow text-center"
                >
                  Book Your Appointment
                </button>
                <a 
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 border-2 border-gold-600 text-gold-400 bg-transparent text-xs sm:text-sm font-bold tracking-[0.25em] uppercase hover:bg-gold-600 hover:text-black transition-all duration-300 text-center flex items-center justify-center"
                >
                  Call Now
                </a>
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
               <span className="font-semibold text-2xl text-white">25+ Years</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Family Owned in Katy</span>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-stone-800"></div>
            <div className="flex flex-col items-center">
               <span className="font-semibold text-2xl text-white">Sanitized & Safe</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Medical-Grade Standards</span>
            </div>
            <div className="hidden md:block w-[1px] h-12 bg-stone-800"></div>
            <div className="flex flex-col items-center md:items-end">
               <span className="font-semibold text-2xl text-white">4.9 Stars</span>
               <span className="text-[10px] text-stone-500 uppercase tracking-widest">Loved by Neighbors</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. GALLERY (The Visual Proof - Clean Grid Layout) */}
      <section id="gallery" className="py-16 md:py-24 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-12">
                <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-3 md:mb-4">Our Craft</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3 tracking-tight">Beautiful Work, Happy Neighbors</h2>
                <p className="text-stone-400 font-light max-w-2xl mx-auto">
                  See the quality and attention to detail that keeps our neighbors coming back year after year.
                </p>
            </div>
            
            {/* Clean Grid Layout - Optimized for 5 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 max-w-7xl mx-auto">
                {GALLERY_IMAGES.map((img, idx) => (
                    <div 
                        key={idx} 
                        className="relative group overflow-hidden bg-stone-900 rounded-sm aspect-square"
                    >
                        <img 
                            src={img.url} 
                            alt={img.alt} 
                            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                        />
                        <div className="absolute inset-0 border border-stone-800/50 group-hover:border-gold-600/30 transition-colors duration-500 rounded-sm pointer-events-none"></div>
                    </div>
                ))}
            </div>

            <div className="mt-10 md:mt-12 text-center">
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
                    <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6 tracking-tight">Hi, We're Jenny & Tony</h2>
                    
                    <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
                        "We raised our family right here in Katy, and we treat this salon as an extension of our home. When you walk in, we don't just want you to leave with beautiful nails—we want you to leave feeling cared for, valued, and already looking forward to your next visit."
                    </p>
                    
                    <div className="space-y-4 mb-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-gold-100 p-2 rounded-full">
                                <Sparkles size={16} className="text-gold-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Personal Attention</h4>
                                <p className="text-stone-500 text-sm font-light">We take the time to listen to exactly what you want.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="bg-gold-100 p-2 rounded-full">
                                <Check size={16} className="text-gold-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Clean & Safe</h4>
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
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
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
                      <p className="text-white font-semibold text-lg">{r.name}</p>
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
                    <p className="text-white font-semibold text-xl">{r.name}</p>
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

      {/* 6. SERVICES SUMMARY (Category Overview) */}
      <section id="services" className="py-20 md:py-24 bg-neutral-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase block mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">Our Menu</h2>
            <p className="text-stone-400 font-light mb-6 max-w-2xl mx-auto">
              From expert nail enhancements to luxurious spa treatments, discover our complete range of services.
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-xs tracking-widest uppercase border-b border-gold-600/50 pb-1 hover:border-gold-400"
            >
              View Complete Menu <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MENU_DATA.menu.map((section, index) => {
              const getCategoryCopy = (sectionName: string) => {
                const copy: Record<string, { description: string; highlight: string }> = {
                  "Nail Service": {
                    description: "Professional nail enhancements for length, strength, and lasting beauty. From classic sets to modern powder techniques.",
                    highlight: `${section.items.length} Options Available`
                  },
                  "Manicure": {
                    description: "Pamper your hands with our luxurious treatments. Classic care to collagen-infused rejuvenation for soft, beautiful hands.",
                    highlight: `${section.items.length} Treatments`
                  },
                  "Pedicure": {
                    description: "Indulge in our signature foot care experiences. Each treatment designed to restore, refresh, and revitalize tired feet.",
                    highlight: `${section.items.length} Experiences`
                  },
                  "Waxing": {
                    description: "Professional waxing services for silky-smooth skin. Expert techniques for lasting results and comfortable treatments.",
                    highlight: `${section.items.length} Services`
                  },
                  "Additional Services": {
                    description: "Perfect your look with our à la carte services. Quick fixes, custom enhancements, and touch-ups available.",
                    highlight: `${section.items.length} Options`
                  }
                };
                return copy[sectionName] || { description: "", highlight: "" };
              };

              const categoryCopy = getCategoryCopy(section.section);

              return (
                <div 
                  key={index} 
                  className="group border border-stone-800 bg-stone-900/50 p-6 md:p-8 hover:border-gold-600/30 hover:bg-stone-900 transition-all duration-300 cursor-pointer"
                  onClick={scrollToBooking}
                >
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {section.section}
                    </h3>
                    <p className="text-gold-500/70 text-xs uppercase tracking-wider font-medium">
                      {categoryCopy.highlight}
                    </p>
                  </div>
                  <p className="text-stone-400 font-light text-sm md:text-base leading-relaxed mb-4">
                    {categoryCopy.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider font-medium group-hover:gap-3 transition-all">
                    <span>Book Now</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6.5 WHY CHOOSE US (Flowing Benefits) */}
      <section className="py-20 md:py-24 bg-neutral-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-5 tracking-tight">
                Why Choose T&J
              </h2>
              <p className="text-stone-400 text-base leading-relaxed mb-8">
                What sets us apart isn't just our expertise—it's how we make you feel. 25+ years of perfecting our craft, personalized attention, and a family atmosphere that makes every visit feel like coming home.
              </p>
              <button 
                onClick={scrollToBooking}
                className="px-8 py-3 bg-gold-600 text-black text-sm font-medium uppercase hover:bg-white transition-all duration-300"
              >
                Book Your Visit
              </button>
            </div>
            <div className="space-y-8 pt-2">
              <div className="border-l-2 border-gold-600/30 pl-6">
                <h3 className="text-xl font-semibold text-white mb-2">Expert Craftsmanship</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Decades of experience. Every nail shaped, polished, and finished with precision that comes from years of dedication.
                </p>
              </div>
              <div className="border-l-2 border-gold-600/30 pl-6">
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Service</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  We remember your preferences and create exactly what you envision. No rush, no shortcuts—just quality work.
                </p>
              </div>
              <div className="border-l-2 border-gold-600/30 pl-6">
                <h3 className="text-xl font-semibold text-white mb-2">Family Values</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  When you walk through our doors, you're part of our extended family. That's the T&J way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM (The Closer) */}
      <section id="booking" className="py-24 relative bg-stone-100">
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Form Side */}
                <div className="md:w-3/5 p-12">
                    <div className="mb-8">
                        <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Online Special</span>
                        <h3 className="text-3xl font-medium text-neutral-900 mt-2 tracking-tight">Request Appointment</h3>
                        <p className="text-stone-500 text-sm mt-2">Fill out the form below to reserve your appointment. We'll call you to confirm and discuss your service preferences.</p>
                    </div>
                    <BookingForm showServiceSelection={true} />
                </div>

                {/* Info Side */}
                <div className="md:w-2/5 bg-neutral-900 p-12 flex flex-col justify-between text-stone-400">
                    <div>
                        <h4 className="text-white font-semibold text-xl mb-6">Salon Hours</h4>
                        <ul className="space-y-4 text-sm font-light border-l border-stone-800 pl-6">
                            <li className="flex justify-between"><span>Mon - Sat</span> <span className="text-white">9:00 AM - 7 PM</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span className="text-white">CLOSED</span></li>
                        </ul>
                    </div>
                    
                    <div className="mt-12 md:mt-0">
                         <div className="flex items-start gap-3 mb-4">
                            <Building2 size={18} className="text-gold-500 mt-1 shrink-0" />
                            <p className="text-sm leading-relaxed">
                                {BUSINESS_INFO.address}<br/>
                                {BUSINESS_INFO.city}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-gold-500 shrink-0" />
                            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white text-lg font-medium hover:text-gold-500 transition-colors">{BUSINESS_INFO.phone}</a>
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
                <h4 className="font-semibold text-2xl text-white mb-2">T&J Nails</h4>
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

    </div>
  );
};

export default LuxuryVariant;