import FooterMenu from "./components/FooterMenu";
import LogosSection from "./components/LogosSection";
import AboutUs from "./components/AboutUs";
import BrandSection from "./components/BrandSection";
import FooterContainer from "./components/FooterContainer";
function Footer({scrollToSection}) {
  return (
    <FooterContainer>
      <FooterMenu scrollToSection={scrollToSection} />
      <LogosSection />
      <AboutUs />
      <BrandSection />
    </FooterContainer>
  );
}

export default Footer;
