import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import imagePaths from "../../../assets/imagePaths";

function LogosSection() {
  return (
    <Grid item xs={12} md={4}>
      <Grid item>
        <Link to="/s">
          <Box
            component="img"
            src={imagePaths.footer.teknofest}
            sx={{ width: 72, height: 72, objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.akbank}
            sx={{
              width: 72,
              height: 72,
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
              width: 72,
              height: 72,
              objectFit: "contain",
              borderRadius: 5,
              margin: 1,
            }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.odeal}
            sx={{ width: 72, height: 72, objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={imagePaths.footer.bursabel}
            sx={{
              width: 72,
              height: 72,
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
              width: 72,
              height: 72,
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
