import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function NavDropdown({
  label,
  activeMenu,
  setActiveMenu,
  menuKey,
  width = "",
  children,
}) {
  const isActive = activeMenu === menuKey;

  return (
    <div
      className="relative hidden sm:block"
      onMouseEnter={() => setActiveMenu(menuKey)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button
        type="button"
        className="
          flex
          items-center
          gap-1
          rounded-full
          px-2
          py-1.5
          transition-all
          duration-300
          hover:text-primary
          focus:outline-none
          focus:ring-2
          focus:ring-primary/30
        "
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition duration-300 ${isActive ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`
              absolute
              left-1/2
            -translate-x-[40%]
              top-12
              z-50
              ${width}
        
              rounded-[30px]
              border
              border-slate-200/80
              bg-white
              p-6
              shadow-[0_25px_90px_rgba(15,23,42,0.12)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-secondary
            `}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavDropdown;
