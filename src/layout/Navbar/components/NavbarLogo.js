import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function NavbarLogo() {
  const src = "https://avatars.githubusercontent.com/u/109470900?s=200&v=4";
  return (
    <Grid item md={2}>
      <Link to="/">
        <Box component="img" src={src} sx={{ width: 96, height: 96 }} />
      </Link>
    </Grid>
  );
}

export default NavbarLogo;
