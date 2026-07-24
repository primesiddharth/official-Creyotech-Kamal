import { motion } from "motion/react";
import assets from "../../assets/assets";

export default function AboutStorySection() {
  return (
    <section
    id="about-company"
      className="
        relative
        overflow-hidden
        px-4
        py-3
        sm:py-10
        sm:px-8
        lg:px-16
        xl:px-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-primary/15
            blur-3xl
          "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                rounded-4xl
                border
                border-primary/10
                bg-white/40
                p-5
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.03]
                sm:p-8
              "
            >
              {/* Title */}
              <h2
                className="
                  mt-6
                  text-3xl
                  font-bold
                  leading-tight
                  text-text-primary
                  dark:text-white
                  sm:text-4xl
                "
              >
                The Story Behind the Formation of Creyotech
              </h2>

              {/* Content */}
              <div
                className="
                  mt-8
                  space-y-6
                  text-[15px]
                  leading-8
                  text-text-secondary
                  dark:text-white/70
                "
              >
                <p>
                  Creyotech was born from a deeply personal realization. After
                  returning to India from the USA and walking away from a
                  high-paying IT career, the founder saw a troubling gap in the
                  Indian technology ecosystem.
                </p>

                <p>
                  Many businesses struggled to find technology partners who
                  could truly understand both execution and long-term business
                  growth. From day one, Creyotech set out to bridge the painful
                  disconnect between strategy and execution by creating modern,
                  scalable, and business-focused digital solutions.
                </p>
                <p>
                  Today, Creyotech works with startups, creators, and growing
                  enterprises to deliver reliable technology, meaningful digital
                  experiences, and long-term value.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-[2rem]
                bg-primary/20
                blur-3xl
              "
            />

            {/* Main Image Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-primary/10
                bg-white/40
                p-3
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <img
                src={assets.formation}
                alt="About Creyotech"
                loading="lazy"
                decoding="async"
                className="
                  h-[350px]
                  w-full
                  rounded-3xl
                  object-cover
                  sm:h-[450px]
                  lg:h-[580px]
                "
              />

              {/* Floating Card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  w-[80%]
                  max-w-sm
                  -translate-x-1/2
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/50
                  p-4
                  backdrop-blur-xl
                  sm:bottom-8
                  sm:left-8
                  sm:w-full
                  sm:max-w-lg
                  sm:translate-x-0
                  sm:p-5
                "
              >
                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-primary
                    sm:text-xs
                  "
                >
                  Since 2016
                </p>

                <h3
                  className="
                    mt-1  
                    text-xs
                    font-semibold
                    leading-relaxed
                    text-white
                    sm:text-[15px]
                    sm:leading-snug
                  "
                >
                  Building modern digital experiences with purpose & innovation.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
