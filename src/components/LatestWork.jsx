import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  TrendingUp,
  MoveHorizontal,
  Megaphone,
} from "lucide-react";

import Title from "./Title";
import { Link } from "react-router-dom";

const worksData = [
  {
    id: 1,
    number: "01",
    eyebrow: "Digital Products",
    title: "Web Development",
    secondaryTitle: "& Web Applications",
    desc: "From high-performance business websites to scalable web applications, we build digital products designed around usability, performance and growth.",
    icon: Code2,
    tags: ["Web Development", "Web Apps", "Cloud App", "SaaS"],
    link: "/services/web-development",
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
        alt: "Web analytics dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        alt: "Analytics application",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85",
        alt: "Website design",
      },
      {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
        alt: "Web development workspace",
      },
    ],
  },

  {
    id: 2,
    number: "02",
    eyebrow: "Mobile Experiences",
    title: "Cross-Platform",
    secondaryTitle: "Mobile Applications",
    desc: "Mobile experiences built to work beautifully across platforms while keeping performance, consistency and user experience at the center.",
    icon: Smartphone,
    tags: ["Android", "iOS", "Cross Platform", "Mobile UI"],
    link: "/services/web-development#android-app-development",
    reverse: true,
    images: [
      {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
        alt: "Mobile application",
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
        alt: "Mobile app interface",
      },
      {
        src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=85",
        alt: "Smartphone application",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
        alt: "Mobile digital product",
      },
    ],
  },

  {
    id: 3,
    number: "03",
    eyebrow: "Growth & Performance",
    title: "Digital",
    secondaryTitle: "Marketing",
    desc: "Data-driven digital marketing strategies designed to increase visibility, attract the right audience, generate qualified leads and turn online traffic into measurable business growth.",
    icon: TrendingUp,
    link: "/services/digital-marketing",
    tags: [
      "SEO",
      "Google Ads",
      "Performance Marketing",
      "Lead Generation",
      "Growth Strategy",
    ],

    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
        alt: "Digital marketing analytics dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        alt: "Marketing performance analytics",
      },
      {
        src: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=85",
        alt: "Digital marketing strategy",
      },
      {
        src: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85",
        alt: "Marketing team working on campaign",
      },
    ],
  },

  {
    id: 4,
    number: "04",
    eyebrow: "Brand & Social Growth",
    title: "Social Media",
    secondaryTitle: "Marketing",
    desc: "Creative social media campaigns designed to strengthen brand presence, engage the right audience and turn attention into measurable business growth.",
    icon: Megaphone,
    link: "/services/social-media-marketing",

    tags: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Content Strategy",
      "Creative Campaigns",
    ],

    reverse: true,

    images: [
      {
        src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
        alt: "Social media marketing campaign",
      },
      {
        src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=85",
        alt: "Social media content strategy",
      },
      {
        src: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=85",
        alt: "Digital marketing campaign",
      },
      {
        src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1200&q=85",
        alt: "Social media platforms",
      },
    ],
  },
];

//  DRAGGABLE PROJECT GALLERY
function DraggableGallery({ images }) {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="
        group/gallery
        relative
        h-[310px]
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/70
        bg-slate-100
        select-none

        sm:h-[360px]
        lg:h-[400px]

        dark:border-white/10
        dark:bg-slate-900
      "
    >
      {/* background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40

          [background-image:radial-gradient(#94a3b8_1px,transparent_1px)]
          [background-size:20px_20px]

          dark:opacity-10
        "
      />

      {/* drag instruction */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-2
          whitespace-nowrap
          rounded-full
          border
          border-white/30
          bg-slate-950/70
          px-3
          py-1.5
          text-[10px]
          font-medium
          text-white
          shadow-lg
          backdrop-blur-md
        "
      >
        <MoveHorizontal size={12} />
        Drag to explore
      </div>

      {/* fade edges */}

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-slate-100 to-transparent dark:from-slate-900" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-slate-100 to-transparent dark:from-slate-900" />

      {/* draggable strip */}

      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.08}
        dragMomentum
        whileDrag={{ cursor: "grabbing" }}
        className="
          absolute
          left-8
          top-1/2
          flex
          w-max
          -translate-y-1/2
          cursor-grab
          gap-4
          pr-20
        "
      >
        {images.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            whileHover={{
              y: -8,
              rotate: index % 2 === 0 ? -1 : 1,
            }}
            transition={{ duration: 0.25 }}
            className={`
              relative
              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-white/70
              bg-white
              shadow-xl
              shadow-slate-900/10

              dark:border-white/10
              dark:bg-slate-800

              ${
                index === 0
                  ? "h-[220px] w-[300px] sm:h-[270px] sm:w-[390px]"
                  : "h-[200px] w-[260px] sm:h-[245px] sm:w-[340px]"
              }
            `}
          >
            <img
              src={image.src}
              alt={image.alt}
              draggable="false"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover/gallery:scale-[1.02]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

            <span
              className="
                absolute
                bottom-3
                left-3
                rounded-full
                border
                border-white/20
                bg-black/40
                px-2.5
                py-1
                text-[9px]
                font-medium
                text-white
                backdrop-blur-md
              "
            >
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

//  SERVICE CONTENT
function WorkContent({ work }) {
  const Icon = work.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="
        flex
        h-full
        flex-col
        justify-center
        px-1
        py-5

        lg:px-8
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <Icon size={18} />
        </div>

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[2px]
            text-primary
          "
        >
          {work.eyebrow}
        </span>
      </div>

      <h3
        className="
          mt-6
          text-3xl
          font-bold
          leading-[1.1]
          tracking-tight
          text-slate-900

          sm:text-4xl

          dark:text-white
        "
      >
        {work.title}

        <span className="block text-slate-400 dark:text-slate-500">
          {work.secondaryTitle}
        </span>
      </h3>

      <p
        className="
          mt-5
          max-w-md
          text-sm
          leading-7
          text-slate-500
          dark:text-slate-400
        "
      >
        {work.desc}
      </p>

      {/* tags */}

      <div className="mt-6 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-slate-600

              dark:border-white/10
              dark:bg-white/5
              dark:text-slate-300
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={work.link}
        type="button"
        className="
          group
          mt-7
          flex
          w-fit
          items-center
          gap-2
          text-xs
          font-semibold
          text-primary
        "
      >
        Explore our work
        <span
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-primary/10
            transition-all
            duration-300

            group-hover:bg-primary
            group-hover:text-white
          "
        >
          <ArrowUpRight
            size={13}
            className="
              transition-transform
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </span>
      </Link>
    </motion.div>
  );
}

/* =====================================================
   LATEST WORK
===================================================== */

function LatestWork() {
  return (
    <section
      id="our-work"
      className="
        overflow-hidden
        bg-white
        px-4
        py-20
        text-text-primary

        sm:px-8
        lg:px-16
        lg:py-24
        xl:px-24

        dark:bg-secondary
        dark:text-text-light
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center gap-6"
        >
          <Title
            title="Our latest work"
            desc="Explore some of the digital products, applications and experiences we've brought to life."
          />
        </motion.div>

        {/* Rows */}

        <div className="space-y-16 lg:space-y-24">
          {worksData.map((work) => (
            <div
              key={work.id}
              className={` grid
                items-center
                gap-8
                lg:gap-10 ${
                  work.reverse
                    ? "lg:grid-cols-[1.2fr_0.8fr]"
                    : "lg:grid-cols-[0.8fr_1.2fr]"
                }`}
            >
              {work.reverse ? (
                <>
                  {/* Image left */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    className="order-2 lg:order-1"
                  >
                    <DraggableGallery
                      images={work.images}
                      number={work.number}
                    />
                  </motion.div>

                  {/* Content right */}
                  <div className="order-1 lg:order-2">
                    <WorkContent work={work} />
                  </div>
                </>
              ) : (
                <>
                  {/* Content left */}
                  <WorkContent work={work} />

                  {/* Image right */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                  >
                    <DraggableGallery
                      images={work.images}
                      number={work.number}
                    />
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestWork;
