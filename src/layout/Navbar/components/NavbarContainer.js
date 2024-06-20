import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

function NavbarContainer({ children, sticky}) {

  const location = useLocation();

  return (
    <Grid
      container
      bgcolor={sticky || location.pathname !== "/" ? "#111111" : "transparent"}
      width="100%"
      flexDirection="row"
      paddingX={{ xs: 6, md: 16 }}
      alignItems="center"
      zIndex={10}
      position={location.pathname !== "/" ? "sticky" : "fixed"}

      top={0}
      justifyContent="center"
    >
      {children}
    </Grid>
  );
}

export default NavbarContainer;
