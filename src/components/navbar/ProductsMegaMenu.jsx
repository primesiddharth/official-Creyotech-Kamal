import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "./navbarData";

function ProductsMegaMenu() {
  return (
    <div className="w-[520px]">
      {/* Compact Header */}
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[2px] text-primary">
            Our Products
          </p>

          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Software built for modern businesses
          </p>
        </div>

        <Link
          to="/products"
          className="
            group
            flex
            items-center
            gap-1
            text-sm
            font-semibold
            text-slate-500
            transition-colors
            hover:text-primary
            dark:text-slate-400
            dark:hover:text-primary
          "
        >
          View All
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-2">
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <Link
              key={product.title}
              to={product.href}
              className={`
                group
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-200/70
                bg-slate-50/70
                p-2.5
                transition-all
                duration-200

                hover:border-primary/20
                hover:bg-primary/[0.04]
                hover:shadow-sm

                dark:border-white/10
                dark:bg-slate-900/50
                dark:hover:border-primary/30
                dark:hover:bg-primary/10

                ${index === products.length - 1 ? "col-span-1" : ""}
              `}
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
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
                <Icon size={18} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-sm
                    font-semibold
                    leading-4
                    text-slate-800
                    transition-colors
                    group-hover:text-primary

                    dark:text-slate-100
                  "
                >
                  {product.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[10px]
                    leading-4
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {product.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={13}
                className="
                  shrink-0
                  text-slate-300
                  transition-all
                  duration-200

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-primary

                  dark:text-slate-600
                  dark:group-hover:text-primary
                "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsMegaMenu;
