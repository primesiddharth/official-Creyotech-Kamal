import React from "react";
import { motion } from "framer-motion";

import { gallery_images } from "../../assets/assets";

function AnimatedGallery() {
  // Split images into two rows
  const topImages = gallery_images.slice(0, 5);
  const bottomImages = gallery_images.slice(5, 10);

  // Duplicate for seamless infinite marquee
  const topRow = [...topImages, ...topImages];
  const bottomRow = [...bottomImages, ...bottomImages];

  return (
    <section
      id="life-at-creyotech"
      className="
        relative
        overflow-hidden
        py-10
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
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      {/* Heading */}
      <div
        className="
          mb-16
          flex
          flex-col
          items-center
          justify-center
          px-4
          text-center
        "
      >
        <div
          className="
            inline-flex
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[3px]
            text-primary
          "
        >
          Gallery
        </div>

        <h2
          className="
            mt-6
            max-w-4xl
            text-3xl
            font-bold
            leading-tight
            text-text-primary
            dark:text-white
            sm:text-5xl
          "
        >
          Life At Creyotech
        </h2>
      </div>

      {/* Top Moving Row */}
      <div className="relative mb-8 overflow-hidden">
        {/* Left Fade */}
        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-r
            from-white
            to-transparent
            dark:from-bg-dark
          "
        />

        {/* Right Fade */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-l
            from-white
            to-transparent
            dark:from-bg-dark
          "
        />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
            flex
            w-max
            gap-6
            px-4
          "
        >
          {topRow.map((image, index) => (
            <GalleryCard key={index} image={image} height={"h-[300px]"} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Moving Row */}
      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-r
            from-white
            to-transparent
            dark:from-bg-dark
          "
        />

        {/* Right Fade */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-l
            from-white
            to-transparent
            dark:from-bg-dark
          "
        />

        <motion.div
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="
            flex
            w-max
            gap-6
            px-4
          "
        >
          {bottomRow.map((image, index) => (
            <GalleryCard key={index} image={image} height={"h-[300px]"} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Gallery Card */
function GalleryCard({ image, height }) {
  return (
    <motion.div
      whileHover={{
        y: 1,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        group
        relative
        w-[280px]
        shrink-0
        overflow-hidden
        rounded-4xl
        border
        border-primary/10
        bg-white/50
        shadow-[0_20px_50px_rgba(0,0,0,0.06)]
        backdrop-blur-xl
        dark:border-white/10
        dark:bg-white/[0.03]
      "
    >
      {/* Image */}
      <img
        src={image}
        alt="gallery"
        loading="lazy"
        decoding="async"
        className={`
          ${height}
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        `}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-32
          w-32
          -translate-x-1/2
          rounded-full
          bg-primary/20
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}

export default AnimatedGallery;
