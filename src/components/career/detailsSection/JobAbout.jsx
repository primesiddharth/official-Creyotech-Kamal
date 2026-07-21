import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Sparkles,
} from "lucide-react";
import JobApply from "./JobApply";

function JobAbout({ job }) {
  const highlights = [
    { label: "Role Type", value: job?.type || "Full-time" },
    { label: "Location", value: job?.location || "Remote" },
    { label: "Experience", value: job?.experience || "Freshers" },
    { label: "Duration", value: job?.duration || "Flexible" },
  ];

  const sections = [
    {
      title: "About the role",
      content: job?.roleOverview,
      icon: BriefcaseBusiness,
    },
    {
      title: "Why this role stands out",
      content: job?.description,
      icon: Building2,
    },
    {
      title: "Key responsibilities",
      items: job?.responsibilities || [],
      icon: Clock3,
    },
    {
      title: "Requirements",
      items: job?.requirements || [],
      icon: BriefcaseBusiness,
    },
    {
      title: "Tech stack",
      items: job?.techStack || [],
      icon: Sparkles,
    },
    {
      title: "What you'll gain",
      items: job?.whatYouWillGain || [],
      icon: Sparkles,
    },
    {
      title: "Why join us",
      items: job?.whyJoin || [],
      icon: Building2,
    },
  ];

  return (
    <section className="py-12 md:py-4 ">
      <div className="mx-auto max-w-7xl px-0">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="max-h-full overflow-y-auto bg-white/90 p-6 rounded-2xl  dark:border-white/10 dark:bg-secondary md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-col">
                <a
                  href="/career"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-6 group"
                >
                  <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Back to Careers
                </a>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                  <BriefcaseBusiness size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-text-light">
                  {job?.title || "Role Overview"}
                </h2>
                <p className="mt-2 text-sm text-text-secondary dark:text-text-light/70">
                  A polished overview of the role, expectations, tools, and
                  growth opportunity.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-300">
                <Sparkles size={16} />
                Open for applications
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-zinc-800/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-primary dark:text-text-light">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-5">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div
                    key={section.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-zinc-800/40"
                  >
                    <div className="flex items-center gap-2 text-xl font-semibold text-text-primary dark:text-text-light">
                      <Icon size={24} />
                      {section.title}
                    </div>

                    {section.content ? (
                      <p className="mt-3 whitespace-pre-line text-sm font-medium leading-6 text-text-secondary dark:text-text-light/80">
                        {section.content}
                      </p>
                    ) : null}

                    {section.items ? (
                      <ul
                        className={`mt-4 text-sm font-medium leading-6 text-text-secondary dark:text-text-light/80 ${
                          section.title === "Tech stack"
                            ? "flex flex-wrap gap-2"
                            : "space-y-2"
                        }`}
                      >
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className={
                              section.title === "Tech stack"
                                ? "rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary dark:border-primary/25 dark:bg-primary/15 dark:text-primary/90"
                                : "flex gap-2"
                            }
                          >
                            {section.title === "Tech stack" ? (
                              <span>{item}</span>
                            ) : (
                              <>
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                <span>{item}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm text-text-secondary dark:border-primary/20 dark:bg-primary/10 dark:text-text-light/80">
              Ready to apply? Fill the form on the right and share your details
              with us.
            </div>

            <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-zinc-900/40">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-zinc-800 dark:text-slate-300">
                {job?.type || "Role"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-zinc-800 dark:text-slate-300">
                {job?.location || "Remote"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-zinc-800 dark:text-slate-300">
                {job?.experience || "Freshers"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-zinc-800 dark:text-slate-300">
                {job?.duration || "Flexible"}
              </span>
            </div>
          </div>

          <div className="xl:sticky xl:top-24">
            <JobApply job={job} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobAbout;
