import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import imagePaths from "../../../assets/imagePaths";

function LogosSection() {
  return (
    <Grid item xs={12} md={2} display="flex" flexDirection="column" alignItems="center">
      <Grid item>
        <Link to="/s">
          <Box
            component="img"
            src={imagePaths.footer.teknofest}
            sx={{ width: {xs: 48,md:64}, height: {xs: 48,md:64}, objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.akbank}
            sx={{
              width: {xs: 48,md:64}, height: {xs: 48,md:64},
              objectFit: "contain",
              borderRadius: 5,
              margin: 1,
            }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.borusan}
            sx={{
              width: {xs: 48,md:64}, height: {xs: 48,md:64},
              objectFit: "contain",
              borderRadius: 5,
              margin: 1,
            }}
          />
        </Link>
      </Grid>
      <Grid>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.odeal}
            sx={{               width: {xs: 48,md:64}, height: {xs: 48,md:64},
            objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.bursabel}
            sx={{
              width: {xs: 48,md:64}, height: {xs: 48,md:64},
              objectFit: "contain",
              borderRadius: 5,
              margin: 1,
            }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.selcuk}
            sx={{
              width: {xs: 48,md:64}, height: {xs: 48,md:64},
              objectFit: "contain",
              borderRadius: 5,
              margin: 1,
            }}
          />
        </Link>
      </Grid>
    </Grid>
  );
}

export default LogosSection;
