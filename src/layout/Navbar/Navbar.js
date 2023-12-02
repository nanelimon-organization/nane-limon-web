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
      sx={{ borderBottom: 1, borderBottomColor: "green" }}
      paddingX={16}
      paddingY={2}
      alignItems="center"
      justifyContent="center"
    >
      <NavbarLogo />

      <Grid
        item
        xs={0}
        md={10}
        display={{ xs: "none", md: "flex" }}
        justifyContent="space-between"
      >
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
