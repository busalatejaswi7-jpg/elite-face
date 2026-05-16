import React, { useState } from 'react';
import bg from './assets/bg.jpg';

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

const InfoCard = ({ icon, title, subtitle }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 md:p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-yellow-500/45 hover:shadow-[0_0_40px_rgba(251,191,36,0.18)]">
    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-xl text-yellow-400 transition group-hover:scale-105">
      {icon}
    </div>
    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100">{title}</h4>
    <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
  </article>
);

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', category: '', city: '' });

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
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(251,191,36,0.16),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(251,191,36,0.12),transparent_30%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <div className="text-sm font-semibold tracking-[0.34em] text-yellow-400 sm:text-base">ELITE FACE INDIA</div>

          <div className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-zinc-300 lg:flex">
            {['Home', 'About', 'Categories', 'Judges', 'Apply'].map((item) => (
              <a key={item} href="#" className="transition hover:text-yellow-400">
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-full border border-yellow-500/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-yellow-300 transition hover:bg-yellow-500 hover:text-black sm:px-6 sm:text-[11px]">
            Apply Now
          </button>
        </div>
      </nav>

      <header
        className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.25)_20%,rgba(251,191,36,0.08)_50%,rgba(0,0,0,0.5)_80%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-10">
          <p className="animate-fade-up text-xs uppercase tracking-[0.45em] text-yellow-400/95 sm:text-sm">Welcome To</p>
          <h1 className="mt-6 animate-fade-up text-5xl font-semibold tracking-[0.18em] text-yellow-300 sm:text-7xl md:text-8xl">
            ELITE FACE
          </h1>
          <h2 className="mt-2 animate-fade-up text-2xl font-light tracking-[0.55em] text-zinc-100 sm:text-4xl">INDIA</h2>

          <p className="mx-auto mt-8 max-w-2xl animate-fade-up text-sm leading-relaxed text-zinc-300 sm:text-base">
            India&apos;s premier runway discovery platform—crafted for new faces ready for cinematic campaigns, haute couture editorials, and global fashion visibility.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-full bg-yellow-500 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-yellow-400 sm:w-auto">
              Start Application
            </button>
            <button className="w-full rounded-full border border-white/40 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-yellow-400 hover:bg-white hover:text-black sm:w-auto">
              Explore Finalists
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-10">
        {stats.map((item) => (
          <InfoCard key={item.title} {...item} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
        <h3 className="mb-10 text-center text-xs uppercase tracking-[0.42em] text-yellow-400 sm:text-sm">Categories</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat}
              className="group rounded-2xl border border-yellow-900/45 bg-gradient-to-r from-black via-zinc-950 to-black p-6 transition duration-500 hover:-translate-y-1 hover:border-yellow-500/70 hover:shadow-[0_18px_55px_rgba(251,191,36,0.14)]"
            >
              <div className="mb-4 text-lg text-yellow-400 transition group-hover:translate-x-1">✧</div>
              <p className="text-sm uppercase tracking-[0.14em] text-zinc-100">{cat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#060606] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-yellow-900/40 bg-gradient-to-b from-yellow-500/5 to-transparent p-7 shadow-[0_0_0_1px_rgba(251,191,36,0.08)] sm:p-10">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.3em] text-yellow-300 sm:text-3xl">Apply Now</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-zinc-400">Complete your profile to be shortlisted for jury review and city auditions.</p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-4">
            {[
              { name: 'name', type: 'text', placeholder: 'Full Name' },
              { name: 'age', type: 'number', placeholder: 'Age' },
              { name: 'category', type: 'text', placeholder: 'Category' },
              { name: 'city', type: 'text', placeholder: 'City' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full rounded-xl border border-zinc-700/80 bg-black/80 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-yellow-500/80 focus:ring-2 focus:ring-yellow-500/20"
              />
            ))}

            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-yellow-500 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-yellow-400"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.22em] text-zinc-500">
        © 2026 Elite Face India. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
