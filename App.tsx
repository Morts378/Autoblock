/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  ShieldCheck, 
  Music, 
  Lock, 
  CloudRain, 
  Package, 
  Sun, 
  Lightbulb, 
  CircleDot, 
  Speaker, 
  Zap, 
  Shield,
  Menu,
  X,
  Phone,
  Facebook,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Users
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative">
      <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all duration-500" />
      <div className="relative bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl shadow-lg shadow-primary/20">
        <Shield className="w-10 h-10 md:w-14 md:h-14 text-black" strokeWidth={2.5} />
        <Zap className="w-5 h-5 md:w-7 md:h-7 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-2xl md:text-4xl font-display font-black tracking-tighter text-white uppercase italic">
        AUTO
      </span>
      <span className="text-xl md:text-3xl font-display font-black tracking-tighter text-primary uppercase italic -mt-1">
        BLOCK
      </span>
    </div>
  </div>
);

const PRODUCTS = [
  { id: 1, name: "Android Monitor", desc: "Smart infotainment systems for your dashboard.", icon: Monitor },
  { id: 2, name: "Car Alarm System", desc: "Advanced security to keep your vehicle safe.", icon: ShieldCheck },
  { id: 3, name: "Car Stereo", desc: "High-fidelity audio systems for every ride.", icon: Music },
  { id: 4, name: "Central Lock", desc: "Convenient and secure locking mechanisms.", icon: Lock },
  { id: 5, name: "Rain Visor", desc: "Drive comfortably even during heavy rains.", icon: CloudRain },
  { id: 6, name: "Trunk Tray", desc: "Custom-fit protection for your cargo space.", icon: Package },
  { id: 7, name: "Tint / Car Horn", desc: "Privacy tints and powerful horn upgrades.", icon: Sun },
  { id: 8, name: "LED Lights", desc: "Ultra-bright lighting for better visibility.", icon: Lightbulb },
  { id: 9, name: "Steering Wheel", desc: "Premium steering wheels for better grip.", icon: CircleDot },
  { id: 10, name: "Speaker", desc: "Crystal clear sound for your car audio.", icon: Speaker },
  { id: 11, name: "Vland Tail Lights", desc: "Aggressive styling with sequential LEDs.", icon: Zap },
  { id: 12, name: "Mud Guard", desc: "Protect your car's body from road debris.", icon: Shield },
];

const TESTIMONIALS = [
  { 
    id: 1, 
    name: "Roy Alcantara", 
    quote: "Very accommodating personnel. Reasonable price/cost of service. 'Pulido' ang quality of work. This will be my go-to place for car accessories.",
    meta: "Google Review · Local Guide · 67 reviews"
  },
  { 
    id: 2, 
    name: "Jerome Dipon", 
    quote: "The staff are friendly and very accommodating. Thank you and keep up the good customer service!",
    meta: "Google Review · Local Guide · 14 reviews",
    featured: true
  },
  { 
    id: 3, 
    name: "Maria Lourdes Lopez", 
    quote: "I had a flat tire, and the staff from this shop helped me without expecting anything in return. I will definitely be back to do business with them.",
    meta: "Google Review · Local Guide · 29 reviews"
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-bg-deep selection:bg-primary selection:text-black">
      {/* Top Stripe */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-primary z-[101]" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 border-b border-border ${scrolled ? 'bg-black/95 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Products', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[12px] font-bold tracking-widest uppercase text-text-light hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-[12px] font-bold tracking-widest uppercase text-primary border border-primary/30 px-5 py-2 rounded hover:bg-primary hover:text-black transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black border-b border-border p-6 flex flex-col gap-6 md:hidden"
            >
              {['Services', 'Products', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[14px] font-bold tracking-widest uppercase text-text-light hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 100px, #F5C500 100px, #F5C500 101px)' }} />
        
        {/* Hero Background Image (Blended) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] opacity-[0.05] text-primary">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Outer Tire Wall */}
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" strokeDasharray="1 1" fill="none" />
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" fill="none" />
              
              {/* Rim */}
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="0.5" fill="none" />
              
              {/* Spokes / Design */}
              {[...Array(6)].map((_, i) => (
                <path 
                  key={i}
                  d={`M 50 50 L ${50 + 26 * Math.cos((i * 60 * Math.PI) / 180)} ${50 + 26 * Math.sin((i * 60 * Math.PI) / 180)}`}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ))}
              
              {/* Hub */}
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          {/* Atmospheric Glows */}
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/3 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Premium Car Accessories</span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">Upgrade Your Ride.<br />Level Up Your Drive.</h1>
            <p className="text-lg md:text-xl text-text-light mb-10 max-w-lg leading-relaxed">
              From Android monitors to Vland tail lights — Auto Block has everything your car needs, installed right.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#products" className="btn btn-gold">Explore Products</a>
              <a href="tel:09178841520" className="btn btn-outline flex items-center justify-center gap-2">
                <Phone size={16} /> 0917-884-1520
              </a>
            </div>

            <div className="pt-8 border-t border-border flex flex-wrap gap-x-10 gap-y-4 text-[11px] font-bold tracking-widest uppercase text-text-muted">
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> <span className="text-text-light">12+</span> Accessories</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> <span className="text-text-light">100%</span> Genuine Parts</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> <span className="text-text-light">Fast</span> Installation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="products" className="py-24 bg-bg-deep">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-text-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Everything Your Car Needs</span>
            <h2 className="text-4xl mb-4">Products & Services</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-bg-card p-8 rounded-lg border-l-4 border-primary hover:border-[#ffda44] hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div className="mb-6 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                  <product.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-primary text-lg font-bold mb-3 font-sans normal-case tracking-normal">{product.name}</h3>
                <p className="text-text-main text-sm leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-bg-surface relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 opacity-[0.02] -rotate-12 pointer-events-none">
          <Zap size={300} />
        </div>

        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-text-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Why Auto Block?</span>
            <h2 className="text-4xl mb-4">The Auto Block Advantage</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Genuine Products Only", desc: "Every part and accessory we carry is authentic and quality-tested for your vehicle's safety." },
              { num: "02", title: "Expert Installation", desc: "Our trained technicians ensure every accessory is installed cleanly, safely, and precisely." },
              { num: "03", title: "Wide Product Selection", desc: "From tech upgrades to exterior styling — we stock everything your car deserves." }
            ].map((pillar) => (
              <div key={pillar.num} className="relative">
                <div className="font-display text-5xl font-extrabold text-primary leading-none mb-2">{pillar.num}</div>
                <div className="w-8 h-[2px] bg-primary mb-6" />
                <h3 className="text-white text-xl font-bold mb-4 font-sans normal-case tracking-normal">{pillar.title}</h3>
                <p className="text-text-main leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-deep">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-text-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">What Our Customers Say</span>
            <h2 className="text-4xl mb-4">Verified Reviews</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className={`bg-bg-card p-8 rounded-lg border border-border flex flex-col ${t.featured ? 'border-t-2 border-t-primary shadow-[0_0_30px_rgba(245,197,0,0.05)]' : ''}`}
              >
                <div className="flex text-primary gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-text-main italic mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="text-text-light font-bold text-sm">{t.name}</div>
                  <div className="text-text-muted text-[10px] tracking-wider uppercase mt-1">{t.meta}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-text-muted text-[11px] tracking-[0.2em] uppercase">
            ★★★★★ Rated 5 stars on Google Maps by verified Local Guides
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-text-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">About Us</span>
              <h2 className="text-4xl mb-4">Your Local Car Upgrade Experts</h2>
              <div className="gold-divider" />
              <p className="text-text-main mb-10 leading-relaxed">
                Auto Block Car Accessories Shop is your trusted one-stop destination for premium vehicle upgrades in the Philippines. We carry top brands, offer expert advice, and take pride in every installation we do.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Users, text: "Trusted by Hundreds" },
                  { icon: CheckCircle2, text: "Quality Guaranteed" },
                  { icon: Clock, text: "Fast Turnaround" }
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border rounded-md text-[11px] text-text-light font-medium">
                    <badge.icon size={14} className="text-primary" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Accessories", value: "12+" },
                  { label: "Customer Rating", value: "5★" },
                  { label: "Genuine Parts", value: "100%" },
                  { label: "Based Locally", value: "PH" }
                ].map((stat, i) => (
                  <div key={i} className="bg-bg-card p-8 rounded-lg border border-border text-center">
                    <span className="block font-display text-3xl font-extrabold text-primary mb-1">{stat.value}</span>
                    <span className="block text-[10px] tracking-widest uppercase text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto mb-20">
            <span className="text-text-muted font-bold tracking-[0.3em] uppercase text-[10px] mb-2 block">Get In Touch</span>
            <h2 className="text-4xl mb-4">Ready to Upgrade?</h2>
            <p className="text-text-muted mb-10">Get in touch today and let's find the right accessories for your vehicle.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:09178841520" className="btn btn-gold px-10">Call: 0917-884-1520</a>
              <a href="https://www.facebook.com/profile.php?id=100063911978984" target="_blank" rel="noreferrer" className="btn btn-outline flex items-center justify-center gap-2">
                <Facebook size={16} /> Message Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left pt-16 border-t border-border">
            <div>
              <div className="text-[10px] tracking-widest uppercase text-text-muted mb-4">Address</div>
              <div className="text-sm text-text-light leading-relaxed">
                442 J.P. Rizal St, Cor P. Burgos St,<br />
                Santo Niño, Marikina, 1800<br />
                Metro Manila
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-text-muted mb-4">Contact</div>
              <div className="text-sm">
                <a href="tel:09178841520" className="text-primary hover:underline block mb-2">0917-884-1520</a>
                <a href="https://www.facebook.com/profile.php?id=100063911978984" target="_blank" rel="noreferrer" className="text-primary hover:underline block">AutoBlock Car Accessories</a>
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-text-muted mb-4">Store Hours</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Sunday</span>
                  <span className="text-text-light">8 AM – 4 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Mon – Sat</span>
                  <span className="text-text-light">8 AM – 6 PM</span>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-text-muted mb-4">Location</div>
              <div className="flex items-center gap-2 text-sm text-text-light">
                <MapPin size={16} className="text-primary" />
                Marikina, Philippines
              </div>
            </div>
          </div>

          <div className="mt-20 text-[11px] text-text-muted/30">
            © {new Date().getFullYear()} Auto Block Car Accessories Shop. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
