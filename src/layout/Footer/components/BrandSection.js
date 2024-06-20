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
      md={3}
    >
      <Link to="/">
        <Box component="img" src={src} sx={{ width: 96, height: 96 }} />
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
      </Box>
    </Grid>
  );
}

export default BrandSection;
