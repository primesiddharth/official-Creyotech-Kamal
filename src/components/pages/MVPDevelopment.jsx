import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Gauge,
  Layers3,
  Lightbulb,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";

//    DATA
const mvpTypes = [
  {
    icon: Layers3,
    number: "01",
    title: "Single-Feature MVP",
    description:
      "Launch around one core feature that solves the most important customer problem.",
  },
  {
    icon: WandSparkles,
    number: "02",
    title: "Concierge MVP",
    description:
      "Deliver the experience manually first to understand customer needs before automating.",
  },
  {
    icon: Blocks,
    number: "03",
    title: "Piecemeal MVP",
    description:
      "Combine existing technologies and tools to validate your idea without building everything.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Functional MVP",
    description:
      "Build a working product with essential features that real users can start using.",
  },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your idea, target users, business model and the problem you're solving.",
  },
  {
    step: "02",
    icon: Target,
    title: "Define",
    description:
      "We identify the core value proposition and prioritize only the features needed for validation.",
  },
  {
    step: "03",
    icon: WandSparkles,
    title: "Design",
    description:
      "User flows, wireframes and interfaces are designed around a simple and focused experience.",
  },
  {
    step: "04",
    icon: Code2,
    title: "Build",
    description:
      "Our development team turns the approved experience into a scalable working product.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "We test, deploy and prepare your MVP so it can reach its first real users.",
  },
  {
    step: "06",
    icon: Gauge,
    title: "Learn & Scale",
    description:
      "Use real feedback and product data to decide what should be improved and built next.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Speed to Market",
    description:
      "Focus on essential features so your idea reaches real users sooner.",
  },
  {
    icon: Target,
    title: "Product-Market Focus",
    description:
      "Every feature is evaluated against your users and core business objective.",
  },
  {
    icon: Code2,
    title: "Scalable Engineering",
    description:
      "Build an MVP that can evolve instead of becoming disposable prototype code.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Driven",
    description:
      "Launch, learn from users and use evidence to guide the next product decisions.",
  },
  {
    icon: Users,
    title: "Startup Mindset",
    description:
      "A lean development approach focused on validation, speed and practical outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description:
      "From product discovery and design to development, deployment and iteration.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

//    COMPONENT

function MVPDevelopment() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-secondary dark:text-white">
      <section className="relative min-h-[680px] overflow-hidden border-b border-slate-200/70 bg-slate-50/60 dark:border-white/10 dark:bg-slate-950/30">
        {/* Background Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.05]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Glow */}
        <div className="pointer-events-none absolute left-[10%] top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[5%] top-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-15 sm:px-10 lg:grid-cols-2 lg:px-16">
          {/* LEFT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary dark:bg-primary/10"
            >
              <Rocket size={13} />
              MVP Development
              <span className="h-1 w-1 rounded-full bg-primary" />
              Startup to Scale
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[62px]"
            >
              Don't spend months
              <br />
              building an
              <span className="relative ml-3 text-primary">
                assumption.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <motion.path
                    d="M2 7C55 2 130 2 198 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400"
            >
              Turn your product idea into a focused Minimum Viable Product,
              launch it to real users and validate the opportunity before
              investing in a full-scale product.
            </motion.p>

            {/* CTA */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
              >
                Build Your MVP
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
              >
                See Our Process
              </a>
            </motion.div>

            {/* Trust */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            >
              {["Lean Development", "User Focused", "Scalable Foundation"].map(
                (text) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400"
                  >
                    <CircleCheck size={13} className="text-primary" />
                    {text}
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* ==================================================
              INTERACTIVE PRODUCT VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main App Window */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto w-[520px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900"
            >
              {/* Browser Header */}

              <div className="flex h-12 items-center gap-2 border-b border-slate-100 px-4 dark:border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />

                <div className="ml-3 h-6 flex-1 rounded-md bg-slate-100 dark:bg-slate-800" />

                <Sparkles size={15} className="text-primary" />
              </div>

              {/* Dashboard */}

              <div className="grid grid-cols-[115px_1fr]">
                <div className="min-h-[340px] border-r border-slate-100 bg-slate-50/60 p-3 dark:border-white/10 dark:bg-slate-950/30">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-primary" />
                    <div className="h-2 w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
                  </div>

                  {[70, 50, 60, 45].map((width, index) => (
                    <div
                      key={index}
                      className="mb-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800"
                      style={{ width: `${width}%` }}
                    />
                  ))}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-28 rounded-full bg-slate-800 dark:bg-slate-200" />
                      <div className="mt-2 h-2 w-40 rounded-full bg-slate-200 dark:bg-slate-700" />
                    </div>

                    <div className="rounded-lg bg-primary px-3 py-2 text-[9px] font-semibold text-white">
                      Launch
                    </div>
                  </div>

                  {/* Stats */}

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {["Users", "Feedback", "Growth"].map((text, index) => (
                      <div
                        key={text}
                        className="rounded-xl border border-slate-100 p-3 dark:border-white/10"
                      >
                        <div className="h-2 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />

                        <p className="mt-3 text-lg font-bold text-primary">
                          {index === 0 ? "1.2K" : index === 1 ? "89%" : "+32%"}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-400">{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Graph */}

                  <div className="mt-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50">
                    <div className="flex h-24 items-end gap-2">
                      {[25, 40, 32, 55, 48, 72, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            delay: 0.8 + index * 0.08,
                            duration: 0.5,
                          }}
                          className="flex-1 rounded-t bg-primary/70"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARDS */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 0, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-12 top-24 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Check size={15} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold">Idea validated</p>
                  <p className="text-[8px] text-slate-400">Ready to iterate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [2, 0, 2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 bottom-16 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Rocket size={15} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold">MVP launched</p>
                  <p className="text-[8px] text-slate-400">
                    First users onboarded
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          WHAT IS MVP
      ================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Start Lean
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What is a Minimum
              <br />
              Viable Product?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              An MVP is the smallest useful version of your product that
              delivers its core value to real users. Instead of building every
              possible feature, you build what is necessary to test the idea,
              collect feedback and learn.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Validate whether users actually need your solution",
                "Reduce unnecessary development cost and complexity",
                "Collect feedback before building advanced features",
                "Reach the market faster with a focused product",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={11} strokeWidth={3} />
                  </div>

                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* MVP Formula */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-900/50">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-slate-400">
                The MVP Formula
              </p>

              <div className="mt-6 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                <FormulaCard icon={Lightbulb} label="Idea" />

                <span className="text-primary">+</span>

                <FormulaCard icon={Code2} label="Core Features" />

                <span className="text-primary">+</span>

                <FormulaCard icon={Users} label="Real Users" />
              </div>

              <div className="my-6 flex justify-center">
                <ChevronRight size={25} className="rotate-90 text-primary" />
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center dark:bg-primary/10">
                <Rocket size={24} className="mx-auto text-primary" />

                <h3 className="mt-2 font-bold">Validated Product</h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Learn → Improve → Scale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          MVP VS POC
      ================================================== */}

      <section className="border-y border-slate-200/70 bg-slate-50/70 py-20 dark:border-white/10 dark:bg-slate-950/30 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Understand the Difference
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              PoC proves the technology.
              <br />
              <span className="text-primary">MVP proves the product.</span>
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <ComparisonCard
              icon={BrainCircuit}
              badge="PoC"
              title="Proof of Concept"
              description="Used to determine whether a technical idea or approach is actually feasible."
              items={[
                "Tests technical feasibility",
                "Usually internal",
                "Not necessarily usable by customers",
                "Answers: Can we build it?",
              ]}
            />

            <ComparisonCard
              icon={Rocket}
              badge="MVP"
              title="Minimum Viable Product"
              description="A usable version of your product designed to test its value with actual customers."
              items={[
                "Tests market demand",
                "Released to real users",
                "Delivers core customer value",
                "Answers: Should we build more?",
              ]}
              featured
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          TYPES OF MVP
      ================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Choose Your Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Not every MVP is built
              <br />
              the same way.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            The right MVP approach depends on what you need to learn, your
            market, available resources and the assumptions that need
            validation.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {mvpTypes.map((type) => {
            const Icon = type.icon;

            return (
              <motion.div
                key={type.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-colors hover:border-primary/30 hover:bg-white dark:border-white/10 dark:bg-slate-900/40"
              >
                <span className="absolute right-4 top-3 text-4xl font-black text-slate-100 dark:text-white/5">
                  {type.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-sm font-bold">{type.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section
        id="process"
        className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24"
      >
        <div className="absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              From Idea to Users
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our MVP development process
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              A focused development cycle designed around learning quickly,
              reducing uncertainty and getting a useful product into users'
              hands.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}

            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
            >
              {process.map((phase) => {
                const Icon = phase.icon;

                return (
                  <motion.div
                    key={phase.step}
                    variants={fadeUp}
                    className="group"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <p className="mt-5 text-[10px] font-bold tracking-[2px] text-primary">
                      STEP {phase.step}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold">
                      {phase.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {phase.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY CREYOTECH
      ================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">
              Why Creyotech
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Build enough to learn.
              <br />
              <span className="text-primary">Build well enough to grow.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
              MVP development isn't about building a bad version of a large
              product. It's about deliberately choosing what matters now while
              keeping the foundation ready for what comes next.
            </p>

            <Link
              to="/contact-us"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discuss your product idea
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-slate-200 p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5 dark:border-white/10"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={16} />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold">{reason.title}</h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 px-6 py-14 text-center text-white sm:px-10 lg:py-16"
        >
          <div className="absolute left-1/2 top-0 h-72 w-[500px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Rocket size={21} />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[2px] text-primary">
              Have an idea?
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Your first version doesn't need everything.
              <span className="text-primary"> It needs the right things.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Tell us what you're trying to build. We'll help you identify the
              smallest meaningful product that can validate your idea and move
              it forward.
            </p>

            <Link
              to="/contact-us"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
            >
              Start Your MVP
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

/* ======================================================
   SMALL COMPONENTS
====================================================== */

function FormulaCard({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm dark:bg-slate-800">
        <Icon size={19} />
      </div>

      <p className="mt-2 text-center text-[10px] font-semibold text-slate-600 dark:text-slate-300">
        {label}
      </p>
    </div>
  );
}

function ComparisonCard({
  icon: Icon,
  badge,
  title,
  description,
  items,
  featured = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        p-6
        transition-all

        ${
          featured
            ? "border-primary/30 bg-primary/[0.04] shadow-xl shadow-primary/5 dark:bg-primary/[0.06]"
            : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/50"
        }
      `}
    >
      {featured && (
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold text-white">
          <BadgeCheck size={11} />
          Market Validation
        </div>
      )}

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={19} />
      </div>

      <p className="mt-5 text-[10px] font-bold uppercase tracking-[2px] text-primary">
        {badge}
      </p>

      <h3 className="mt-1 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      <div className="mt-5 space-y-2.5 border-t border-slate-200/70 pt-4 dark:border-white/10">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
          >
            <Check size={13} className="shrink-0 text-primary" />

            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default MVPDevelopment;
