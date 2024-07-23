import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import NavbarButton from "../../Navbar/components/NavbarButton";
import { useTranslation } from "react-i18next";

function FooterMenu({ scrollToSection }) {
  const { t } = useTranslation();

  const location = useLocation();

  const handleClick = (value) => {
    if (location.pathname == "/") {
      scrollToSection(value);
    } else {
      setTimeout(() => {
        scrollToSection(value);
      }, 1000);
    }
  };

  return (
    <Grid item xs={12} md={1}>
      <Box
        padding={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <NavLink
          style={{ textDecoration: "none", margin: 8 }}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("home")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            {t("navbar.home")}
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8 }}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("team")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            {t("navbar.team")}
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8 }}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("projects")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            {t("navbar.projects")}
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8 }}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("events")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            {t("navbar.events")}
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8 }}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("contact")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            {t('navbar.contact')}
          </Typography>
        </NavLink>
      </Box>
    </Grid>
  );
}

export default FooterMenu;
