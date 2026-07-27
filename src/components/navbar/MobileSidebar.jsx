import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import assets from "../../assets/assets";
import { serviceSections, products } from "./navbarData";

function MobileSidebar({ setSideBarOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => setSideBarOpen(false);

  const navClass = ({ isActive }) =>
    `
      text-lg
      font-medium
      transition-all
      duration-300
      hover:text-white/70
      ${isActive ? "text-white" : "text-white/90"}
    `;

  return (
    <div className="relative flex flex-col gap-5">
      {/* Close Button */}
      <img
        src={assets.close_icon}
        alt="Close menu"
        onClick={closeMenu}
        className="absolute right-4 -top-15 h-4 w-4 cursor-pointer"
      />

      {/* Home */}
      <NavLink to="/" onClick={closeMenu} className={navClass}>
        Home
      </NavLink>

      {/* Services Dropdown */}
      <div className="flex flex-col">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center justify-between text-lg font-medium text-white/90"
        >
          <span>Services</span>
          {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            servicesOpen ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 pl-4 border-l border-white/20">
            {serviceSections.map((section) => {
              const baseHref =
                section.items && section.items[0]
                  ? section.items[0].href.split("#")[0]
                  : `/services/${section.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`;

              return (
                <NavLink
                  key={section.title}
                  to={baseHref}
                  onClick={closeMenu}
                  className="text-white/80 hover:text-white text-base transition"
                >
                  {section.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Dropdown */}
      <div className="flex flex-col">
        <button
          onClick={() => setProductsOpen(!productsOpen)}
          className="flex items-center justify-between text-lg font-medium text-white/90"
        >
          <span>Products</span>

          {productsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            productsOpen ? "mt-3 max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 border-l border-white/20 pl-4">
            {products.map((product) => (
              <NavLink
                key={product.href}
                to={product.href}
                onClick={closeMenu}
                className="text-base text-white/80 transition hover:text-white"
              >
                <span className="block">{product.title}</span>

                <span className="block text-xs text-white/50">
                  {product.description}
                </span>
              </NavLink>
            ))}

            <NavLink
              to="/products"
              onClick={closeMenu}
              className="text-sm font-medium text-white"
            >
              View All Products →
            </NavLink>
          </div>
        </div>
      </div>

      {/* Other Links */}
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
