import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import ProposalForm from "./ProposalForm";

function ProposalSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          right-0
          top-1/2
          z-50
          -translate-y-1/2
          rotate-180
          rounded-tl-xl
          rounded-tr-xl
          bg-primary
          px-4
          py-3
          text-sm
          font-semibold
          tracking-wide
          text-white
          cursor-pointer
          [writing-mode:vertical-rl]
          shadow-xl
        "
      >
        Request Proposal
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 220,
              }}
              className="
                fixed
                right-0
                top-0
                z-[100]
                h-screen
                w-full
                max-w-xl
                overflow-y-auto
                border-l
                border-border-light
                bg-white
                p-7
                shadow-2xl
                dark:border-border-dark
                dark:bg-bg-dark
              "
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-6
                  top-3
                  cursor-pointer
                  rounded-full
                  bg-black/5
                  p-2
                  dark:bg-white/50
                "
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="py-2">
                <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white">
                  Start a Project
                </span>

                <h2 className="mt-5 text-4xl font-bold leading-tight text-text-primary dark:text-white">
                  Request a Proposal
                </h2>

                <p className="mt-3 text-sm leading-6 text-text-secondary dark:text-white/70">
                  Tell us about your business, goals, and project requirements.
                  We’ll craft a tailored proposal for you.
                </p>
              </div>

              {/* Form */}
              <ProposalForm />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProposalSidebar;
