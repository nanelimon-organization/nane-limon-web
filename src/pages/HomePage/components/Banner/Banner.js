import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import imagePaths from "../../../../assets/imagePaths";
import { useLoading } from "../../../../contexts/LoadingContext";
import preloadImages  from "../../../../utils/preloadImages"  

function Banner() {
  const [index, setIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    preloadImages(imagePaths).then((images) => {
      setPreloadedImages(images);
      setVisible(true);
      hideLoading();
    });
  }, [showLoading, hideLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % preloadedImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [preloadedImages.length]);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        position: "relative",
        visibility: visible ? "visible" : "hidden", 
        opacity: visible ? 1 : 0, 
        transition: "opacity 0.3s ease-in-out", 
      }}
    >
      {preloadedImages.length > 0 && (
        <Box
          key={index}
          component={motion.img}
          transition={{ delay: 0.3, type: "just", stiffness: 100 }}
          sx={{
            minHeight: "100vh",
            height: 200,
            filter: "brightness(0.2)",
            display: "inline-block", 
            objectFit: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
            width: "100%",
          }}
          src={preloadedImages[index].src}
          alt={`Banner image ${index + 1}`}
        />
      )}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
        }}
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: 32,
              color: "#ffffff",
              textAlign: "start",
              fontFamily: "roboto-bold",
            }}
          >
            Türkçe Doğal Dil İşleme Gönüllüleri
          </Typography>
          <Grid display="flex">
            <Button disableFocusRipple disableRipple>
              <LinkedInIcon sx={{ width: 50, height: 50, color: "#ffffff" }} />
            </Button>
            <Button disableFocusRipple disableRipple>
              <GitHubIcon sx={{ width: 50, height: 50, color: "#ffffff" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner;
