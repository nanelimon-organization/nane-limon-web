import { Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavbarButton({title,to}) {
  return (
    <Grid component={motion.div} whileHover="animate">
      <Link to={to}>
        <Button component={motion.div} disableRipple sx={useStyle.button}>
          {title}
        </Button>
      </Link>
      <Grid
        component={motion.div}
        variants={buttonAnimation}
        initial={buttonAnimation.initial}
        exit={buttonAnimation.endAnimation}
      ></Grid>
    </Grid>
  );
}

export default NavbarButton;

const buttonAnimation = {
  initial: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: "solid",
    borderBottomColor: "green",
    width: "0%",
  },
  animate: {
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: "solid",
    width: "100%",
    borderBottomColor: "green",

    transition: { duration: 0.5 },
  },
};

const useStyle = {
  button: {
    color: "green",
    "&:hover": {
      boxShadow: "none !important",
      backgroundColor: "white",
    },
    "&:active": {
      boxShadow: "none !important",
      backgroundColor: "white",
    },
  },
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
