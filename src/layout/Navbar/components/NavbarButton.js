import { Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import style from "./NavbarButton.module.css";
import CustomButton from "../../../components/Button";
function NavbarButton({ title, to }) {
  return (
    <Grid className={style.un}>
      <NavLink to={to}>
        <CustomButton title={title} />

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
