import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import NavbarButton from "../../Navbar/components/NavbarButton";

function FooterMenu({ scrollToSection }) {
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
          style={{ textDecoration: "none", margin: 8}}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("home")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            Anasayfa
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8}}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("team")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            Ekibimiz
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8}}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("projects")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            Projeler
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8}}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("events")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            Etkinlikler
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", margin: 8}}
          underline="hover"
          color="inherit"
          to="/"
          onClick={() => handleClick("contact")}
        >
          <Typography fontFamily="roboto-bold" color="#ffffff" fontSize={14}>
            Bize Ulaşın
          </Typography>
        </NavLink>
      </Box>
    </Grid>
  );
}

export default FooterMenu;
