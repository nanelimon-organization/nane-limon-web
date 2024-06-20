import { Box, Grid,Link } from "@mui/material";

function FooterMenu() {
  return (
    <Grid item xs={12} md={1}>
      <Box padding={2} display="flex" flexDirection="column">
        <Link
          href="/"
          fontSize={14}
          
          marginY={1}
          underline="none"
          color="white"
          fontFamily="roboto-medium"
        >
          Anasayfa
        </Link>

        <Link
          href="projects"
          fontSize={14}
          marginY={1}
          underline="none"
          color="white"
          fontFamily="roboto-medium"
        >
          Projeler
        </Link>

        <Link
          href="events"
          fontSize={14}
          marginY={1}
          underline="none"
          color="white"
          fontFamily="roboto-medium"
        >
          Etkinlikler
        </Link>
      </Box>
    </Grid>
  );
}

export default FooterMenu;
