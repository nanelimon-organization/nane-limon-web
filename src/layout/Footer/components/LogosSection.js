import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import teknofest from "../../../images/footer/teknofest.png";
import akbank from "../../../images/footer/akbank.jpg";
import borusan from "../../../images/footer/borusan.jpg";
import odeal from "../../../images/footer/ödeal.png";
import bursabel from "../../../images/footer/bursabel.png";
import selcuk from "../../../images/footer/selcuk.png";
function LogosSection() {
  return (
    <Grid item xs={12} md={2}>
      <Grid item>
        <Link to="/s">
          <Box
            component="img"
            src={teknofest}
            sx={{ width: 72, height: 72, objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={akbank}
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
            src={borusan}
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
      <Grid item>
        <Link to="/">
          <Box
            component="img"
            src={odeal}
            sx={{ width: 72, height: 72, objectFit: "contain", margin: 1 }}
          />
        </Link>
        <Link to="/">
          <Box
            component="img"
            src={bursabel}
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
            src={selcuk}
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