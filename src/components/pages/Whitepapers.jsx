import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Database,
  Download,
  FileText,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const whitepapers = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "AI Adoption for Modern Businesses",
    description:
      "A practical guide to identifying where artificial intelligence can create measurable value across business operations.",
    icon: BrainCircuit,
    pages: "18 Pages",
    readTime: "12 Min Read",
    href: "/whitepapers",
  },
  {
    id: 2,
    category: "Digital Transformation",
    title: "Building a Digital-First Business",
    description:
      "Explore the technologies, processes and strategic decisions businesses need to modernize operations and customer experiences.",
    icon: Building2,
    pages: "22 Pages",
    readTime: "15 Min Read",
    href: "/whitepapers",
  },
  {
    id: 3,
    category: "Software Engineering",
    title: "Building Scalable Software Products",
    description:
      "Key architectural and engineering considerations for creating digital products that can evolve as users and businesses grow.",
    icon: Code2,
    pages: "16 Pages",
    readTime: "11 Min Read",
    href: "/whitepapers",
  },
  {
    id: 4,
    category: "Cloud Technology",
    title: "Cloud Infrastructure for Growing Companies",
    description:
      "Understand how modern cloud infrastructure can improve scalability, reliability and operational efficiency.",
    icon: Cloud,
    pages: "20 Pages",
    readTime: "14 Min Read",
    href: "/whitepapers",
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "Security by Design",
    description:
      "A guide to integrating security into digital products from the earliest stages instead of treating it as an afterthought.",
    icon: LockKeyhole,
    pages: "14 Pages",
    readTime: "10 Min Read",
    href: "/whitepapers",
  },
  {
    id: 6,
    category: "Data & Analytics",
    title: "Turning Business Data Into Decisions",
    description:
      "Learn how organizations can structure, analyze and use their data to make faster and more informed business decisions.",
    icon: Database,
    pages: "17 Pages",
    readTime: "12 Min Read",
    href: "/whitepapers",
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
    y: 20,
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

function Whitepapers() {
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
        {/* Background */}
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
            text-center

            sm:px-10
            sm:py-24

            lg:px-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
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
              <BookOpen size={13} />
              Insights & Research
            </div>

            {/* Heading */}

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
              Ideas worth
              <span className="text-primary"> exploring.</span>
            </h1>

            {/* Description */}

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
              Research, technical perspectives and practical guides from
              Creyotech on technology, digital transformation and building
              better businesses.
            </p>

            <a
              href="#whitepapers"
              className="
                group
                mt-8
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
              Explore Whitepapers
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= WHITEPAPERS ================= */}

      <section
        id="whitepapers"
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20

          sm:px-10

          lg:px-16
          lg:py-24
        "
      >
        {/* Heading */}

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
              Knowledge Library
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
              Latest whitepapers
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
            Deep dives into the technologies, strategies and ideas shaping
            modern digital businesses.
          </p>
        </div>

        {/* Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid
            gap-4

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {whitepapers.map((paper, index) => {
            const Icon = paper.icon;

            return (
              <motion.article
                key={paper.id}
                variants={cardVariants}
                className="
                  group
                  flex
                  flex-col
                  overflow-hidden

                  rounded-2xl
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
                {/* ================= COVER ================= */}

                <div
                  className="
                    relative
                    h-44
                    overflow-hidden
                    border-b
                    border-slate-200/70
                    bg-slate-100

                    dark:border-white/10
                    dark:bg-slate-950/50
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -right-10
                      -top-10
                      h-36
                      w-36
                      rounded-full
                      bg-primary/10
                      blur-3xl

                      transition-all
                      duration-500

                      group-hover:bg-primary/20
                    "
                  />

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
                    INSIGHT {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Paper mockup */}

                  <div
                    className="
                      absolute
                      -bottom-5
                      left-1/2
                      w-[125px]
                      -translate-x-1/2

                      rounded-t-xl
                      border
                      border-slate-200
                      bg-white
                      p-4

                      shadow-xl
                      shadow-slate-900/10

                      transition-all
                      duration-500

                      group-hover:-translate-y-2
                      group-hover:-rotate-2

                      dark:border-white/10
                      dark:bg-slate-900
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-primary/10
                        text-primary
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div className="mt-5 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700" />

                    <div className="mt-2 h-1.5 w-4/5 rounded-full bg-slate-200 dark:bg-slate-700" />

                    <div className="mt-2 h-1.5 w-1/2 rounded-full bg-primary/30" />
                  </div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="flex flex-1 flex-col p-5">
                  {/* Category */}

                  <span
                    className="
                      w-fit
                      rounded-full
                      bg-primary/10
                      px-2.5
                      py-1

                      text-[10px]
                      font-semibold
                      text-primary
                    "
                  >
                    {paper.category}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-4
                      text-lg
                      font-bold
                      leading-6
                      text-slate-900

                      transition-colors
                      group-hover:text-primary

                      dark:text-white
                    "
                  >
                    {paper.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      flex-1
                      text-xs
                      leading-5
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    {paper.description}
                  </p>

                  {/* Meta */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2

                      text-[10px]
                      font-medium
                      text-slate-400
                    "
                  >
                    <span>{paper.pages}</span>

                    <span>•</span>

                    <span>{paper.readTime}</span>
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between

                      border-t
                      border-slate-200/70
                      pt-4

                      dark:border-white/10
                    "
                  >
                    <Link
                      to={paper.href}
                      className="
                        group/link
                        flex
                        items-center
                        gap-1.5

                        text-xs
                        font-semibold
                        text-slate-600

                        transition-colors
                        hover:text-primary

                        dark:text-slate-300
                        dark:hover:text-primary
                      "
                    >
                      Read Whitepaper
                      <ArrowRight
                        size={13}
                        className="
                          transition-transform
                          group-hover/link:translate-x-1
                        "
                      />
                    </Link>

                    <button
                      type="button"
                      aria-label={`Download ${paper.title}`}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center

                        rounded-lg
                        bg-primary/10
                        text-primary

                        transition-all
                        duration-200

                        hover:bg-primary
                        hover:text-white
                      "
                    >
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* ================= NEWSLETTER / CTA ================= */}

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
          {/* Glow */}

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
            <div
              className="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl

                bg-primary/20
                text-primary
              "
            >
              <FileText size={20} />
            </div>

            <p
              className="
                mt-5
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-primary
              "
            >
              Creyotech Insights
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
              Need insights specific to your business?
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
              Talk with our team about your technology challenges and discover
              how the right digital strategy can move your business forward.
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
              Talk to Our Team
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Whitepapers;
