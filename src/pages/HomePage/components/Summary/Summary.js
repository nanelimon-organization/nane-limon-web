import { Box, Button, Grid, Typography } from "@mui/material";
import AnimatedTitle from "../../../../animations/AnimatedTitle";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import imagePaths from "../../../../assets/imagePaths";
function Summary() {
  return (
    <Grid item xs={12} md={6} bgcolor="#F8F8F8">
      <Box sx={{ margin: { xs: 3, md: 8 }, padding: { xs: 2, md: 5 } }}>
        <Box borderRadius={5}>
        <Typography
          sx={{
            fontSize: { xs: 20, md: 24 },
            textAlign: "justify",
            fontFamily: "roboto-bold",
          }}
          paddingTop={2}
        >
          Türkçe Doğal Dil İşleme Gönüllüleri
        </Typography>

        </Box>
        <Typography
          sx={{
            fontSize: { xs: 12, md: 16 },
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
        <Grid container display="flex" justifyContent={{xs:"center",md:"start"}} alignItems="start" spacing={2} paddingY={2}>
          <Grid item>
            <Link target="_blank" to='https://www.linkedin.com/company/nane-limon'>
              <Button disableFocusRipple disableRipple>
                <LinkedInIcon sx={{ width: 50, height: 50, color: "#111111" }} />
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link target="_blank" to='https://github.com/nanelimon-organization'>
              <Button disableFocusRipple disableRipple>
                <GitHubIcon sx={{ width: 50, height: 50, color: "#111111" }} />
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link target="_blank" to='https://huggingface.co/nanelimon'>
              <Button disableFocusRipple disableRipple>
                <Box component="img" src={imagePaths.icons.hf} width={50} height={50} sx={{ objectFit: "contain" }} />
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      
    </Grid>
  );
}

export default Summary;
