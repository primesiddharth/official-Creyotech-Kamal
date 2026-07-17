import React from "react";

function WhyJoinCreyotech() {
  const coreBenefits = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-indigo-500 dark:text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "High-Impact Projects",
      description:
        "Work on cutting-edge software products that actively solve complex problems for global enterprises and scaling startups alike.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-purple-500 dark:text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "People-First Culture",
      description:
        "We bypass standard bureaucracy. Experience a genuinely collaborative environment built on psychological safety, mutual respect, and trust.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-pink-500 dark:text-pink-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Continuous Evolution",
      description:
        "Get dedicated budgets for professional training courses, technical certifications, and attending industry-leading conferences.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-emerald-500 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "True Autonomy",
      description:
        "Own your schedules and workflows with flexible hours and remote-friendly options. We optimize for high-impact outputs, not hours at a desk.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-15 transition-colors duration-300 dark:bg-slate-950 sm:py-10">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[140px] dark:bg-indigo-600/5" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Why Join Creyotech
          </h2>

          <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            A launchpad for your talent,
            <br className="hidden sm:inline" />
            not just another tech job.
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            We strip away rigid corporate constraints to let exceptional
            builders build. Here is what makes working with us fundamentally
            different.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:gap-8">
          {coreBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none dark:hover:border-indigo-500/30 dark:hover:bg-slate-900/80 dark:hover:shadow-2xl dark:hover:shadow-indigo-950/20 sm:p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-500/5" />

              <div className="relative flex h-full flex-col">
                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 shadow-inner transition-colors duration-300 group-hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:border-indigo-500/20">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-200">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-200 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-100 p-8 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950 dark:shadow-none sm:mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                94%
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-500">
                Retention Rate
              </p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                4.8★
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-500">
                Glassdoor Score
              </p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                15+
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-500">
                Global Nationalities
              </p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                $2K
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-500">
                Annual L&amp;D Stipend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoinCreyotech;
