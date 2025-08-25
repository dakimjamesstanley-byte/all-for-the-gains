
'use client';
import React from 'react';

export default function Page() {
  const calendlyLink = "https://calendly.com/dakimdjs/30min";
  const formspreeEndpoint = "https://formspree.io/f/xvgbpvpy";
  const stripeLinks = { four: calendlyLink, eight: calendlyLink, twelve: calendlyLink };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-red-500/20 grid place-items-center">
              <span className="text-red-400 font-bold">AFG</span>
            </div>
            <div>
              <p className="text-sm tracking-widest text-neutral-400">ALL FOR THE GAINS</p>
              <p className="text-xs text-neutral-500 -mt-1">by Dakim Stanley</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#coaching" className="hover:text-white">Coaching</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Results</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-red-500 text-neutral-900 font-semibold shadow hover:bg-red-400"
          >
            Enroll Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Built by Discipline. Guided by Faith. <span className="text-red-400">Results that last.</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-prose">
              Online coaching that combines customized training, macros, and accountability—designed for busy people who want
              elite results without wasting hours in the gym. No fluff. No shortcuts. Just the work that works.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-2xl px-5 py-3 bg-red-500 text-neutral-900 font-semibold shadow hover:bg-red-400"
              >
                View Programs
              </a>
              <a
                href="#coaching"
                className="rounded-2xl px-5 py-3 border border-neutral-700 hover:border-neutral-500"
              >
                What You Get
              </a>
            </div>
            <div className="mt-6 text-sm text-neutral-400">
              <p>100% online • Weekly check-ins • Faith-forward coaching available on request</p>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-2 border border-neutral-800 shadow-xl">
              <img
                src="/hero.jpg"
                alt="Training"
                className="rounded-2xl object-cover h-[340px] w-full"
              />
            </div>
            <div className="mt-3 text-xs text-neutral-500 text-right">*Placeholder image — replace with your photos</div>
          </div>
        </div>
      </section>

      {/* Coaching Feature Grid */}
      <section id="coaching" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">What You Get</h2>
          <p className="mt-2 text-neutral-300">Everything you need to execute—nothing you don't.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Custom Training Plan", desc: "4–6 day split tailored to your schedule (gym or home). Progression blocks updated monthly." },
              { title: "Macros & Meal Guide", desc: "Macros set for your goal (cut/recomp/bulk) + simple food lists and eating templates." },
              { title: "Weekly Check-ins", desc: "Video or voice-note feedback, form coaching, and accountability so you never drift." },
              { title: "Habit & Mindset", desc: "Faith-forward discipline frameworks, journaling prompts, and routines that stick." },
              { title: "Support Between Check-ins", desc: "Email/DM support for quick questions so momentum never stalls." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-neutral-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Programs & Pricing</h2>
          <p className="mt-2 text-neutral-300">Start where you are. Level up each quarter.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: "4 week plan", price: "$100", features: ["Custom plan", "Macros coaching", "Weekly check-ins", "Contact me at any time"], link: stripeLinks.four, badge: "Best for new lifters" },
              { name: "8 week plan", price: "$199", features: ["Custom plan", "Macros coaching", "Weekly check-ins", "Contact me at any time"], link: stripeLinks.eight, badge: "Most popular" },
              { name: "12 week plan", price: "$299", features: ["Everything in Standard", "Custom plan", "Weekly check-ins", "Contact me at any time"], link: stripeLinks.twelve, badge: "Max results" },
            ].map((tier, i) => (
              <div key={i} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40 flex flex-col">
                <div className="text-xs text-red-400 font-medium">{tier.badge}</div>
                <h3 className="mt-2 text-xl font-semibold">{tier.name}</h3>
                <div className="mt-1 text-3xl font-extrabold">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {tier.features.map((t, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <a href={tier.link} className="mt-6 rounded-2xl px-4 py-2 bg-red-500 text-neutral-900 font-semibold text-center hover:bg-red-400">
                  Enroll Now
                </a>
                <a href={calendlyLink} className="mt-3 rounded-2xl px-4 py-2 border border-neutral-700 text-center hover:border-neutral-500">Book a Call</a>
                <a href="#contact" className="mt-3 text-sm text-neutral-300 underline text-center">Questions? Contact me</a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">*Pricing is placeholder—set final rates when ready.</p>
        </div>
      </section>

      {/* Testimonials / Results placeholder */}
      <section id="testimonials" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Client Results</h2>
          <p className="mt-2 text-neutral-300">Upload before/afters and wins here as you collect them.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-neutral-800 p-4 bg-neutral-900/40 h-40 grid place-items-center text-neutral-500">
                Your transformation will be here.
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* About */}
<section id="about" className="border-t border-neutral-800 bg-neutral-950">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold">About Dakim Stanley</h2>

    <p className="mt-3 text-neutral-300 max-w-3xl">
      When <span className="text-neutral-100 font-medium">Summer 2021</span> hit that’s when I decided to take my health
      and fitness seriously. I believe in building up men and women to be fully confident in themselves and live a
      healthier lifestyle. If you give it your all, there’s no way you can fail with this program. It all starts with
      your mind—then it leaks out to your body, spirit, and your health.
    </p>

    <ul className="mt-6 space-y-3 text-neutral-300 text-sm max-w-3xl">
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-red-500/90" />
        <span>Write out any workout split based on the days you have available to workout.</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-red-500/90" />
        <span>Macros for your goal (with food lists you’ll actually eat).</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-red-500/90" />
        <span>Weekly check-ins and real feedback.</span>
      </li>
    </ul>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Get Started</h2>
          <p className="mt-2 text-neutral-300">Tell me about your goals—I'll reply within 24–48 hours.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              fetch(formspreeEndpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
                .then((r) => { if (r.ok) { form.reset(); window.location.hash = '#thanks'; } else { alert('There was a problem sending your message. Please email dakimdjs@yahoo.com'); }})
                .catch(() => alert('Network error. Please email dakimdjs@yahoo.com'));
            }} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
              <div className="grid gap-4">
                <input type="hidden" name="_subject" value="New coaching inquiry from All For The Gains" />
                <input name="name" placeholder="Name" required className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:outline-none" />
                <input type="tel" inputMode="tel" name="phone" placeholder="Phone" className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:outline-none" />
                <input type="email" name="email" placeholder="Email" required className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:outline-none" />
                <textarea name="goals" placeholder="Tell me about your goals" rows={5} className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:outline-none" />
              </div>
              <button type="submit" className="mt-4 rounded-2xl px-5 py-3 bg-red-500 text-neutral-900 font-semibold hover:bg-red-400">
                Send Message
              </button>
            </form>
            <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li><a href="#pricing" className="hover:underline">Programs & Pricing</a></li>
                <li><a href="#coaching" className="hover:underline">What You Get</a></li>
                <li><a href="#testimonials" className="hover:underline">Client Results</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
              </ul>
              <div className="mt-6 text-sm text-neutral-400">
                <p>Business email is <a className="underline" href="mailto:dakimdjs@yahoo.com">dakimdjs@yahoo.com</a></p>
                <p className="mt-1">Chattanooga, TN • Online coaching worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thanks Section */}
      <section id="thanks" className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-extrabold">Thank you! 🎉</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">Your message was sent. I usually reply within 24–48 hours. In the meantime, you can enroll in a plan or book a quick intro call below.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="#pricing" className="rounded-2xl px-5 py-3 bg-red-500 text-neutral-900 font-semibold shadow hover:bg-red-400">View Programs</a>
            <a href={calendlyLink} className="rounded-2xl px-5 py-3 border border-neutral-700 hover:border-neutral-500">Book a Call</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} All For The Gains by Dakim Stanley. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Instagram</a>
            <a href="#" className="hover:text-neutral-300">TikTok</a>
            <a href="#" className="hover:text-neutral-300">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
