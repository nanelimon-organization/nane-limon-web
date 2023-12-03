import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import style from './NavbarButton.module.css'
function NavbarButton({ title, to }) {
  return (
    <Grid className={style.un} >
      <NavLink
        to={to}
      >
        <Button component={motion.div} disableRipple sx={useStyle.button}>
          {title}
        </Button>

        
        {/* <Grid
          component={motion.div}
          variants={buttonAnimation}
          initial={buttonAnimation.initial}
          exit={buttonAnimation.endAnimation}
        ></Grid> */}
      </NavLink>
    </Grid>
  );
}

export default NavbarButton;


const useStyle = {
  button: {
    color: "#008000",
    "&:hover": {
      boxShadow: "none !important",
      backgroundColor: "white",
    },
    "&:active": {
      boxShadow: "none !important",
      backgroundColor: "white",
      color: "black"
    },
  
  
  },
  donateButton: {
    color: "white",
    backgroundColor: "#008000",
    borderRadius: 2,
    "&:hover": {
      color: "white",
      backgroundColor: "green",
      borderRadius: 2,
    },
  },
  
};
