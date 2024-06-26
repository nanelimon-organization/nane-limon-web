import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <AnimatedTitle text="Türkçe Doğal Dil İşleme Gönüllüleri" fontSize={32} fontFamily="roboto-regular" color="#ffffff" />
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Link target="_blank" to='https://www.linkedin.com/company/nane-limon'>
              <Button disableFocusRipple disableRipple>
                <LinkedInIcon sx={{ width: 50, height: 50, color: "#ffffff" }} />
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link target="_blank" to='https://github.com/nanelimon-organization'>
              <Button disableFocusRipple disableRipple>
                <GitHubIcon sx={{ width: 50, height: 50, color: "#ffffff" }} />
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
    </Box>
  );
}

export default Banner;
