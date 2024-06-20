import { Grid } from "@mui/material";

function NavbarContainer({ children }) {
  return (
    <Grid
      container
      width="100%"
      flexDirection="row"
      bgcolor="#F5F5F5"
      paddingX={{ xs: 6, md: 16 }}
      alignItems="center"
      zIndex={10}
      position="sticky"
      top={0}
      justifyContent="center"
    >
      {children}
    </Grid>
  );
}

export default NavbarContainer;
