import { Box, Divider, Grid, Typography } from "@mui/material";

function AboutUs() {
  return (
    <Grid item xs={12} md={6}>
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
          Ekip liderimiz Seyma SARIGİL ve Doç. Dr. Murat Köklü'nün akademik
          rehberliğinde 2021'de kurulan Nane&Limon ekibimiz, Teknofest 2022'de
          Türkçe Dogal Dil İşleme Serbest Kategoride Teknofest 2023' te Türkçe
          Dogal Dil İşleme Tüm Kategoriler yarışmalarında üst üste zirveye
          çıkarak hem 1.lik derecesi hemde teknik sunumda özel ödül kazandı.
          Hedefimiz açık: Türkçe doğal dil işleme alanında çığır açmak ve
          Türkiye'yi bu alanda lider yapmak. Opensource projelere katkımızla
          ulusal gelişime öncülük ediyoruz. Nane&Limon ekibi olarak, Türkçe
          doğal dil işlemede yapacak çok işimiz var ve heyecanla sizlerle
          paylaşmayı bekliyoruz! Sevgiler...
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutUs;
