import { Grid } from "@mui/material";

function NavbarContainer({ children, sticky}) {
  return (
    <Grid
      container
      bgcolor={sticky && "#111111"}
      width="100%"
      flexDirection="row"
      paddingX={{ xs: 6, md: 16 }}
      alignItems="center"
      zIndex={10}
      position="fixed"
      top={0}
      justifyContent="center"
    >
      {children}
    </Grid>
  );
}

export default NavbarContainer;
