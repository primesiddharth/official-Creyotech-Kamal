import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const menuItemClass = `
  group
  flex
  items-start
  justify-between
  gap-3
  rounded-xl
  border
  border-transparent
  bg-white/70
  p-2.5
  transition-all
  duration-300
  hover:-translate-y-0.5
  hover:border-primary/20
  hover:bg-primary/5
  hover:shadow-sm
  dark:bg-secondary/80
`;

function PackageCard({ title, href }) {
  const isExternal = /^https?:\/\//i.test(href);

  const handleExternalClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(href, "_blank", "noopener,noreferrer");
  };

  const content = (
    <>
      <div className="min-w-0">
        <h3
          className="
            text-sm
            font-medium
            leading-5
            text-text-primary
            transition-colors
            group-hover:text-primary
            dark:text-text-light
          "
        >
          {title}
        </h3>

        <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
          {isExternal ? "Visit live project" : "Explore this service"}
        </p>
      </div>

      <div
        className="
          shrink-0
          rounded-full
          bg-primary/10
          p-1.5
          text-primary
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:bg-primary
          group-hover:text-white
        "
      >
        <ArrowUpRight size={12} />
      </div>
    </>
  );

  /* External project */
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleExternalClick}
        className={menuItemClass}
        aria-label={`Visit ${title}`}
      >
        {content}
      </a>
    );
  }

  /* Internal React Router route */
  return (
    <Link
      to={href}
      className={menuItemClass}
      onClick={(event) => event.stopPropagation()}
    >
      {content}
    </Link>
  );
}

export default PackageCard;
