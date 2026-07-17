import React from "react";
import Title from "../Title";
import { teamData } from "../../assets/assets";
import { motion } from "motion/react";

function Teams() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.12 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-text-primary dark:text-text-light"
    >
      {/* Title Section with balanced spacing */}
      <div className="mb-10 items-center flex flex-col gap-2">
        <Title
          title="Meet The Leadership Team"
          desc="A passionate team of digital experts dedicated to your brand's success."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/60 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/20 hover:shadow-xl dark:border-white/5 dark:bg-white/[0.02]"
          >
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start h-full">
              {/* Profile Picture */}
              <div className="w-full sm:w-36 h-44 sm:h-40 shrink-0 overflow-hidden rounded-xl ring-4 ring-primary/5 dark:ring-white/5">
                <img
                  src={team.image}
                  loading="lazy"
                  decoding="async"
                  alt={team.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Area: Flex-grow instantly fills horizontal footprint */}
              <div className="flex-1 flex flex-col justify-between h-full text-left pt-1">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-text-primary dark:text-white leading-snug">
                    {team.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-primary uppercase mt-0.5">
                    {team.title}
                  </p>

                  {/* Subtle, sleek minimal divider accent */}
                  <div className="mt-3 mb-2.5 h-0.5 w-8 rounded-full bg-primary/30" />
                </div>

                <p className="text-sm leading-relaxed text-text-secondary dark:text-white/70 line-clamp-4">
                  {team.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Teams;
