import React, { useState } from 'react';
import bg from './assets/bg.jpg';

const navItems = ['Home', 'About', 'Categories', 'Judges', 'Apply'];

const stats = [
  { icon: '✦', title: 'Open Nationwide', subtitle: 'Boys & Girls Across India' },
  { icon: '⟡', title: 'Age Group', subtitle: '16 to 28 Years' },
  { icon: '♛', title: 'Season Title', subtitle: 'Elite Face India — S1' },
  { icon: '🏆', title: 'Luxury Rewards', subtitle: 'Cash, Editorial Shoots & Trophies' },
  { icon: '◈', title: 'Audition Mode', subtitle: 'Online + Offline City Rounds' },
];

const categories = [
  'Male Model',
  'Female Model',
  'Fashion Creator',
  'Best Personality',
  'Viral Face',
  'Best Ramp Walk',
];

const formFields = [
  { name: 'name', type: 'text', placeholder: 'Full Name' },
  { name: 'age', type: 'number', placeholder: 'Age' },
  { name: 'category', type: 'text', placeholder: 'Category' },
  { name: 'city', type: 'text', placeholder: 'City' },
];

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-[11px] uppercase tracking-[0.42em] text-amber-300/85">{eyebrow}</p>
    <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[0.12em] text-zinc-100 sm:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{subtitle}</p> : null}
  </div>
);

const InfoCard = ({ icon, title, subtitle }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_16px_50px_rgba(245,158,11,0.22)]">
    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_10%_10%,rgba(245,158,11,0.35),transparent_42%)]" />
    <div className="relative">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/40 bg-amber-300/10 text-lg text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.35)]">
        {icon}
      </div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">{title}</h4>
      <p className="mt-2 text-sm text-zinc-300/80">{subtitle}</p>
    </div>
  </article>
);

const CategoryCard = ({ category, index }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-amber-200/15 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-6 transition duration-500 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]">
    <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl transition duration-500 group-hover:bg-amber-200/30" />
    <div className="relative flex items-start justify-between gap-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Category</p>
        <p className="mt-3 text-sm uppercase tracking-[0.16em] text-zinc-100">{category}</p>
      </div>
      <span className="rounded-full border border-amber-300/25 px-2.5 py-1 text-[10px] text-amber-100/90">0{index + 1}</span>
    </div>
  </article>
);

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', category: '', city: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    } catch (error) {
      console.error(error);
      alert('Server Error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,0.2),transparent_28%),radial-gradient(circle_at_80%_90%,rgba(245,158,11,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.04),transparent_30%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <div className="text-sm font-semibold tracking-[0.34em] text-amber-300 sm:text-base">ELITE FACE INDIA</div>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition hover:text-amber-200">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-amber-300/50 bg-amber-300/10 px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-100 transition hover:bg-amber-300 hover:text-black sm:block">
              Apply Now
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex rounded-full border border-zinc-700 p-2 text-zinc-200 transition hover:border-amber-300 hover:text-amber-200 lg:hidden"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-black/90 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item} href="#" className="rounded-lg px-3 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:bg-amber-300/10 hover:text-amber-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <header className="relative isolate overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(251,191,36,0.22),transparent_35%),linear-gradient(120deg,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />

        <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.5em] text-amber-300">Luxury Casting Platform</p>
            <h1 className="mt-6 animate-fade-up text-5xl font-semibold leading-[0.95] tracking-[0.14em] text-amber-100 drop-shadow-[0_0_24px_rgba(251,191,36,0.35)] sm:text-7xl md:text-8xl">
              ELITE FACE
            </h1>
            <p className="mt-3 animate-fade-up text-2xl font-light tracking-[0.5em] text-zinc-100 sm:text-3xl">INDIA</p>
            <p className="mt-8 max-w-2xl animate-fade-up text-sm leading-relaxed text-zinc-300 sm:text-base">
              India&apos;s premier runway discovery platform for new faces ready for cinematic campaigns, haute couture editorials, and global fashion visibility.
            </p>

            <div className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-[0_12px_40px_rgba(251,191,36,0.35)] transition hover:scale-[1.02] hover:shadow-[0_18px_50px_rgba(251,191,36,0.45)]">
                Start Application
              </button>
              <button className="rounded-full border border-white/35 bg-white/5 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-100 backdrop-blur-sm transition hover:border-amber-300/70 hover:bg-amber-300/10">
                Explore Finalists
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-10">
        {stats.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Categories"
          title="Luxury Talent Categories"
          subtitle="Curated pathways designed for the next generation of runway icons, editorial stars, and digital fashion personalities."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.12),transparent_28%)]" />

        <div className="mx-auto max-w-3xl rounded-3xl border border-amber-300/20 bg-white/[0.03] p-7 shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_20px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-10">
          <SectionTitle
            eyebrow="Apply Now"
            title="Begin Your Elite Journey"
            subtitle="Complete your profile to be shortlisted for jury review and premium city auditions."
          />

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {formFields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700/80 bg-black/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-amber-300/80 focus:ring-2 focus:ring-amber-300/20"
              />
            ))}

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gradient-to-r from-amber-300 to-amber-500 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:from-amber-200 hover:to-amber-400 sm:col-span-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.24em] text-zinc-500">
        © 2026 Elite Face India. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
