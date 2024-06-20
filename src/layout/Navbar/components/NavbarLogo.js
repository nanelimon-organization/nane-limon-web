import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { src } from "../../../constants/urls";
function NavbarLogo() {
  return (
    <Grid item md={2}>
      <Link to="/">
        <Box component="img" src={src} sx={{ width: 96, height: 96 }} />
      </Link>
    </Grid>
  );
}

export default NavbarLogo;
