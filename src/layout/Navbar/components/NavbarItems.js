import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton";
import { NavLink } from "react-router-dom";

function NavbarItems() {
  return (
    <>
      <Grid display="flex" flexDirection="row">
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
        >
          <NavbarButton title="Anasayfa" to="/" />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, type: "tween", stiffness: 100 }}
        >
          <NavbarButton title="Projeler" to="/projects" />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
        >
          <NavbarButton title="Etkinlikler" to="/events" />
        </Grid>
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, type: "tween", stiffness: 100 }}
      >
        <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
          <Button disableRipple sx={styles.donateButton}>
            <Typography textTransform="capitalize" fontFamily="roboto-medium">
              Bize Destek Olun
            </Typography>
          </Button>
        </NavLink>
      </Grid>
    </>
  );
}

export default NavbarItems;


function NavbarItemsMobile({toggleMenu}){
    return <Grid
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
    <Grid
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
    >
      <NavbarButton title="Anasayfa" to="/" onClick={toggleMenu} />
    </Grid>
    <Grid
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, type: "smooth", stiffness: 100 }}
    >
      <NavbarButton title="Projeler" to="/projects" onClick={toggleMenu} />
    </Grid>
    <Grid
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.7, type: "smooth", stiffness: 100 }}
    >
      <NavbarButton
        title="Etkinlikler"
        to="/events"
        onClick={toggleMenu}
      />
    </Grid>
    <Grid
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, type: "smooth", stiffness: 100 }}
    >
      <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
        <Button
          disableRipple
          sx={styles.donateButton}
          onClick={toggleMenu}
        >
          <Typography
            textTransform="capitalize"
            fontFamily="roboto-medium"
          >
            Bize Destek Olun
          </Typography>
        </Button>
      </NavLink>
    </Grid>
  </Grid>
}
 
export { NavbarItemsMobile };


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
