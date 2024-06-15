import { Button, Grid, Typography } from "@mui/material";
import NavbarButton from "./components/NavbarButton";
import NavbarLogo from "./components/NavbarLogo";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const donateTitle = "Bize Destek Olun";
  return (
    <Grid
      container
      width="100%"
      flexDirection="row"
      bgcolor="#F5F5F5"
      paddingX={{ xs: 6, md: 16 }}
      alignItems="center"
      zIndex={10}
      position="sticky"
      top={0}
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        md={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <NavbarLogo />
        <Button
          onClick={toggleMenu}
          sx={{
            width: 50,
            height: 50,
            display: { xs: "flex", md: "none" },
            color: "green",
          }}
        >
          <MenuIcon />
        </Button>
      </Grid>
      <Grid
        item
        xs={0}
        md={10}
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
      >
        <Grid>
          <NavbarButton title="Anasayfa" to="/" />
          {/* <NavbarButton title="Çalışma Alanları" to="/fields" /> */}
          <NavbarButton title="Projeler" to="/projects" />
          {/* <NavbarButton title="Sunumlar" to="/presentations" /> */}
          <NavbarButton title="Etkinlikler" to="/events" />
        </Grid>
        <Grid>
          <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
            <Button disableRipple sx={styles.donateButton}>
              <Typography textTransform="capitalize" fontFamily="roboto-medium">
                {donateTitle}
              </Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>

      {isMenuOpen && (
        <Grid
          container
          direction="column"
        alignItems="center"
          position="absolute"
          top="90%"
          padding={5}
          bgcolor="#F5F5F5"
          borderRadius="8px"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, type: "smooth", stiffness: 100 }}
        >
          <NavbarButton title="Anasayfa" to="/" onClick={closeMenu} />
          <NavbarButton title="Projeler" to="/projects" onClick={closeMenu} />
          <NavbarButton title="Etkinlikler" to="/events" onClick={closeMenu} />
          <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
            <Button disableRipple sx={styles.donateButton} onClick={closeMenu}>
              <Typography textTransform="capitalize" fontFamily="roboto-medium">
                {donateTitle}
              </Typography>
            </Button>
          </NavLink>
        </Grid>
      )}
    </Grid>
  );
}

export default Navbar;

const styles = {
  donateButton: {
    color: "white",
    backgroundColor: "green",
    marginTop: "10px",
    borderRadius: 2,
    "&:hover": {
      color: "white",
      backgroundColor: "green",
      borderRadius: 2,
    },
  },
};
