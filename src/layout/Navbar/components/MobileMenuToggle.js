import {  Grid,Button,Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

function MobileMenuToggle({toggleMenu}) {
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
  return (
    <Grid display="flex" justifyContent="center" alignItems="center">
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
    <Button disableRipple sx={styles.languageButton} onClick={handleChange}>
          <Typography fontFamily="roboto-regular" color="#ffffff">
            {language}
          </Typography>
        </Button>
    </Grid>
  );
}

export default MobileMenuToggle;

const styles = {
  languageButton: {
    display: { xs: "flex", md: "none" },
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
