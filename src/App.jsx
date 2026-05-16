import React, { useState } from 'react';
import bg from './assets/bg.jpg';

const navItems = ['Home', 'About', 'Categories', 'Judges', 'Apply'];

const stats = [
  { label: 'Season', value: 'Elite Face India — S1' },
  { label: 'Eligibility', value: 'Age 16–28' },
  { label: 'Format', value: 'Online + City Auditions' },
];

const categories = ['Male Model', 'Female Model', 'Fashion Creator', 'Best Personality', 'Viral Face', 'Best Ramp Walk'];

const formFields = [
  { name: 'name', type: 'text', placeholder: 'Full Name' },
  { name: 'age', type: 'number', placeholder: 'Age' },
  { name: 'category', type: 'text', placeholder: 'Category' },
  { name: 'city', type: 'text', placeholder: 'City' },
];

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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-8%,rgba(245,158,11,0.16),transparent_32%),linear-gradient(180deg,#050505_0%,#000_55%,#050505_100%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold tracking-[0.3em] text-amber-300 sm:text-base">ELITE FACE INDIA</div>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-[11px] uppercase tracking-[0.18em] text-zinc-300 transition hover:text-amber-200">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-amber-300/60 bg-amber-300 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-amber-200 sm:block">
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
          <div className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item} href="#" className="rounded-md px-3 py-2 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:bg-zinc-900 hover:text-amber-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <header
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/62 to-black/88" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.86)_15%,rgba(0,0,0,0.45)_48%,rgba(0,0,0,0.9)_100%)]" />

        <div className="relative mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.45em] text-amber-300">National Modeling Competition</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[0.12em] text-amber-100 sm:text-7xl lg:text-8xl">ELITE FACE</h1>
          <p className="mt-3 text-xl font-light tracking-[0.48em] text-zinc-100 sm:text-2xl">INDIA</p>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            A premium runway-first platform built to discover India&apos;s next fashion talents for editorials, campaigns, and live stage opportunities.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <button className="rounded-full bg-amber-300 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-200">
              Start Application
            </button>
            <button className="rounded-full border border-white/30 bg-black/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-amber-300/60 hover:text-amber-100">
              View Categories
            </button>
          </div>

          <div className="mt-12 grid w-full max-w-4xl grid-cols-1 border-y border-white/15 py-6 sm:grid-cols-3">
            {stats.map((item, idx) => (
              <div key={item.label} className={`px-4 ${idx < stats.length - 1 ? 'sm:border-r sm:border-white/10' : ''}`}>
                <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/90">{item.label}</p>
                <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300/90">Categories</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[0.1em] text-zinc-100 sm:text-4xl">Competition Tracks</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category} className="rounded-lg border border-white/12 bg-zinc-950/70 px-5 py-5 transition hover:border-amber-300/50">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-200">{category}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-amber-300/90">Apply</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[0.1em] text-zinc-100 sm:text-4xl">Begin Your Entry</h2>
            <p className="mt-4 text-sm text-zinc-400">Submit your details to be considered for jury review and audition rounds.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {formFields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full rounded-md border border-zinc-700 bg-black/65 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-amber-300/80"
              />
            ))}

            <button
              type="submit"
              className="sm:col-span-2 mt-2 w-full rounded-full bg-amber-300 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-200"
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
