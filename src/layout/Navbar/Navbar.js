import NavbarLogo from "./components/NavbarLogo";
import { useState } from "react";
import NavbarContainer from "./components/NavbarContainer";
import LogoMenuContainer from "./components/LogoMenuContainer";
import MobileMenuToggle from "./components/MobileMenuToggle";
import NavbarItemsContainer from "./components/NavbarItemsContainer";
import NavbarItems, { NavbarItemsMobile } from "./components/NavbarItems";
function Navbar({sticky,scrollToSection}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer sticky={sticky}>
      <LogoMenuContainer>
        <NavbarLogo />
        <MobileMenuToggle toggleMenu={toggleMenu} />
      </LogoMenuContainer>
      <NavbarItemsContainer>
        <NavbarItems scrollToSection={scrollToSection} />
      </NavbarItemsContainer>

      {isMenuOpen && (
        <NavbarItemsMobile toggleMenu={toggleMenu} sticky={sticky}/>
      )}
    </NavbarContainer>
  );
}

export default Navbar;


