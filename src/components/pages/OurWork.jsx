import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
} from "lucide-react";

import drEmiliaDentalCare from "../../assets/projects/dr-emilia-dental-care.png";
import horizonMulticareHospital from "../../assets/projects/horizon-multicare-hospital.png";
import sterlingLedgerAdvisors from "../../assets/projects/sterling-ledger-advisors.png";
import threadcraftFashion from "../../assets/projects/threadcraft-fashion.png";
import luminaJewelHouse from "../../assets/projects/lumina-jewel-house.png";
import apexBuildConstruction from "../../assets/projects/apex-build-construction.png";
import primeVistaRealEstate from "../../assets/projects/prime-vista-real-estate.png";

const projects = [
  {
    id: 1,
    client: "Dr. Emilia Dental Care",
    title: "Modern Dental Care Website",
    category: "Healthcare",
    description:
      "A professional healthcare website designed to build patient trust, communicate dental services, and provide a clean digital experience for patients.",
    services: ["Website Development", "UI/UX Design"],
    image: drEmiliaDentalCare,
    href: "https://dremiliadentalcare.creyotech.com/",
  },

  {
    id: 2,
    client: "Horizon Multicare Hospital",
    title: "Hospital Digital Experience",
    category: "Healthcare",
    description:
      "A modern hospital website created to present healthcare services, departments, facilities, and patient-focused information in a clear structure.",
    services: ["Website Development", "Healthcare"],
    image: horizonMulticareHospital,
    href: "http://horizonmulticarehospital.creyotech.com",
  },

  {
    id: 3,
    client: "Sterling Ledger Advisors",
    title: "Financial Advisory Website",
    category: "Finance",
    description:
      "A professional digital presence for a financial advisory business focused on trust, clarity, service presentation, and business credibility.",
    services: ["Website Development", "UI/UX Design"],
    image: sterlingLedgerAdvisors,
    href: "http://sterlingledgeradvisors.creyotech.com",
  },

  {
    id: 4,
    client: "Threadcraft Fashion",
    title: "Fashion Brand Website",
    category: "Fashion",
    description:
      "A visually engaging website designed to showcase the fashion brand, products, identity, and overall customer experience.",
    services: ["Website Development", "Brand Experience"],
    image: threadcraftFashion,
    href: "http://threadcraftfashion.creyotech.com",
  },

  {
    id: 5,
    client: "Lumina Jewel House",
    title: "Luxury Jewelry Brand Website",
    category: "Jewelry",
    description:
      "A premium digital experience designed to showcase jewelry collections, strengthen brand identity, and create an elegant browsing experience.",
    services: ["Website Development", "UI/UX Design"],
    image: luminaJewelHouse,
    href: "http://luminajewelhouse.creyotech.com",
  },

  {
    id: 6,
    client: "Apex Build Construction",
    title: "Construction Company Website",
    category: "Construction",
    description:
      "A professional business website created to showcase construction services, projects, company capabilities, and establish a strong online presence.",
    services: ["Website Development", "UI/UX Design"],
    image: apexBuildConstruction,
    href: "http://apexbuildconstruction.creyotech.com",
  },

  {
    id: 7,
    client: "Prime Vista Real Estate",
    title: "Real Estate Digital Platform",
    category: "Real Estate",
    description:
      "A polished real estate website designed to present properties, communicate project information, and create a smooth experience for prospective buyers.",
    services: ["Website Development", "UI/UX Design"],
    image: primeVistaRealEstate,
    href: "http://primevistarealestate.creyotech.com",
  },
];

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

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-bg-dark">
    {/* HERO */}
      <section className="relative overflow-hidden pb-14 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28">
        {/* Background Effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-indigo-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              <Sparkles size={14} />
              Our Work
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
              }}
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                text-text-primary
                sm:text-5xl
                lg:text-6xl
                dark:text-text-light
              "
            >
              Digital Experiences
              <span className="block text-primary">
                We&apos;ve Built
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-text-secondary
                sm:text-base
                dark:text-text-light/65
              "
            >
              Explore a selection of websites and digital experiences we&apos;ve
              created for businesses across healthcare, finance, fashion,
              jewelry, construction, and real estate.
            </motion.p>
          </div>
        </div>
      </section>

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
                {filteredProjects.length === 1
                  ? "Project"
                  : "Projects"}
              </span>
            </div>

            <span className="hidden text-xs text-text-secondary sm:block dark:text-text-light/50">
              Selected Client Work
            </span>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid gap-6 lg:grid-cols-2"
          >
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
              <FolderKanban
                size={36}
                className="mx-auto text-primary"
              />

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
                Tell us about your business, goals, and ideas. We&apos;ll help you
                turn them into a digital experience that works.
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