import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ContactRound,
  Hotel,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

const products = [
  {
    name: "SankalpFlow",
    tag: "Work Management",
    description:
      "Bring projects, tasks, teams and daily operations together in one organized workspace built for growing businesses.",
    icon: Workflow,
    href: "/products/sankalp-flow",
    features: [
      "Project & task management",
      "Team collaboration",
      "Workflow tracking",
    ],
  },
  {
    name: "AtithiCore",
    tag: "Hospitality Management",
    description:
      "A unified management system for hotels and restaurants to simplify bookings, operations and everyday guest management.",
    icon: Hotel,
    href: "/products/atithi-core",
    features: [
      "Booking management",
      "Hotel operations",
      "Restaurant management",
    ],
  },
  {
    name: "SampattiLink",
    tag: "Real Estate",
    description:
      "Manage properties, leads and client interactions from one streamlined platform designed for modern real estate teams.",
    icon: Building2,
    href: "/products/sampatti-link",
    features: ["Property management", "Lead tracking", "Client management"],
  },
  {
    name: "KarmiHR",
    tag: "HR Management",
    description:
      "Simplify employee management and HR operations with a centralized platform for teams, attendance and workforce data.",
    icon: UsersRound,
    href: "/products/karmi-hr",
    features: ["Employee management", "Attendance tracking", "HR operations"],
  },
  {
    name: "SamparkPulse",
    tag: "CRM",
    description:
      "Keep leads, conversations and customer relationships organized with a CRM designed to help teams follow up and grow.",
    icon: ContactRound,
    href: "/products/sampark-pulse",
    features: ["Lead management", "Customer tracking", "Sales follow-ups"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Built for efficiency",
    description:
      "Reduce repetitive work and keep everyday operations organized.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & secure",
    description:
      "Business software designed with reliability and security in mind.",
  },
  {
    icon: Sparkles,
    title: "Simple experience",
    description:
      "Clean interfaces your team can understand and start using quickly.",
  },
  {
    icon: BadgeCheck,
    title: "Made for businesses",
    description:
      "Focused solutions for real operational challenges and workflows.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function Products() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-secondary dark:text-white">
      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[calc(100vh-70px)] items-center border-b border-slate-200/70 bg-slate-50/70 dark:border-white/10 dark:bg-slate-950/30">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

          <div
            className="
              absolute inset-0 opacity-[0.025]
              dark:opacity-[0.04]
              [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-primary dark:bg-primary/10">
              Creyotech Products
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Software that makes
              <span className="text-primary"> work simpler.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
              Purpose-built digital products that help businesses manage teams,
              customers, operations and everyday workflows from one place.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#products"
                className="group flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                Explore Products
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/contact-us"
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
              >
                Talk to our team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
      >
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Our Products
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One ecosystem. Multiple solutions.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            Choose a solution built around your industry and workflow. Each
            product focuses on making complex business operations easier.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-6"
        >
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.name}
                variants={item}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-slate-50/60
                  p-5
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

                  ${
                    index < 3
                      ? "lg:col-span-2"
                      : index === 3
                        ? "lg:col-span-3"
                        : "lg:col-span-3"
                  }
                `}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500 dark:border-white/10 dark:bg-slate-800 dark:text-slate-400">
                    {product.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {product.name}
                  </h3>

                  <p className="mt-2 min-h-[66px] text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="relative mt-5 space-y-2 border-t border-slate-200/70 pt-4 dark:border-white/10">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={10} strokeWidth={3} />
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={product.href}
                  className="relative mt-5 flex items-center justify-between rounded-xl bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 transition-all group-hover:bg-primary group-hover:text-white dark:bg-slate-800 dark:text-slate-200"
                >
                  Explore {product.name}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= WHY CREYOTECH PRODUCTS ================= */}

      <section className="border-y border-slate-200/70 bg-slate-50/70 dark:border-white/10 dark:bg-slate-950/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Why Creyotech
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around how businesses work.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Our products focus on usability, practical workflows and
              technology that supports your business as it grows.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={item}
                  className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-slate-900/50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={17} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-6 py-20 sm:px-10 lg:px-16">
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
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[2px] text-primary">
              Let&apos;s build better
            </span>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Not sure which solution fits your business?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Tell us about your workflow and challenges. Our team will help you
              find the right Creyotech product or build a solution around your
              needs.
            </p>

            <Link
              to="/contact-us"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Talk to our team
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Products;
