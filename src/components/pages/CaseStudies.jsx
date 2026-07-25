import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  HeartPulse,
  Hotel,
  Landmark,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "TechNova Solutions",
    title: "Transforming a growing business with a modern digital presence",
    description:
      "We redesigned the company's digital experience and created a scalable platform focused on stronger brand positioning, performance and conversions.",
    industry: "Technology",
    service: "Web Development",
    icon: Code2,
    result: "50%",
    resultLabel: "Growth in conversions",
    href: "/case-studies",
  },
  {
    id: 2,
    client: "Grand Vista",
    title: "Simplifying hospitality operations through technology",
    description:
      "A streamlined digital solution designed to improve guest experiences, simplify daily operations and strengthen the brand's online presence.",
    industry: "Hospitality",
    service: "Digital Solutions",
    icon: Hotel,
    result: "40%",
    resultLabel: "Faster operations",
    href: "/case-studies",
  },
  {
    id: 3,
    client: "VitaCore",
    title: "Building a better digital experience for healthcare",
    description:
      "We created an accessible and reliable digital experience that helps patients discover services and interact with the organization more efficiently.",
    industry: "Healthcare",
    service: "UI/UX & Development",
    icon: HeartPulse,
    result: "2.5x",
    resultLabel: "More engagement",
    href: "/case-studies",
  },
  {
    id: 4,
    client: "PrimeVest Capital",
    title: "Modernizing financial services with a trust-first experience",
    description:
      "A professional digital platform built around clarity, credibility and an intuitive customer journey for a growing financial brand.",
    industry: "Finance",
    service: "Web Development",
    icon: Landmark,
    result: "35%",
    resultLabel: "More qualified leads",
    href: "/case-studies",
  },
  {
    id: 5,
    client: "UrbanGlow",
    title: "Creating a conversion-focused experience for a D2C brand",
    description:
      "We combined modern design, performance optimization and a simplified shopping journey to help the brand convert more visitors into customers.",
    industry: "D2C",
    service: "E-commerce",
    icon: ShoppingBag,
    result: "42%",
    resultLabel: "Higher conversions",
    href: "/case-studies",
  },
  {
    id: 6,
    client: "NexForge Industries",
    title: "Giving an industrial brand a modern digital identity",
    description:
      "A complete digital refresh that transformed a traditional manufacturing presence into a clear, credible and modern B2B experience.",
    industry: "Manufacturing",
    service: "Branding & Web",
    icon: Building2,
    result: "3x",
    resultLabel: "More enquiries",
    href: "/case-studies",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function CaseStudies() {
  return (
    <main className="overflow-hidden bg-white dark:bg-secondary">
      {/* ================= HERO ================= */}

      <section
        className="
          relative
          h-screen
          py-8
          border-b
          border-slate-200/70
          bg-slate-50/70
          dark:border-white/10
          dark:bg-slate-950/30
        "
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-0
              h-[400px]
              w-[650px]
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-[130px]
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              dark:opacity-[0.04]
              [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            py-20
            sm:px-10
            sm:py-24
            lg:px-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/20
                bg-primary/5
                px-4
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
                dark:bg-primary/10
              "
            >
              <Sparkles size={13} />
              Our Work
            </div>

            <h1
              className="
                mt-6
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              Ideas turned into
              <span className="text-primary"> real impact.</span>
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-600
                sm:text-base
                dark:text-slate-400
              "
            >
              Explore how Creyotech helps businesses solve real challenges
              through strategy, design, technology and digital experiences.
            </p>

            {/* Stats */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-8">
              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  50+
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Projects Delivered
                </p>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />

              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  8+
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">Industries</p>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />

              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  99%
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        {/* Section Heading */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Featured Case Studies
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-4xl
                dark:text-white
              "
            >
              Work we&apos;re proud of.
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            A closer look at the challenges, solutions and outcomes behind
            selected Creyotech projects.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {caseStudies.map((study, index) => {
            const Icon = study.icon;

            return (
              <motion.article
                key={study.id}
                variants={cardVariants}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/80
                  bg-slate-50/60
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-white
                  hover:shadow-xl
                  hover:shadow-slate-900/5

                  dark:border-white/10
                  dark:bg-slate-900/40
                  dark:hover:border-primary/30
                  dark:hover:bg-slate-900/70
                "
              >
                {/* Visual Area */}
                <div
                  className="
                    relative
                    flex
                    h-48
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-slate-200/70
                    bg-slate-100
                    dark:border-white/10
                    dark:bg-slate-950/50
                  "
                >
                  {/* Decorative Circles */}
                  <div className="absolute h-48 w-48 rounded-full border border-primary/10" />
                  <div className="absolute h-32 w-32 rounded-full border border-primary/20" />

                  <div
                    className="
                      absolute
                      right-10
                      top-0
                      h-32
                      w-32
                      rounded-full
                      bg-primary/10
                      blur-3xl
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-primary/10
                      bg-white
                      text-primary
                      shadow-lg
                      shadow-slate-900/5
                      transition-all
                      duration-500

                      group-hover:-rotate-3
                      group-hover:scale-105

                      dark:bg-slate-900
                    "
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      absolute
                      left-5
                      top-4
                      text-[10px]
                      font-semibold
                      tracking-[2px]
                      text-slate-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="
                        rounded-full
                        bg-primary/10
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        text-primary
                      "
                    >
                      {study.industry}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        text-slate-500

                        dark:bg-slate-800
                        dark:text-slate-400
                      "
                    >
                      {study.service}
                    </span>
                  </div>

                  {/* Client */}
                  <p
                    className="
                      mt-5
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[1.5px]
                      text-slate-400
                    "
                  >
                    {study.client}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      leading-7
                      text-slate-900
                      transition-colors
                      group-hover:text-primary

                      sm:text-2xl
                      dark:text-white
                    "
                  >
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {study.description}
                  </p>

                  {/* Bottom */}
                  <div
                    className="
                      mt-6
                      flex
                      items-end
                      justify-between
                      gap-4
                      border-t
                      border-slate-200/70
                      pt-4
                      dark:border-white/10
                    "
                  >
                    {/* Result */}
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        {study.result}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                        {study.resultLabel}
                      </p>
                    </div>

                    {/* Link */}
                    <Link
                      to={study.href}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        text-slate-600
                        transition-all
                        duration-300

                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-white

                        dark:border-white/10
                        dark:bg-slate-800
                        dark:text-slate-300
                      "
                      aria-label={`View ${study.client} case study`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-3xl
            bg-slate-950
            px-6
            py-12
            text-center
            text-white
            sm:px-10
            lg:py-14
            dark:border
            dark:border-white/10
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-56
              w-96
              -translate-x-1/2
              rounded-full
              bg-primary/30
              blur-[100px]
            "
          />

          <div className="relative">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Your story could be next
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              Have a challenge worth solving?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-slate-400
              "
            >
              Let&apos;s turn your idea, challenge or existing product into a digital
              experience that creates measurable business value.
            </p>

            <Link
              to="/contact-us"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all

                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-primary/20
              "
            >
              Start a Project
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default CaseStudies;
