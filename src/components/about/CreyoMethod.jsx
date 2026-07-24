import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const methods = [
  {
    title: "Clarity before code",
    description:
      "We begin by understanding your business challenges, budget, and growth goals so every solution has a clear purpose.",
  },
  {
    title: "Results-oriented strategy",
    description:
      "Every product is designed for visibility, stronger conversions, smoother operations, and long-term scalability.",
  },
  {
    title: "Efficient, cost-optimized builds",
    description:
      "We offer multiple technology and feature options to ensure your investment aligns with your budget.",
  },
  {
    title: "Your business, your blueprint",
    description:
      "No templates. Every system is tailored to your industry, audience, and market position.",
  },
  {
    title: "Open, agile collaboration",
    description:
      "Milestone-driven workflows, transparent communication, and measurable progress from start to finish.",
  },
  {
    title: "Technology that scales",
    description:
      "From websites and cloud platforms to mobile apps and AI systems, we build for long-term growth.",
  },
  {
    title: "Excellence you can trust",
    description:
      "7+ years of experience, 93+ clients, and projects delivered across multiple global markets.",
  },
  {
    title: "Commitment without compromise",
    description:
      "Fixed-price options, NDAs, milestone billing, and money-back assurance when commitments aren’t met.",
  },
  {
    title: "Human-centric partnership",
    description:
      "We support businesses before launch, during growth, and through every stage of evolution.",
  },
];

function CreyoMethod() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["10%", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
  });

  const x = useTransform(
    smoothProgress,
    [0, 1],
    ["10%", `-${(methods.length - 1) * 8}%`],
  );

  return (
    <section
    id="purpose"
      ref={ref}
      style={{ height: `${methods.length * 20}vh` }}
      className="relative bg-bg-soft dark:bg-bg-dark"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Top centered content */}
        <div className="absolute inset-x-0 -top-12 z-30 flex flex-col items-center px-6 pt-14 text-center sm:px-8 lg:px-16">
          {/* Badge */}
          <div className="inline-flex rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-white shadow-lg">
            The CREYOTECH Method
          </div>

          {/* Heading */}
          <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-text-primary dark:text-text-light sm:text-4xl lg:text-5xl">
            Built With Purpose.
            <br />
            Designed For Growth.
          </h2>

          {/* Divider */}
          <div className="mt-4 h-[2px] w-28 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Cards area */}
        <div className="flex h-full items-center pt-50">
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-6 sm:pl-8 lg:pl-16"
          >
            {methods.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="
              group
              flex
              h-[320px]
              w-[320px]
              shrink-0
              flex-col
              justify-between
              overflow-hidden
              rounded-[2rem]
              border
              border-border-light
              bg-white/80
              p-8
              shadow-[0_20px_40px_rgba(100,116,139,0.08)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-primary/30
              dark:border-border-dark
              dark:bg-white/[0.03]
            "
              >
                {/* Top glow */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
                {/* Content */}
                <div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary dark:text-text-light">
                      <span className="font-extrabold text-6xl leading-none">
                        {item.title.charAt(0)}
                      </span>
                      {item.title.slice(1)}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-text-secondary dark:text-white/70">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-primary-50" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CreyoMethod;
