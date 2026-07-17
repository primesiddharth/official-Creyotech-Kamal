import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
AnimatePresence
import { Plus } from "lucide-react";
import Title from "../Title";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Why choose Creyotech over other consultancy service provider?",
      answer:
        "Creyotech combines corporate compliance expertise with modern IT execution under one roof. With 4 years of consistent operations and 137 satisfied clients, we have built a reputation for reliability, structured processes, and measurable outcomes. Our integrated approach ensures that clients do not need multiple vendors for legal, compliance, and digital growth support.",
    },
    {
      question: "Do you work with both startups and established businesses?",
      answer:
        "Yes, we love working with startups and helping them build scalable and impactful digital products from scratch.",
    },
    {
      question: "What industries does creyotech primarily work with?",
      answer:
        "Over the past 4 years, Creyotech has supported 137 clients across diverse industries including startups, manufacturing businesses, service providers, ecommerce brands, and growing enterprises. Our cross-industry exposure allows us to understand practical business challenges and deliver scalable solutions.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Absolutely. Every project is customizable based on your business goals and feature requirements.",
    },
  ];

  return (
    <section
      id="faq"
      className="
    relative
    overflow-hidden
    px-4
    py-15
    sm:px-8
    lg:px-16
    xl:px-20
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
        bg-primary/20
        blur-3xl
      "
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-5 dark:text-text-light items-center text-center"
        >
          <Title
            title="Frequently asked questions"
            desc="Everything you need to know about our services and workflow."
          />
        </motion.div>

        {/* FAQ Layout */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[360px_1fr]">
          {/* Questions Sidebar */}
          <div
            className="flex pb-2 overflow-x-auto flex-col gap-3 lg:sticky lg:top-28 lg:h-fit lg:flex-col lg:overflow-visible "
          >
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[260px]
                    lg:min-w-0
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                p-5
                text-left
                transition-all
                duration-300
                ${
                  isActive
                    ? `
                      border-primary/30
                      bg-primary/10
                      shadow-[0_10px_40px_rgba(59,130,246,0.15)]
                    `
                    : `
                      border-black/5
                      bg-white/40
                      hover:border-primary/20
                      hover:bg-primary/5
                      dark:border-white/10
                      dark:bg-white/[0.03]
                    `
                }
              `}
                >
                  {/* Active Indicator */}
                  <div
                    className={`
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  rounded-full
                  bg-primary
                  transition-all
                  duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
                  />

                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <div
                      className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-primary
                          text-white
                        `
                        : `
                          bg-primary/10
                          text-primary
                        `
                    }
                  `}
                    >
                      0{index + 1}
                    </div>

                    {/* Question */}
                    <div>
                      <h3
                        className={`
                      text-base
                      font-semibold
                      leading-7
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-primary"
                          : "text-text-primary dark:text-white"
                      }
                    `}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Answer Panel */}
          <div className="min-h-[420px] flex items-center justify-center w-full max-w-2xl ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-primary/10
              bg-white/50
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-white/[0.03]
              sm:p-9
            "
              >
                {/* Top Glow */}
                <div
                  className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-primary/10
                blur-3xl
              "
                />
                {/* Content */}
                <div className="relative mt-8">
                  <p
                    className="
                  max-w-3xl
                  text-[15px]
                  leading-9
                  text-text-secondary
                  dark:text-white/70
                "
                  >
                    {faqData[activeIndex].answer}
                  </p>
                </div>

                {/* Bottom Decoration */}
                <div
                  className="
                mt-10
                flex
                items-center
                gap-3
              "
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="h-2 w-2 rounded-full bg-primary/60" />
                  <div className="h-2 w-2 rounded-full bg-primary/30" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
