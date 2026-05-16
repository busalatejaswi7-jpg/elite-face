import React, { useState } from 'react';
import bg from './assets/bg.jpg';

// Reusable Component for Info Cards
const InfoCard = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center p-4 border-r border-gray-800 last:border-0">
    <div className="text-yellow-500 text-2xl mb-2">{icon}</div>
    <h4 className="text-xs font-bold uppercase tracking-widest">{title}</h4>
    <p className="text-[10px] text-gray-400 mt-1 text-center">{subtitle}</p>
  </div>
);

function App() {

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    category: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

      console.log(data);

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }

  };

  return (
    <div className="bg-black text-white font-sans">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-900">

        <div className="text-xl font-bold tracking-tighter">
          <span className="text-yellow-500">ELITE FACE</span> INDIA
        </div>

        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-gray-300">

          <a href="#" className="hover:text-yellow-500">
            Home
          </a>

          <a href="#" className="hover:text-yellow-500">
            About
          </a>

          <a href="#" className="hover:text-yellow-500">
            Categories
          </a>

          <a href="#" className="hover:text-yellow-500">
            Judges
          </a>

          <a href="#" className="hover:text-yellow-500">
            Apply Now
          </a>

        </div>

        <button className="border border-yellow-600 px-4 py-1 text-xs uppercase hover:bg-yellow-600 transition">
          Apply Now
        </button>

      </nav>

      {/* Hero Section */}
      <header
        className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >

        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <div className="z-20 text-center px-6">

          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm mb-4">
            Welcome To
          </p>

          <h1 className="text-6xl md:text-8xl font-serif tracking-widest text-yellow-500">
            ELITE FACE
          </h1>

          <h2 className="text-4xl tracking-[0.5em] font-light mt-[-10px]">
            INDIA
          </h2>

          <p className="mt-6 text-gray-300 italic">
            India's Biggest Rising Modeling Competition
          </p>

          <div className="mt-10 flex gap-4 justify-center">

            <button className="bg-yellow-600 text-black px-8 py-3 font-bold uppercase text-sm hover:bg-yellow-500">
              Apply Now
            </button>

            <button className="border border-white px-8 py-3 font-bold uppercase text-sm hover:bg-gray-200 hover:text-black">
              View Finalists
            </button>

          </div>

        </div>

      </header>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-5 bg-[#0a0a0a] border-y border-gray-800 py-6">

        <InfoCard icon="★" title="Open For" subtitle="Boys & Girls All Over India" />

        <InfoCard icon="👥" title="Age Group" subtitle="16 - 28 Years" />

        <InfoCard icon="👑" title="Grand Title" subtitle="Elite Face India Season 1" />

        <InfoCard icon="🏆" title="Win Prizes" subtitle="Trophy, Cash, Shoots & More" />

        <InfoCard icon="🌐" title="Auditions" subtitle="Online & Offline" />

      </div>

      {/* Categories Grid */}
      <section className="py-20 px-10">

        <h3 className="text-center text-yellow-500 tracking-[0.3em] uppercase mb-12">
          Categories
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

          {[
            'Male Model',
            'Female Model',
            'Fashion Creator',
            'Best Personality',
            'Viral Face',
            'Best Ramp Walk'
          ].map((cat) => (

            <div
              key={cat}
              className="border border-yellow-900 p-6 text-center hover:bg-yellow-900/20 transition cursor-pointer"
            >

              <div className="text-yellow-500 mb-3">
                ⚡
              </div>

              <p className="text-[10px] uppercase font-bold">
                {cat}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Application Form */}
      <section className="py-20 px-6 bg-[#050505]">

        <div className="max-w-3xl mx-auto border border-yellow-900 p-10 rounded-xl">

          <h2 className="text-3xl text-center text-yellow-500 uppercase tracking-widest mb-10">
            Apply Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-700"
            />

            <button
              type="submit"
              className="w-full bg-yellow-600 text-black py-4 uppercase font-bold hover:bg-yellow-500"
            >
              Submit Application
            </button>

          </form>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-900 text-gray-500 text-sm">

        © 2026 Elite Face India. All Rights Reserved.

      </footer>

    </div>
  );
}

export default App;