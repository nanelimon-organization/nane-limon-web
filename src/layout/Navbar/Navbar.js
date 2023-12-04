import {  Button, Grid,  } from "@mui/material";
import NavbarButton from "./components/NavbarButton";
import NavbarLogo from "./components/NavbarLogo";

function Navbar() {
  const donateTitle = "Bize Destek Olun";
  return (
    <Grid
    
      container
      width="100%"
      flexDirection="row"
      bgcolor="white"

      paddingX={16}
      paddingY={2}
      marginBottom={20}
      alignItems="center"
      position="fixed"
      zIndex={10}
      top={0}
      justifyContent="center"
    >
      <NavbarLogo />

      <Grid
        item
        xs={0}
        md={10}
        display={{ xs: "none", md: "flex"}}
        justifyContent="space-between"
      >
        <NavbarButton title="Anasayfa" to="/" />
        <NavbarButton title="Çalışma Alanları" to="/fields" />
        <NavbarButton title="Projeler" to="/projects" />
        <NavbarButton title="Sunumlar" to="/presentations" />
        <NavbarButton title="Hakkımızda" to="/aboutus" />
        <NavbarButton title="Community Etkinlikleri" to="/communityevents" />

        <Button disableRipple sx={styles.donateButton}>
          {donateTitle}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Navbar;

const styles = {
  donateButton: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 2,
    "&:hover": {
      color: "white",
      backgroundColor: "green",
      borderRadius: 2,
    },
  },
};
