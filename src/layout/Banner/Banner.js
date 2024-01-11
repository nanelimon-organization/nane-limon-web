import { useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Button, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    const theme = useTheme();

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep == maxSteps-1 ? null : prevActiveStep + 1);
    };
  
    const handleBack = (prev) => {
     
      setActiveStep((prevActiveStep) => prevActiveStep <= 0 ? null : prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  

  return (
    <Box sx={{ width: "100%", flexGrow: 1,alignItems:"center", justifyContent: "center", display: "flex"}}>
   <Button onClick={handleBack} sx={{marginX: {xs: 0,md: 5},  color:"#008000"}}>
      <KeyboardArrowLeftRoundedIcon sx={{paddingX: {xs:0,md: 5},width: 36,height: 36}}  />
      </Button>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        springConfig={{
          duration: "2s",
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
              height: {xs: 200, md:600},
              display: "block",
              objectFit: "fill",
              overflow: "hidden",
              width: "100%",
              borderRadius: 10
            }}
            src={step.imgPath}
            alt={step.label}
          />
        ))}
      </AutoPlaySwipeableViews>
      <Button onClick={handleNext} sx={{marginX: {xs: 0,md: 5},  color:"#008000"}}>
      <KeyboardArrowRightRoundedIcon sx={{paddingX: {xs:0,md: 5} ,width: 36,height: 36}}  />
      </Button>
    </Box>
  );
}

export default Banner;
