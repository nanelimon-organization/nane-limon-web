import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function NavbarItems({ scrollToSection }) {
  const { t } = useTranslation()

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
  const [language, setLanguage] = useState("TR");

  const handleChange = (event) => {
    if (language == "EN") {
      setLanguage("TR");
      changeLanguage("tr");
    } else {
      setLanguage("EN");
      changeLanguage("en");
    }
  };
  return (
    <>
      <Grid
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        md={6}
      >
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, type: "tween", stiffness: 100 }}
        >
          <NavbarButton
            title={t("navbar.home")}
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
            title={t("navbar.team")}
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
            title={t("navbar.projects")}
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
            title={t("navbar.events")}
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
            title={t("navbar.contact")}
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
        display="flex"
        md={6}
        justifyContent="end"
        alignItems="center"
        gap={5}
      >
        <Grid
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, type: "tween", stiffness: 100 }}
        >
          <NavLink to="https://buymeacoffee.com/nanelimon" target="_blank">
            <Button disableRipple sx={styles.donateButton}>
              <Typography textTransform="initial" fontFamily="roboto-medium">
                {t("navbar.support")}
              </Typography>
            </Button>
          </NavLink>
        </Grid>
        <Button disableRipple sx={styles.languageButton} onClick={handleChange}>
          <Typography fontFamily="roboto-regular" color="#ffffff">
            {language}
          </Typography>
        </Button>
      </Grid>
    </>
  );
}

export default NavbarItems;

function NavbarItemsMobile({ toggleMenu, scrollToSection }) {
  const { t } = useTranslation()


  const [language, setLanguage] = useState("EN");

  const handleChange = (event) => {
    if (language == "EN") {
      setLanguage("TR");
      changeLanguage("en");
    } else {
      setLanguage("EN");
      changeLanguage("tr");
    }
  };
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
            title={t("navbar.home")}
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
            title={t("navbar.team")}
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
            title={t("navbar.projects")}
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
            title={t("navbar.events")}
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
            title={t("navbar.contact")}
            to="/"
          sx={{ margin: 0 }}
          onClick={() => {
            handleClick("contact");
            toggleMenu();
          }}
        />
      </Grid>
      <Grid marginTop={1} justifyContent="center" display="flex" flexDirection="column" alignItems="center">
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
                {t("navbar.support")}
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
  languageButton: {
    backgroundColor: "transparent",
    borderRadius: 2,
    color: "#ffffff",
    marginY: { xs: 2, md: 0 },
    transition: "box-shadow 0.1s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};
