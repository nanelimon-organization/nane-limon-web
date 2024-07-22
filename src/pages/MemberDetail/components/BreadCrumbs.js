import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function BreadCrumbs({title}){
    return <Breadcrumbs separator=">" aria-label="breadcrumb">
    <NavLink
      style={{ textDecoration: "none" }}
      underline="hover"
      color="inherit"
      to="/"
    >
      <Typography fontFamily="roboto-bold" fontSize={{xs: 12,md: 16}} color="text.primary">
        Anasayfa
      </Typography>
    </NavLink>
    <Typography fontFamily="roboto-medium" fontSize={{xs: 12,md: 16}} color="text.primary">
      {title}
    </Typography>
  </Breadcrumbs>
}   

export default BreadCrumbs;