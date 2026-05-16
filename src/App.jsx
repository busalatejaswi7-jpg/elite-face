import { useEffect, useState } from 'react';
import bg from './assets/bg.jpg';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Apply', href: '#apply' },
];

const showcaseStats = [
  { value: '250+', label: 'Models Signed' },
  { value: '82', label: 'Global Events' },
  { value: '48', label: 'Partner Brands' },
  { value: '29', label: 'Industry Awards' },
];

const categories = ['Runway Editorial', 'Luxury Campaign', 'Beauty & Cosmetics', 'Avant-Garde Concept', 'Digital Creator', 'New Face Discovery'];

const gallery = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80',
];

const testimonials = [
  { name: 'Anaya Roy', role: 'Vogue Featured Model', quote: 'Elite Face gave me cinematic brand positioning and direct access to world-class runway opportunities.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
  { name: 'Mira Fernandes', role: 'Creative Director, House of Aurelia', quote: 'The presentation quality and professionalism are unmatched. The talent pipeline is premium and reliable.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80' },
  { name: 'Riya Kapoor', role: 'National Winner — Season 1', quote: 'From portfolio styling to campaign readiness, every touchpoint feels like an international agency.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
];

function BrandLogo({ compact = false }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Elite Face India">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-amber-200/50 bg-black/85 shadow-[0_0_28px_rgba(251,191,36,0.35)]">
        <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M7 32V8h22" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 20h14" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 30h12" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M27 8v24" stroke="url(#g)" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="g" x1="6" y1="6" x2="34" y2="34">
              <stop stopColor="#fde68a" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.42em] text-amber-200/90">ELITE FACE</span>
        {!compact && <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">India</span>}
      </span>
    </a>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', age: '', category: '', city: '' });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch {
      alert('Server Error');
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="h-14 w-14 animate-spin rounded-full border-2 border-amber-300/30 border-t-amber-300" />
            <p className="text-xs tracking-[0.4em] text-amber-200">ELITE FACE</p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-black text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.22),transparent_42%),radial-gradient(circle_at_90%_75%,rgba(245,158,11,0.17),transparent_40%),linear-gradient(180deg,#030303_0%,#050505_50%,#020202_100%)]" />

        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
            <BrandLogo compact />
            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => <a key={item.label} href={item.href} className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition hover:text-amber-200">{item.label}</a>)}
            </div>
            <div className="flex items-center gap-3">
              <a href="#apply" className="hidden rounded-full border border-amber-300/50 bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_0_35px_rgba(251,191,36,0.2)] transition hover:scale-[1.03] sm:block">Book Casting</a>
              <button onClick={() => setIsMenuOpen((p) => !p)} className="rounded-full border border-zinc-700 p-2 lg:hidden">☰</button>
            </div>
          </div>
          {isMenuOpen && <div className="space-y-1 border-t border-white/10 px-4 py-4 lg:hidden">{navItems.map((item) => <a key={item.label} href={item.href} className="block rounded px-3 py-2 text-xs uppercase tracking-[0.16em] text-zinc-300 hover:bg-zinc-900">{item.label}</a>)}</div>}
        </nav>

        <header id="home" className="relative overflow-hidden border-b border-white/10">
          <img src={bg} alt="fashion hero" className="absolute inset-0 h-full w-full object-cover object-top opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,.95)_14%,rgba(0,0,0,.74)_45%,rgba(0,0,0,.9)_100%)]" />
          <div className="relative mx-auto grid min-h-[90vh] max-w-7xl gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="text-xs uppercase tracking-[0.5em] text-amber-300">Luxury Fashion Portfolio</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[0.06em] text-zinc-100 sm:text-7xl">Cinematic Talent. Global Runways.</h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-zinc-300">A modern modeling platform crafted for brands, agencies, and rising icons. Explore premium portfolios and cast with confidence.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#apply" className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:-translate-y-0.5">Start Application</a>
                <a href="#gallery" className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl transition hover:border-amber-300/50 hover:bg-white/10">View Portfolio</a>
              </div>
            </div>

            <div className="grid gap-4 animate-fade-up lg:pl-6">
              <article className="overflow-hidden rounded-3xl border border-white/12 bg-black/45 backdrop-blur-lg">
                <img src={gallery[0]} alt="featured model" className="h-64 w-full object-cover" />
                <div className="grid grid-cols-2 gap-0 border-t border-white/10 bg-black/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Signature Bookings</p>
                  <p className="text-right text-xl font-semibold text-amber-200">96%</p>
                </div>
              </article>
              <div className="grid grid-cols-2 gap-4">
                {showcaseStats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                    <p className="text-2xl font-semibold text-amber-200">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-14 sm:grid-cols-4 sm:px-8">
          {showcaseStats.map((stat) => <div key={stat.label} className="rounded-2xl border border-white/12 bg-white/5 p-6 shadow-2xl backdrop-blur-lg"><p className="text-3xl font-semibold text-amber-200">{stat.value}</p><p className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-300">{stat.label}</p></div>)}
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-16">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs uppercase tracking-[0.35em] text-amber-300">Portfolio Gallery</p><h2 className="mt-3 text-4xl font-semibold">Editorial Selection</h2></div><p className="max-w-lg text-sm leading-relaxed text-zinc-400">A curated balance of runway, beauty, and campaign-ready talent presented in a clean high-impact grid.</p></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 lg:col-span-7"><img src={gallery[1]} alt="fashion model featured" className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105" /></article>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {gallery.slice(2, 4).map((img, i) => <article key={img} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70"><img src={img} alt={`fashion model side ${i + 1}`} className="h-[206px] w-full object-cover transition duration-700 group-hover:scale-110" /></article>)}
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Specialty Verticals</p>
            <h3 className="mt-3 text-4xl font-semibold">Distinct Talent Lanes</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">Built to reduce clutter and increase clarity in casting workflows with focused category placement and premium profile storytelling.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{categories.map((category) => <div key={category} className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-6 transition hover:border-amber-300/40"><p className="text-sm uppercase tracking-[0.18em] text-zinc-200">{category}</p></div>)}</div>
        </section>

        <section id="testimonials" className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-10 text-center text-4xl font-semibold">Client & Talent Voices</h3>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">{testimonials.map((t) => <article key={t.name} className="rounded-2xl border border-white/12 bg-black/45 p-7 backdrop-blur-lg"><div className="mb-5 flex items-center gap-3"><img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" /><div><p className="font-medium text-zinc-100">{t.name}</p><p className="text-xs uppercase tracking-[0.15em] text-amber-200">{t.role}</p></div></div><p className="text-sm leading-relaxed text-zinc-300">“{t.quote}”</p></article>)}</div>
          </div>
        </section>

        <section id="apply" className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/12 bg-gradient-to-b from-white/8 to-white/[0.03] p-8 shadow-2xl backdrop-blur-lg sm:p-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-3xl font-semibold">Apply for Elite Face 2026</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">Minimal, premium, and built for serious talent. Complete your profile to begin screening.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['name', 'age', 'category', 'city'].map((field) => <input key={field} name={field} placeholder={field[0].toUpperCase() + field.slice(1)} onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} className="rounded-xl border border-zinc-700 bg-black/45 px-4 py-3 text-sm outline-none transition focus:border-amber-300/60" />)}
              <button type="submit" className="sm:col-span-2 mt-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:opacity-90">Submit Application</button>
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-10 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:flex-row">
            <BrandLogo />
            <p>© 2026 Elite Face India</p>
            <div className="flex gap-5"><a href="#" className="hover:text-amber-200">Instagram</a><a href="#" className="hover:text-amber-200">Behance</a><a href="#" className="hover:text-amber-200">Dribbble</a></div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
