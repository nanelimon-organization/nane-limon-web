import { useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://wallpapers.com/images/featured-full/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-2kph8n73fpmvddj1.webp",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-c65hirjqswhsd1z3.webp",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://wallpapers.com/images/high/1920-x-1080-hd-ydvvfje0bdoimttn.webp",
  },
];
function Banner() {
    const theme = useTheme();

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  

  return (
    <Box sx={{ width: "100%", flexGrow: 1}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        springConfig={{
          duration: "0.9s",
          easeFunction: "ease-in-out",
          delay: "0s",
        }}
        loop={true}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            key={step.label}
            component="img"
            sx={{
              height: 600,
              display: "block",
              objectFit: "fill",
              overflow: "hidden",
              width: "100%",
            }}
            src={step.imgPath}
            alt={step.label}
          />
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner;
