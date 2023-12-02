import { Box, Grid } from "@mui/material";

function NavbarLogo() {
  const src = "https://avatars.githubusercontent.com/u/109470900?s=200&v=4";
  return (
    <Grid item md={2}>
      <Box component="img" src={src} sx={{ width: 64, height: 64 }} />
    </Grid>
  );
}

export default NavbarLogo;
