import NavDropdown from "./NavDropdown";
import ServicesMegaMenu from "./ServicesMegaMenu";
import ProductsMegaMenu from "./ProductsMegaMenu";
import AboutMegaMenu from "./AboutMegaMenu";

function NavLinks({ activeMenu, setActiveMenu }) {
  return (
    <>
      <NavDropdown
        label="Services"
        menuKey="services"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        <ServicesMegaMenu />
      </NavDropdown>

      <NavDropdown
        label="Products"
        menuKey="products"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        <ProductsMegaMenu />
      </NavDropdown>

      <NavDropdown
        label="About Us"
        menuKey="about"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        <AboutMegaMenu />
      </NavDropdown>
    </>
  );
}

export default NavLinks;
