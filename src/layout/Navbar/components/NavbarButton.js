import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./NavbarButton.module.css";
import CustomButton from "../../../components/Button";
function NavbarButton({ title, to }) {
  return (
    <Grid className={style.un}>
      <NavLink to={to}>
        <CustomButton title={title} />
      </NavLink>
    </Grid>
  );
}

export default NavbarButton;

