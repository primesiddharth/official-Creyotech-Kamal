import { motion } from "motion/react";
import {
  Rocket,
  Store,
  Factory,
  HeartPulse,
  Cpu,
  Landmark,
  ShoppingBag,
  PackageCheck,
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    value: "MVP",
    title: "Startups & MVP",
    desc: "From early ideas to market-ready products",
  },
  {
    icon: Landmark,
    value: "FinTech",
    title: "Finance & Banking",
    desc: "Secure digital experiences for financial services",
  },
  {
    icon: Factory,
    value: "B2B",
    title: "Manufacturing",
    desc: "Modern systems for industrial operations",
  },
  {
    icon: HeartPulse,
    value: "Care",
    title: "Healthcare",
    desc: "Reliable digital solutions for healthcare",
  },
  {
    icon: PackageCheck,
    value: "Commerce",
    title: "Dropshipping",
    desc: "Commerce solutions designed to sell and scale",
  },
  {
    icon: Cpu,
    value: "Tech",
    title: "High Tech",
    desc: "Scalable solutions for technology companies",
  },

  {
    icon: ShoppingBag,
    value: "D2C",
    title: "D2C Brands",
    desc: "Digital experiences built for modern brands",
  },
  {
    icon: Store,
    value: "MSME",
    title: "Micro, Small & Medium Businesses",
    desc: "Digital solutions for growing businesses",
  },
];

function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-18 dark:bg-bg-dark">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto mb-16 max-w-4xl px-6 text-center sm:px-8 lg:px-16">
        <div className="inline-flex rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white shadow-lg">
          Industry Ecosystem
        </div>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-text-primary dark:text-text-light sm:text-5xl">
          Powering Multiple Industries
        </h2>

        <p className="mt-5 text-sm leading-6 text-text-secondary dark:text-white/70 sm:text-base">
          We build scalable digital systems across industries, combining
          strategy, automation, and modern technology.
        </p>
      </div>
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="mb-8 flex items-center justify-center gap-3"
      >
        <div className="h-2 w-2 rounded-full bg-primary" />
        <p className="text-sm font-bold tracking-wide text-text-secondary dark:text-white/60">
          Drag to explore →
        </p>
      </motion.div>

      {/* Draggable Cards */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -1600, right: 0 }}
        className="flex cursor-grab gap-6 px-6 active:cursor-grabbing sm:px-8 lg:px-16"
      >
        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                group
                relative
                min-w-[280px]
                overflow-hidden
                rounded-[1.8rem]
                border
                border-border-light
                bg-white
                p-6
                shadow-[0_20px_40px_rgba(100,116,139,0.08)]
                transition-all
                duration-300
                hover:border-primary/30
                hover:shadow-[0_25px_50px_rgba(80,68,229,0.12)]
                dark:border-border-dark
                dark:bg-white/[0.03]
                dark:hover:border-primary/30
              "
            >
              {/* Top glow */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-white
                "
              >
                <Icon size={22} />
              </div>

              {/* Value */}
              <h3 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {item.value}
              </h3>

              {/* Industry Name */}
              <p className="mt-3 text-lg leading-5 font-semibold text-text-primary dark:text-text-light">
                {item.title}
              </p>

              {/* Description */}
              <p className="mt-2 text-sm leading-5 text-text-secondary dark:text-white/60">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-primary to-primary-50" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default IndustriesSection;
