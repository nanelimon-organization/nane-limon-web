import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedTitle from "../../../../animations/AnimatedTitle";
import imagePaths from "../../../../assets/imagePaths";
import BackgroundSlider from "react-background-slider";

function Banner() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.1, 1]);


  return (
    <Box
      component={motion.div}
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.2)",
          bgcolor: "#000",
        }}
      >
        <BackgroundSlider
          images={Object.values(imagePaths.banner)}
          duration={5}
          transition={0.5}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <AnimatedTitle
          text="Nane & Limon"
          fontSize={{ xs: 28, md: 48 }}
          fontFamily="roboto-bold"
          color="#ffffff"
        />
        <Typography
          fontSize={{ xs: 20, md: 26 }}
          fontFamily="roboto-regular"
          color="#ffffff"
        >
          {t("banner.bannerText")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
