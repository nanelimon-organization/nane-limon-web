import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./NavbarButton.module.css";
import CustomButton from "../../../pages/HomePage/components/ContactForm/components/Button";
import { motion } from "framer-motion";
function NavbarButton({ title, to, onClick, color,fontSize,target}) {
  return (
    <Grid
      className={style.un}
      
    >
      <NavLink to={to} target={target} >
        <CustomButton onClick={onClick} title={title} color={color} fontSize={fontSize} />
      </NavLink>
    </Grid>
  );
}

export default NavbarButton;
