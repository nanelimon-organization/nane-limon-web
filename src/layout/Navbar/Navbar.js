import NavbarLogo from "./components/NavbarLogo";
import { useState } from "react";
import NavbarContainer from "./components/NavbarContainer";
import LogoMenuContainer from "./components/LogoMenuContainer";
import MobileMenuToggle from "./components/MobileMenuToggle";
import NavbarItemsContainer from "./components/NavbarItemsContainer";
import NavbarItems, { NavbarItemsMobile } from "./components/NavbarItems";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoMenuContainer>
        <NavbarLogo />
        <MobileMenuToggle toggleMenu={toggleMenu} />
      </LogoMenuContainer>
      <NavbarItemsContainer>
        <NavbarItems />
      </NavbarItemsContainer>

      {isMenuOpen && (
        <NavbarItemsMobile toggleMenu={toggleMenu} />
      )}
    </NavbarContainer>
  );
}

export default Navbar;


