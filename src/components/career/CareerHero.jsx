import React from "react";
import assets from "../../assets/assets";

function CareerHero() {
  const handleScrollToJobs = () => {
    const jobsSection = document.getElementById("open-positions");
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-950 py-20">
      
      {/* Background Grid & Light Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative container mx-auto max-w-6xl px-6 z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Core Copy & CTA (Spans 8 columns on large screens) */}
          <div className="flex flex-col items-center text-center lg:col-span-8 lg:items-start lg:text-left">
            
            {/* Tagline Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide text-indigo-200 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              We're Hiring!
            </span>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Build The Future <br />
              <span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                With Creyotech
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-indigo-100/80">
              Join a passionate, global team building innovative digital products. 
              Collaborate with exceptional talent and accelerate your career every step of the way.
            </p>

            {/* Call to Action */}
            <div className="mt-10">
              <button 
                onClick={handleScrollToJobs}
                className="group relative inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-indigo-950 shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-xl active:translate-y-0"
              >
                View Open Positions
                <svg 
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Logo Container (Spans 4 columns on large screens) */}
          {assets.GreatPlaceToWork && (
            <div className="flex flex-col items-center justify-center lg:col-span-4 lg:items-end animate-fade-in">
              <div className="text-center lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-center text-indigo-300/50 mb-3 block">
                  Certified Culture
                </p>
                <div className="inline-flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 shadow-xl">
                  <img
                    src={assets.GreatPlaceToWork}
                    alt="Great Place to Work Certified Logo"
                    className="h-24 sm:h-28 lg:h-40 w-auto object-contain brightness-110"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default CareerHero;