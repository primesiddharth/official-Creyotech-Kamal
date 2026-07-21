import { motion } from "framer-motion";
import { prev_customers } from "../../assets/assets";

export default function PreviousClients() {
  const topClients = prev_customers.slice(0, 12);
  const bottomClients = prev_customers.slice(12, 24);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100/60 dark:bg-bg-dark px-3 py-1 rounded-md">
              Social Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight dark:text-text-light">
              Powering the next generation of brands
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed dark:text-text-secondary">
              We collaborate with ambitious teams to turn bold ideas into
              high-performing digital products.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-text-light">
                  50+
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Projects Delivered
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-text-light">
                  99%
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 overflow-hidden">
            <div className="relative flex flex-col gap-4">
              {/* Top Row */}
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-5 w-max"
              >
                {[...topClients, ...topClients].map((company, idx) => (
                  <LogoCard key={`top-${idx}`} company={company} />
                ))}
              </motion.div>

              {/* Bottom Row */}
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-5 w-max"
              >
                {[...bottomClients, ...bottomClients].map((company, idx) => (
                  <LogoCard key={`bottom-${idx}`} company={company} />
                ))}
              </motion.div>

              {/* Fade Left */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-18 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />

              {/* Fade Right */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-18 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LogoCard = ({ company }) => (
  <motion.div
    whileHover={{
      y: -6,
      scale: 1.04,
    }}
    className="
     pt-3
      group
      flex
      flex-col
      items-center
      justify-center
      rounded-xl
      border
      border-slate-200/80
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      w-44
      h-36
      shrink-0
      transition-all
      duration-300
      hover:shadow-xl
      dark:hover:shadow-indigo-500/10
      hover:border-indigo-400/50
    "
  >
    <img
      src={company.logo}
      alt={company.name}
      className="
        h-28
        object-cover
        rounded
        transition-all
        duration-300
      "
    />

    <span
      className="
        text-[11px]
        text-slate-500
        dark:text-slate-400
        opacity-0
        group-hover:opacity-100
        transition
      "
    >
      {company.name}
    </span>
  </motion.div>
);
