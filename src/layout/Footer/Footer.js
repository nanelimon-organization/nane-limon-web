import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import teknofest from '../../images/footer/teknofest.png'
import akbank from '../../images/footer/akbank.jpg'
import borusan from '../../images/footer/borusan.jpg'
import odeal from '../../images/footer/ödeal.png'
import bursabel from '../../images/footer/bursabel.png'
import selcuk from '../../images/footer/selcuk.png'

function Footer() {
  const src = "https://avatars.githubusercontent.com/u/109470900?s=200&v=4";

  return (
    <Grid
      container
      width="100%"
      bgcolor="#1A1C20"
      left={0}
      bottom={0}
      right={0}
      justifyContent="space-between"
      alignItems="center"
      paddingX={10}
      paddingY={2}
    >
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
    <Grid item xs={12} md={2}>
      <Grid item>
        <Link to="/">
          <Box component="img" src={teknofest} sx={{ width: 72, height: 72, objectFit:"contain", margin:1}} />
        </Link>
        <Link to="/">
          <Box component="img" src={akbank} sx={{ width: 72, height: 72, objectFit:"contain",borderRadius: 5,margin:1}} />
        </Link>
        <Link to="/">
          <Box component="img" src={borusan} sx={{ width: 72, height: 72, objectFit:"contain",borderRadius: 5,margin:1}} />
        </Link>
      </Grid>
      <Grid item>
      <Link to="/">
          <Box component="img" src={odeal} sx={{ width: 72, height: 72, objectFit:"contain",margin:1 }} />
        </Link>
        <Link to="/">
          <Box component="img" src={bursabel} sx={{ width: 72, height: 72, objectFit:"contain",borderRadius: 5,margin:1}} />
        </Link>
        <Link to="/">
          <Box component="img" src={selcuk} sx={{ width: 72, height: 72, objectFit:"contain",borderRadius: 5,margin:1}} />
        </Link>
      </Grid>
      </Grid>
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
    </Grid>
  );
}

export default Footer;
