import { useEffect, useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  {
    imgPath:
      "https://wallpapers.com/images/featured-full/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
  },
  {
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-2kph8n73fpmvddj1.webp",
  },
  {
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-c65hirjqswhsd1z3.webp",
  },
  {
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-ydvvfje0bdoimttn.webp",
  },
];
function Banner() {
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
  }, [index, maxSteps]);

  function swipeToRight() {
    if (index < maxSteps - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function swipeToLeft() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(maxSteps - 1);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Button
        onClick={swipeToLeft}
        sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
      >
        <KeyboardArrowLeftRoundedIcon
          sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
        />
      </Button>
        <Box
          key={member1.imgPath}
          component={motion.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          sx={{
            height: { xs: 200, md: 600 },
            display: "block",
            objectFit: "fill",
            overflow: "hidden",
            width: "100%",
            borderRadius: 10,
          }}
          src={member1.imgPath}
          alt={member1.imgPath}
        />
      <Button
        onClick={swipeToRight}
        sx={{ marginX: { xs: 0, md: 5 }, color: "#008000" }}
      >
        <KeyboardArrowRightRoundedIcon
          sx={{ paddingX: { xs: 0, md: 5 }, width: 36, height: 36 }}
        />
      </Button>
    </Box>
  );
}

export default Banner;
