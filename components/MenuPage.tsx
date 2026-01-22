import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Gift, Star, Check, Sparkles, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { MENU_DATA } from '../menuData';
import BookingForm from './BookingForm';

const MenuPage: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="bg-neutral-950 text-stone-200 font-sans selection:bg-gold-600 selection:text-white min-h-screen">
      
      {/* Top Announcement Bar */}
      <div className="bg-gold-600 text-black text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-center py-3 px-4 z-50 relative">
        <span>✨ Book Any Service & Experience Our Family's Expert Care ✨</span>
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
            <Link to="/#gallery" className="hover:text-gold-400 transition-colors whitespace-nowrap">Gallery</Link>
            <Link to="/#owners" className="hover:text-gold-400 transition-colors whitespace-nowrap">About</Link>
            <Link to="/menu" className="text-gold-400 border-b border-gold-400 pb-1 whitespace-nowrap">Menu</Link>
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

      {/* Hero Section - Enhanced */}
      <header className="relative py-12 md:py-16 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-5 md:mb-6">
              Menu
            </h1>
            <p className="text-stone-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Premium nail care, spa services, and expert enhancements. Every service crafted with 25+ years of family expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-stone-500 text-sm">
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-gold-400 transition-colors">
                {BUSINESS_INFO.phone}
              </a>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span>Mon–Sat 9AM–7PM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Display - Multi-column Layout */}
      <section className="py-12 md:py-16 bg-neutral-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-500 font-light text-sm max-w-xl mx-auto">
              Browse our complete selection of services. Pricing will be confirmed when you book your appointment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {MENU_DATA.menu.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                {/* Section Header */}
                <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight border-b border-stone-800 pb-3 mb-4">
                  {section.section}
                </h2>

                {/* Menu Items */}
                <div className="space-y-0.5">
                  {section.pricing_columns ? (
                    // Two-column pricing
                    <>
                      <div className="grid grid-cols-[1fr_auto_auto] gap-3 text-[10px] uppercase tracking-wider text-stone-500 mb-2 pb-1 border-b border-stone-900">
                        <div></div>
                        <div className="text-right text-gold-400/70">{section.pricing_columns[0]}</div>
                        <div className="text-right text-gold-400/70">{section.pricing_columns[1]}</div>
                      </div>
                      {section.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="grid grid-cols-[1fr_auto_auto] gap-3 py-1.5"
                        >
                          <div className="text-white text-sm md:text-base font-normal leading-snug">
                            {item.name}
                          </div>
                          <div className="text-right text-gold-400 text-sm md:text-base font-light tabular-nums">
                            {item.full_set ? formatPrice(item.full_set) : '—'}
                          </div>
                          <div className="text-right text-gold-400 text-sm md:text-base font-light tabular-nums">
                            {item.refill ? formatPrice(item.refill) : '—'}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    // Single column pricing
                    <>
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-baseline justify-between py-1.5 gap-4"
                        >
                          <div className="text-white text-sm md:text-base font-normal leading-snug flex-1 min-w-0">
                            {item.name}
                          </div>
                          <div className="text-right shrink-0">
                            {item.price && (
                              <span className="text-gold-400 text-sm md:text-base font-light tabular-nums">
                                {formatPrice(item.price)}
                              </span>
                            )}
                            {item.price_starting_at && (
                              <span className="text-gold-400 text-sm md:text-base font-light tabular-nums">
                                {formatPrice(item.price_starting_at)}
                              </span>
                            )}
                            {item.price_extra && (
                              <span className="text-stone-500 text-xs font-light tabular-nums">
                                +{formatPrice(item.price_extra)}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* Extras */}
                  {section.extras && section.extras.length > 0 && (
                    <div className="pt-3 mt-3 border-t border-stone-900">
                      {section.extras.map((extra, extraIndex) => (
                        <div
                          key={extraIndex}
                          className="flex items-baseline justify-between py-1.5 gap-4"
                        >
                          <span className="text-stone-400 text-xs md:text-sm font-light">{extra.name}</span>
                          {extra.price && (
                            <span className="text-gold-400 text-xs md:text-sm font-light tabular-nums">
                              {formatPrice(extra.price)}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Notes */}
                  {section.notes && section.notes.length > 0 && (
                    <div className="pt-3 mt-3 border-t border-stone-900">
                      <div className="space-y-1">
                        {section.notes.map((note, noteIndex) => (
                          <p key={noteIndex} className="text-[10px] text-stone-600 uppercase tracking-wider font-medium">
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us Section */}
      <section className="py-16 md:py-20 bg-neutral-900 border-t border-stone-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              More Than Just a Menu
            </h2>
            <p className="text-stone-500 font-light text-base max-w-xl mx-auto">
              Every service comes with our family's commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex items-start gap-4 p-6 bg-neutral-950/50 border border-stone-800 rounded-sm">
              <div className="w-10 h-10 bg-gold-600/10 border border-gold-600/20 rounded-full flex items-center justify-center shrink-0">
                <Check size={20} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Expert Technicians</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Our team has decades of combined experience. Every service is performed with precision and care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-neutral-950/50 border border-stone-800 rounded-sm">
              <div className="w-10 h-10 bg-gold-600/10 border border-gold-600/20 rounded-full flex items-center justify-center shrink-0">
                <Sparkles size={20} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Customized Service</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  We work with you to create the perfect look. Your vision, our expertise, beautiful results.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-neutral-950/50 border border-stone-800 rounded-sm">
              <div className="w-10 h-10 bg-gold-600/10 border border-gold-600/20 rounded-full flex items-center justify-center shrink-0">
                <Clock size={20} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Flexible Hours</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Open Monday through Saturday, 9AM to 7PM. We accommodate your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-neutral-950/50 border border-stone-800 rounded-sm">
              <div className="w-10 h-10 bg-gold-600/10 border border-gold-600/20 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Katy Location</h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed">
                  Conveniently located in Katy, serving Cinco Ranch, Fulshear, and surrounding communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 md:py-20 relative bg-stone-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-4 tracking-tight">
                Reserve Your Appointment
              </h2>
              <p className="text-stone-600 text-base max-w-xl mx-auto">
                Select your services below and we'll call you to confirm your appointment time and discuss pricing.
              </p>
            </div>

            <div className="bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* Form Side */}
              <div className="md:w-3/5 p-8 md:p-10">
                <BookingForm showServiceSelection={true} />
              </div>

              {/* Info Side */}
              <div className="md:w-2/5 bg-neutral-900 p-8 md:p-10 flex flex-col justify-between text-stone-400">
                <div>
                  <h4 className="text-white font-serif text-lg mb-5">Hours</h4>
                  <ul className="space-y-3 text-sm font-light">
                    <li className="flex justify-between">
                      <span>Mon - Sat</span> 
                      <span className="text-white">9:00 AM - 7 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span> 
                      <span className="text-white">CLOSED</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 md:mt-0">
                  <div className="flex items-start gap-3 mb-5">
                    <Phone size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white text-base font-serif mb-0.5">
                        <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-gold-500 transition-colors">
                          {BUSINESS_INFO.phone}
                        </a>
                      </p>
                      <p className="text-xs text-stone-500">Call during business hours</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gold-600/10 border border-gold-600/20 rounded">
                    <div className="flex items-start gap-2">
                      <Gift size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gold-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">
                          Gift Certificates
                        </p>
                        <p className="text-stone-400 text-xs">
                          Available in any amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-500 py-10 border-t border-stone-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-xl text-white mb-1">T&J Nails</h4>
              <p className="text-[10px] tracking-widest uppercase">{BUSINESS_INFO.address}</p>
            </div>
            
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400 hover:text-gold-400 transition-colors"
            >
              <ArrowRight size={10} className="rotate-180" /> Back to Home
            </Link>
          </div>
          <div className="mt-8 text-center text-[9px] uppercase tracking-widest opacity-40">
            © {new Date().getFullYear()} T&J Nails Katy.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
