import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Grid container display="flex" flexDirection="column" alignItems="center">
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          padding={3}
        >
          <Card
            sx={{
              maxWidth: 700,
              borderRadius: 2,
              maxHeight: 455,
              marginY: { xs: 4, md: 0 },
            }}
            elevation={2}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: 3, width: "100%" }}
              alt="green iguana"
              height="220"
              image="https://coderspace-storage-prod.s3.eu-central-1.amazonaws.com/media/cache/18/12/181229390cf89f8d6b5bbb15e7d49bcb.webp"
            />
            <CardContent sx={{ margin: 1 }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ fontFamily: "roboto-mediumitalic", fontSize: 14 }}
              >
                Yarışma 1.liği - Borusan Otomotiv & Coderspace AutoHack
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "roboto-bold" }}
              >
                AutoMate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                sx={{ fontFamily: "roboto-medium" }}
              >
                Otomotiv şirketinin satış sonrası hizmetlerini tek bir yerden
                yönetmesini sağlıyor. Yazılı, Görüntülü ve Lokasyon bazlı
                hizmetler sunuyor. Bunu yaparken chat içerisinde akış tabanlı
                formlar üzerinden istek alan bir uygulamanın frontend kodlarını
                içeriyor.
              </Typography>
            </CardContent>
            <CardActions sx={{ margin: 1 }}>
              <NavLink
                to="https://github.com/nanelimon-organization/automate-frontend"
                target="_blank"
              >
                <Button
                  disableTouchRipple
                  sx={{
                    width: 150,
                    bgcolor: "#008000",
                    "&:hover": {
                      backgroundColor: "#008000",
                    },
                  }}
                  size="small"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 14,
                      fontFamily: "roboto-regular",
                      color: "#ffffff",
                      textTransform: "capitalize",
                    }}
                  >
                    Projeyi İncele
                  </Typography>
                </Button>
              </NavLink>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: 700,
              borderRadius: 2,
              maxHeight: 455,
              marginY: { xs: 4, md: 0 },
            }}
            elevation={2}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: 3, width: "100%" }}
              alt="green iguana"
              height="220"
              image="https://pypi-camo.freetls.fastly.net/0b1980669000c8bfa996d05bd7e32651fd45b275/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f38333136383230372f3232393232363939342d64363032333432302d633838622d343863382d616261662d3834323963653035306331662e6a7067"
            />
            <CardContent sx={{ margin: 1 }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ fontFamily: "roboto-mediumitalic", fontSize: 14 }}
              >
                Doğal Dil İşleme Veri Önişleme Aşamaları İçin Açık Kaynaklı
                Python Paketi
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "roboto-bold" }}
              >
                mintlemon-turkish-nlp
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                sx={{ fontFamily: "roboto-medium" }}
              >
                Mintlemon, Türkçe Doğal Dil İşleme Kütüphanesi, Teknofest Türkçe
                Doğal Dil İşleme Yarışması kapsamında geliştirildi. Nane&Limon
                Takımı adı altında katıldığımız 2023 Türkçe NLP Yarışması'nı 1.
                olarak tamamladık.
              </Typography>
            </CardContent>
            <CardActions sx={{ margin: 1 }}>
              <NavLink
                to="https://github.com/nanelimon-organization/mintlemon-turkish-nlp"
                target="_blank"
              >
                <Button
                  disableTouchRipple
                  sx={{
                    width: 150,
                    backgroundColor: "#008000",
                    "&:hover": {
                      backgroundColor: "#008000",
                    },
                  }}
                  size="small"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 14,
                      fontFamily: "roboto-regular",
                      color: "#ffffff",
                      textTransform: "capitalize",
                    }}
                  >
                    Dökümantasyon
                  </Typography>
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          container
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          padding={3}
        >
          <Card
            sx={{
              maxWidth: 700,
              borderRadius: 2,
              maxHeight: 455,
              marginY: { xs: 4, md: 0 },
            }}
            elevation={2}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: 3, width: "100%" }}
              alt="green iguana"
              height="220"
              image="https://coderspace-storage-prod.s3.eu-central-1.amazonaws.com/media/cache/18/12/181229390cf89f8d6b5bbb15e7d49bcb.webp"
            />
            <CardContent sx={{ margin: 1 }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ fontFamily: "roboto-mediumitalic", fontSize: 14 }}
              >
                Yarışma 1.liği - Borusan Otomotiv & Coderspace AutoHack
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "roboto-bold" }}
              >
                AutoMate
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                sx={{ fontFamily: "roboto-medium" }}
              >
                Otomotiv şirketinin satış sonrası hizmetlerini tek bir yerden
                yönetmesini sağlıyor. Yazılı, Görüntülü ve Lokasyon bazlı
                hizmetler sunuyor. Bunu yaparken chat içerisinde akış tabanlı
                formlar üzerinden istek alan bir uygulamanın frontend kodlarını
                içeriyor.
              </Typography>
            </CardContent>
            <CardActions sx={{ margin: 1 }}>
              <NavLink
                to="https://github.com/nanelimon-organization/automate-frontend"
                target="_blank"
              >
                <Button
                  disableTouchRipple
                  sx={{
                    width: 150,
                    bgcolor: "#008000",
                    "&:hover": {
                      backgroundColor: "#008000",
                    },
                  }}
                  size="small"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 14,
                      fontFamily: "roboto-regular",
                      color: "#ffffff",
                      textTransform: "capitalize",
                    }}
                  >
                    Projeyi İncele
                  </Typography>
                </Button>
              </NavLink>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: 700,
              borderRadius: 2,
              maxHeight: 455,
              marginY: { xs: 4, md: 0 },
            }}
            elevation={2}
            component={motion.div}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: 3, width: "100%" }}
              alt="green iguana"
              height="220"
              image="https://pypi-camo.freetls.fastly.net/0b1980669000c8bfa996d05bd7e32651fd45b275/68747470733a2f2f757365722d696d616765732e67697468756275736572636f6e74656e742e636f6d2f38333136383230372f3232393232363939342d64363032333432302d633838622d343863382d616261662d3834323963653035306331662e6a7067"
            />
            <CardContent sx={{ margin: 1 }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ fontFamily: "roboto-mediumitalic", fontSize: 14 }}
              >
                Doğal Dil İşleme Veri Önişleme Aşamaları İçin Açık Kaynaklı
                Python Paketi
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "roboto-bold" }}
              >
                mintlemon-turkish-nlp
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                sx={{ fontFamily: "roboto-medium" }}
              >
                Mintlemon, Türkçe Doğal Dil İşleme Kütüphanesi, Teknofest Türkçe
                Doğal Dil İşleme Yarışması kapsamında geliştirildi. Nane&Limon
                Takımı adı altında katıldığımız 2023 Türkçe NLP Yarışması'nı 1.
                olarak tamamladık.
              </Typography>
            </CardContent>
            <CardActions sx={{ margin: 1 }}>
              <NavLink
                to="https://github.com/nanelimon-organization/mintlemon-turkish-nlp"
                target="_blank"
              >
                <Button
                  disableTouchRipple
                  sx={{
                    width: 150,
                    backgroundColor: "#008000",
                    "&:hover": {
                      backgroundColor: "#008000",
                    },
                  }}
                  size="small"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 14,
                      fontFamily: "roboto-regular",
                      color: "#ffffff",
                      textTransform: "capitalize",
                    }}
                  >
                    Dökümantasyon
                  </Typography>
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsPage;
