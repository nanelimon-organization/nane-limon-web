import { Box, Divider, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      width="100%"
      bgcolor="#1A1C20"
      left={0}
      bottom={0}
     
      right={0}
      justifyContent="space-around"
      alignItems="center"
      paddingX={10}
      paddingY={2}
    >
      <Grid item>
        <Box padding={2} display="flex" flexDirection="column">
          <Link
            href="#"
            fontSize={14}
            marginY={1}
            underline="none"
            color="white"
            fontFamily="roboto-medium"
          >
            Anasayfa
          </Link>
          <Link
            href="#"
            fontSize={14}
            marginY={1}
            underline="none"
            color="white"
            fontFamily="roboto-medium"
          >
            Çalışma Alanları
          </Link>
          <Link
            href="#"
            fontSize={14}
            marginY={1}
            underline="none"
            color="white"
            fontFamily="roboto-medium"
          >
            Projeler
          </Link>
          <Link
            href="#"
            fontSize={14}
            marginY={1}
            underline="none"
            color="white"
            fontFamily="roboto-medium"
          >
            Sunumlar
          </Link>
          <Link
            href="#"
            fontSize={14}
            marginY={1}
            underline="none"
            color="white"
            fontFamily="roboto-medium"
          >
            Community Etkinlikleri
          </Link>
        </Box>
      </Grid>

      <Grid item xs={12} md={3}>
        <Box display="flex" flexDirection="column">
          <Typography fontSize={14} color="white" fontFamily="roboto-medium">
            HAKKIMIZDA
          </Typography>
          <Divider sx={{ marginY: 1, bgcolor: "white" }} />

          <Typography color="white" fontFamily="roboto-medium">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
