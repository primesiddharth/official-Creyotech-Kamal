import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import { clientProjects } from "../../data/projects/clientProjects";
import OurWorkHero from "../OurWorkHero";

const categories = [
  "All",
  "Healthcare",
  "Finance",
  "Fashion",
  "Jewelry",
  "Construction",
  "Real Estate",
];

function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(clientProjects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return clientProjects;
    }

    return clientProjects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-bg-dark">
      {/* HERO */}
      <OurWorkHero />
     
     <section
        id="projects"
        className="bg-bg-light px-5 py-16 dark:bg-bg-dark sm:px-8 lg:px-10"
      >
        {/* PROJECTS */}
        <section className="pb-20 sm:pb-24 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {/* Filter */}
            <div className="mb-8 overflow-x-auto pb-2">
              <div className="flex min-w-max items-center justify-center gap-2">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`
                      rounded-full
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      transition-all
                      duration-300
                      sm:text-sm
                      ${
                        active
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "border border-border-light bg-white text-text-secondary hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-secondary dark:text-text-light/65"
                      }
                    `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Result Count */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-light/60">
                <FolderKanban size={16} className="text-primary" />

                <span>
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1 ? "Project" : "Projects"}
                </span>
              </div>

              <span className="hidden text-xs text-text-secondary sm:block dark:text-text-light/50">
                Selected Client Work
              </span>
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid gap-6 lg:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <motion.a
                  layout
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-border-light
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-2xl
                  dark:border-white/10
                  dark:bg-secondary
                "
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-slate-100 dark:bg-white/5">
                    <img
                      src={project.image}
                      alt={`${project.client} - ${project.title}`}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                      h-full
                      w-full
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    {/* Category */}
                    <span
                      className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[1.5px]
                      text-white
                      backdrop-blur-md
                    "
                    >
                      {project.category}
                    </span>

                    {/* External Link */}
                    <div
                      className="
                      absolute
                      bottom-5
                      right-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-primary
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                    >
                      <ExternalLink size={17} />
                    </div>

                    {/* Client */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-xs font-medium uppercase tracking-[1.5px] text-white/70">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2
                          className="
                          text-xl
                          font-bold
                          tracking-tight
                          text-text-primary
                          transition-colors
                          group-hover:text-primary
                          sm:text-2xl
                          dark:text-text-light
                        "
                        >
                          {project.title}
                        </h2>

                        <p
                          className="
                          mt-3
                          max-w-2xl
                          text-sm
                          leading-6
                          text-text-secondary
                          dark:text-text-light/60
                        "
                        >
                          {project.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="
                        mt-1
                        shrink-0
                        text-text-secondary
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-primary
                        dark:text-text-light/40
                      "
                      />
                    </div>

                    {/* Services */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="
                          rounded-full
                          bg-slate-100
                          px-3
                          py-1.5
                          text-[11px]
                          font-medium
                          text-text-secondary
                          dark:bg-white/5
                          dark:text-text-light/60
                        "
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="rounded-3xl border border-border-light bg-white p-12 text-center dark:border-white/10 dark:bg-secondary">
                <FolderKanban size={36} className="mx-auto text-primary" />

                <h3 className="mt-4 text-xl font-bold text-text-primary dark:text-text-light">
                  No projects found
                </h3>

                <p className="mt-2 text-sm text-text-secondary dark:text-text-light/60">
                  Try selecting another project category.
                </p>
              </div>
            )}
          </div>
        </section>
      </section>
      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-primary
              px-6
              py-12
              text-center
              sm:px-10
              sm:py-16
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[2px] text-white/70">
                Have a project in mind?
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s build something great together.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Tell us about your business, goals, and ideas. We&apos;ll help
                you turn them into a digital experience that works.
              </p>

              <a
                href="/contact-us"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-primary
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Start a Project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurWork;
