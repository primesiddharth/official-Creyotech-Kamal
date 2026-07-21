import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { client_reviews } from "../../assets/assets";

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = client_reviews.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, totalReviews]);

  const prevIndex = (activeIndex - 1 + totalReviews) % totalReviews;

  const nextIndex = (activeIndex + 1) % totalReviews;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        dark:bg-slate-950
        py-10
        sm:py-5
      "
    >
      {/* Decorative Background */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[120px]
          dark:bg-indigo-500/10
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-md
              bg-indigo-100/70
              px-3
              py-1
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-indigo-600

              dark:bg-indigo-500/10
              dark:text-indigo-300
            "
          >
            Client Stories
          </span>

          {/* Heading */}

          <h2
            className="
              mt-3  
              text-3xl
              font-extrabold
              leading-13
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            What our clients
            <span className="text-indigo-600 dark:text-indigo-400">
             <br /> {" "}
              say about us
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            Real experiences from businesses we've helped transform through
            design, technology and digital strategy.
          </p>
        </motion.div>

        {/* ================= REVIEWS ================= */}

        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="
              flex
              min-h-[380px]
              items-center
              justify-center

              sm:min-h-[460px]
              lg:min-h-[500px]
            "
          >
            {/* ============== LEFT REVIEW ============== */}

            <motion.button
              type="button"
              onClick={prevSlide}
              whileHover={{ scale: 1.03 }}
              className="
                absolute
                left-0
                hidden
                w-[32%]
                cursor-pointer
                lg:block
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/70
                  bg-white
                  opacity-45
                  shadow-lg
                  transition-all
                  duration-500
                  hover:opacity-70
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <img
                  src={client_reviews[prevIndex]}
                  alt={`Client review ${prevIndex + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </motion.button>

            {/* ============== CENTER ACTIVE REVIEW ============== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  y: -15,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  relative
                  z-20
                  w-full
                  max-w-[390px]
                  sm:max-w-[430px]
                  lg:max-w-[450px]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -inset-3
                    -z-10
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-indigo-500/20
                    via-purple-500/10
                    to-transparent
                    blur-xl

                    dark:from-indigo-500/20
                    dark:via-purple-500/10
                  "
                />

                {/* Review Card */}

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-2xl
                    shadow-slate-900/10

                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:shadow-black/30
                  "
                >
                  <img
                    src={client_reviews[activeIndex]}
                    alt={`Creyotech client review ${activeIndex + 1}`}
                    className="
                      aspect-square
                      w-full
                      rounded-[1.25rem]
                      object-cover
                    "
                  />
                </motion.div>

                {/* Small Verified Badge */}

                <div
                  className="
                    absolute
                    -bottom-4
                    left-1/2
                    flex
                    -translate-x-1/2
                    items-center
                    gap-2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-slate-700
                    shadow-lg

                    dark:border-slate-700
                    dark:bg-slate-800
                    dark:text-slate-200
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100
                      text-[10px]
                      text-emerald-600

                      dark:bg-emerald-500/10
                      dark:text-emerald-400
                    "
                  >
                    ✓
                  </span>
                  Verified Client
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ============== RIGHT REVIEW ============== */}

            <motion.button
              type="button"
              onClick={nextSlide}
              whileHover={{ scale: 1.03 }}
              className="
                absolute
                right-0
                hidden
                w-[32%]
                cursor-pointer

                lg:block
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200/70
                  bg-white
                  opacity-45
                  shadow-lg
                  transition-all
                  duration-500

                  hover:opacity-70

                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <img
                  src={client_reviews[nextIndex]}
                  alt={`Client review ${nextIndex + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </motion.button>
          </div>

          {/* ================= CONTROLS ================= */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-5
            "
          >
            {/* Previous */}

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-lg
                text-slate-700
                shadow-sm
                transition-all

                hover:-translate-x-1
                hover:border-indigo-300
                hover:text-indigo-600
                hover:shadow-md

                dark:border-slate-800
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:border-indigo-500/50
                dark:hover:text-indigo-400
              "
            >
              ←
            </button>

            {/* Dots */}

            <div className="flex items-center gap-2">
              {client_reviews.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "w-7 bg-indigo-600 dark:bg-indigo-400"
                        : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-lg
                text-slate-700
                shadow-sm
                transition-all

                hover:translate-x-1
                hover:border-indigo-300
                hover:text-indigo-600
                hover:shadow-md

                dark:border-slate-800
                dark:bg-slate-900
                dark:text-slate-300
                dark:hover:border-indigo-500/50
                dark:hover:text-indigo-400
              "
            >
              →
            </button>
          </div>
          {/* Review Counter */}
          <p
            className="
              mt-5
              text-center
              text-xs
              font-medium
              text-slate-400
              dark:text-slate-600
            "
          >
            {String(activeIndex + 1).padStart(2, "0")}
            {" / "}
            {String(totalReviews).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
