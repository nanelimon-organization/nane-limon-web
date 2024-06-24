import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLoading } from "../contexts/LoadingContext";
import { useEffect } from "react";
import { src } from "../constants/urls";
function ErrorPage() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    hideLoading();
    return () => showLoading();
  }, []);

  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80%"
    >
      <Grid item md={2}>
        <Link to="/">
          <Box component="img" src={src} sx={{ width: 128, height: 128 }} />
        </Link>
      </Grid>
      <Typography fontFamily="roboto-bold" fontSize={28}>
        Aradığın sayfayı bulamadım...
      </Typography>
    </Grid>
  );
}
export default ErrorPage;
