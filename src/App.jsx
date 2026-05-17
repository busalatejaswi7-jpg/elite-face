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
  'https://images.unsplash.com/photo-1632149877166-f75d49000351?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
];

const testimonials = [
  {
    name: 'Elena Moritz',
    role: 'Runway Talent, Milan Circuit',
    quote:
      'Elite Face positioned my portfolio with cinematic precision and connected me with couture houses that value craft.',
    image:
      'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Daniel Laurent',
    role: 'Brand Partnerships Lead, Maison Aurelle',
    quote:
      'From casting to show-day execution, the team delivers a luxury-standard experience that translates on every runway.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Safiya Khan',
    role: 'Editorial Model, Dubai Fashion Week',
    quote:
      'Their direction elevated my presence across international editorials and made every campaign feel premium and intentional.',
    image:
      'https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=300&q=80',
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

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    category: '',
    city: '',
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
            <div className="h-14 w-14 animate-spin rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37]" />

            <p className="text-xs tracking-[0.4em] text-amber-200">
              ELITE FACE
            </p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-black text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.22),transparent_42%),radial-gradient(circle_at_90%_75%,rgba(245,158,11,0.17),transparent_40%),linear-gradient(180deg,#030303_0%,#050505_50%,#020202_100%)]" />

        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-3xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
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
            <div className="space-y-2 border-t border-white/10 bg-black/95 px-4 py-5 backdrop-blur-3xl transition-all duration-500 ease-out lg:hidden">
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

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[32px] border border-[#D4AF37]/25 bg-black/55 px-5 py-12 shadow-[0_40px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:min-h-[520px] sm:px-8">
              <img
                src="https://images.unsplash.com/photo-1618375531912-867984bdfd87?auto=format&fit=crop&w=900&q=80"
                alt="male runway model"
                className="absolute left-0 top-0 h-full w-[36%] object-cover object-top opacity-65 sm:w-[33%]"
              />

              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
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

        <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-16 sm:grid-cols-4 sm:px-8 sm:py-20">
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

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
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
          className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-20"
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
              A curated balance of runway, beauty,
              and campaign-ready talent.
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
          className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]"
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
          className="border-y border-white/10 bg-white/[0.03] px-4 py-20 sm:px-8"
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
          className="mx-auto max-w-7xl px-4 py-20 sm:px-8"
        >
          <div className="grid gap-8 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-white/8 to-white/[0.03] p-8 shadow-2xl backdrop-blur-lg sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Apply for Elite Face 2026
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Minimal, premium, and built for
                serious talent.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {['name', 'age', 'category', 'city'].map(
                (field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={
                      field[0].toUpperCase() +
                      field.slice(1)
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field]: e.target.value,
                      })
                    }
                    className="rounded-xl border border-zinc-700 bg-black/45 px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]/60"
                  />
                )
              )}

              <button
                type="submit"
                className="mt-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:opacity-90 sm:col-span-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-10 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:flex-row">
            <BrandLogo />

            <p>© 2026 Elite Face India</p>

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
        </footer>
      </div>
    </>
  );
}

export default App;
