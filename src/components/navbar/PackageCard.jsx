import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function PackageCard({ title, href }) {
  return (
    <Link
      to={href}
      className="
        group
        flex
        items-center
        justify-between
        gap-2
        rounded-lg
        border
        border-transparent
        bg-white/70
        px-2.5
        py-0.5
        transition-all
        duration-200

        hover:border-primary/20
        hover:bg-primary/5
        hover:shadow-sm

        dark:bg-secondary/80
        dark:hover:border-primary/20
        dark:hover:bg-primary/10
      "
    >
      <h3
        className="
          text-xs
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

      <div
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-primary/10
          text-primary
          transition-all
          duration-200

          group-hover:translate-x-0.5
          group-hover:bg-primary
          group-hover:text-white
        "
      >
        <ArrowUpRight size={11} />
      </div>
    </Link>
  );
}

export default PackageCard;
