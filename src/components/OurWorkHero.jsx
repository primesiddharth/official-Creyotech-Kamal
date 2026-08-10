import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroImage from "../assets/projects/projects_hero.webp";

function OurWorkHero() {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[620px]
   py-8
        overflow-hidden
        sm:min-h-[680px]
        lg:min-h-[720px]
      "
    >
      {/* Hero Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt="Creyotech client projects showcase"
          className="
            h-full
            w-full
            object-cover
            object-center
            scale-105
          "
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-slate-950/50
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-slate-950/60
          via-slate-950/60
          to-slate-950/90
        "
      />

      {/* Primary Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[140px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          px-5
          py-24
          text-center
          sm:px-8
          lg:px-10
        "
      >
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
            border-white/20
            bg-white/10
            px-4
            py-1.5
            text-[11px]
            font-semibold
            uppercase
            tracking-[2px]
            text-white/90
            shadow-lg
            backdrop-blur-md
            sm:text-xs
          "
        >
          <Sparkles size={13} className="text-primary" />
          Our Work
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.05,
          }}
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-4xl
            font-bold
            leading-[1.08]
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Digital Experiences
          <span className="block text-primary">We&apos;ve Built</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.12,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-white/70
            sm:text-base
            lg:text-lg
            line-clamp-2
          "
        >
          Explore a selection of websites and digital experiences we&apos;ve
          created for businesses across healthcare, finance, fashion, jewelry,
          construction, and real estate.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.18,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <a
            href="#projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-primary/25
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:shadow-primary/30
            "
          >
            Explore Projects
            <ArrowDown
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-0.5
              "
            />
          </a>

          <a
            href="/contact-us"
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-white/10
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/15
            "
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default OurWorkHero;
