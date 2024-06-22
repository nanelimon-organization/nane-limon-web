import { useEffect, useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../../../../images/img1.jpg";
import img2 from "../../../../images/img2.jpg";
import img3 from "../../../../images/img3.jpg";
import img4 from "../../../../images/img4.jpg";
import img5 from "../../../../images/img5.JPG";
import img6 from "../../../../images/img6.JPG";
import hf from "../../../../images/hf.png";

import img7 from "../../../../images/img7.jpg";
import img8 from "../../../../images/img8.jpg";
import img9 from "../../../../images/img9.png";
import img10 from "../../../../images/img10.jpeg";
import img11 from "../../../../images/img11.JPG";
import CustomButton from "../ContactForm/components/Button";
import style from "./BannerButton.module.css";
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLoading } from "../../../../contexts/LoadingContext";

const images = [
  {
    imgPath: img1,
  },
  {
    imgPath: img3,
  },
  {
    imgPath: img4,
  },
  {
    imgPath: img5,
  },
  {
    imgPath: img10,
  },
  {
    imgPath: img6,
  },
  {
    imgPath: img7,
  },
  {
    imgPath: img8,
  },
  {
    imgPath: img9,
  },
  {
    imgPath: img2,
  },
  {
    imgPath: img11,
  },
];

function Banner() {

  const { showLoading, hideLoading } = useLoading();
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setAllImagesLoaded((prev) => prev + 1);
    };

    showLoading();

    const imageElements = images.map(({ imgPath }) => {
      const img = new Image();
      img.src = imgPath;
      img.onload = handleImageLoad;
      return img;
    });

    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
      });
    };
  }, [showLoading]);

  useEffect(() => {
    if (allImagesLoaded === images.length) {
      hideLoading();
    }
  }, [allImagesLoaded, hideLoading]);
  
  const maxSteps = images.length;

  const [index, setIndex] = useState(0);

  const member1 = images[0 + index];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < maxSteps - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index,maxSteps]);

  if (!allImagesLoaded) return null;

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        key={member1.imgPath}
        component={motion.img}
        transition={{ delay: 0.3, type: "just", stiffness: 100 }}
        sx={{
          minHeight: "100vh",
          height: 200,
          filter: "brightness(0.2)",
          display: "inline-block", // Değişiklik
          objectFit: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          width: "100%",
        }}
        src={member1.imgPath}
        alt={member1.imgPath}
      />
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
            <LinkedInIcon sx={{width:50,height:50,color: "#ffffff"}} />
          </Button>
          <Button disableFocusRipple disableRipple>
            <GitHubIcon sx={{width:50,height:50, color: "#ffffff"}} />
          </Button>
          <Button disableFocusRipple disableRipple>
            <Box component="img" src={hf} sx={{width:50,height:50, objectFit:"contain"}}/>
          </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Banner;
