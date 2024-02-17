import { Box, Grid, Typography } from "@mui/material";

function Summary() {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ margin: { xs: 3, md: 8 }, padding: { xs: 2, md: 5 } }}>
        <Box borderRadius={5}>
          <Typography
            variant="h5"
            sx={{
              fontSize: 28,
              color: "black",
              textAlign: "start",
              fontFamily: "roboto-bold",
            }}
          >
            Türkçe Doğal Dil İşleme Gönüllüleri
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 12, md: 20 },
            textAlign: "justify",
            fontFamily: "roboto-regular",
          }}
          paddingTop={2}
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

export default Summary;
