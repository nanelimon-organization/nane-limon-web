import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ErrorPage() {
  const src = "https://avatars.githubusercontent.com/u/109470900?s=200&v=4";

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
