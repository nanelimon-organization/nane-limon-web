import { Grid } from "@mui/material";

function NavbarItemsContainer({ children }) {
  return (
    <Grid
      container
      xs={0}
      md={10}
      display={{ xs: "none", md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}

export default NavbarItemsContainer;
