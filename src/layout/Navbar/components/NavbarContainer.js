import { Grid, createTheme, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

function NavbarContainer({ children, sticky }) {
  const location = useLocation();
  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      sx={{
        transition: "background-color 0.3s ease",
      }}
      bgcolor={isMobile ? "#111111" : sticky || location.pathname !== "/" ? "#111111" : "transparent"}
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
