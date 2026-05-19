import { useEffect, useMemo, useState } from 'react';
import bg from './assets/bg.jpg';
import maleModel from './assets/hero/male-model.jpg';
import femaleModel from './assets/hero/female-model.jpg';
import gallery1 from './assets/gallery/gallery1.jpg';
import gallery2 from './assets/gallery/gallery2.jpg';
import gallery3 from './assets/gallery/gallery3.jpg';
import gallery4 from './assets/gallery/gallery4.jpg';
import gallery5 from './assets/gallery/gallery5.jpg';

const stepFields = [
  ['name', 'age', 'height', 'bust', 'waist', 'hips'],
  ['category', 'location', 'instagram'],
  ['digitals', 'portfolio', 'video'],
  ['consent'],
];

const navItems = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Application', href: '#apply' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const logos = ['Vogue India', 'Lakmé Fashion Week', 'Elle India', 'GQ India', 'Harper Bazaar'];
const faq = [
  { q: 'Is the ₹2,000 package mandatory?', a: 'Yes. It covers structured profile screening and internal evaluation by our talent panel.' },
  { q: 'How long does evaluation take?', a: 'Shortlisted profiles are generally reviewed within 7-10 working days.' },
  { q: 'How do you communicate?', a: 'Only via official @elitefaceindia.com emails and verified WhatsApp business account.' },
];

const initialForm = {
  name: '', age: '', height: '', bust: '', waist: '', hips: '',
  category: '', location: '', instagram: '', digitals: null, portfolio: null, video: null, consent: false,
};

const inputClass = 'w-full border-b border-[#D4AF37]/35 bg-transparent px-1 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-[#D4AF37]';

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('elite-cookie-ok');
    if (saved === 'yes') setCookieAccepted(true);
  }, []);

  const year = new Date().getFullYear();

  const stepProgress = useMemo(() => `${step}/4`, [step]);

  const setField = (field, value) => setFormData((p) => ({ ...p, [field]: value }));

  const isStepValid = () => {
    const fields = stepFields[step - 1];
    if (step === 3) return true;
    if (step === 4) return !!formData.consent;
    return fields.every((f) => `${formData[f]}`.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isStepValid()) return;
    if (step < 4) return setStep((s) => s + 1);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-black px-5 py-20 text-zinc-100">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#D4AF37]/35 bg-white/5 p-10 text-center backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Application received</p>
          <h1 className="mt-4 text-4xl font-semibold">Welcome to Elite Face India</h1>
          <p className="mt-5 text-zinc-300">Thank you for submitting your profile. Our team will contact shortlisted candidates through official channels only.</p>
          <button onClick={() => { setSubmitted(false); setStep(1); setFormData(initialForm); }} className="mt-8 rounded-full border border-[#D4AF37]/40 px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-[#D4AF37]/10">Submit another profile</button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-zinc-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.1),transparent_50%),linear-gradient(180deg,#030303,#000)]" />
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-xs uppercase tracking-[0.4em] text-amber-300">Elite Face India</a>
          <div className="hidden gap-8 lg:flex">{navItems.map((n) => <a key={n.label} href={n.href} className="text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-200">{n.label}</a>)}</div>
          <button onClick={() => setMenu((p) => !p)} className="rounded-full border border-[#D4AF37]/40 px-3 py-1 text-xs lg:hidden">Menu</button>
        </div>
        {menu && <div className="space-y-2 border-t border-white/10 px-5 py-4 lg:hidden">{navItems.map((n) => <a className="block text-xs text-zinc-300" href={n.href} key={n.label}>{n.label}</a>)}</div>}
      </nav>

      <header className="relative border-b border-white/10 px-5 py-16" id="portfolio">
        <img src={bg} className="absolute inset-0 h-full w-full object-cover opacity-20" alt="luxury fashion backdrop" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Premium model onboarding</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">Professional Luxury Application System</h1>
            <p className="mt-5 max-w-xl text-zinc-300">Built for Indian runway, editorial and global campaign opportunities. Structured, secure and agency-authentic.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[maleModel, femaleModel, gallery1, gallery2].map((img) => <img key={img} src={img} className="h-44 w-full rounded-2xl border border-[#D4AF37]/20 object-cover" alt="runway model" />)}
          </div>
        </div>
      </header>

      <section id="apply" className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-amber-300">Application flow</p>
              <h2 className="mt-2 text-3xl font-semibold">Step {step}: {['Personal Details', 'Experience & Location', 'Portfolio Submission', 'Package & Payment'][step - 1]}</h2>
            </div>
            <span className="rounded-full border border-[#D4AF37]/40 px-4 py-2 text-xs tracking-[0.2em] text-amber-200">{stepProgress}</span>
          </div>

          <form onSubmit={onSubmit} className="space-y-8">
            {step === 1 && <div className="grid gap-4 sm:grid-cols-2">{[
              ['name', 'Full Name'], ['age', 'Age'], ['height', 'Height (ft/in or cm)'], ['bust', 'Bust/Chest'], ['waist', 'Waist'], ['hips', 'Hips'],
            ].map(([field, label]) => <input key={field} className={inputClass} placeholder={label} value={formData[field]} onChange={(e) => setField(field, e.target.value)} required />)}</div>}

            {step === 2 && <div className="grid gap-5 sm:grid-cols-2">
              <select className={inputClass} value={formData.category} onChange={(e) => setField('category', e.target.value)} required>
                <option value="">Select Category</option><option>Runway Editorial</option><option>Luxury Campaign</option><option>Beauty & Cosmetics</option><option>Digital Creator</option><option>New Face Discovery</option>
              </select>
              <select className={inputClass} value={formData.location} onChange={(e) => setField('location', e.target.value)} required>
                <option value="">Select Location</option><option>Mumbai</option><option>Delhi</option><option>Bengaluru</option><option>International</option><option>Others</option>
              </select>
              <input className={`${inputClass} sm:col-span-2`} placeholder="Instagram Handle (@exampleusername)" value={formData.instagram} onChange={(e) => setField('instagram', e.target.value)} required />
            </div>}

            {step === 3 && <div className="space-y-5 text-sm">
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/30 p-5"><p className="mb-2 uppercase tracking-[0.2em] text-amber-200">A. Polaroids / Digitals (max 3)</p><p className="mb-3 text-zinc-400">No makeup, no filters, plain background, natural lighting.</p><input type="file" multiple accept=".jpg,.jpeg,.png" onChange={(e) => setField('digitals', e.target.files)} className="w-full text-zinc-400" /></div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/30 p-5"><p className="mb-2 uppercase tracking-[0.2em] text-amber-200">B. Professional Portfolio Photos (max 5)</p><p className="mb-3 text-zinc-400">Supported JPG/PNG, max 5MB per file.</p><input type="file" multiple accept=".jpg,.jpeg,.png" onChange={(e) => setField('portfolio', e.target.files)} className="w-full text-zinc-400" /></div>
              <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/30 p-5"><p className="mb-2 uppercase tracking-[0.2em] text-amber-200">Intro / Catwalk Video (15 sec)</p><p className="mb-3 text-zinc-400">Supported MP4/MOV, max 20MB.</p><input type="file" accept="video/*" onChange={(e) => setField('video', e.target.files?.[0] || null)} className="w-full text-zinc-400" /></div>
            </div>}

            {step === 4 && <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/10 to-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-300">₹2,000 Professional Package Includes</p>
                <ul className="mt-4 space-y-2 text-zinc-200"><li>• Digital Profile Screening</li><li>• Expert Portfolio Evaluation</li><li>• Inclusion in Active Casting Database</li></ul>
                <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-xs text-emerald-200">Secure encrypted data • Razorpay payment integration placeholder</div>
              </div>
              <div className="space-y-4 rounded-2xl border border-white/15 bg-black/35 p-6">
                <label className="flex items-start gap-3 text-sm text-zinc-200"><input type="checkbox" checked={formData.consent} onChange={(e) => setField('consent', e.target.checked)} className="mt-1" required /><span>I agree that the information provided is accurate and I consent to the non-refundable profile evaluation fee of ₹2,000.</span></label>
                <p className="text-xs text-zinc-400">By continuing, you accept GDPR/privacy-compliant data handling. We never request payment via personal UPI IDs.</p>
              </div>
            </div>}

            <div className="flex gap-3">
              {step > 1 && <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded-full border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.2em]">Back</button>}
              <button type="submit" className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-200 px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black">{step === 4 ? 'Pay & Submit' : 'Continue'}</button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-2" id="team">
        <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-7"><h3 className="text-2xl font-semibold">Meet the Team</h3><p className="mt-3 text-zinc-300">Casting directors, runway coaches and portfolio strategists for premium Indian and international placements.</p><img src={gallery3} className="mt-5 h-56 w-full rounded-2xl object-cover" alt="elite face team" /></div>
        <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-7" id="contact"><h3 className="text-2xl font-semibold">Client Inquiry Form</h3><div className="mt-4 grid gap-3"><input className={inputClass} placeholder="Brand / Agency Name" /><input className={inputClass} placeholder="Official Email" /><textarea className="min-h-28 w-full rounded-xl border border-[#D4AF37]/30 bg-black/35 p-3 text-sm" placeholder="Campaign requirements" /></div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <div className="mt-4 space-y-3">{faq.map((item, i) => <div key={item.q} className="rounded-xl border border-[#D4AF37]/20 p-4"><button className="w-full text-left" onClick={() => setFaqOpen(i)}>{item.q}</button>{faqOpen === i && <p className="mt-2 text-sm text-zinc-300">{item.a}</p>}</div>)}</div>
        </div>
        <div className="mt-8 rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-7"><h3 className="text-xl font-semibold">Industry Partnerships</h3><div className="mt-4 flex flex-wrap gap-3">{logos.map((l) => <span key={l} className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-zinc-300">{l}</span>)}</div></div>
        <div className="mt-8 rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-7"><h3 className="text-xl font-semibold">Official Office Location</h3><div className="mt-4 overflow-hidden rounded-2xl border border-white/10"><iframe title="Elite Face India map" src="https://maps.google.com/maps?q=Mumbai%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" className="h-72 w-full" /></div></div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs uppercase tracking-[0.2em] text-zinc-400">
        <p>Anti-Scam Notice: We never guarantee selection and never request payments through personal accounts.</p>
        <p className="mt-2">Official communication only from verified channels.</p>
        <p className="mt-4">© {year} Elite Face India</p>
      </footer>

      <a href="https://wa.me/910000000000" className="fixed bottom-6 right-5 rounded-full border border-emerald-300/50 bg-emerald-500/20 px-5 py-3 text-xs uppercase tracking-[0.2em] text-emerald-100">WhatsApp</a>

      {!cookieAccepted && <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D4AF37]/30 bg-black/95 p-4 text-xs text-zinc-300"><div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p>We use cookies to improve your onboarding experience and analytics.</p><button onClick={() => { localStorage.setItem('elite-cookie-ok', 'yes'); setCookieAccepted(true); }} className="rounded-full border border-[#D4AF37]/40 px-4 py-2 uppercase tracking-[0.15em] text-amber-200">Accept</button></div></div>}
    </div>
  );
}

export default App;
