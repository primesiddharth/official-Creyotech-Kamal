import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { aboutMenu } from "./navbarData";

function MenuItem({ item }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.href}
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        p-2.5
        transition-all
        duration-200
        hover:bg-primary/5
        dark:hover:bg-primary/10
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-primary/10
          text-primary
          transition-all
          duration-200
          group-hover:bg-primary
          group-hover:text-white
        "
      >
        <Icon size={16} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4
          className="
            text-sm
            font-semibold
            text-slate-800
            transition-colors
            group-hover:text-primary
            dark:text-slate-100
          "
        >
          {item.title}
        </h4>

        <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
          {item.desc}
        </p>
      </div>

      <ArrowUpRight
        size={13}
        className="
          text-slate-300
          transition-all
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
          group-hover:text-primary
          dark:text-slate-600
        "
      />
    </Link>
  );
}

function AboutMegaMenu() {
  return (
    <div className="w-[540px]">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between border-b border-slate-200/70 pb-3 dark:border-white/10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-primary">
            About Creyotech
          </p>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Learn more about our company and work.
          </p>
        </div>

        <Link
          to="/about"
          className="
            group
            flex
            items-center
            gap-1
            text-[11px]
            font-semibold
            text-slate-500
            transition-colors
            hover:text-primary
            dark:text-slate-400
          "
        >
          About Us
          <ArrowRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
        {/* About Company */}
        <div>
          <p
            className="
              mb-1.5
              px-2.5
              text-[10px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-slate-400
              dark:text-slate-500
            "
          >
            About the Company
          </p>

          <div className="flex flex-col">
            {aboutMenu.company.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))}
          </div>
        </div>

        {/* Resources */}
        <div
          className="
            rounded-xl
            border
            border-slate-200/70
            bg-slate-50/70
            p-2
            dark:border-white/10
            dark:bg-slate-900/40
          "
        >
          <p
            className="
              mb-1
              px-2
              pt-1
              text-[10px]
              font-bold
              uppercase
              tracking-[1.5px]
              text-primary
            "
          >
            Resources
          </p>

          <div className="flex flex-col">
            {aboutMenu.resources.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))}
          </div>

          {/* Resource CTA */}
          <div className="mx-2 mt-2 border-t border-slate-200/70 pt-2 dark:border-white/10">
            <p className="text-[10px] leading-4 text-slate-400">
              Explore insights, real projects and resources from our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMegaMenu;
