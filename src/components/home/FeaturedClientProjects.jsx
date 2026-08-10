import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

import drEmiliaDentalCare from "../../assets/projects/dr-emilia-dental-care.png";
import horizonMulticareHospital from "../../assets/projects/horizon-multicare-hospital.png";
import primeVistaRealEstate from "../../assets/projects/prime-vista-real-estate.png";
import luminaJewelHouse from "../../assets/projects/lumina-jewel-house.png";

const featuredProjects = [
  {
    id: 1,
    client: "Lumina Jewel House",
    title: "Luxury Jewelry Brand Website",
    category: "Jewelry & Lifestyle",
    description:
      "A premium digital presence designed to showcase jewelry collections, strengthen brand identity, and create an elegant browsing experience.",
    services: ["Website Development", "UI/UX Design"],
    image: luminaJewelHouse,
    href: "http://luminajewelhouse.creyotech.com",
  },
  {
    id: 2,
    client: "Prime Vista Real Estate",
    title: "Real Estate Digital Platform",
    category: "Real Estate",
    description:
      "A professional real estate website designed to present properties and create a polished experience for prospective buyers.",
    services: ["Website Development", "UI/UX Design"],
    image: primeVistaRealEstate,
    href: "http://primevistarealestate.creyotech.com",
  },
  {
    id: 3,
    client: "Horizon Multicare Hospital",
    title: "Hospital Digital Experience",
    category: "Healthcare",
    description:
      "A modern hospital website designed to communicate healthcare services, departments, facilities, and patient-focused information.",
    services: ["Website Development", "Healthcare"],
    image: horizonMulticareHospital,
    href: "http://horizonmulticarehospital.creyotech.com",
  },
  {
    id: 4,
    client: "Dr. Emilia Dental Care",
    title: "Modern Dental Care Website",
    category: "Healthcare",
    description:
      "A professional healthcare website designed to build patient trust and present dental services through a clean digital experience.",
    services: ["Website Development", "UI/UX Design"],
    image: drEmiliaDentalCare,
    href: "https://dremiliadentalcare.creyotech.com/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function FeaturedClientProjects() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Background Lighting / Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <Sparkles size={13} />
              Featured Client Projects
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl dark:text-text-light"
            >
              Built for Businesses.
              <span className="text-primary"> Designed for Impact.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-3 max-w-xl text-sm text-text-secondary sm:text-base dark:text-text-light/70"
            >
              A glimpse of the bespoke digital experiences we&apos;ve crafted
              for clients across various industries.
            </motion.p>
          </div>

          {/* View All Button */}
          <motion.a
            href="/our-work"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border-light bg-white px-5 py-2.5 text-xs font-semibold text-text-primary shadow-xs transition-all duration-300 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-secondary dark:text-text-light"
          >
            Explore All Work
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* Improved 2-Column Responsive Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-light bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:bg-secondary dark:hover:border-primary/40"
            >
              <div>
                {/* Browser Mockup Window Container for Screenshot */}
                <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-inner dark:border-white/10 dark:bg-slate-900">
                  {/* Browser Window Header Control Bar */}
                  <div className="flex h-7 items-center justify-between bg-slate-200/60 px-3 dark:bg-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <span className="truncate text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      {project.client.toLowerCase().replace(/[^a-z0-0]/g, "")}
                      .com
                    </span>
                    <ExternalLink size={11} className="text-slate-400" />
                  </div>

                  {/* Screenshot Container - object-top ensures hero sections are always visible */}
                  <div className="relative w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                      src={project.image}
                      alt={`${project.client} website showcase`}
                      loading="lazy"
                      className="h-full w-full object-cover  transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Action Circle */}
                    <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="mt-4 px-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {project.client}
                  </p>

                  <h3 className="mt-1 text-lg font-bold tracking-tight text-text-primary transition-colors duration-200 group-hover:text-primary sm:text-xl dark:text-text-light">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs sm:text-sm text-text-secondary dark:text-text-light/70">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Service Badges Footer */}
              <div className="mt-4 flex flex-wrap gap-1.5 px-1 pt-3 border-t border-slate-100 dark:border-white/5">
                {project.services?.map((service) => (
                  <span
                    key={service}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-text-secondary dark:bg-white/5 dark:text-text-light/70"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedClientProjects;
