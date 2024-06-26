import { Box, Grid, Link, Typography } from "@mui/material";
import { src } from "../../../constants/urls";
function BrandSection() {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      item
      xs={12}
      md={4}
    >
      <Link to="/">
        <Box component="img" src={src} sx={{ width: 128, height: 128 }} />
      </Link>
      <Box display="flex" flexDirection="column">
        <Typography
          textAlign="center"
          fontSize={32}
          color="white"
          fontFamily="roboto-medium"
        >
          Nane & Limon
        </Typography>
        <Typography
          textAlign="center"
          fontSize={11}
          color="white"
          fontFamily="roboto-mediumitalic"
        >
          Copyright © 2024 Tüm Hakları Saklıdır.
        </Typography>
      </Box>
    </Grid>
  );
}

export default BrandSection;
