// --- SUB-COMPONENTS ---
const Highlight = ({ text, color = 'bg-green-100 text-green-800' }) => (
  <span className={`px-3 py-1 rounded-full inline-block font-serif italic ${color}`}>{text}</span>
);

const UnderlineText = ({ text, color = 'border-amber-400' }) => (
  <span className={`border-b-4 ${color} inline-block`}>{text}</span>
);

const ServiceRow = ({ category, title }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition-colors px-4 rounded-lg">
    <span className="text-sm text-gray-500 uppercase tracking-wider mb-2 md:mb-0 w-full md:w-1/4">{category}</span>
    <h3 className="text-xl md:text-2xl font-medium text-gray-800 flex-1">{title}</h3>
    <div className="text-2xl text-gray-400 group-hover:text-black group-hover:translate-x-2 transition-transform mt-2 md:mt-0">➔</div>
  </div>
);

// --- MAIN APPLICATION COMPONENT ---
function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans antialiased overflow-x-hidden">
      
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">Elementum</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Studio</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">Work</a>
        </nav>
        <button className="hidden md:block border border-black px-5 py-2 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all">
          Get in touch
        </button>
        <button className="md:hidden text-2xl">☰</button>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center px-6 pt-16 pb-24 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight mb-6">
          The <UnderlineText text="thinkers" /> and <br />
          doers were changing <br />
          the <Highlight text="status" color="bg-pink-100 text-pink-700" /> Quo with
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base mb-12">
          We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto items-center">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg" />
        </div>
      </section>

      {/* FEATURE 1 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h2 className="text-3xl font-light leading-tight">Tomorrow should <br /> be better than <Highlight text="today" /></h2>
          <p className="text-gray-600 text-sm">We are a team of strategists, designers, communicators, researchers. Together we realize that progress only happens when you refuse to play things safe.</p>
          <a href="#" className="inline-block text-sm font-semibold border-b border-black pb-1">Read more ➔</a>
        </div>
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FEATURE 2 */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-light leading-tight"><UnderlineText text="See" /> how we can <br /> help you <Highlight text="progress" color="bg-green-50 text-emerald-800" /></h2>
          <p className="text-gray-600 text-sm">We work across all aspects of design, insights and advice that drives change makers to accelerate their progress.</p>
          <a href="#" className="inline-block text-sm font-semibold border-b border-black pb-1">Read more ➔</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light mb-12">What we <Highlight text="can" color="bg-emerald-50 text-emerald-700" /> <br /><UnderlineText text="offer" /> you!</h2>
        <div className="mt-8 space-y-2">
          <ServiceRow category="Offers across multiple interest sectors" title="Collaborative & partnership" />
          <ServiceRow category="The heavy lift for heavy digital experiences" title="We talk about our weight" />
          <ServiceRow category="Delta focused context, social, digital" title="Piloting digital confidence" />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center relative">
        <h2 className="text-2xl font-light mb-12"><Highlight text="What" /> our customer <br /> says About Us</h2>
        <div className="bg-white/60 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-gray-100 max-w-2xl mx-auto shadow-sm relative">
          <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed">
            Elementum delivered the site within a tight timeline as they requested. With and, the client built a 10% increase in traffic within days since its launch.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-3">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" className="w-12 h-12 rounded-full object-cover" />
            <div className="text-left">
              <h4 className="font-semibold text-sm">Marcus Vance</h4>
              <p className="text-xs text-gray-500">Core Infrastructure Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER & FOOTER */}
      <section className="bg-[#E2F0D9] text-emerald-950 mx-4 my-4 rounded-3xl pt-20 pb-16 px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-light mb-4">Subscribe to <br /> our newsletter</h2>
        <p className="text-xs sm:text-sm text-emerald-800/80 mb-8">To make your day updates much more memorable.</p>
        <button className="bg-black text-white text-xs font-semibold px-6 py-3 rounded-full uppercase mb-16">Subscribe Now</button>
        <div className="max-w-6xl mx-auto pt-12 border-t border-emerald-900/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-left text-xs">
          <div>
            <h4 className="font-bold mb-3 uppercase">Company</h4>
            <ul className="space-y-2 opacity-80"><li>Home</li><li>Studio</li><li>Service</li></ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase">Terms & Policies</h4>
            <ul className="space-y-2 opacity-80"><li>Privacy Policy</li><li>Terms</li></ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase">Follow Us</h4>
            <ul className="space-y-2 opacity-80"><li>Instagram</li><li>LinkedIn</li></ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 uppercase">Contact</h4>
            <p className="opacity-80">200 Origin St, APAC<br />info@elementum.com</p>
          </div>
        </div>
        <div className="text-center text-[10px] opacity-40 mt-12">© 2026 Elementum. All rights reserved.</div>
      </section>

    </div>
  );
}

// React Mounting
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
