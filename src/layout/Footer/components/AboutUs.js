import { Box, Divider, Grid, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Grid item xs={12} md={4}>
      <Box display="flex" flexDirection="column">
        <Typography fontSize={12} color="white" fontFamily="roboto-medium">
          HAKKIMIZDA
        </Typography>
        <Divider sx={{ marginY: 1, bgcolor: "white" }} />

        <Typography
          color="white"
          fontFamily="roboto-medium"
          textAlign="justify"
          fontSize={14}
        >
          Nane&Limon ekibimiz, Şeyma Sarıgil ve Doç. Dr. Murat Köklü rehberliğinde, Teknofest 2022 ve 2023'te Türkçe Doğal Dil İşleme yarışmalarında 1.lik ve özel ödül kazandı. Hedefimiz, Türkiye'yi bu alanda lider yapmak. Açık kaynak projelerle ulusal gelişime öncülük ediyoruz. Heyecanla paylaşmayı bekliyoruz! Sevgiler...
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutUs;
