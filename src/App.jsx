import { useEffect, useState } from 'react';
import bg from './assets/bg.jpg';
import maleModel from './assets/hero/male-model.jpg';
import femaleModel from './assets/hero/female-model.jpg';

import gallery1 from './assets/gallery/gallery1.jpg';
import gallery2 from './assets/gallery/gallery2.jpg';
import gallery3 from './assets/gallery/gallery3.jpg';
import gallery4 from './assets/gallery/gallery4.jpg';
import gallery5 from './assets/gallery/gallery5.jpg';

import client1 from './assets/testimonials/client1.jpg';
import client2 from './assets/testimonials/client2.jpg';
import client3 from './assets/testimonials/client3.jpg';
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Apply', href: '#apply' },
];

const showcaseStats = [
  { value: '250+', label: 'Models Signed' },
  { value: '48', label: 'Partner Brands' },
  { value: '82', label: 'Global Events' },
  { value: '29', label: 'Fashion Awards' },
];

const categories = [
  'Runway Editorial',
  'Luxury Campaign',
  'Beauty & Cosmetics',
  'Avant-Garde Concept',
  'Digital Creator',
  'New Face Discovery',
];

const gallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
];

const faqItems = [
  { q: 'Is the ₹2,000 profile evaluation fee refundable?', a: 'No. The professional screening and expert review process begins immediately after submission, so the fee is non-refundable.' },
  { q: 'What should I upload in polaroids/digitals?', a: 'Upload clear natural-light images with no makeup filters and simple styling.' },
  { q: 'Can international applicants apply?', a: 'Yes. Select International location and provide an active Instagram handle.' },
];


const testimonials = [
  {
    name: 'Ananya Kapoor',
    role: 'Runway Talent, Lakmé Fashion Week',
    quote:
      'Elite Face translated my ramp presence into couture campaign opportunities with an editorial finish that global clients immediately recognized.',
    image: client1,
  },
  {
    name: 'Arjun Mehra',
    role: 'Fashion Director, House of Noor',
    quote:
      'Their casting quality is exceptional—every profile arrived polished, camera-ready, and aligned with luxury brand storytelling from day one.',
    image:
      client2
  },
  {
    name: 'Meher Sethi',
    role: 'Beauty Campaign Lead, Aurelia Luxe',
    quote:
      'From beauty close-ups to couture edits, the agency consistently delivered high-fashion talent that elevated the full visual narrative.',
    image:
     client3
  },
];

function BrandLogo({ compact = false }) {
  return (
    <a
      href="#home"
      className="group inline-flex items-center gap-3"
      aria-label="Elite Face India"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/40 bg-black/90 shadow-[0_0_28px_rgba(212,175,55,0.35)]">
        <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none">
          <path
            d="M7 32V8h22"
            stroke="url(#g)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M17 20h14"
            stroke="url(#g)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M17 30h12"
            stroke="url(#g)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M27 8v24"
            stroke="url(#g)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="g" x1="6" y1="6" x2="34" y2="34">
              <stop stopColor="#fde68a" />
              <stop offset="1" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-[10px] tracking-[0.42em] text-amber-200/90">
          ELITE FACE
        </span>

        {!compact && (
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-300">
            India
          </span>
        )}
      </span>
    </a>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [faqOpen, setFaqOpen] = useState(0);
  const [showCookie, setShowCookie] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    bust: '',
    waist: '',
    hips: '',
    category: '',
    city: '',
    instagram: '',
    legalConsent: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/apply',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) setSubmitted(true);
    } catch {
      alert('Server Error');
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="h-14 w-14 animate-spin rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37]" />

            <p className="text-xs tracking-[0.4em] text-amber-200">
              ELITE FACE
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen overflow-x-clip bg-black text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.22),transparent_42%),radial-gradient(circle_at_90%_75%,rgba(245,158,11,0.17),transparent_40%),linear-gradient(180deg,#030303_0%,#050505_50%,#020202_100%)]" />

        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-3xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <BrandLogo compact />

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition hover:text-amber-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#apply"
                className="hidden rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_0_35px_rgba(212,175,55,0.2)] transition hover:scale-[1.03] sm:block"
              >
                Book Casting
              </a>

              <button
                onClick={() =>
                  setIsMenuOpen((p) => !p)
                }
                className="rounded-full border border-zinc-700 p-2 lg:hidden"
              >
                ☰
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="space-y-2 border-t border-white/10 bg-black/95 px-5 py-5 backdrop-blur-3xl transition-all duration-500 ease-out lg:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded px-3 py-3 text-xs uppercase tracking-[0.16em] text-zinc-300 hover:bg-zinc-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>

        <header
          id="home"
          className="relative overflow-hidden border-b border-white/10"
        >
          <img
            src={bg}
            alt="fashion hero"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-25"
          />

          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.86)_45%,rgba(0,0,0,.97)_100%)]" />

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[32px] border border-[#D4AF37]/25 bg-black/55 px-5 py-12 shadow-[0_40px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:min-h-[520px] sm:px-8">
              <img


                src={maleModel}
                alt="male runway model"
                className="absolute left-0 top-0 h-full w-[36%] object-cover object-top opacity-65 sm:w-[33%]"
              />

              <img

                src={femaleModel}

                alt="female editorial model"
                className="absolute right-0 top-0 h-full w-[36%] object-cover object-top opacity-65 sm:w-[33%]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.95)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.2),transparent_50%)]" />

              <div className="relative z-10 max-w-[260px] text-center sm:max-w-[360px]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-amber-300 sm:text-xs">
                  Luxury Fashion Portfolio
                </p>

                <h1 className="mt-4 text-2xl font-semibold leading-tight tracking-[0.05em] text-white sm:text-4xl lg:text-6xl xl:text-7xl">
                  ELITE FACE INDIA
                </h1>

                <p className="mt-4 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  Cinematic talent representation for global runway, luxury brands,
                  and premium editorial campaigns.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href="#apply"
                    className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-[1.03]"
                  >
                    Start Application
                  </a>

                  <a
                    href="#gallery"
                    className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37]/60"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>

            <div className="grid animate-fade-up gap-5 sm:gap-6 lg:pl-6">
              <article className="overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-black/50 backdrop-blur-lg">
                <div className="group relative">
                  <img
                    src={gallery[0]}
                    alt="featured runway model"
                    className="h-52 w-full object-cover object-top transition duration-700 group-hover:scale-[1.14] sm:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="grid grid-cols-2 gap-0 border-t border-white/10 bg-black/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">
                    Signature Bookings
                  </p>
                  <p className="text-right text-xl font-semibold text-amber-200">96%</p>
                </div>
              </article>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-16 sm:grid-cols-4 sm:px-8 sm:py-20">
          {showcaseStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-6 shadow-2xl backdrop-blur-lg"
            >
              <p className="text-2xl font-semibold text-amber-200 sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-zinc-300 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
              Event Highlights
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
              Elite Fashion Experience
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: 'Open for All',
                desc: 'Boys & Girls',
                icon: '✦',
              },
              {
                title: 'Age Group',
                desc: '16 - 28 Years',
                icon: '◈',
              },
              {
                title: 'Luxury Rewards',
                desc: 'Brand Campaigns',
                icon: '✧',
              },
              {
                title: 'Premium Auditions',
                desc: 'Industry Jury',
                icon: '⬡',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-zinc-900/70 to-black/80 p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.08)] backdrop-blur-xl"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 text-lg text-amber-300">
                  {item.icon}
                </div>

                <h4 className="text-sm font-medium uppercase tracking-[0.12em] text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20"
        >
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                Portfolio Gallery
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">
                Editorial Selection
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-zinc-400">
              A cinematic edit of couture runway moments, dramatic lighting,
              and campaign-level editorial presence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            <article className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-zinc-900/70 lg:col-span-7">
              <img
                src={gallery[1]}
                alt="fashion week runway model"
                className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-[1.14] sm:h-[430px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {gallery.slice(2, 4).map((img, i) => (
                <article
                  key={img}
                  className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-zinc-900/70"
                >
                  <img
                    src={img}
                    alt={`couture editorial look ${i + 1}`}
                    className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-[1.14] sm:h-[220px]"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
              Specialty Verticals
            </p>

            <h3 className="mt-3 text-2xl font-semibold sm:text-4xl">
              Distinct Talent Lanes
            </h3>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Premium category placement and clean
              profile storytelling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-[#D4AF37]/60 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-5 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-200 sm:text-sm">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="border-y border-white/10 bg-white/[0.03] px-5 py-20 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-10 text-center text-2xl font-semibold sm:text-4xl">
              Client & Talent Voices
            </h3>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="rounded-2xl border border-[#D4AF37]/20 bg-black/45 p-7 backdrop-blur-lg"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium text-zinc-100">
                        {t.name}
                      </p>

                      <p className="text-xs uppercase tracking-[0.15em] text-amber-200">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-300">
                    “{t.quote}”
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8"
        >
          {submitted ? (
            <div className="rounded-3xl border border-[#D4AF37]/30 bg-black/50 p-10 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Application Received</p>
              <h3 className="mt-4 text-3xl font-semibold">Welcome to Elite Face 2026</h3>
              <p className="mt-3 text-zinc-300">Your premium screening request has been submitted successfully.</p>
            </div>
          ) : (
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-black/75 to-zinc-950/75 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.68)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="border-b border-[#D4AF37]/20 pb-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300">Premium Onboarding</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Apply for Elite Face 2026</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">Complete your profile with accurate details for professional screening and couture casting consideration.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
              <fieldset className="space-y-4 rounded-2xl border border-[#D4AF37]/15 bg-white/[0.015] p-4 sm:p-5">
                <legend className="px-2 text-[11px] uppercase tracking-[0.25em] text-amber-300">Section 1 — Personal Details</legend>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{['name','age','height','bust','waist','hips'].map((field)=>(<input key={field} required name={field} placeholder={field==='name'?'Full Name':field[0].toUpperCase()+field.slice(1)} onChange={(e)=>setFormData({...formData,[field]:e.target.value})} className="w-full rounded-xl border border-[#D4AF37]/25 bg-black/45 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 placeholder:text-zinc-500 focus:border-[#D4AF37]/65 focus:bg-black/55"/>))}</div>
              </fieldset>
              <fieldset className="space-y-4 rounded-2xl border border-[#D4AF37]/15 bg-white/[0.015] p-4 sm:p-5">
                <legend className="px-2 text-[11px] uppercase tracking-[0.25em] text-amber-300">Section 2 — Experience & Location</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  <select required onChange={(e)=>setFormData({...formData,category:e.target.value})} className="w-full rounded-xl border border-[#D4AF37]/25 bg-black/45 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 focus:border-[#D4AF37]/65"><option value="">Category</option><option>Runway Editorial</option><option>Luxury Campaign</option><option>Beauty & Cosmetics</option><option>Digital Creator</option><option>New Face Discovery</option></select>
                  <select required onChange={(e)=>setFormData({...formData,city:e.target.value})} className="w-full rounded-xl border border-[#D4AF37]/25 bg-black/45 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 focus:border-[#D4AF37]/65"><option value="">Location</option><option>Mumbai</option><option>Delhi</option><option>Bengaluru</option><option>International</option><option>Others</option></select>
                  <input required placeholder="Instagram Handle" onChange={(e)=>setFormData({...formData,instagram:e.target.value})} className="w-full rounded-xl border border-[#D4AF37]/25 bg-black/45 px-4 py-3 text-sm text-zinc-100 outline-none transition duration-300 placeholder:text-zinc-500 focus:border-[#D4AF37]/65 sm:col-span-2"/>
                </div>
              </fieldset>
              <fieldset className="space-y-4 rounded-2xl border border-[#D4AF37]/15 bg-white/[0.015] p-4 sm:p-5">
                <legend className="px-2 text-[11px] uppercase tracking-[0.25em] text-amber-300">Section 3 — Portfolio Submission</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="rounded-2xl border border-dashed border-[#D4AF37]/35 bg-black/35 p-4 text-sm transition hover:border-[#D4AF37]/55 hover:bg-black/45">Upload Polaroids / Digitals<p className="mt-1 text-xs text-zinc-400">Max 3 files • natural light • no filters</p><input type="file" accept=".jpg,.jpeg,.png" multiple className="mt-3 block w-full text-xs text-zinc-300 file:mr-3 file:rounded-md file:border-0 file:bg-[#D4AF37]/20 file:px-2 file:py-1 file:text-[11px] file:text-amber-100"/></label>
                  <label className="rounded-2xl border border-dashed border-[#D4AF37]/35 bg-black/35 p-4 text-sm transition hover:border-[#D4AF37]/55 hover:bg-black/45">Upload Portfolio Photos<p className="mt-1 text-xs text-zinc-400">Max 5 files • couture/editorial looks</p><input type="file" accept=".jpg,.jpeg,.png" multiple className="mt-3 block w-full text-xs text-zinc-300 file:mr-3 file:rounded-md file:border-0 file:bg-[#D4AF37]/20 file:px-2 file:py-1 file:text-[11px] file:text-amber-100"/></label>
                  <label className="rounded-2xl border border-dashed border-[#D4AF37]/35 bg-black/35 p-4 text-sm transition hover:border-[#D4AF37]/55 hover:bg-black/45 sm:col-span-2">Upload Introduction Video<p className="mt-1 text-xs text-zinc-400">Max 60 seconds • clear natural audio</p><input type="file" accept="video/*" className="mt-3 block w-full text-xs text-zinc-300 file:mr-3 file:rounded-md file:border-0 file:bg-[#D4AF37]/20 file:px-2 file:py-1 file:text-[11px] file:text-amber-100"/></label>
                </div>
                <p className="text-xs text-zinc-500">Supported: JPG, PNG, MP4 • Max 5MB per file</p>
              </fieldset>
              <fieldset className="rounded-2xl border border-[#D4AF37]/30 bg-white/[0.02] p-4 sm:p-5">
                <legend className="px-2 text-[11px] uppercase tracking-[0.25em] text-amber-300">Section 4 — Premium Package</legend>
                <p className="text-sm font-medium text-amber-200">₹2,000 Professional Package Includes:</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-zinc-300"><li>Digital Profile Screening</li><li>Expert Portfolio Evaluation</li><li>Inclusion in Active Casting Database</li></ul>
                <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
                  <div className="rounded-xl border border-[#D4AF37]/20 bg-black/40 p-3 text-zinc-400">Secure Payment Placeholder<br />UPI / Card gateway integration ready.</div>
                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-900/10 p-3 text-emerald-200">🔒 256-bit encrypted submission<br />Your data is processed securely.</div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">Trust Note: No guaranteed selection is promised. Applications are reviewed by the official Elite Face screening team only.</p>
                <label className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-zinc-300"><input type="checkbox" required onChange={(e)=>setFormData({...formData,legalConsent:e.target.checked})} className="mt-0.5"/>I confirm my details are accurate and consent to the non-refundable ₹2,000 professional profile evaluation fee.</label>
              </fieldset>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]">Submit Application</button>
            </form>
          </div>) }
        </section>

        <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8"><h3 className="text-xl font-semibold">FAQs</h3><div className="mt-4 space-y-3">{faqItems.map((f,i)=><div key={f.q} className="rounded-xl border border-[#D4AF37]/20 bg-white/[0.02]"><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)} className="flex w-full items-center justify-between px-4 py-3 text-left text-sm">{f.q}<span>{faqOpen===i?'−':'+'}</span></button>{faqOpen===i&&<p className="px-4 pb-4 text-xs text-zinc-300">{f.a}</p>}</div>)}</div></section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2"><iframe title="Elite Face Office" className="h-64 w-full rounded-2xl border border-[#D4AF37]/20" src="https://www.google.com/maps?q=Mumbai&output=embed" loading="lazy" /><form className="rounded-2xl border border-[#D4AF37]/20 bg-black/40 p-5"><h4 className="text-sm uppercase tracking-[0.2em] text-amber-300">Client Inquiry</h4><div className="mt-3 space-y-3"><input placeholder="Brand / Company" className="w-full rounded-lg border border-zinc-700 bg-black/50 px-3 py-2 text-sm"/><input placeholder="Email" className="w-full rounded-lg border border-zinc-700 bg-black/50 px-3 py-2 text-sm"/><textarea placeholder="Casting Requirement" className="h-24 w-full rounded-lg border border-zinc-700 bg-black/50 px-3 py-2 text-sm"/><button type="button" className="rounded-full border border-[#D4AF37]/40 px-4 py-2 text-xs uppercase tracking-[0.2em]">Send Inquiry</button></div></form></section>
<footer className="border-t border-white/10 px-5 py-10 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:flex-row">
            <BrandLogo />

            <p>© {new Date().getFullYear()} Elite Face India</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-amber-200">
                Instagram
              </a>

              <a href="#" className="hover:text-amber-200">
                Behance
              </a>

              <a href="#" className="hover:text-amber-200">
                Dribbble
              </a>
            </div>
          </div>
        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.16em] text-red-300">Anti-Scam Notice: Elite Face never guarantees selection, and payments are accepted only via official channels.</p>
        </footer>

        <a href="https://wa.me/919999999999" className="fixed bottom-6 right-6 z-40 rounded-full bg-[#25D366] px-4 py-3 text-xs font-bold text-black shadow-2xl">WhatsApp</a>

        {showCookie && <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D4AF37]/30 bg-black/95 p-4 text-xs">We use cookies for secure submissions and analytics. <button onClick={()=>setShowCookie(false)} className="ml-3 rounded border border-[#D4AF37]/40 px-3 py-1">Accept</button></div>}
      </div>
    </>
  );
}

export default App;
