import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";

import { serviceSections, products } from "./navbarData";

function MobileSidebar({ setSideBarOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setSideBarOpen(false);
  };

  const navClass = ({ isActive }) => `
    flex
    items-center
    text-lg
    font-medium
    transition-colors
    duration-300
    hover:text-white
    ${isActive ? "text-white" : "text-white/80"}
  `;

  const externalLink = (href) => /^https?:\/\//i.test(href);

  const handleExternalClick = (event, href) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(href, "_blank", "noopener,noreferrer");

    closeMenu();
  };

  return (
    <div className="relative flex w-full flex-col gap-5 text-white">
      {/* =====================================================
          CLOSE BUTTON
      ====================================================== */}
      <button
        type="button"
        onClick={closeMenu}
        aria-label="Close menu"
        className="
          absolute
          -right-1
          -top-14
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          transition-all
          duration-300
          hover:bg-white/20
          hover:rotate-90
        "
      >
        <X size={21} strokeWidth={2} />
      </button>

      {/* =====================================================
          HOME
      ====================================================== */}
      <NavLink to="/" onClick={closeMenu} className={navClass}>
        Home
      </NavLink>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setServicesOpen((prev) => !prev)}
          aria-expanded={servicesOpen}
          className="
            flex
            w-full
            items-center
            justify-between
            text-left
            text-lg
            font-medium
            text-white/80
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <span>Services</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            {servicesOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
          </span>
        </button>

        {/* Services Content */}
        <div
          className={`
            grid
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${
              servicesOpen
                ? "mt-3 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0">
            <div className="max-h-[50vh] overflow-y-auto border-l border-white/15 pl-4 pr-1">
              <div className="flex flex-col gap-1">
                {serviceSections.map((section) => {
                  const baseHref =
                    section.href ||
                    (section.items?.[0]?.href
                      ? section.items[0].href.split("#")[0]
                      : "#");

                  const isExternal = externalLink(baseHref);

                  if (isExternal) {
                    return (
                      <a
                        key={section.id || section.title}
                        href={baseHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          handleExternalClick(event, baseHref)
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-3
                          py-2.5
                          text-base
                          text-white/75
                          transition-all
                          duration-300
                          hover:bg-white/5
                          hover:text-white
                        "
                      >
                        <span>{section.title}</span>

                        <ExternalLink
                          size={14}
                          className="
                            shrink-0
                            text-white/40
                            transition-colors
                            group-hover:text-white
                          "
                        />
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={section.id || section.title}
                      to={baseHref}
                      onClick={closeMenu}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-3
                        py-2.5
                        text-base
                        text-white/75
                        transition-all
                        duration-300
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      <span>{section.title}</span>

                      <ChevronDown
                        size={14}
                        className="
                          -rotate-90
                          text-white/30
                          transition-colors
                          group-hover:text-white
                        "
                      />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setProductsOpen((prev) => !prev)}
          aria-expanded={productsOpen}
          className="
            flex
            w-full
            items-center
            justify-between
            text-left
            text-lg
            font-medium
            text-white/80
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <span>Products</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            {productsOpen ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
          </span>
        </button>

        {/* Products Content */}
        <div
          className={`
            grid
            overflow-hidden
            transition-all
            duration-300
            ease-out
            ${
              productsOpen
                ? "mt-3 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0">
            <div className="max-h-[50vh] overflow-y-auto border-l border-white/15 pl-4 pr-1">
              <div className="flex flex-col gap-1">
                {products.map((product) => {
                  const isExternal = externalLink(product.href);

                  if (isExternal) {
                    return (
                      <a
                        key={product.href}
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          handleExternalClick(event, product.href)
                        }
                        className="
                          group
                          rounded-xl
                          px-3
                          py-2.5
                          transition-all
                          duration-300
                          hover:bg-white/5
                        "
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base text-white/80 group-hover:text-white">
                            {product.title}
                          </span>

                          <ExternalLink
                            size={14}
                            className="shrink-0 text-white/40"
                          />
                        </div>

                        {product.description && (
                          <span className="mt-1 block text-xs leading-5 text-white/45">
                            {product.description}
                          </span>
                        )}
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={product.href}
                      to={product.href}
                      onClick={closeMenu}
                      className="
                        group
                        rounded-xl
                        px-3
                        py-2.5
                        transition-all
                        duration-300
                        hover:bg-white/5
                      "
                    >
                      <span className="text-base text-white/80 group-hover:text-white">
                        {product.title}
                      </span>

                      {product.description && (
                        <span className="mt-1 block text-xs leading-5 text-white/45">
                          {product.description}
                        </span>
                      )}
                    </NavLink>
                  );
                })}

                {/* View All Products */}
                <NavLink
                  to="/products"
                  onClick={closeMenu}
                  className="
                    mt-2
                    rounded-xl
                    bg-primary/10
                    px-3
                    py-2.5
                    text-sm
                    font-semibold
                    text-primary
                    transition-all
                    duration-300
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  View All Products
                  <span className="ml-1">→</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          OTHER LINKS
      ====================================================== */}
      <NavLink to="/about" onClick={closeMenu} className={navClass}>
        About Us
      </NavLink>

      <NavLink to="/mvp-development" onClick={closeMenu} className={navClass}>
        MVP
      </NavLink>

      <NavLink to="/career" onClick={closeMenu} className={navClass}>
        Career
      </NavLink>

      <NavLink to="/contact-us" onClick={closeMenu} className={navClass}>
        Contact Us
      </NavLink>
    </div>
  );
}

export default MobileSidebar;
