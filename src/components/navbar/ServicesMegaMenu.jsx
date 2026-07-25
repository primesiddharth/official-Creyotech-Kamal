import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cloud,
  Palette,
  BriefcaseBusiness,
  BrainCircuit,
} from "lucide-react";

import { serviceSections } from "./navbarData";

const categoryIcons = {
  development: Code2,
  cloud: Cloud,
  "design-marketing": Palette,
  business: BriefcaseBusiness,
  "emerging-tech": BrainCircuit,
};

function ServicesMegaMenu() {
  const [activeCategory, setActiveCategory] = useState(serviceSections[0]?.id);

  const activeSection =
    serviceSections.find((section) => section.id === activeCategory) ||
    serviceSections[0];

  return (
    <div className="w-[980px] overflow-hidden">
      <div className="grid grid-cols-[270px_1fr]">
        {/* ================= LEFT SIDEBAR ================= */}

        <div
          className="
            border-r
            border-slate-200/70
            bg-slate-50/70
            p-2

            dark:border-white/10
            dark:bg-slate-950/30
          "
        >
          <p
            className="
              mb-2
              px-3
              pt-2
              text-[10px]
              font-bold
              uppercase
              tracking-[2px]
              text-slate-400
            "
          >
            Services
          </p>

          <div className="space-y-1">
            {serviceSections.map((section) => {
              const Icon = categoryIcons[section.id] || Code2;

              const active = activeCategory === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(section.id)}
                  onClick={() => setActiveCategory(section.id)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : `
                          text-slate-700
                          hover:bg-white
                          hover:text-primary

                          dark:text-slate-300
                          dark:hover:bg-white/5
                          dark:hover:text-primary
                        `
                    }
                  `}
                >
                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition-all

                      ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-primary/10 text-primary"
                      }
                    `}
                  >
                    <Icon size={15} />
                  </div>

                  <span className="flex-1 text-sm font-semibold">
                    {section.title}
                  </span>

                  <ArrowRight
                    size={13}
                    className={`
                      transition-transform
                      ${
                        active
                          ? "translate-x-0.5 text-white"
                          : "text-slate-300 group-hover:translate-x-0.5 group-hover:text-primary"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="min-h-[300px] p-4">
          {/* Header */}

          <div
            className="
              mb-3
              flex
              items-center
              justify-between
              border-b
              border-slate-200/70
              pb-3

              dark:border-white/10
            "
          >
            <div>
              <h3
                className="
                  mt-1
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {activeSection.title}
              </h3>
            </div>

            <Link
              to={activeSection.href}
              className="
                group
                flex
                items-center
                gap-1.5
                rounded-lg
                bg-primary/5
                px-3
                py-2
                text-[11px]
                font-semibold
                text-primary
                transition-all

                hover:bg-primary
                hover:text-white

                dark:bg-primary/10
              "
            >
              View All
              <ArrowRight
                size={12}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* ================= SERVICE LINKS ================= */}

          <div className="grid grid-cols-3 gap-x-2">
            {activeSection.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-2

                  rounded-lg
                  px-2.5
                  py-2

                  text-sm
                  font-medium
                  text-slate-600

                  transition-all
                  duration-200

                  hover:bg-primary/5
                  hover:text-primary

                  dark:text-slate-300
                  dark:hover:bg-primary/10
                  dark:hover:text-primary
                "
              >
                <span>{item.title}</span>

                <ArrowUpRight
                  size={12}
                  className="
                    shrink-0
                    opacity-0
                    transition-all
                    duration-200

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-200/70
          bg-slate-50/50
          px-5
          py-2.5

          dark:border-white/10
          dark:bg-slate-950/20
        "
      >
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Can&apos;t find what you&apos;re looking for?
        </p>

        <Link
          to="/contact-us"
          className="
            group
            flex
            items-center
            gap-1.5
            text-[11px]
            font-semibold
            text-primary
          "
        >
          Discuss your project
          <ArrowRight
            size={12}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </div>
  );
}

export default ServicesMegaMenu;
