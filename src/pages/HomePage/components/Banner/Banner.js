import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";

import { Link } from "react-router-dom";
import AnimatedTitle from "../../../../animations/AnimatedTitle";
import imagePaths from "../../../../assets/imagePaths";

function Banner({ preloadedImages, visible }) {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % preloadedImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [preloadedImages.length]);

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
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {preloadedImages.length > 0 && (
        <Box
          key={index}
          component={motion.img}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.2)",
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
          zIndex: 1,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <AnimatedTitle text="Nane & Limon" fontSize={{xs: 28,md:48}} fontFamily="roboto-bold" color="#ffffff" />
        <AnimatedTitle text="Türkçe Doğal Dil İşleme Gönüllüleri" fontSize={{xs: 20,md:26}} fontFamily="roboto-regular" color="#ffffff" />

      </Box>

    </Box>
  );
}

export default Banner;
