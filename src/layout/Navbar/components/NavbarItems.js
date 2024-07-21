import { Button, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton";
import { NavLink, useLocation } from "react-router-dom";

function NavbarItems({ scrollToSection }) {
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
    <>
      <Grid
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title="Anasayfa"
            to="/"
            onClick={() => handleClick("home")}
          />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title="Ekibimiz"
            to="/"
            onClick={() => handleClick("team")}
          />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title="Projeler"
            to="/"
            onClick={() => handleClick("projects")}
          />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title="Etkinlikler"
            to="/"
            onClick={() => handleClick("events")}
          />
        </Grid>
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title="Bize Ulaşın"
            to="/"
            onClick={() => handleClick("contact")}
          />
        </Grid>
        {/* <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
        >
          <NavLink to="https://cool-lime.vercel.app/" target="_blank">
            <Button disableRipple sx={styles.coolLime}>
              <Typography textTransform="capitalize" fontFamily="roboto-medium">
                CooLLiMe
              </Typography>
            </Button>
          </NavLink>
        </Grid> */}
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

function NavbarItemsMobile({ toggleMenu, scrollToSection }) {
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
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="90%"
      padding={5}
      bgcolor={"#111111"}
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
        <NavbarButton
          title="Anasayfa"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("home");
            toggleMenu();
          }}
          to="/"
        />
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, type: "tween", stiffness: 100 }}
      >
        <NavbarButton
          title="Ekibimiz"
          to="/"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("team");
            toggleMenu();
          }}
        />
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, type: "tween", stiffness: 100 }}
      >
        <NavbarButton
          title="Projeler"
          to="/"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("projects");
            toggleMenu();
          }}
        />
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
      >
        <NavbarButton
          title="Etkinlikler"
          to="/"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("events");
            toggleMenu();
          }}
        />
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
      >
        <NavbarButton
          title="Bize Ulaşın"
          to="/"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("contact");
            toggleMenu();
          }}
        />
      </Grid>
      <Grid marginTop={1}>
        {/* <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, type: "tween", stiffness: 100 }}
        >
          <NavLink to="https://cool-lime.vercel.app/" target="_blank">
            <Button disableRipple sx={[styles.coolLime]}>
              <Typography
                textTransform="capitalize"
                textAlign="center"
                fontFamily="roboto-medium"
              >
                CooLLiMe
              </Typography>
            </Button>
          </NavLink>
        </Grid> */}
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, type: "tween", stiffness: 100 }}
        >
          <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
            <Button disableRipple sx={styles.donateButton}>
              <Typography
                textTransform="capitalize"
                textAlign="center"
                fontFamily="roboto-medium"
              >
                Bize Destek Olun
              </Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}

export { NavbarItemsMobile };

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
  coolLime: {
    backgroundColor: "transparent",
    borderRadius: 2,
    color: "#ffffff",
    marginY: { xs: 2, md: 0 },
    transition: "box-shadow 0.1s ease-in-out",
    "&:hover": {
      backgroundColor: "black",
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)",
    },
  },
};
